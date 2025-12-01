// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: veiculos
// Operations: 1

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/veiculos.types"

export class VeiculosResource extends BaseResource {
	/**
	 * Dados de Placa de Veículo
	 * @param docOrParams - Placa string (e.g., 'ABC1234') or params object
	 * @example
	 * // Using Placa directly
	 * await api.veiculos.licensePlates('ABC1234');
	 * // Or using params object
	 * await api.veiculos.licensePlates({ q: 'license_plate{ABC1234}' });
	 * @dataset license_plates
	 */
	async licensePlates(
		docOrParams: string | Types.LicensePlatesRequest,
		options?: RequestOptions,
	): Promise<Types.LicensePlatesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `license_plate{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.LicensePlatesResponse,
			Types.LicensePlatesRequest & { Datasets: string }
		>("/veiculos", { ...params, Datasets: "license_plates" }, options)
	}

	/**
	 * Query multiple datasets at once
	 * @param doc - Placa string (e.g., 'ABC1234')
	 * @param datasets - Array of dataset names to query
	 * @example
	 * // Query basic_data and emails
	 * await api.veiculos.query('ABC1234', ['basic_data', 'emails']);
	 */
	async query(
		doc: string,
		datasets: string[],
		options?: RequestOptions,
	): Promise<unknown> {
		return this.http.post<unknown, { q: string; Datasets: string }>(
			"/veiculos",
			{ q: `license_plate{${doc}}`, Datasets: datasets.join(",") },
			options,
		)
	}
}
