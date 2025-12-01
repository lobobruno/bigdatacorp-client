#!/usr/bin/env tsx
/**
 * Code Generator for BigDataCorp Client
 *
 * Reads: BDC_operations.json
 * Generates:
 *   - src/resources/generated/*.ts (one file per domain)
 *   - src/types/generated/*.ts (request/response types)
 */

import * as fs from "node:fs"
import * as path from "node:path"

// Types for the operations JSON
interface OperationProperty {
	type: string
	required?: boolean
	description?: string
	example?: unknown
	enum?: string[] | null
	default?: unknown
	format?: string | null
}

interface SchemaInfo {
	schema_type: string
	properties: Record<string, OperationProperty>
	example?: unknown
	items?: SchemaInfo | null
}

interface Operation {
	operationId: string
	method: string
	path: string
	summary: string
	description: string
	tags: string[]
	parameters: Array<{
		name: string
		location: string
		required: boolean
		param_type: string
		description: string
	}>
	requestBody: SchemaInfo | null
	responses: Record<string, SchemaInfo>
	source: {
		spec_id: string
		title: string
		servers: string[]
	}
}

interface OperationsFile {
	generated: string
	total_operations: number
	operations: Operation[]
}

// Domain configuration: maps operationId prefixes to domain names
interface DomainConfig {
	name: string
	className: string
	propertyName: string
}

// Determine the root directory
const rootDir = path.resolve(__dirname, "..")

// Load operations
const operationsPath = path.join(rootDir, "BDC_operations.json")
if (!fs.existsSync(operationsPath)) {
	console.error(`Error: ${operationsPath} not found`)
	process.exit(1)
}

const data: OperationsFile = JSON.parse(
	fs.readFileSync(operationsPath, "utf-8"),
)

// Helper: Normalize string to ASCII (remove accents/diacritics)
function toAscii(str: string): string {
	const charMap: Record<string, string> = {
		á: "a",
		à: "a",
		ã: "a",
		â: "a",
		ä: "a",
		é: "e",
		è: "e",
		ê: "e",
		ë: "e",
		í: "i",
		ì: "i",
		î: "i",
		ï: "i",
		ó: "o",
		ò: "o",
		õ: "o",
		ô: "o",
		ö: "o",
		ú: "u",
		ù: "u",
		û: "u",
		ü: "u",
		ç: "c",
		ñ: "n",
		Á: "A",
		À: "A",
		Ã: "A",
		Â: "A",
		Ä: "A",
		É: "E",
		È: "E",
		Ê: "E",
		Ë: "E",
		Í: "I",
		Ì: "I",
		Î: "I",
		Ï: "I",
		Ó: "O",
		Ò: "O",
		Õ: "O",
		Ô: "O",
		Ö: "O",
		Ú: "U",
		Ù: "U",
		Û: "U",
		Ü: "U",
		Ç: "C",
		Ñ: "N",
	}
	return str
		.split("")
		.map((c) => charMap[c] || c)
		.join("")
}

// Helper: Convert snake_case or kebab-case to camelCase
function toCamelCase(str: string): string {
	return toAscii(str)
		.replace(/[-_]([a-z0-9])/gi, (_, letter) => letter.toUpperCase())
		.replace(/^[A-Z]/, (letter) => letter.toLowerCase())
}

// Helper: Convert snake_case or kebab-case to PascalCase
function toPascalCase(str: string): string {
	const camel = toCamelCase(str)
	return camel.charAt(0).toUpperCase() + camel.slice(1)
}

