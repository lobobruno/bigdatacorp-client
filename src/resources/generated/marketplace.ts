// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: marketplace
// Operations: 36

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/marketplace.types"

export class MarketplaceResource extends BaseResource {
	/**
	 * Acelerador de Vendas B2e
	 */
	async partnerB2eScorePerson(
		params: Types.PartnerB2eScorePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerB2eScorePersonResponse> {
		return this.http.post<
			Types.PartnerB2eScorePersonResponse,
			Types.PartnerB2eScorePersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Status de Opt-In de Contatos
	 */
	async partnerB4bOptinContactPerson(
		params: Types.PartnerB4bOptinContactPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerB4bOptinContactPersonResponse> {
		return this.http.post<
			Types.PartnerB4bOptinContactPersonResponse,
			Types.PartnerB4bOptinContactPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados sobre status de entrega de SMS
	 */
	async partnerBlu365PhoneReportDataPerson(
		params: Types.PartnerBlu365PhoneReportDataPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerBlu365PhoneReportDataPersonResponse> {
		return this.http.post<
			Types.PartnerBlu365PhoneReportDataPersonResponse,
			Types.PartnerBlu365PhoneReportDataPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Modelo de Score de Telefone
	 */
	async partnerBlu365PhoneScoreDataPerson(
		params: Types.PartnerBlu365PhoneScoreDataPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerBlu365PhoneScoreDataPersonResponse> {
		return this.http.post<
			Types.PartnerBlu365PhoneScoreDataPersonResponse,
			Types.PartnerBlu365PhoneScoreDataPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados Restritivos de Crédito
	 */
	async partnerBoavistaCreditScoreCompany(
		params: Types.PartnerBoavistaCreditScoreCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerBoavistaCreditScoreCompanyResponse> {
		return this.http.post<
			Types.PartnerBoavistaCreditScoreCompanyResponse,
			Types.PartnerBoavistaCreditScoreCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados Restritivos de Crédito
	 */
	async partnerBoavistaCreditScorePerson(
		params: Types.PartnerBoavistaCreditScorePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerBoavistaCreditScorePersonResponse> {
		return this.http.post<
			Types.PartnerBoavistaCreditScorePersonResponse,
			Types.PartnerBoavistaCreditScorePersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Score Multidados de Crédito Pessoa Jurídica
	 */
	async partnerBoavistaOneScoreCompany(
		params: Types.PartnerBoavistaOneScoreCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerBoavistaOneScoreCompanyResponse> {
		return this.http.post<
			Types.PartnerBoavistaOneScoreCompanyResponse,
			Types.PartnerBoavistaOneScoreCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Score Multidados de Crédito Pessoa Física
	 */
	async partnerBoavistaOneScorePerson(
		params: Types.PartnerBoavistaOneScorePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerBoavistaOneScorePersonResponse> {
		return this.http.post<
			Types.PartnerBoavistaOneScorePersonResponse,
			Types.PartnerBoavistaOneScorePersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Percentual de Participação Societária
	 */
	async partnerBoavistaOwnerParticipationDataCompany(
		params: Types.PartnerBoavistaOwnerParticipationDataCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerBoavistaOwnerParticipationDataCompanyResponse> {
		return this.http.post<
			Types.PartnerBoavistaOwnerParticipationDataCompanyResponse,
			Types.PartnerBoavistaOwnerParticipationDataCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados de Preços de Combustível
	 */
	async partnerFuellogFuelPricingDataAddress(
		params: Types.PartnerFuellogFuelPricingDataAddressRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerFuellogFuelPricingDataAddressResponse> {
		return this.http.post<
			Types.PartnerFuellogFuelPricingDataAddressResponse,
			Types.PartnerFuellogFuelPricingDataAddressRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados de Preços de Combustível
	 */
	async partnerFuellogFuelPricingDataCompany(
		params: Types.PartnerFuellogFuelPricingDataCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerFuellogFuelPricingDataCompanyResponse> {
		return this.http.post<
			Types.PartnerFuellogFuelPricingDataCompanyResponse,
			Types.PartnerFuellogFuelPricingDataCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados de Preços de Combustível
	 */
	async partnerFuellogFuelPricingDataPerson(
		params: Types.PartnerFuellogFuelPricingDataPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerFuellogFuelPricingDataPersonResponse> {
		return this.http.post<
			Types.PartnerFuellogFuelPricingDataPersonResponse,
			Types.PartnerFuellogFuelPricingDataPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Segmentação Intraurbana Geofusion [Temporariamente Indisponível]
	 */
	async partnerGeofusionIntraurbanSegmentationCompany(
		params: Types.PartnerGeofusionIntraurbanSegmentationCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerGeofusionIntraurbanSegmentationCompanyResponse> {
		return this.http.post<
			Types.PartnerGeofusionIntraurbanSegmentationCompanyResponse,
			Types.PartnerGeofusionIntraurbanSegmentationCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados Sociodemográficos e Econômicos Geofusion [Temporariamente Indisponível]
	 */
	async partnerGeofusionSociodemographicAndEconomicDataCompany(
		params: Types.PartnerGeofusionSociodemographicAndEconomicDataCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerGeofusionSociodemographicAndEconomicDataCompanyResponse> {
		return this.http.post<
			Types.PartnerGeofusionSociodemographicAndEconomicDataCompanyResponse,
			Types.PartnerGeofusionSociodemographicAndEconomicDataCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Score Murabei de Risco de Crédito
	 */
	async partnerMurabeiCreditScoreCompany(
		params: Types.PartnerMurabeiCreditScoreCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerMurabeiCreditScoreCompanyResponse> {
		return this.http.post<
			Types.PartnerMurabeiCreditScoreCompanyResponse,
			Types.PartnerMurabeiCreditScoreCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados de Rede
	 */
	async partnerNetworkData(
		params: Types.PartnerNetworkDataRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerNetworkDataResponse> {
		return this.http.post<
			Types.PartnerNetworkDataResponse,
			Types.PartnerNetworkDataRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados de Segurança Pública
	 */
	async partnerPublicSafetyCompany(
		params: Types.PartnerPublicSafetyCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerPublicSafetyCompanyResponse> {
		return this.http.post<
			Types.PartnerPublicSafetyCompanyResponse,
			Types.PartnerPublicSafetyCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Dados de Segurança Pública
	 */
	async partnerPublicSafetyPerson(
		params: Types.PartnerPublicSafetyPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerPublicSafetyPersonResponse> {
		return this.http.post<
			Types.PartnerPublicSafetyPersonResponse,
			Types.PartnerPublicSafetyPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Score de Crédito de Pessoa Jurídica
	 */
	async partnerQuantumCustomScoreCompany(
		params: Types.PartnerQuantumCustomScoreCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuantumCustomScoreCompanyResponse> {
		return this.http.post<
			Types.PartnerQuantumCustomScoreCompanyResponse,
			Types.PartnerQuantumCustomScoreCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Score de Crédito de Pessoa Física
	 */
	async partnerQuantumCustomScorePerson(
		params: Types.PartnerQuantumCustomScorePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuantumCustomScorePersonResponse> {
		return this.http.post<
			Types.PartnerQuantumCustomScorePersonResponse,
			Types.PartnerQuantumCustomScorePersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Score de Crédito Rotativo
	 */
	async partnerQuantumScorePerson(
		params: Types.PartnerQuantumScorePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuantumScorePersonResponse> {
		return this.http.post<
			Types.PartnerQuantumScorePersonResponse,
			Types.PartnerQuantumScorePersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Módulo Flag Negativo
	 */
	async partnerQuodCreditRiskCompany(
		params: Types.PartnerQuodCreditRiskCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuodCreditRiskCompanyResponse> {
		return this.http.post<
			Types.PartnerQuodCreditRiskCompanyResponse,
			Types.PartnerQuodCreditRiskCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Módulo Detalhe Negativo
	 */
	async partnerQuodCreditRiskDetailsCompany(
		params: Types.PartnerQuodCreditRiskDetailsCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuodCreditRiskDetailsCompanyResponse> {
		return this.http.post<
			Types.PartnerQuodCreditRiskDetailsCompanyResponse,
			Types.PartnerQuodCreditRiskDetailsCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Módulo Detalhe Negativo e Consulta
	 */
	async partnerQuodCreditRiskDetailsPerson(
		params: Types.PartnerQuodCreditRiskDetailsPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuodCreditRiskDetailsPersonResponse> {
		return this.http.post<
			Types.PartnerQuodCreditRiskDetailsPersonResponse,
			Types.PartnerQuodCreditRiskDetailsPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Módulo Flag Negativo e Consulta
	 */
	async partnerQuodCreditRiskPerson(
		params: Types.PartnerQuodCreditRiskPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuodCreditRiskPersonResponse> {
		return this.http.post<
			Types.PartnerQuodCreditRiskPersonResponse,
			Types.PartnerQuodCreditRiskPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Módulo Score
	 */
	async partnerQuodCreditScoreCompany(
		params: Types.PartnerQuodCreditScoreCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuodCreditScoreCompanyResponse> {
		return this.http.post<
			Types.PartnerQuodCreditScoreCompanyResponse,
			Types.PartnerQuodCreditScoreCompanyRequest
		>("/marketplace", params, options)
	}

	/**
	 * Módulo Score
	 */
	async partnerQuodCreditScorePerson(
		params: Types.PartnerQuodCreditScorePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerQuodCreditScorePersonResponse> {
		return this.http.post<
			Types.PartnerQuodCreditScorePersonResponse,
			Types.PartnerQuodCreditScorePersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Qualificação de Imóveis da Rede Vistorias
	 */
	async partnerRedeVistoriasAddress(
		params: Types.PartnerRedeVistoriasAddressRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerRedeVistoriasAddressResponse> {
		return this.http.post<
			Types.PartnerRedeVistoriasAddressResponse,
			Types.PartnerRedeVistoriasAddressRequest
		>("/marketplace", params, options)
	}

	/**
	 * Exposição Financeira de Pessoa Jurídica
	 */
	async partnerScorepositivoCompanyFinance(
		params: Types.PartnerScorepositivoCompanyFinanceRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerScorepositivoCompanyFinanceResponse> {
		return this.http.post<
			Types.PartnerScorepositivoCompanyFinanceResponse,
			Types.PartnerScorepositivoCompanyFinanceRequest
		>("/marketplace", params, options)
	}

	/**
	 * Exposição Financeira de Pessoa Física
	 */
	async partnerScorepositivoIndividualFinance(
		params: Types.PartnerScorepositivoIndividualFinanceRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerScorepositivoIndividualFinanceResponse> {
		return this.http.post<
			Types.PartnerScorepositivoIndividualFinanceResponse,
			Types.PartnerScorepositivoIndividualFinanceRequest
		>("/marketplace", params, options)
	}

	/**
	 * Histórico de Portabilidade de Contato
	 */
	async partnerTelesignPhoneIdPortingHistoryPerson(
		params: Types.PartnerTelesignPhoneIdPortingHistoryPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerTelesignPhoneIdPortingHistoryPersonResponse> {
		return this.http.post<
			Types.PartnerTelesignPhoneIdPortingHistoryPersonResponse,
			Types.PartnerTelesignPhoneIdPortingHistoryPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Status de Portabilidade
	 */
	async partnerTelesignPhoneIdPortingStatusPerson(
		params: Types.PartnerTelesignPhoneIdPortingStatusPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerTelesignPhoneIdPortingStatusPersonResponse> {
		return this.http.post<
			Types.PartnerTelesignPhoneIdPortingStatusPersonResponse,
			Types.PartnerTelesignPhoneIdPortingStatusPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Informações de Número de Telefone
	 */
	async partnerTelesignPhoneIdStandardPerson(
		params: Types.PartnerTelesignPhoneIdStandardPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerTelesignPhoneIdStandardPersonResponse> {
		return this.http.post<
			Types.PartnerTelesignPhoneIdStandardPersonResponse,
			Types.PartnerTelesignPhoneIdStandardPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Status do Assinante
	 */
	async partnerTelesignPhoneIdSubscriberStatusPerson(
		params: Types.PartnerTelesignPhoneIdSubscriberStatusPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerTelesignPhoneIdSubscriberStatusPersonResponse> {
		return this.http.post<
			Types.PartnerTelesignPhoneIdSubscriberStatusPersonResponse,
			Types.PartnerTelesignPhoneIdSubscriberStatusPersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Score de Risco de Telefone
	 */
	async partnerTelesignPhoneScorePerson(
		params: Types.PartnerTelesignPhoneScorePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerTelesignPhoneScorePersonResponse> {
		return this.http.post<
			Types.PartnerTelesignPhoneScorePersonResponse,
			Types.PartnerTelesignPhoneScorePersonRequest
		>("/marketplace", params, options)
	}

	/**
	 * Beneficiário Final
	 */
	async partnerUltimateBeneficialOwnersCompany(
		params: Types.PartnerUltimateBeneficialOwnersCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PartnerUltimateBeneficialOwnersCompanyResponse> {
		return this.http.post<
			Types.PartnerUltimateBeneficialOwnersCompanyResponse,
			Types.PartnerUltimateBeneficialOwnersCompanyRequest
		>("/marketplace", params, options)
	}
}
