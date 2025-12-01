export interface DeUsoQueryRequest {
	/** API escolhida pra consulta. */
	Api?: string
	/** Datasets escolhidos pra consulta. */
	Datasets?: string
	/** Data de inicio da contagem. */
	InitialReferenceDate?: string
	/** Data de fim da contagem. */
	FinalReferenceDate?: string
	/** Formato de data para as datas enviadas. */
	DateFormat?: string
}

export interface DeUsoQueryResponse {
	UsageData?: Record<string, unknown>
	QueryId?: string
	Status?: Record<string, unknown>
}