// Helper: Parse domain from operationId
function parseDomain(operationId: string): {
	domain: string
	methodPart: string
} {
	// Handle different operationId patterns:
	// - api-de-batch-SaveJobDefinition -> domain: "batch", method: "saveJobDefinition"
	// - empresas_basic_data -> domain: "empresas", method: "basicData"
	// - health-check-empresas -> domain: "healthCheck", method: "empresas"

	// Pattern 1: api-de-* or api-*
	if (operationId.startsWith("api-de-")) {
		const rest = operationId.slice(7) // Remove 'api-de-'
		const parts = rest.split("-")
		const domain = parts[0]
		const method = parts.slice(1).join("-")
		return { domain, methodPart: method }
	}

	if (operationId.startsWith("api-")) {
		const rest = operationId.slice(4) // Remove 'api-'
		const parts = rest.split("-")
		const domain = parts[0]
		const method = parts.slice(1).join("-")
		return { domain, methodPart: method }
	}

	// Pattern 2: health-check-*
	if (operationId.startsWith("health-check-")) {
		return { domain: "healthCheck", methodPart: operationId.slice(13) }
	}

	// Pattern 3: domain_method_name (empresas_basic_data, pessoas_basic_data)
	if (operationId.includes("_")) {
		const parts = operationId.split("_")
		const domain = parts[0]
		const method = parts.slice(1).join("_")
		return { domain, methodPart: method }
	}

	// Fallback: use the whole operationId as domain
	return { domain: operationId, methodPart: "" }
}

// Helper: Get method name from operationId
function getMethodName(operationId: string): string {
	const { methodPart } = parseDomain(operationId)
	if (!methodPart) return "execute"
	return toCamelCase(methodPart)
}

// Helper: Get dataset name from operationId (snake_case method part = dataset name)
function getDatasetName(operationId: string): string | null {
	const { methodPart } = parseDomain(operationId)
	if (!methodPart) return null
	// The methodPart is already in snake_case which matches the Datasets value
	return methodPart
}

// Domains that use the Datasets parameter pattern
const DATASET_DOMAINS = [
	"pessoas",
	"empresas",
	"enderecos",
	"veiculos",
	"processos",
	"produtos",
]

// Domain to document type mapping for doc{} formatting
const DOMAIN_DOC_TYPE: Record<
	string,
	{ type: string; example: string; wrapper: string }
> = {
	pessoas: { type: "CPF", example: "12345678900", wrapper: "doc" },
	empresas: { type: "CNPJ", example: "12345678000199", wrapper: "doc" },
	enderecos: { type: "CEP", example: "01310100", wrapper: "cep" },
	veiculos: { type: "Placa", example: "ABC1234", wrapper: "license_plate" },
	processos: {
		type: "Número do Processo",
		example: "00000000000000000000",
		wrapper: "doc",
	},
	produtos: { type: "Código", example: "7891234567890", wrapper: "doc" },
}

// Check if an operation uses the Datasets pattern
function usesDatasetPattern(domain: string, op: Operation): boolean {
	if (!DATASET_DOMAINS.includes(domain)) return false
	// Check if the operation has a Datasets property in request body
	return op.requestBody?.properties?.Datasets !== undefined
}

// Check if an operation has only 'q' as a required parameter (plus optional Limit)
function hasOnlyDocumentParam(op: Operation): boolean {
	if (!op.requestBody?.properties) return false
	const props = op.requestBody.properties
	const propNames = Object.keys(props)
	// Check if 'q' exists and is the main required param
	if (!props.q) return false
	// Allow: q (required), Datasets (will be auto-injected), Limit (optional)
	const allowedOptional = ["Datasets", "Limit"]
	return propNames.every(
		(name) => name === "q" || allowedOptional.includes(name),
	)
}

// Helper: Map OpenAPI type to TypeScript type
function toTsType(prop: OperationProperty): string {
	if (prop.enum && prop.enum.length > 0) {
		return prop.enum.map((v) => `'${v}'`).join(" | ")
	}

	const typeMap: Record<string, string> = {
		string: "string",
		integer: "number",
		number: "number",
		boolean: "boolean",
		array: "unknown[]",
		object: "Record<string, unknown>",
	}

	return typeMap[prop.type] || "unknown"
}

