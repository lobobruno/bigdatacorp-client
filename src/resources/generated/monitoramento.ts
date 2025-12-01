// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: monitoramento
// Operations: 9

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/monitoramento.types"

export class MonitoramentoResource extends BaseResource {
	/**
	 * Listar Inscrições
	 */
	async list(
		params: Types.ListRequest,
		options?: RequestOptions,
	): Promise<Types.ListResponse> {
		return this.http.post<Types.ListResponse, Types.ListRequest>(
			"/monitoramento/listar",
			params,
			options,
		)
	}

	/**
	 * Habilitar Monitoramento
	 */
	async subscribe(
		params: Types.SubscribeRequest,
		options?: RequestOptions,
	): Promise<Types.SubscribeResponse> {
		return this.http.post<Types.SubscribeResponse, Types.SubscribeRequest>(
			"/monitoramento/monitorar",
			params,
			options,
		)
	}

	/**
	 * Desabilitar Monitoramento
	 */
	async unsubscribe(
		params: Types.UnsubscribeRequest,
		options?: RequestOptions,
	): Promise<Types.UnsubscribeResponse> {
		return this.http.post<Types.UnsubscribeResponse, Types.UnsubscribeRequest>(
			"/monitoramento/desabilitar",
			params,
			options,
		)
	}

	/**
	 * Diferenças de Monitoramento
	 */
	async diffExplainer(
		params: Types.DiffExplainerRequest,
		options?: RequestOptions,
	): Promise<Types.DiffExplainerResponse> {
		return this.http.post<
			Types.DiffExplainerResponse,
			Types.DiffExplainerRequest
		>("/monitoramento/diferencas", params, options)
	}

	/**
	 * Configurar Usuário
	 */
	async setUserSettings(
		params: Types.SetUserSettingsRequest,
		options?: RequestOptions,
	): Promise<Types.SetUserSettingsResponse> {
		return this.http.post<
			Types.SetUserSettingsResponse,
			Types.SetUserSettingsRequest
		>("/monitoramento/definirUsuario", params, options)
	}

	/**
	 * Detalhes de Monitoramento
	 */
	async details(
		params: Types.DetailsRequest,
		options?: RequestOptions,
	): Promise<Types.DetailsResponse> {
		return this.http.post<Types.DetailsResponse, Types.DetailsRequest>(
			"/monitoramento/detalhes",
			params,
			options,
		)
	}

	/**
	 * Atualizar Monitoramento
	 */
	async update(
		params: Types.UpdateRequest,
		options?: RequestOptions,
	): Promise<Types.UpdateResponse> {
		return this.http.post<Types.UpdateResponse, Types.UpdateRequest>(
			"/monitoramento/atualizar",
			params,
			options,
		)
	}

	/**
	 * Histórico de Monitoramento
	 */
	async report(
		params: Types.ReportRequest,
		options?: RequestOptions,
	): Promise<Types.ReportResponse> {
		return this.http.post<Types.ReportResponse, Types.ReportRequest>(
			"/monitoramento/relatorio",
			params,
			options,
		)
	}

	/**
	 * Teste de Monitoramento
	 */
	async test(
		params: Types.TestRequest,
		options?: RequestOptions,
	): Promise<Types.TestResponse> {
		return this.http.post<Types.TestResponse, Types.TestRequest>(
			"/monitoramento/teste",
			params,
			options,
		)
	}
}
