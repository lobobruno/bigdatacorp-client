// Main client
export { BigDataCorp } from "./client"

// Config types
export type { BigDataCorpConfig, RequestOptions } from "./types/config"

// Errors
export {
	BigDataCorpError,
	AuthenticationError,
	RateLimitError,
	ValidationError,
	TimeoutError,
} from "./http/errors"

// Generated types (request/response) - namespaced to avoid conflicts
export { Types } from "./types/generated"

// Utility functions
export {
	isValidCPF,
	isValidCNPJ,
	formatCPF,
	formatCNPJ,
	cleanDocument,
} from "./utils/validators"

// Default export
export { BigDataCorp as default } from "./client"