// Helper: Sanitize property name for TypeScript
function sanitizePropertyName(name: string): string {
	// If the name contains special characters, wrap in quotes
	if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
		return `'${name}'`
	}
	return name
}

// Helper: Sanitize interface name for TypeScript
function sanitizeInterfaceName(name: string): string {
	return name.replace(/[^a-zA-Z0-9_]/g, "")
}

// Group operations by domain
const byDomain = new Map<string, Operation[]>()

for (const op of data.operations) {
	const { domain } = parseDomain(op.operationId)
	const normalizedDomain = toCamelCase(domain)

	if (!byDomain.has(normalizedDomain)) {
		byDomain.set(normalizedDomain, [])
	}
	byDomain.get(normalizedDomain)?.push(op)
}

console.log(
	`Found ${byDomain.size} domains with ${data.total_operations} total operations`,
)
console.log("Domains:", Array.from(byDomain.keys()).join(", "))

// Generate types for a domain
function generateTypes(domain: string, operations: Operation[]): string {
	const lines: string[] = []

	const generatedInterfaces = new Set<string>()

	for (const op of operations) {
		const methodName = getMethodName(op.operationId)
		const pascalMethod = sanitizeInterfaceName(toPascalCase(methodName))
		const usesDataset = usesDatasetPattern(domain, op)

		// Request type
		if (
			op.requestBody?.properties &&
			Object.keys(op.requestBody.properties).length > 0
		) {
			const interfaceName = `${pascalMethod}Request`
			if (!generatedInterfaces.has(interfaceName)) {
				generatedInterfaces.add(interfaceName)
				lines.push(`export interface ${interfaceName} {`)

				for (const [propName, propInfo] of Object.entries(
					op.requestBody.properties,
				)) {
					// Skip 'Datasets' for dataset-pattern operations - it will be auto-injected
					if (usesDataset && propName === "Datasets") {
						continue
					}
					const optional = propInfo.required === true ? "" : "?"
					const tsType = toTsType(propInfo)
					const safeName = sanitizePropertyName(propName)
					const description = propInfo.description
						? ` /** ${propInfo.description} */`
						: ""
					if (description) {
						lines.push(description)
					}
					lines.push(`  ${safeName}${optional}: ${tsType};`)
				}

				lines.push(`}`)
				lines.push(``)
			}
		}

		// Response type
		const response200 = op.responses["200"]
		if (
			response200?.properties &&
			Object.keys(response200.properties).length > 0
		) {
			const interfaceName = `${pascalMethod}Response`
			if (!generatedInterfaces.has(interfaceName)) {
				generatedInterfaces.add(interfaceName)
				lines.push(`export interface ${interfaceName} {`)

				for (const [propName, propInfo] of Object.entries(
					response200.properties,
				)) {
					const tsType = toTsType(propInfo)
					const safeName = sanitizePropertyName(propName)
					lines.push(`  ${safeName}?: ${tsType};`)
				}

				lines.push(`}`)
				lines.push(``)
			}
		}
	}

	// If no interfaces were generated, add a placeholder
	if (generatedInterfaces.size === 0) {
		lines.push(`// No specific types generated for this domain`)
		lines.push(`export type GenericRequest = Record<string, unknown>;`)
		lines.push(`export type GenericResponse = Record<string, unknown>;`)
	}

	return lines.join("\n")
}

