#!/usr/bin/env python3
"""
BDC OpenAPI Documentation Scraper v2
=====================================
Enhanced scraper that extracts complete operation details for NPM client generation.

Key extractions per operation:
- operationId (becomes function name)
- requestBody schema (function parameters)
- response schemas (return types)
- parameters (query/path params)

Usage:
    python bdc_openapi_scraper_v2.py [--workers N] [--output FILE]

Output files (always generated):
    - BDC.md              → Human-readable documentation
    - BDC.json            → Full structured data
    - BDC_operations.json → Flat operations list for code generation

Requirements:
    pip install aiohttp beautifulsoup4 --break-system-packages
"""

import asyncio
import aiohttp
import json
import re
import sys
import argparse
import logging
from dataclasses import dataclass, field, asdict
from datetime import datetime
from pathlib import Path
from typing import Optional, Any
from bs4 import BeautifulSoup

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s | %(levelname)-7s | %(message)s',
    datefmt='%H:%M:%S'
)
logger = logging.getLogger(__name__)

# Constants
BASE_URL = "https://docs.bigdatacorp.com.br"
OPENAPI_INDEX = f"{BASE_URL}/plataforma/openapi"
DEFAULT_WORKERS = 10
DEFAULT_OUTPUT = "BDC.md"
REQUEST_TIMEOUT = 30
MAX_RETRIES = 3
RETRY_DELAY = 2


@dataclass
class Parameter:
    """API parameter (query, path, header)."""
    name: str
    location: str  # query, path, header
    required: bool = False
    param_type: str = "string"
    description: str = ""
    default: Optional[Any] = None
    enum: list = field(default_factory=list)


@dataclass
class SchemaInfo:
    """Simplified schema representation."""
    schema_type: str = "object"  # object, array, string, number, etc.
    properties: dict = field(default_factory=dict)  # property_name -> {type, description, required}
    items: Optional[dict] = None  # For array types
    example: Optional[Any] = None
    raw_schema: Optional[dict] = None  # Full schema for complex cases


@dataclass
class Operation:
    """Single API operation (one operationId)."""
    operation_id: str
    method: str  # GET, POST, PUT, DELETE
    path: str
    summary: str = ""
    description: str = ""
    tags: list = field(default_factory=list)
    parameters: list[Parameter] = field(default_factory=list)
    request_body: Optional[SchemaInfo] = None
    responses: dict[str, SchemaInfo] = field(default_factory=dict)  # status_code -> schema
    deprecated: bool = False
    
    def to_function_signature(self) -> str:
        """Generate TypeScript-like function signature."""
        params = []
        
        # Add path/query parameters
        for p in self.parameters:
            optional = "?" if not p.required else ""
            params.append(f"{p.name}{optional}: {self._ts_type(p.param_type)}")
        
        # Add request body if present
        if self.request_body:
            params.append(f"body: {self._schema_to_ts_type(self.request_body)}")
        
        # Get return type from 200/201 response
        return_type = "void"
        for status in ["200", "201"]:
            if status in self.responses:
                return_type = self._schema_to_ts_type(self.responses[status])
                break
        
        params_str = ", ".join(params) if params else ""
        return f"{self.operation_id}({params_str}): Promise<{return_type}>"
    
    def _ts_type(self, openapi_type: str) -> str:
        """Convert OpenAPI type to TypeScript."""
        mapping = {
            "string": "string",
            "integer": "number",
            "number": "number",
            "boolean": "boolean",
            "array": "any[]",
            "object": "Record<string, any>"
        }
        return mapping.get(openapi_type, "any")
    
    def _schema_to_ts_type(self, schema: SchemaInfo) -> str:
        """Convert schema to TypeScript type name."""
        if schema.schema_type == "array":
            return "any[]"
        elif schema.properties:
            return f"{self.operation_id}Response"
        return "any"


