export interface QueryRequest {
	/** API escolhida pra consulta. */
	API: string
	/** Datasets escolhidos pra consulta. */
	Datasets: string
	/** Quantidade de consultas realizada */
	Quantity?: string
}

export interface QueryResponse {
	Datasets?: Record<string, unknown>
	AnyDatasetsNotFound?: boolean
	DatasetsNotFound?: unknown[]
	AnyApisNotFound?: boolean
	ApisNotFound?: unknown[]
	QueryId?: string
	QueryDate?: string
	Status?: Record<string, unknown>
	ElapsedTime?: number
	ErrorMessage?: string
}