// Generate resource class for a domain
function generateResource(domain: string, operations: Operation[]): string {
	const className = `${toPascalCase(domain)}Resource`

	const lines: string[] = [
		`// AUTO-GENERATED - DO NOT EDIT`,
		`// Generated from BDC_operations.json`,
		`// Domain: ${domain}`,
		`// Operations: ${operations.length}`,
		``,
		`import { BaseResource } from '../base';`,
		`import { RequestOptions } from '../../types/config';`,
		`import * as Types from '../../types/generated/${domain}.types';`,
		``,
		`export class ${className} extends BaseResource {`,
	]

	const generatedMethods = new Set<string>()

	for (const op of operations) {
		const methodName = getMethodName(op.operationId)

		// Avoid duplicate methods
		if (generatedMethods.has(methodName)) {
			continue
		}
		generatedMethods.add(methodName)

		const pascalMethod = sanitizeInterfaceName(toPascalCase(methodName))
		const usesDataset = usesDatasetPattern(domain, op)
		const datasetName = getDatasetName(op.operationId)

		// Determine parameter and return types
		const hasRequestBody =
			op.requestBody?.properties &&
			Object.keys(op.requestBody.properties).length > 0
		const hasResponse =
			op.responses["200"]?.properties &&
			Object.keys(op.responses["200"].properties).length > 0

		const paramType = hasRequestBody
			? `Types.${pascalMethod}Request`
			: "Record<string, unknown>"
		const returnType = hasResponse ? `Types.${pascalMethod}Response` : "unknown"

		// Determine HTTP method
		const httpMethod = op.method.toLowerCase()

		// Get the path - use the first server URL if available
		let apiPath = op.path
		if (op.source.servers && op.source.servers.length > 0) {
			// Extract path from the full URL if needed
			const serverUrl = op.source.servers[0]
			try {
				const url = new URL(serverUrl)
				// If the path from source differs from op.path, prefer the server's path context
				if (url.pathname !== "/" && url.pathname !== "") {
					apiPath =
						url.pathname + (apiPath.startsWith("/") ? "" : "/") + apiPath
				}
			} catch {
				// If URL parsing fails, use the path as-is
			}
		}

		// Clean up summary for JSDoc
		const summary = (op.summary || op.operationId).replace(/\n/g, " ").trim()

		// Check if this method can use simple document parameter
		const docInfo = DOMAIN_DOC_TYPE[domain]
		const canUseSimpleDoc =
			usesDataset && datasetName && hasOnlyDocumentParam(op) && docInfo

		// JSDoc
		lines.push(`  /**`)
		lines.push(`   * ${summary}`)
		if (canUseSimpleDoc) {
			lines.push(
				`   * @param docOrParams - ${docInfo.type} string (e.g., '${docInfo.example}') or params object`,
			)
			lines.push(`   * @example`)
			lines.push(`   * // Using ${docInfo.type} directly`)
			lines.push(
				`   * await api.${domain}.${methodName}('${docInfo.example}');`,
			)
			lines.push(`   * // Or using params object`)
			lines.push(
				`   * await api.${domain}.${methodName}({ q: '${docInfo.wrapper}{${docInfo.example}}' });`,
			)
		}
		if (usesDataset && datasetName) {
			lines.push(`   * @dataset ${datasetName}`)
		}
		lines.push(`   */`)

		// Method signature - handle dataset pattern differently
		if (httpMethod === "post" || httpMethod === "put") {
			if (canUseSimpleDoc && docInfo) {
				// Generate method that accepts either a document string or params object
				lines.push(`  async ${methodName}(`)
				lines.push(`    docOrParams: string | ${paramType},`)
				lines.push(`    options?: RequestOptions`)
				lines.push(`  ): Promise<${returnType}> {`)
				lines.push(`    const params = typeof docOrParams === 'string'`)
				lines.push(`      ? { q: \`${docInfo.wrapper}{\${docOrParams}}\` }`)
				lines.push(`      : docOrParams;`)
				lines.push(
					`    return this.http.${httpMethod}<${returnType}, ${paramType} & { Datasets: string }>(`,
				)
				lines.push(`      '${apiPath}',`)
				lines.push(`      { ...params, Datasets: '${datasetName}' },`)
				lines.push(`      options`)
				lines.push(`    );`)
				lines.push(`  }`)
			} else if (usesDataset && datasetName) {
				// Auto-inject Datasets parameter but keep params object
				lines.push(`  async ${methodName}(`)
				lines.push(`    params: ${paramType},`)
				lines.push(`    options?: RequestOptions`)
				lines.push(`  ): Promise<${returnType}> {`)
				lines.push(
					`    return this.http.${httpMethod}<${returnType}, ${paramType} & { Datasets: string }>(`,
				)
				lines.push(`      '${apiPath}',`)
				lines.push(`      { ...params, Datasets: '${datasetName}' },`)
				lines.push(`      options`)
				lines.push(`    );`)
				lines.push(`  }`)
			} else {
				lines.push(`  async ${methodName}(`)
				lines.push(`    params: ${paramType},`)
				lines.push(`    options?: RequestOptions`)
				lines.push(`  ): Promise<${returnType}> {`)
				lines.push(
					`    return this.http.${httpMethod}<${returnType}, ${paramType}>(`,
				)
				lines.push(`      '${apiPath}',`)
				lines.push(`      params,`)
				lines.push(`      options`)
				lines.push(`    );`)
				lines.push(`  }`)
			}
		} else {
			lines.push(`  async ${methodName}(`)
			lines.push(`    options?: RequestOptions`)
			lines.push(`  ): Promise<${returnType}> {`)
			lines.push(`    return this.http.${httpMethod}<${returnType}>(`)
			lines.push(`      '${apiPath}',`)
			lines.push(`      options`)
			lines.push(`    );`)
			lines.push(`  }`)
		}
		lines.push(``)
	}

	// Add a generic 'query' method for domains that support multiple datasets
	if (DATASET_DOMAINS.includes(domain)) {
		// Find the first operation to get the API path
		const firstOp = operations.find((op) => usesDatasetPattern(domain, op))
		if (firstOp) {
			let apiPath = firstOp.path
			if (firstOp.source.servers && firstOp.source.servers.length > 0) {
				const serverUrl = firstOp.source.servers[0]
				try {
					const url = new URL(serverUrl)
					if (url.pathname !== "/" && url.pathname !== "") {
						apiPath =
							url.pathname + (apiPath.startsWith("/") ? "" : "/") + apiPath
					}
				} catch {
					// If URL parsing fails, use the path as-is
				}
			}

			const docInfo = DOMAIN_DOC_TYPE[domain]
			lines.push(`  /**`)
			lines.push(`   * Query multiple datasets at once`)
			lines.push(
				`   * @param doc - ${docInfo?.type || "Document"} string (e.g., '${docInfo?.example || "12345678900"}')`,
			)
			lines.push(`   * @param datasets - Array of dataset names to query`)
			lines.push(`   * @example`)
			lines.push(`   * // Query basic_data and emails`)
			lines.push(
				`   * await api.${domain}.query('${docInfo?.example || "12345678900"}', ['basic_data', 'emails']);`,
			)
			lines.push(`   */`)
			lines.push(`  async query(`)
			lines.push(`    doc: string,`)
			lines.push(`    datasets: string[],`)
			lines.push(`    options?: RequestOptions`)
			lines.push(`  ): Promise<unknown> {`)
			lines.push(
				`    return this.http.post<unknown, { q: string; Datasets: string }>(`,
			)
			lines.push(`      '${apiPath}',`)
			lines.push(
				`      { q: \`${docInfo?.wrapper || "doc"}{\${doc}}\`, Datasets: datasets.join(',') },`,
			)
			lines.push(`      options`)
			lines.push(`    );`)
			lines.push(`  }`)
			lines.push(``)
		}
	}

	lines.push(`}`)

	return lines.join("\n")
}

