// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: views
// Operations: 4

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/views.types"

export class ViewsResource extends BaseResource {
	/**
	 * Adicionar
	 */
	async add(
		params: Types.AddRequest,
		options?: RequestOptions,
	): Promise<Types.AddResponse> {
		return this.http.post<Types.AddResponse, Types.AddRequest>(
			"/views/adicionar",
			params,
			options,
		)
	}

	/**
	 * Deletar
	 */
	async delete(
		params: Types.DeleteRequest,
		options?: RequestOptions,
	): Promise<Types.DeleteResponse> {
		return this.http.post<Types.DeleteResponse, Types.DeleteRequest>(
			"/views/deletar",
			params,
			options,
		)
	}

	/**
	 * Obter Detalhes
	 */
	async details(
		params: Types.DetailsRequest,
		options?: RequestOptions,
	): Promise<Types.DetailsResponse> {
		return this.http.post<Types.DetailsResponse, Types.DetailsRequest>(
			"/views/obterDetalhes",
			params,
			options,
		)
	}

	/**
	 * Atualizar
	 */
	async update(
		params: Types.UpdateRequest,
		options?: RequestOptions,
	): Promise<Types.UpdateResponse> {
		return this.http.post<Types.UpdateResponse, Types.UpdateRequest>(
			"/views/atualizar",
			params,
			options,
		)
	}
}
