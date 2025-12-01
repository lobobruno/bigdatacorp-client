// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: metadata
// Operations: 2

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/metadata.types"

export class MetadataResource extends BaseResource {
	/**
	 * Datasets
	 */
	async datasets(
		params: Types.DatasetsRequest,
		options?: RequestOptions,
	): Promise<Types.DatasetsResponse> {
		return this.http.post<Types.DatasetsResponse, Types.DatasetsRequest>(
			"/metadados/datasets",
			params,
			options,
		)
	}

	/**
	 * Definições De Datasets
	 */
	async definitions(
		params: Types.DefinitionsRequest,
		options?: RequestOptions,
	): Promise<Types.DefinitionsResponse> {
		return this.http.post<Types.DefinitionsResponse, Types.DefinitionsRequest>(
			"/metadados/definicoes",
			params,
			options,
		)
	}
}