// Generate files
const resourcesDir = path.join(rootDir, "src/resources/generated")
const typesDir = path.join(rootDir, "src/types/generated")

fs.mkdirSync(resourcesDir, { recursive: true })
fs.mkdirSync(typesDir, { recursive: true })

const resourceExports: string[] = []
const typeExports: string[] = []
const domainConfigs: DomainConfig[] = []

for (const [domain, operations] of byDomain) {
	console.log(`Generating ${domain}: ${operations.length} operations`)

	// Generate types
	const types = generateTypes(domain, operations)
	fs.writeFileSync(path.join(typesDir, `${domain}.types.ts`), types)
	// Use namespace imports to avoid conflicts between domains
	typeExports.push(
		`import * as ${toPascalCase(domain)}Types from './${domain}.types';`,
	)

	// Generate resource
	const resource = generateResource(domain, operations)
	fs.writeFileSync(path.join(resourcesDir, `${domain}.ts`), resource)
	resourceExports.push(
		`export { ${toPascalCase(domain)}Resource } from './${domain}';`,
	)

	// Track domain config for client generation
	domainConfigs.push({
		name: domain,
		className: `${toPascalCase(domain)}Resource`,
		propertyName: toCamelCase(domain),
	})
}

// Generate barrel exports
fs.writeFileSync(
	path.join(resourcesDir, "index.ts"),
	`// AUTO-GENERATED - DO NOT EDIT\n${resourceExports.join("\n")}\n`,
)

