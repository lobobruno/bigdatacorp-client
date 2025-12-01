// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: hooks
// Operations: 3

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/hooks.types"

export class HooksResource extends BaseResource {
	/**
	 * Obter Metadado
	 */
	async metadata(
		params: Types.MetadataRequest,
		options?: RequestOptions,
	): Promise<Types.MetadataResponse> {
		return this.http.post<Types.MetadataResponse, Types.MetadataRequest>(
			"/chamadasassincronas/obterMetadado",
			params,
			options,
		)
	}

	/**
	 * Estatísticas de Envios
	 */
	async status(
		params: Types.StatusRequest,
		options?: RequestOptions,
	): Promise<Types.StatusResponse> {
		return this.http.post<Types.StatusResponse, Types.StatusRequest>(
			"/chamadasassincronas/status",
			params,
			options,
		)
	}

	/**
	 * Requisição
	 */
	async query(
		params: Types.QueryRequest,
		options?: RequestOptions,
	): Promise<Types.QueryResponse> {
		return this.http.post<Types.QueryResponse, Types.QueryRequest>(
			"/chamadasassincronas/",
			params,
			options,
		)
	}
}