@dataclass
class OpenAPISpec:
    """Complete parsed OpenAPI specification."""
    spec_id: str
    spec_url: str
    title: str = ""
    version: str = ""
    description: str = ""
    servers: list[str] = field(default_factory=list)
    operations: list[Operation] = field(default_factory=list)
    tags: list[dict] = field(default_factory=list)  # Tag definitions with descriptions
    components_schemas: dict = field(default_factory=dict)  # Reusable schemas
    error: Optional[str] = None
    
    def to_markdown(self) -> str:
        """Generate detailed markdown for this spec."""
        if self.error:
            return f"""
### ❌ {self.spec_id}
- **URL**: {self.spec_url}
- **Error**: {self.error}
"""
        
        lines = [
            f"## {self.title or self.spec_id}",
            f"",
            f"- **Spec ID**: `{self.spec_id}`",
            f"- **Version**: {self.version or 'N/A'}",
            f"- **Documentation**: [{self.spec_url}]({self.spec_url})",
            f"- **Server(s)**: {', '.join(self.servers) or 'N/A'}",
        ]
        
        if self.description:
            desc = self.description[:300] + "..." if len(self.description) > 300 else self.description
            lines.append(f"- **Description**: {desc}")
        
        lines.append(f"- **Operations**: {len(self.operations)}")
        lines.append("")
        
        # Group operations by path
        by_path: dict[str, list[Operation]] = {}
        for op in self.operations:
            by_path.setdefault(op.path, []).append(op)
        
        for path in sorted(by_path.keys()):
            lines.append(f"### `{path}`")
            lines.append("")
            
            for op in sorted(by_path[path], key=lambda x: x.method):
                lines.append(f"#### `{op.method}` - `{op.operation_id}`")
                lines.append("")
                
                if op.summary:
                    lines.append(f"> {op.summary}")
                    lines.append("")
                
                if op.tags:
                    lines.append(f"**Tags**: {', '.join(op.tags)}")
                    lines.append("")
                
                # Parameters
                if op.parameters:
                    lines.append("**Parameters**:")
                    for p in op.parameters:
                        req = " *(required)*" if p.required else ""
                        lines.append(f"- `{p.name}` ({p.location}, {p.param_type}){req}: {p.description or 'N/A'}")
                    lines.append("")
                
                # Request Body
                if op.request_body:
                    lines.append("**Request Body**:")
                    lines.append("```json")
                    if op.request_body.example:
                        lines.append(json.dumps(op.request_body.example, indent=2, ensure_ascii=False)[:500])
                    elif op.request_body.properties:
                        example = {k: v.get("type", "any") for k, v in op.request_body.properties.items()}
                        lines.append(json.dumps(example, indent=2))
                    else:
                        lines.append("{}")
                    lines.append("```")
                    lines.append("")
                    
                    # Property details
                    if op.request_body.properties:
                        lines.append("*Properties*:")
                        for prop_name, prop_info in list(op.request_body.properties.items())[:20]:
                            prop_type = prop_info.get("type", "any")
                            prop_desc = prop_info.get("description", "")[:100]
                            req = " *(required)*" if prop_info.get("required") else ""
                            lines.append(f"- `{prop_name}` ({prop_type}){req}: {prop_desc}")
                        if len(op.request_body.properties) > 20:
                            lines.append(f"- ... and {len(op.request_body.properties) - 20} more properties")
                        lines.append("")
                
                # Responses
                if op.responses:
                    lines.append("**Responses**:")
                    for status, schema in sorted(op.responses.items()):
                        lines.append(f"- `{status}`: {schema.schema_type}")
                        if schema.example:
                            lines.append("  ```json")
                            example_str = json.dumps(schema.example, indent=2, ensure_ascii=False)
                            # Truncate very long examples
                            if len(example_str) > 500:
                                example_str = example_str[:500] + "\n  // ... truncated"
                            lines.append(f"  {example_str}")
                            lines.append("  ```")
                    lines.append("")
                
                # Function signature preview
                lines.append(f"**Function Signature**: `{op.to_function_signature()}`")
                lines.append("")
                lines.append("---")
                lines.append("")
        
        return "\n".join(lines)
    
    def to_dict(self) -> dict:
        """Convert to dictionary for JSON export."""
        return {
            "spec_id": self.spec_id,
            "spec_url": self.spec_url,
            "title": self.title,
            "version": self.version,
            "description": self.description,
            "servers": self.servers,
            "operations": [
                {
                    "operation_id": op.operation_id,
                    "method": op.method,
                    "path": op.path,
                    "summary": op.summary,
                    "description": op.description,
                    "tags": op.tags,
                    "parameters": [asdict(p) for p in op.parameters],
                    "request_body": asdict(op.request_body) if op.request_body else None,
                    "responses": {k: asdict(v) for k, v in op.responses.items()},
                    "deprecated": op.deprecated
                }
                for op in self.operations
            ],
            "components_schemas": self.components_schemas,
            "error": self.error
        }


