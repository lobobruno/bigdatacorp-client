// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: produtos
// Operations: 7

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/produtos.types"

export class ProdutosResource extends BaseResource {
	/**
	 * Dados de Disponibilidade
	 * @param docOrParams - Código string (e.g., '7891234567890') or params object
	 * @example
	 * // Using Código directly
	 * await api.produtos.availabilityData('7891234567890');
	 * // Or using params object
	 * await api.produtos.availabilityData({ q: 'doc{7891234567890}' });
	 * @dataset availability_data
	 */
	async availabilityData(
		docOrParams: string | Types.AvailabilityDataRequest,
		options?: RequestOptions,
	): Promise<Types.AvailabilityDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.AvailabilityDataResponse,
			Types.AvailabilityDataRequest & { Datasets: string }
		>("/produtos", { ...params, Datasets: "availability_data" }, options)
	}

	/**
	 * Dados de Cadastro e Categorização
	 * @param docOrParams - Código string (e.g., '7891234567890') or params object
	 * @example
	 * // Using Código directly
	 * await api.produtos.basicData('7891234567890');
	 * // Or using params object
	 * await api.produtos.basicData({ q: 'doc{7891234567890}' });
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
		>("/produtos", { ...params, Datasets: "basic_data" }, options)
	}

	/**
	 * Dados Extras
	 * @param docOrParams - Código string (e.g., '7891234567890') or params object
	 * @example
	 * // Using Código directly
	 * await api.produtos.extraInfoData('7891234567890');
	 * // Or using params object
	 * await api.produtos.extraInfoData({ q: 'doc{7891234567890}' });
	 * @dataset extra_info_data
	 */
	async extraInfoData(
		docOrParams: string | Types.ExtraInfoDataRequest,
		options?: RequestOptions,
	): Promise<Types.ExtraInfoDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ExtraInfoDataResponse,
			Types.ExtraInfoDataRequest & { Datasets: string }
		>("/produtos", { ...params, Datasets: "extra_info_data" }, options)
	}

	/**
	 * Dados de Imagens
	 * @param docOrParams - Código string (e.g., '7891234567890') or params object
	 * @example
	 * // Using Código directly
	 * await api.produtos.imagesData('7891234567890');
	 * // Or using params object
	 * await api.produtos.imagesData({ q: 'doc{7891234567890}' });
	 * @dataset images_data
	 */
	async imagesData(
		docOrParams: string | Types.ImagesDataRequest,
		options?: RequestOptions,
	): Promise<Types.ImagesDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ImagesDataResponse,
			Types.ImagesDataRequest & { Datasets: string }
		>("/produtos", { ...params, Datasets: "images_data" }, options)
	}

	/**
	 * Dados de Precificação
	 * @param docOrParams - Código string (e.g., '7891234567890') or params object
	 * @example
	 * // Using Código directly
	 * await api.produtos.priceData('7891234567890');
	 * // Or using params object
	 * await api.produtos.priceData({ q: 'doc{7891234567890}' });
	 * @dataset price_data
	 */
	async priceData(
		docOrParams: string | Types.PriceDataRequest,
		options?: RequestOptions,
	): Promise<Types.PriceDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.PriceDataResponse,
			Types.PriceDataRequest & { Datasets: string }
		>("/produtos", { ...params, Datasets: "price_data" }, options)
	}

	/**
	 * Dados de Produtos Relacionados
	 * @param docOrParams - Código string (e.g., '7891234567890') or params object
	 * @example
	 * // Using Código directly
	 * await api.produtos.relatedProductData('7891234567890');
	 * // Or using params object
	 * await api.produtos.relatedProductData({ q: 'doc{7891234567890}' });
	 * @dataset related_product_data
	 */
	async relatedProductData(
		docOrParams: string | Types.RelatedProductDataRequest,
		options?: RequestOptions,
	): Promise<Types.RelatedProductDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.RelatedProductDataResponse,
			Types.RelatedProductDataRequest & { Datasets: string }
		>("/produtos", { ...params, Datasets: "related_product_data" }, options)
	}

	/**
	 * Dados de Avaliações
	 * @param docOrParams - Código string (e.g., '7891234567890') or params object
	 * @example
	 * // Using Código directly
	 * await api.produtos.reviewData('7891234567890');
	 * // Or using params object
	 * await api.produtos.reviewData({ q: 'doc{7891234567890}' });
	 * @dataset review_data
	 */
	async reviewData(
		docOrParams: string | Types.ReviewDataRequest,
		options?: RequestOptions,
	): Promise<Types.ReviewDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ReviewDataResponse,
			Types.ReviewDataRequest & { Datasets: string }
		>("/produtos", { ...params, Datasets: "review_data" }, options)
	}

	/**
	 * Query multiple datasets at once
	 * @param doc - Código string (e.g., '7891234567890')
	 * @param datasets - Array of dataset names to query
	 * @example
	 * // Query basic_data and emails
	 * await api.produtos.query('7891234567890', ['basic_data', 'emails']);
	 */
	async query(
		doc: string,
		datasets: string[],
		options?: RequestOptions,
	): Promise<unknown> {
		return this.http.post<unknown, { q: string; Datasets: string }>(
			"/produtos",
			{ q: `doc{${doc}}`, Datasets: datasets.join(",") },
			options,
		)
	}
}