// Generate types index with namespaced exports to avoid conflicts
const _typeNamespaces = Array.from(byDomain.keys())
	.map((d) => `  ${toPascalCase(d)}: typeof ${toPascalCase(d)}Types`)
	.join(",\n")

const typeNamespaceExports = Array.from(byDomain.keys())
	.map((d) => `  ${toPascalCase(d)}: ${toPascalCase(d)}Types`)
	.join(",\n")

fs.writeFileSync(
	path.join(typesDir, "index.ts"),
	`// AUTO-GENERATED - DO NOT EDIT
${typeExports.join("\n")}

// Re-export all types under namespaced objects
export const Types = {
${typeNamespaceExports}
};

// Also export namespaces directly for convenient access
${Array.from(byDomain.keys())
	.map((d) => `export { ${toPascalCase(d)}Types };`)
	.join("\n")}

// Export individual type files for direct imports
${Array.from(byDomain.keys())
	.map((d) => `export * as ${toPascalCase(d)} from './${d}.types';`)
	.join("\n")}
`,
)

// Generate client.ts with all resources
const clientImports = domainConfigs.map((d) => `  ${d.className},`).join("\n")

const clientProperties = domainConfigs
	.map((d) => `  public readonly ${d.propertyName}: ${d.className};`)
	.join("\n")

const clientInitializers = domainConfigs
	.map((d) => `    this.${d.propertyName} = new ${d.className}(this.http);`)
	.join("\n")

const clientCode = `// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json

import { HttpClient } from './http/http-client';
import { BigDataCorpConfig } from './types/config';

import {
${clientImports}
} from './resources/generated';

export class BigDataCorp {
  private readonly http: HttpClient;

${clientProperties}

  constructor(config: BigDataCorpConfig) {
    if (!config.accessToken) {
      throw new Error('AccessToken is required');
    }
    if (!config.tokenId) {
      throw new Error('TokenId is required');
    }

    this.http = new HttpClient(config);

${clientInitializers}
  }

  /**
   * Health check - verifies API connectivity
   * @returns Object with ok status and latency in milliseconds
   */
  async ping(): Promise<{ ok: boolean; latencyMs: number }> {
    const start = Date.now();
    try {
      await this.http.get('/health');
      return { ok: true, latencyMs: Date.now() - start };
    } catch {
      return { ok: false, latencyMs: Date.now() - start };
    }
  }
}
`

fs.writeFileSync(path.join(rootDir, "src/client.ts"), clientCode)

console.log(`\nGenerated:`)
console.log(`  - ${byDomain.size} resource files in src/resources/generated/`)
console.log(`  - ${byDomain.size} type files in src/types/generated/`)
console.log(`  - src/client.ts with ${domainConfigs.length} resources`)
console.log(`\nDone!`)
