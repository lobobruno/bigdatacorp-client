// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: tokens
// Operations: 4

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/tokens.types"

export class TokensResource extends BaseResource {
	/**
	 * Gerar
	 */
	async generate(
		params: Types.GenerateRequest,
		options?: RequestOptions,
	): Promise<Types.GenerateResponse> {
		return this.http.post<Types.GenerateResponse, Types.GenerateRequest>(
			"/tokens/gerar",
			params,
			options,
		)
	}

	/**
	 * Desabilitar
	 */
	async disable(
		params: Types.DisableRequest,
		options?: RequestOptions,
	): Promise<Types.DisableResponse> {
		return this.http.post<Types.DisableResponse, Types.DisableRequest>(
			"/tokens/desabilitar",
			params,
			options,
		)
	}

	/**
	 * Desabilitar Por ID
	 */
	async disableById(
		params: Types.DisableByIdRequest,
		options?: RequestOptions,
	): Promise<Types.DisableByIdResponse> {
		return this.http.post<Types.DisableByIdResponse, Types.DisableByIdRequest>(
			"/tokens/desabilitarPorId",
			params,
			options,
		)
	}

	/**
	 * Obter Token IDs Ativos
	 */
	async getactivetokenids(
		params: Types.GetactivetokenidsRequest,
		options?: RequestOptions,
	): Promise<Types.GetactivetokenidsResponse> {
		return this.http.post<
			Types.GetactivetokenidsResponse,
			Types.GetactivetokenidsRequest
		>("/tokens/obterTokenIdsAtivos", params, options)
	}
}
