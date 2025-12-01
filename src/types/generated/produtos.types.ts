import type { Evidences, StatusItem } from "../responses.types"

export interface AvailabilityDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface AvailabilityDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

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

export interface ExtraInfoDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ExtraInfoDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface ImagesDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ImagesDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PriceDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PriceDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RelatedProductDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RelatedProductDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface ReviewDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ReviewDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}
