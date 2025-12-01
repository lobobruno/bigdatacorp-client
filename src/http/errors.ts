export class BigDataCorpError extends Error {
	constructor(
		message: string,
		public readonly statusCode?: number,
		public readonly code?: string,
	) {
		super(message)
		this.name = "BigDataCorpError"
		Object.setPrototypeOf(this, BigDataCorpError.prototype)
	}
}

export class AuthenticationError extends BigDataCorpError {
	constructor(message = "Authentication failed") {
		super(message, 401, "AUTHENTICATION_ERROR")
		this.name = "AuthenticationError"
		Object.setPrototypeOf(this, AuthenticationError.prototype)
	}
}

export class RateLimitError extends BigDataCorpError {
	constructor(
		message = "Rate limit exceeded",
		public readonly retryAfter?: number,
	) {
		super(message, 429, "RATE_LIMIT_ERROR")
		this.name = "RateLimitError"
		Object.setPrototypeOf(this, RateLimitError.prototype)
	}
}

export class ValidationError extends BigDataCorpError {
	constructor(
		message: string,
		public readonly field?: string,
	) {
		super(message, 400, "VALIDATION_ERROR")
		this.name = "ValidationError"
		Object.setPrototypeOf(this, ValidationError.prototype)
	}
}

export class TimeoutError extends BigDataCorpError {
	constructor(message = "Request timeout") {
		super(message, undefined, "TIMEOUT_ERROR")
		this.name = "TimeoutError"
		Object.setPrototypeOf(this, TimeoutError.prototype)
	}
}
