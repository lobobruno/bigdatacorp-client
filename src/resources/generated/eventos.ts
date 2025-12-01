// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: eventos
// Operations: 1

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/eventos.types"

export class EventosResource extends BaseResource {
	/**
	 * Requisição
	 */
	async query(
		params: Types.QueryRequest,
		options?: RequestOptions,
	): Promise<Types.QueryResponse> {
		return this.http.post<Types.QueryResponse, Types.QueryRequest>(
			"/log/",
			params,
			options,
		)
	}
}
