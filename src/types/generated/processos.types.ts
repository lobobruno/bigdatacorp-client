import type { Evidences, StatusItem } from "../responses.types"

export interface BasicDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface BasicDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CadeProcessesDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CadeProcessesDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}
