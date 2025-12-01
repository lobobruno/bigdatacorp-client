import type { MetadataDataset, StatusItem } from "../responses.types"

export interface DatasetsRequest {
	/** API escolhida pra consulta. */
	Api?: string
	/** Datasets escolhidos pra consulta. */
	Datasets?: string
}

export interface DatasetsResponse {
	Datasets?: {
		"PT-BR"?: Record<string, Record<string, MetadataDataset>>
	}
	AnyDatasetsNotFound?: boolean
	DatasetsNotFound?: string[]
	AnyApisNotFound?: boolean
	ApisNotFound?: string[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
}

export interface DefinitionsRequest {
	/** API escolhida pra consulta. */
	Api?: string
	/** Datasets escolhidos pra consulta. */
	Datasets?: string
}

export interface DefinitionsResponse {
	Datasets?: Record<string, unknown>
	AnyDatasetsNotFound?: boolean
	DatasetsNotFound?: string[]
	AnyApisNotFound?: boolean
	ApisNotFound?: string[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
}
