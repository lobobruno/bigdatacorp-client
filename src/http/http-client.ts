import type { BigDataCorpConfig, RequestOptions } from "../types/config"
import {
	AuthenticationError,
	BigDataCorpError,
	RateLimitError,
	TimeoutError,
} from "./errors"

const VERSION = "1.0.0"

export class HttpClient {
	private readonly baseUrl: string
	private readonly accessToken: string
	private readonly tokenId: string
	private readonly timeout: number
	private readonly maxRetries: number
	private readonly defaultHeaders: Record<string, string>

	constructor(config: BigDataCorpConfig) {
		this.baseUrl = (
			config.baseUrl ?? "https://plataforma.bigdatacorp.com.br"
		).replace(/\/$/, "")
		this.accessToken = config.accessToken
		this.tokenId = config.tokenId
		this.timeout = config.timeout ?? 30000
		this.maxRetries = config.maxRetries ?? 3
		this.defaultHeaders = config.headers ?? {}
	}

	async post<T, B extends object = Record<string, unknown>>(
		path: string,
		body: B,
		options?: RequestOptions,
	): Promise<T> {
		return this.request<T>("POST", path, body, options)
	}

	async get<T>(path: string, options?: RequestOptions): Promise<T> {
		return this.request<T>("GET", path, undefined, options)
	}

	async put<T, B extends object = Record<string, unknown>>(
		path: string,
		body: B,
		options?: RequestOptions,
	): Promise<T> {
		return this.request<T>("PUT", path, body, options)
	}

	async delete<T>(path: string, options?: RequestOptions): Promise<T> {
		return this.request<T>("DELETE", path, undefined, options)
	}

	private async request<T>(
		method: string,
		path: string,
		body?: object,
		options?: RequestOptions,
	): Promise<T> {
		const url = `${this.baseUrl}${path}`
		const timeout = options?.timeout ?? this.timeout

		const headers: Record<string, string> = {
			"Content-Type": "application/json",
			Accept: "application/json",
			AccessToken: this.accessToken,
			TokenId: this.tokenId,
			"User-Agent": `bigdatacorp-node/${VERSION}`,
			...this.defaultHeaders,
			...options?.headers,
		}

		let lastError: Error | undefined

		for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
			const controller = new AbortController()
			const timeoutId = setTimeout(() => controller.abort(), timeout)

			try {
				const response = await fetch(url, {
					method,
					headers,
					body: body ? JSON.stringify(body) : undefined,
					signal: options?.signal ?? controller.signal,
				})

				clearTimeout(timeoutId)

				if (!response.ok) {
					const error = await this.handleErrorResponse(response)

					// Retry on rate limit or server errors
					if (
						(response.status === 429 || response.status >= 500) &&
						attempt < this.maxRetries
					) {
						lastError = error
						await this.sleep(this.getRetryDelay(attempt, response))
						continue
					}

					throw error
				}

				const text = await response.text()
				if (!text) {
					return {} as T
				}
				return JSON.parse(text) as T
			} catch (error) {
				clearTimeout(timeoutId)

				if (error instanceof BigDataCorpError) {
					throw error
				}

				if (error instanceof Error && error.name === "AbortError") {
					if (options?.signal?.aborted) {
						throw new BigDataCorpError("Request aborted", undefined, "ABORTED")
					}
					throw new TimeoutError(`Request timeout after ${timeout}ms`)
				}

				lastError = error as Error

				if (attempt < this.maxRetries && this.isRetryable(error)) {
					await this.sleep(this.getRetryDelay(attempt))
					continue
				}

				throw new BigDataCorpError(
					error instanceof Error ? error.message : "Unknown error",
					undefined,
					"REQUEST_FAILED",
				)
			}
		}

		throw (
			lastError ??
			new BigDataCorpError("Request failed", undefined, "REQUEST_FAILED")
		)
	}

	private async handleErrorResponse(
		response: Response,
	): Promise<BigDataCorpError> {
		let message = `HTTP ${response.status}`
		let errorBody: Record<string, unknown> | undefined

		try {
			const text = await response.text()
			if (text) {
				errorBody = JSON.parse(text)
				message =
					(errorBody?.message as string) ||
					(errorBody?.error as string) ||
					(errorBody?.Message as string) ||
					(errorBody?.StatusMessage as string) ||
					message
			}
		} catch {
			// Ignore JSON parse errors
		}

		switch (response.status) {
			case 401:
			case 403:
				return new AuthenticationError(message)
			case 429: {
				const retryAfter = response.headers.get("Retry-After")
				const retryMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : undefined
				return new RateLimitError(message, retryMs)
			}
			default:
				return new BigDataCorpError(message, response.status)
		}
	}

	private getRetryDelay(attempt: number, response?: Response): number {
		const retryAfter = response?.headers.get("Retry-After")
		if (retryAfter) {
			const seconds = parseInt(retryAfter, 10)
			if (!Number.isNaN(seconds)) return seconds * 1000
		}
		// Exponential backoff: 1s, 2s, 4s, 8s... max 30s
		return Math.min(1000 * 2 ** attempt, 30000)
	}

	private isRetryable(error: unknown): boolean {
		if (error instanceof Error) {
			const message = error.message.toLowerCase()
			return (
				error.name === "AbortError" ||
				message.includes("network") ||
				message.includes("econnreset") ||
				message.includes("econnrefused") ||
				message.includes("etimedout") ||
				message.includes("socket hang up")
			)
		}
		return false
	}

	private sleep(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}
}
