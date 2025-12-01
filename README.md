# BigDataCorp Client

[![GitHub stars](https://img.shields.io/github/stars/lobobruno/bigdatacorp-client?style=social)](https://github.com/lobobruno/bigdatacorp-client/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/lobobruno/bigdatacorp-client?style=social)](https://github.com/lobobruno/bigdatacorp-client/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/lobobruno/bigdatacorp-client?style=social)](https://github.com/lobobruno/bigdatacorp-client/watchers)

[![npm version](https://img.shields.io/npm/v/bigdatacorp-client.svg)](https://www.npmjs.com/package/bigdatacorp-client)
[![npm downloads](https://img.shields.io/npm/dm/bigdatacorp-client.svg)](https://www.npmjs.com/package/bigdatacorp-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0+-green.svg)](https://nodejs.org/)

> TypeScript/JavaScript client for the BigDataCorp API. Provides type-safe access to all BigDataCorp data enrichment and validation services.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Available Resources](#available-resources)
- [Usage Examples](#usage-examples)
- [Error Handling](#error-handling)
- [Request Options](#request-options)
- [Utility Functions](#utility-functions)
- [TypeScript Support](#typescript-support)
- [Requirements](#requirements)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install bigdatacorp-client
# or
pnpm add bigdatacorp-client
# or
yarn add bigdatacorp-client
```

## Quick Start

```typescript
import { BigDataCorp } from 'bigdatacorp-client';

const api = new BigDataCorp({
  accessToken: 'YOUR_ACCESS_TOKEN',
  tokenId: 'YOUR_TOKEN_ID',
});

// Get person basic data - just pass the CPF!
const person = await api.pessoas.basicData('12345678901');

// Get company data - just pass the CNPJ!
const company = await api.empresas.basicData('12345678000199');

// Get person addresses - use addresses_extended dataset
const addresses = await api.pessoas.addressesExtended('12345678901');
```

## Configuration

```typescript
import { BigDataCorp, BigDataCorpConfig } from 'bigdatacorp-client';

const config: BigDataCorpConfig = {
  accessToken: 'YOUR_ACCESS_TOKEN',  // Required
  tokenId: 'YOUR_TOKEN_ID',          // Required
  baseUrl: 'https://custom.url',     // Optional, defaults to BigDataCorp platform
  timeout: 60000,                    // Optional, request timeout in ms (default: 30000)
  maxRetries: 5,                     // Optional, retry attempts (default: 3)
  headers: {                         // Optional, custom headers
    'X-Custom-Header': 'value'
  }
};

const api = new BigDataCorp(config);
```

## Available Resources

The client provides access to all BigDataCorp API domains:

### Data Enrichment

- `api.pessoas` - Person data (CPF-based queries)
- `api.empresas` - Company data (CNPJ-based queries)
- `api.veiculos` - Vehicle data
- `api.processos` - Legal process data
- `api.produtos` - Product data

### Services

- `api.batch` - Batch processing operations
- `api.ondemand` - On-demand data retrieval (government sources)
- `api.marketplace` - Partner marketplace data
- `api.monitoramento` - Monitoring subscriptions

### Configuration & Management

- `api.tokens` - API token management
- `api.views` - Custom view management
- `api.metadata` - Dataset metadata
- `api.hooks` - Webhook configuration
- `api.eventos` - Event queries
- `api.precos` - Pricing queries
- `api.estatisticas` - Usage statistics

## Usage Examples

### Person Data

```typescript
// Basic data - just pass the CPF!
const basicData = await api.pessoas.basicData('12345678901');

// Or use params object for more control
const basicDataWithParams = await api.pessoas.basicData({
  q: 'doc{12345678901}',
  Limit: 1,
});

// Multiple datasets in one call
const fullProfile = await api.pessoas.query('12345678901', [
  'basic_data',
  'emails_extended',
  'phones_extended',
  'addresses_extended',
]);

// Financial risk analysis
const risk = await api.pessoas.financialRisk('12345678901');

// KYC data
const kyc = await api.pessoas.kyc('12345678901');
```

### Company Data

```typescript
// Basic company data - just pass the CNPJ!
const company = await api.empresas.basicData('12345678000199');

// Company relationships and partners
const relationships = await api.empresas.relationships('12345678000199');

// Economic group analysis
const economicGroup = await api.empresas.economicGroupFull('12345678000199');

// Multiple datasets
const companyProfile = await api.empresas.query('12345678000199', [
  'basic_data',
  'relationships',
  'economic_group',
]);
```

### Batch Processing

```typescript
// Create a batch job
const job = await api.batch.saveJobDefinition({
  InputFileUrl: 'web{https://example.com/input.csv}',
  InputKeysHeader: 'Documento',
  APIName: 'people',
  Datasets: 'basic_data',
  QueryTemplate: 'doc{{0}}'
});

// Start job execution
await api.batch.startJobExecution({
  JobId: job.JobId!
});

// Check job status
const details = await api.batch.getJobDetails({
  JobId: job.JobId!
});

// List all jobs
const jobs = await api.batch.listJobs({});
```

### On-Demand Queries

```typescript
// Receita Federal status
const rfStatus = await api.ondemand.rfStatusCompany({
  q: 'doc{12345678000199}'
});

// PGFN (tax debts)
const pgfn = await api.ondemand.pgfnCompany({
  q: 'doc{12345678000199}'
});
```

### Monitoring

```typescript
// Subscribe to changes
const subscription = await api.monitoramento.subscribe({
  Document: '12345678901',
  Datasets: 'basic_data'
});

// List subscriptions
const subscriptions = await api.monitoramento.list({});
```

## Error Handling

```typescript
import {
  BigDataCorp,
  BigDataCorpError,
  AuthenticationError,
  RateLimitError,
  ValidationError,
  TimeoutError
} from 'bigdatacorp-client';

try {
  const result = await api.pessoas.basicData('12345678901');
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Invalid credentials');
  } else if (error instanceof RateLimitError) {
    console.error(`Rate limited. Retry after: ${error.retryAfter}ms`);
  } else if (error instanceof TimeoutError) {
    console.error('Request timed out');
  } else if (error instanceof ValidationError) {
    console.error(`Validation error: ${error.message}`);
  } else if (error instanceof BigDataCorpError) {
    console.error(`API error: ${error.message} (${error.statusCode})`);
  }
}
```

## Request Options

Override configuration per request:

```typescript
// Custom timeout
const result = await api.pessoas.basicData('12345678901', {
  timeout: 60000
});

// Abort signal for cancellation
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);

const result = await api.pessoas.basicData('12345678901', {
  signal: controller.signal
});

// Custom headers
const result = await api.pessoas.basicData('12345678901', {
  headers: { 'X-Request-Id': 'custom-id' }
});
```

## Utility Functions

The package includes Brazilian document validation utilities:

```typescript
import {
  isValidCPF,
  isValidCNPJ,
  formatCPF,
  formatCNPJ,
  cleanDocument
} from 'bigdatacorp-client';

// Validate documents
isValidCPF('123.456.789-09');     // true/false
isValidCNPJ('12.345.678/0001-99'); // true/false

// Format documents
formatCPF('12345678909');         // '123.456.789-09'
formatCNPJ('12345678000199');     // '12.345.678/0001-99'

// Remove formatting
cleanDocument('123.456.789-09');  // '12345678909'
```

## TypeScript Support

Full TypeScript support with typed request/response interfaces:

```typescript
import { BigDataCorp, Types } from 'bigdatacorp-client';

const api = new BigDataCorp({
  accessToken: 'YOUR_ACCESS_TOKEN',
  tokenId: 'YOUR_TOKEN_ID',
});

// Types are namespaced by domain
const request: Types.Pessoas.BasicDataRequest = {
  q: 'doc{12345678901}',
  Limit: 1,
};

const response = await api.pessoas.basicData(request);
// response is typed as Types.Pessoas.BasicDataResponse
```

## Requirements

- Node.js 18.0.0 or higher
- TypeScript 5.0 or higher (for TypeScript users)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you find this project helpful, please give it a star on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/lobobruno/bigdatacorp-client?style=social)](https://github.com/lobobruno/bigdatacorp-client)

## Author

**Bruno Lobo**

[![GitHub](https://img.shields.io/badge/GitHub-@lobobruno-181717?style=flat&logo=github&logoColor=white)](https://github.com/lobobruno)
[![X (Twitter)](https://img.shields.io/badge/X-@brunowlf-000000?style=flat&logo=x&logoColor=white)](https://x.com/brunowlf)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with :heart: in [Brazil](https://github.com/lobobruno)
