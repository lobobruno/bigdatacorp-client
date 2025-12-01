import type { Evidences, StatusItem } from "../responses.types"

export interface MetadataRequest {
	/** QueryId da chamada de hooks. */
	QueryId: string
}

export interface MetadataResponse {
	Result?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface StatusRequest {
	/** Opcional. Define o escopo da busca. Se true, a busca é pelo Domínio do usuário. Se false (padrão), a busca é pelo Usuário (login). */
	SearchByDomain?: boolean
	/** Opcional. Filtra as métricas de dataset para um ou mais nomes específicos, separados por vírgula. */
	Datasets?: string
}

export interface StatusResponse {
	Result?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface QueryRequest {
	/** API escolhida pra consulta. */
	Api: string
	/** Datasets escolhidos pra consulta. */
	Datasets: string
	/** Parametros de entrada escolhidos pra consulta. */
	Q: string
	/** Parametros de callback de Hooks. */
	Hooks: string
}

export interface QueryResponse {
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}
