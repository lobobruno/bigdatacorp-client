export interface QueryRequest {
	/** Parametro usado na chamada */
	Q?: string
	/** QueryId da chamada retornada */
	QueryId?: string
	/** Tags utilizadas na chamada */
	Tags?: Record<string, unknown>
	/** Data de consulta */
	QueryDate?: string
	/** Formato de Data de consulta */
	DateFormat?: string
	/** Cursor de paginação */
	Cursor?: string
	/** Tamanho da página */
	PageSize?: number
}

export interface QueryResponse {
	Result?: unknown[]
	Status?: Record<string, unknown>
	Cursor?: string
}
