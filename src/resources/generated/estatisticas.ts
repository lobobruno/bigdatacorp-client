// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: estatisticas
// Operations: 1

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/estatisticas.types"

export class EstatisticasResource extends BaseResource {
	/**
	 * Requisição
	 */
	async deUsoQuery(
		params: Types.DeUsoQueryRequest,
		options?: RequestOptions,
	): Promise<Types.DeUsoQueryResponse> {
		return this.http.post<Types.DeUsoQueryResponse, Types.DeUsoQueryRequest>(
			"/estatisticas/",
			params,
			options,
		)
	}
}
