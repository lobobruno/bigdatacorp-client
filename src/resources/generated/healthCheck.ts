// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: healthCheck
// Operations: 4

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/healthCheck.types"

export class HealthCheckResource extends BaseResource {
	/**
	 * Health Check - Empresas
	 */
	async empresas(
		params: Types.EmpresasRequest,
		options?: RequestOptions,
	): Promise<Types.EmpresasResponse> {
		return this.http.post<Types.EmpresasResponse, Types.EmpresasRequest>(
			"/empresas",
			params,
			options,
		)
	}

	/**
	 * Health Check - Pessoas
	 */
	async pessoas(
		params: Types.PessoasRequest,
		options?: RequestOptions,
	): Promise<Types.PessoasResponse> {
		return this.http.post<Types.PessoasResponse, Types.PessoasRequest>(
			"/pessoas",
			params,
			options,
		)
	}
}