class OpenAPIParser:
    """Parser for OpenAPI 3.x specifications."""
    
    def __init__(self, spec_id: str, spec_url: str, data: dict):
        self.spec_id = spec_id
        self.spec_url = spec_url
        self.data = data
        self.components = data.get("components", {})
    
    def parse(self) -> OpenAPISpec:
        """Parse the complete specification."""
        info = self.data.get("info", {})
        
        # Extract servers
        servers = [s.get("url", "") for s in self.data.get("servers", []) if s.get("url")]
        
        # Extract operations from paths
        operations = []
        for path, path_item in self.data.get("paths", {}).items():
            for method in ["get", "post", "put", "patch", "delete", "options", "head"]:
                if method in path_item:
                    op = self._parse_operation(path, method, path_item[method])
                    if op:
                        operations.append(op)
        
        # Extract component schemas for reference
        schemas = self.components.get("schemas", {})
        
        return OpenAPISpec(
            spec_id=self.spec_id,
            spec_url=self.spec_url,
            title=info.get("title", ""),
            version=info.get("version", ""),
            description=info.get("description", ""),
            servers=servers,
            operations=operations,
            tags=self.data.get("tags", []),
            components_schemas=schemas
        )
    
    def _parse_operation(self, path: str, method: str, op_data: dict) -> Optional[Operation]:
        """Parse a single operation."""
        operation_id = op_data.get("operationId")
        if not operation_id:
            # Generate one if missing
            operation_id = f"{method}_{path.replace('/', '_').strip('_')}"
        
        # Parse parameters
        parameters = []
        for param in op_data.get("parameters", []):
            parameters.append(Parameter(
                name=param.get("name", ""),
                location=param.get("in", "query"),
                required=param.get("required", False),
                param_type=param.get("schema", {}).get("type", "string"),
                description=param.get("description", ""),
                default=param.get("schema", {}).get("default"),
                enum=param.get("schema", {}).get("enum", [])
            ))
        
        # Parse request body
        request_body = None
        if "requestBody" in op_data:
            request_body = self._parse_request_body(op_data["requestBody"])
        
        # Parse responses
        responses = {}
        for status_code, response_data in op_data.get("responses", {}).items():
            schema = self._parse_response(response_data)
            if schema:
                responses[status_code] = schema
        
        return Operation(
            operation_id=operation_id,
            method=method.upper(),
            path=path,
            summary=op_data.get("summary", ""),
            description=op_data.get("description", ""),
            tags=op_data.get("tags", []),
            parameters=parameters,
            request_body=request_body,
            responses=responses,
            deprecated=op_data.get("deprecated", False)
        )
    
    def _parse_request_body(self, body_data: dict) -> Optional[SchemaInfo]:
        """Parse request body schema."""
        content = body_data.get("content", {})
        
        # Try JSON first, then any other content type
        media_type = content.get("application/json") or content.get("*/*") or next(iter(content.values()), {})
        
        if not media_type:
            return None
        
        schema = media_type.get("schema", {})
        example = media_type.get("example") or schema.get("example")
        
        # Resolve $ref if present
        schema = self._resolve_ref(schema)
        
        return self._parse_schema(schema, example)
    
    def _parse_response(self, response_data: dict) -> Optional[SchemaInfo]:
        """Parse response schema."""
        content = response_data.get("content", {})
        
        media_type = content.get("application/json") or content.get("*/*") or next(iter(content.values()), {})
        
        if not media_type:
            return SchemaInfo(schema_type="empty")
        
        schema = media_type.get("schema", {})
        example = media_type.get("example") or schema.get("example")
        
        # Resolve $ref if present
        schema = self._resolve_ref(schema)
        
        return self._parse_schema(schema, example)
    
    def _parse_schema(self, schema: dict, example: Any = None) -> SchemaInfo:
        """Parse a schema into SchemaInfo."""
        schema_type = schema.get("type", "object")
        
        # Handle array type
        items = None
        if schema_type == "array":
            items_schema = schema.get("items", {})
            items_schema = self._resolve_ref(items_schema)
            items = {
                "type": items_schema.get("type", "object"),
                "properties": self._extract_properties(items_schema)
            }
        
        # Extract properties for object types
        properties = {}
        if schema_type == "object" or "properties" in schema:
            properties = self._extract_properties(schema)
        
        return SchemaInfo(
            schema_type=schema_type,
            properties=properties,
            items=items,
            example=example,
            raw_schema=schema if len(json.dumps(schema, default=str)) < 5000 else None
        )
    
    def _extract_properties(self, schema: dict) -> dict:
        """Extract properties from schema."""
        properties = {}
        required_fields = set(schema.get("required", []))
        
        for prop_name, prop_schema in schema.get("properties", {}).items():
            prop_schema = self._resolve_ref(prop_schema)
            
            properties[prop_name] = {
                "type": prop_schema.get("type", "any"),
                "description": prop_schema.get("description", ""),
                "required": prop_name in required_fields,
                "enum": prop_schema.get("enum"),
                "default": prop_schema.get("default"),
                "format": prop_schema.get("format"),
                "example": prop_schema.get("example")
            }
        
        return properties
    
    def _resolve_ref(self, schema: dict) -> dict:
        """Resolve $ref references."""
        if "$ref" not in schema:
            return schema
        
        ref = schema["$ref"]
        
        # Handle #/components/schemas/Name format
        if ref.startswith("#/components/schemas/"):
            schema_name = ref.split("/")[-1]
            return self.components.get("schemas", {}).get(schema_name, {})
        
        return schema


