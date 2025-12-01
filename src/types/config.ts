export interface BigDataCorpConfig {
	/** Access Token for authentication (required) */
	accessToken: string

	/** Token ID for authentication (required) */
	tokenId: string

	/** Base URL (default: https://plataforma.bigdatacorp.com.br) */
	baseUrl?: string

	/** Request timeout in ms (default: 30000) */
	timeout?: number

	/** Max retry attempts (default: 3) */
	maxRetries?: number

	/** Custom headers to include in all requests */
	headers?: Record<string, string>
}

export interface RequestOptions {
	/** Override timeout for this request */
	timeout?: number

	/** Additional headers */
	headers?: Record<string, string>

	/** Abort signal for cancellation */
	signal?: AbortSignal
}
