// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: processos
// Operations: 2

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/processos.types"

export class ProcessosResource extends BaseResource {
	/**
	 * Dados Básicos de Processos Judiciais
	 * @param docOrParams - Número do Processo string (e.g., '00000000000000000000') or params object
	 * @example
	 * // Using Número do Processo directly
	 * await api.processos.basicData('00000000000000000000');
	 * // Or using params object
	 * await api.processos.basicData({ q: 'doc{00000000000000000000}' });
	 * @dataset basic_data
	 */
	async basicData(
		docOrParams: string | Types.BasicDataRequest,
		options?: RequestOptions,
	): Promise<Types.BasicDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.BasicDataResponse,
			Types.BasicDataRequest & { Datasets: string }
		>("/processos", { ...params, Datasets: "basic_data" }, options)
	}

	/**
	 * Dados de Processos do CADE
	 * @param docOrParams - Número do Processo string (e.g., '00000000000000000000') or params object
	 * @example
	 * // Using Número do Processo directly
	 * await api.processos.cadeProcessesData('00000000000000000000');
	 * // Or using params object
	 * await api.processos.cadeProcessesData({ q: 'doc{00000000000000000000}' });
	 * @dataset cade_processes_data
	 */
	async cadeProcessesData(
		docOrParams: string | Types.CadeProcessesDataRequest,
		options?: RequestOptions,
	): Promise<Types.CadeProcessesDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CadeProcessesDataResponse,
			Types.CadeProcessesDataRequest & { Datasets: string }
		>("/processos", { ...params, Datasets: "cade_processes_data" }, options)
	}

	/**
	 * Query multiple datasets at once
	 * @param doc - Número do Processo string (e.g., '00000000000000000000')
	 * @param datasets - Array of dataset names to query
	 * @example
	 * // Query basic_data and emails
	 * await api.processos.query('00000000000000000000', ['basic_data', 'emails']);
	 */
	async query(
		doc: string,
		datasets: string[],
		options?: RequestOptions,
	): Promise<unknown> {
		return this.http.post<unknown, { q: string; Datasets: string }>(
			"/processos",
			{ q: `doc{${doc}}`, Datasets: datasets.join(",") },
			options,
		)
	}
}