class BDCOpenAPIScraperV2:
    """Enhanced scraper for BDC OpenAPI documentation."""
    
    def __init__(self, workers: int = DEFAULT_WORKERS):
        self.workers = workers
        self.specs: list[OpenAPISpec] = []
        self.stats = {"total": 0, "success": 0, "failed": 0, "operations": 0}
    
    async def fetch_with_retry(
        self, 
        session: aiohttp.ClientSession, 
        url: str,
        retries: int = MAX_RETRIES
    ) -> Optional[str]:
        """Fetch URL with retry logic."""
        for attempt in range(retries):
            try:
                async with session.get(url, timeout=aiohttp.ClientTimeout(total=REQUEST_TIMEOUT)) as response:
                    if response.status == 200:
                        return await response.text()
                    elif response.status == 429:
                        wait_time = RETRY_DELAY * (attempt + 1) * 2
                        logger.warning(f"Rate limited on {url}, waiting {wait_time}s")
                        await asyncio.sleep(wait_time)
                    else:
                        logger.warning(f"HTTP {response.status} for {url}")
                        return None
            except asyncio.TimeoutError:
                logger.warning(f"Timeout on {url} (attempt {attempt + 1}/{retries})")
            except aiohttp.ClientError as e:
                logger.warning(f"Client error on {url}: {e} (attempt {attempt + 1}/{retries})")
            
            if attempt < retries - 1:
                await asyncio.sleep(RETRY_DELAY * (attempt + 1))
        
        return None
    
    async def get_spec_links(self, session: aiohttp.ClientSession) -> list[str]:
        """Extract all OpenAPI spec links from the index page."""
        logger.info(f"Fetching index page: {OPENAPI_INDEX}")
        
        html = await self.fetch_with_retry(session, OPENAPI_INDEX)
        if not html:
            raise RuntimeError(f"Failed to fetch index page: {OPENAPI_INDEX}")
        
        soup = BeautifulSoup(html, 'html.parser')
        
        pattern = re.compile(r'/plataforma/openapi/([a-f0-9]+)$')
        links = []
        seen_ids = set()
        
        for a_tag in soup.find_all('a', href=pattern):
            href = a_tag.get('href', '')
            match = pattern.search(href)
            if match and match.group(1) not in seen_ids:
                spec_id = match.group(1)
                seen_ids.add(spec_id)
                full_url = f"{BASE_URL}{href}"
                links.append(full_url)
        
        logger.info(f"Found {len(links)} unique OpenAPI spec links")
        return links
    
    async def parse_openapi_spec(
        self, 
        session: aiohttp.ClientSession, 
        url: str, 
        semaphore: asyncio.Semaphore
    ) -> OpenAPISpec:
        """Parse a single OpenAPI specification."""
        spec_id = url.split('/')[-1]
        
        async with semaphore:
            logger.debug(f"Processing: {spec_id}")
            
            json_text = await self.fetch_with_retry(session, url)
            
            if not json_text:
                return OpenAPISpec(spec_id=spec_id, spec_url=url, error="Failed to fetch")
            
            try:
                data = json.loads(json_text)
            except json.JSONDecodeError as e:
                return OpenAPISpec(spec_id=spec_id, spec_url=url, error=f"Invalid JSON: {e}")
            
            # Parse using the enhanced parser
            parser = OpenAPIParser(spec_id, url, data)
            return parser.parse()
    
    async def scrape_all(self) -> list[OpenAPISpec]:
        """Scrape all OpenAPI specifications in parallel."""
        connector = aiohttp.TCPConnector(limit=self.workers * 2, limit_per_host=self.workers)
        
        async with aiohttp.ClientSession(connector=connector) as session:
            links = await self.get_spec_links(session)
            self.stats["total"] = len(links)
            
            if not links:
                logger.warning("No OpenAPI links found")
                return []
            
            semaphore = asyncio.Semaphore(self.workers)
            
            logger.info(f"Processing {len(links)} specs with {self.workers} parallel workers...")
            
            tasks = [
                self.parse_openapi_spec(session, url, semaphore)
                for url in links
            ]
            
            self.specs = await asyncio.gather(*tasks)
            
            # Update stats
            for spec in self.specs:
                if spec.error:
                    self.stats["failed"] += 1
                else:
                    self.stats["success"] += 1
                    self.stats["operations"] += len(spec.operations)
            
            logger.info(
                f"Completed: {self.stats['success']} success, "
                f"{self.stats['failed']} failed, "
                f"{self.stats['operations']} total operations"
            )
            
            return self.specs
    
    def generate_markdown(self) -> str:
        """Generate comprehensive markdown documentation."""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Collect all unique operations across specs
        all_operations: list[tuple[str, Operation]] = []
        for spec in self.specs:
            if not spec.error:
                for op in spec.operations:
                    all_operations.append((spec.title or spec.spec_id, op))
        
        # Group by operationId prefix (e.g., pessoas_, empresas_)
        by_domain: dict[str, list[tuple[str, Operation]]] = {}
        for spec_title, op in all_operations:
            # Extract domain from operationId (e.g., "pessoas" from "pessoas_basic_data")
            parts = op.operation_id.split("_")
            domain = parts[0] if parts else "other"
            by_domain.setdefault(domain, []).append((spec_title, op))
        
        md_parts = [
            f"# BigDataCorp API Documentation",
            f"",
            f"**Generated**: {timestamp}",
            f"**Source**: [{OPENAPI_INDEX}]({OPENAPI_INDEX})",
            f"**Statistics**:",
            f"- Total Specs: {self.stats['total']}",
            f"- Successful: {self.stats['success']}",
            f"- Failed: {self.stats['failed']}",
            f"- Total Operations: {self.stats['operations']}",
            f"",
            f"---",
            f"",
            f"## Table of Contents",
            f"",
        ]
        
        # TOC by domain
        for domain in sorted(by_domain.keys()):
            ops = by_domain[domain]
            md_parts.append(f"- [{domain.title()}](#{domain}) ({len(ops)} operations)")
        
        md_parts.extend([
            "",
            "---",
            "",
            "## Quick Reference: All Operations",
            "",
            "| Domain | Operation ID | Method | Path | Summary |",
            "|--------|--------------|--------|------|---------|"
        ])
        
        for spec_title, op in sorted(all_operations, key=lambda x: x[1].operation_id):
            summary = (op.summary[:50] + "...") if len(op.summary) > 50 else op.summary
            md_parts.append(f"| {op.operation_id.split('_')[0]} | `{op.operation_id}` | {op.method} | `{op.path}` | {summary} |")
        
        md_parts.extend(["", "---", ""])
        
        # Detailed sections by domain
        for domain in sorted(by_domain.keys()):
            ops = by_domain[domain]
            
            md_parts.append(f"## {domain.title()}")
            md_parts.append(f"")
            md_parts.append(f"**{len(ops)} operations**")
            md_parts.append("")
            
            for spec_title, op in sorted(ops, key=lambda x: x[1].operation_id):
                md_parts.append(f"### `{op.operation_id}`")
                md_parts.append("")
                md_parts.append(f"- **Method**: `{op.method}`")
                md_parts.append(f"- **Path**: `{op.path}`")
                md_parts.append(f"- **Source**: {spec_title}")
                
                if op.summary:
                    md_parts.append(f"- **Summary**: {op.summary}")
                
                if op.tags:
                    md_parts.append(f"- **Tags**: {', '.join(op.tags)}")
                
                md_parts.append("")
                
                # Parameters
                if op.parameters:
                    md_parts.append("**Parameters**:")
                    md_parts.append("")
                    md_parts.append("| Name | In | Type | Required | Description |")
                    md_parts.append("|------|-----|------|----------|-------------|")
                    for p in op.parameters:
                        req = "Yes" if p.required else "No"
                        desc = (p.description[:40] + "...") if len(p.description) > 40 else p.description
                        md_parts.append(f"| `{p.name}` | {p.location} | {p.param_type} | {req} | {desc} |")
                    md_parts.append("")
                
                # Request Body
                if op.request_body and op.request_body.properties:
                    md_parts.append("**Request Body** (`application/json`):")
                    md_parts.append("")
                    md_parts.append("| Property | Type | Required | Description |")
                    md_parts.append("|----------|------|----------|-------------|")
                    
                    for prop_name, prop_info in list(op.request_body.properties.items())[:30]:
                        prop_type = prop_info.get("type", "any")
                        req = "Yes" if prop_info.get("required") else "No"
                        desc = prop_info.get("description", "")[:40]
                        md_parts.append(f"| `{prop_name}` | {prop_type} | {req} | {desc} |")
                    
                    if len(op.request_body.properties) > 30:
                        md_parts.append(f"| ... | ... | ... | *{len(op.request_body.properties) - 30} more properties* |")
                    
                    md_parts.append("")
                    
                    # Example
                    if op.request_body.example:
                        md_parts.append("*Example*:")
                        md_parts.append("```json")
                        example_str = json.dumps(op.request_body.example, indent=2, ensure_ascii=False)
                        if len(example_str) > 800:
                            example_str = example_str[:800] + "\n// ... truncated"
                        md_parts.append(example_str)
                        md_parts.append("```")
                        md_parts.append("")
                
                # Responses
                if op.responses:
                    md_parts.append("**Responses**:")
                    md_parts.append("")
                    
                    for status_code, schema in sorted(op.responses.items()):
                        md_parts.append(f"*{status_code}*: `{schema.schema_type}`")
                        
                        if schema.properties:
                            md_parts.append("")
                            md_parts.append("| Property | Type | Description |")
                            md_parts.append("|----------|------|-------------|")
                            for prop_name, prop_info in list(schema.properties.items())[:15]:
                                prop_type = prop_info.get("type", "any")
                                desc = prop_info.get("description", "")[:40]
                                md_parts.append(f"| `{prop_name}` | {prop_type} | {desc} |")
                            if len(schema.properties) > 15:
                                md_parts.append(f"| ... | ... | *{len(schema.properties) - 15} more* |")
                        
                        if schema.example:
                            md_parts.append("")
                            md_parts.append("```json")
                            example_str = json.dumps(schema.example, indent=2, ensure_ascii=False)
                            if len(example_str) > 500:
                                example_str = example_str[:500] + "\n// ... truncated"
                            md_parts.append(example_str)
                            md_parts.append("```")
                        
                        md_parts.append("")
                
                # TypeScript signature
                md_parts.append(f"**TypeScript Signature**:")
                md_parts.append(f"```typescript")
                md_parts.append(op.to_function_signature())
                md_parts.append(f"```")
                md_parts.append("")
                md_parts.append("---")
                md_parts.append("")
        
        # Failed specs section
        failed_specs = [s for s in self.specs if s.error]
        if failed_specs:
            md_parts.extend([
                "",
                "## ⚠️ Failed Specifications",
                ""
            ])
            for spec in failed_specs:
                md_parts.append(f"- `{spec.spec_id}`: {spec.error}")
        
        return "\n".join(md_parts)
    
    def generate_json(self) -> str:
        """Generate JSON export of all specs."""
        export_data = {
            "generated": datetime.now().isoformat(),
            "source": OPENAPI_INDEX,
            "stats": self.stats,
            "specs": [spec.to_dict() for spec in self.specs if not spec.error]
        }
        return json.dumps(export_data, indent=2, ensure_ascii=False)
    
    def generate_operations_json(self) -> str:
        """Generate a flat JSON file with just operations (for code generation)."""
        operations = []
        
        for spec in self.specs:
            if spec.error:
                continue
            
            for op in spec.operations:
                operations.append({
                    "operationId": op.operation_id,
                    "method": op.method,
                    "path": op.path,
                    "summary": op.summary,
                    "description": op.description,
                    "tags": op.tags,
                    "parameters": [asdict(p) for p in op.parameters],
                    "requestBody": asdict(op.request_body) if op.request_body else None,
                    "responses": {k: asdict(v) for k, v in op.responses.items()},
                    "source": {
                        "spec_id": spec.spec_id,
                        "title": spec.title,
                        "servers": spec.servers
                    }
                })
        
        return json.dumps({
            "generated": datetime.now().isoformat(),
            "total_operations": len(operations),
            "operations": operations
        }, indent=2, ensure_ascii=False)


