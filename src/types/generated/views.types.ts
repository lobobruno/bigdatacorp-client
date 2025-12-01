import type { Evidences, StatusItem } from "../responses.types"

export interface AddRequest {
	Api?: string
	Datasets?: string
	View?: string
	Q?: string
	Locale?: string
	QueryId?: string
	Scope?: string
}

export interface AddResponse {
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
	DatasetDetails?: Record<string, unknown>
	Views?: unknown[]
}

export interface DeleteRequest {
	Api?: string
	Datasets?: string
	View?: string
	Q?: string
	Locale?: string
	QueryId?: string
	Scope?: string
}

export interface DeleteResponse {
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
	DatasetDetails?: Record<string, unknown>
	Views?: unknown[]
}

export interface DetailsRequest {
	Api?: string
	Datasets?: string
	View?: string
	Q?: string
	Locale?: string
	QueryId?: string
	Scope?: string
}

export interface DetailsResponse {
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
	DatasetDetails?: Record<string, unknown>
	Views?: unknown[]
}

export interface UpdateRequest {
	Api?: string
	Datasets?: string
	View?: string
	Q?: string
	Locale?: string
	QueryId?: string
	Scope?: string
}

export interface UpdateResponse {
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
	DatasetDetails?: Record<string, unknown>
	Views?: unknown[]
}
