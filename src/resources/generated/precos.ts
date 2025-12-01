// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: precos
// Operations: 1

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/precos.types"

export class PrecosResource extends BaseResource {
	/**
	 * Requisição
	 */
	async query(
		params: Types.QueryRequest,
		options?: RequestOptions,
	): Promise<Types.QueryResponse> {
		return this.http.post<Types.QueryResponse, Types.QueryRequest>(
			"/precos/",
			params,
			options,
		)
	}
}