async def main():
    parser = argparse.ArgumentParser(
        description="Enhanced BDC OpenAPI scraper for NPM client generation"
    )
    parser.add_argument(
        "-w", "--workers",
        type=int,
        default=DEFAULT_WORKERS,
        help=f"Number of parallel workers (default: {DEFAULT_WORKERS})"
    )
    parser.add_argument(
        "-o", "--output",
        type=str,
        default=DEFAULT_OUTPUT,
        help=f"Output markdown file (default: {DEFAULT_OUTPUT})"
    )
    parser.add_argument(
        "-v", "--verbose",
        action="store_true",
        help="Enable verbose logging"
    )
    
    args = parser.parse_args()
    
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)
    
    logger.info(f"BDC OpenAPI Scraper v2 starting with {args.workers} workers")
    
    scraper = BDCOpenAPIScraperV2(workers=args.workers)
    
    try:
        await scraper.scrape_all()
        
        output_path = Path(args.output)
        
        # Generate markdown (human-readable documentation)
        markdown = scraper.generate_markdown()
        output_path.write_text(markdown, encoding="utf-8")
        logger.info(f"Markdown saved to: {output_path.absolute()}")
        
        # Always generate JSON files (required for code generation)
        # Full specs JSON
        json_path = output_path.with_suffix(".json")
        json_path.write_text(scraper.generate_json(), encoding="utf-8")
        logger.info(f"Full JSON saved to: {json_path}")
        
        # Operations-only JSON (for code generation)
        ops_json_path = output_path.with_name(f"{output_path.stem}_operations.json")
        ops_json_path.write_text(scraper.generate_operations_json(), encoding="utf-8")
        logger.info(f"Operations JSON saved to: {ops_json_path}")
        
        # Print summary
        print(f"\n{'='*60}")
        print(f"SCRAPING COMPLETE")
        print(f"{'='*60}")
        print(f"Total specs:         {scraper.stats['total']}")
        print(f"Successfully parsed: {scraper.stats['success']}")
        print(f"Failed:              {scraper.stats['failed']}")
        print(f"Total operations:    {scraper.stats['operations']}")
        print(f"")
        print(f"Output files:")
        print(f"  • {output_path.absolute()}")
        print(f"  • {json_path.absolute()}")
        print(f"  • {ops_json_path.absolute()}")
        print(f"{'='*60}\n")
        
    except Exception as e:
        logger.error(f"Scraping failed: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    asyncio.run(main())