import type { Evidences, StatusItem } from "../responses.types"

export interface PartnerB2eScorePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerB2eScorePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerB4bOptinContactPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerB4bOptinContactPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerBlu365PhoneReportDataPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerBlu365PhoneReportDataPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerBlu365PhoneScoreDataPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerBlu365PhoneScoreDataPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerBoavistaCreditScoreCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerBoavistaCreditScoreCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerBoavistaCreditScorePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerBoavistaCreditScorePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerBoavistaOneScoreCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerBoavistaOneScoreCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerBoavistaOneScorePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerBoavistaOneScorePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerBoavistaOwnerParticipationDataCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerBoavistaOwnerParticipationDataCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerFuellogFuelPricingDataAddressRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerFuellogFuelPricingDataAddressResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerFuellogFuelPricingDataCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerFuellogFuelPricingDataCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerFuellogFuelPricingDataPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerFuellogFuelPricingDataPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerGeofusionIntraurbanSegmentationCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerGeofusionIntraurbanSegmentationCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerGeofusionSociodemographicAndEconomicDataCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerGeofusionSociodemographicAndEconomicDataCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerMurabeiCreditScoreCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerMurabeiCreditScoreCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerNetworkDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerNetworkDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerPublicSafetyCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerPublicSafetyCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerPublicSafetyPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerPublicSafetyPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuantumCustomScoreCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuantumCustomScoreCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuantumCustomScorePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuantumCustomScorePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuantumScorePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuantumScorePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuodCreditRiskCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuodCreditRiskCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuodCreditRiskDetailsCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuodCreditRiskDetailsCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuodCreditRiskDetailsPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuodCreditRiskDetailsPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuodCreditRiskPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuodCreditRiskPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuodCreditScoreCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuodCreditScoreCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerQuodCreditScorePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerQuodCreditScorePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerRedeVistoriasAddressRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerRedeVistoriasAddressResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerScorepositivoCompanyFinanceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerScorepositivoCompanyFinanceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerScorepositivoIndividualFinanceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerScorepositivoIndividualFinanceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerTelesignPhoneIdPortingHistoryPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerTelesignPhoneIdPortingHistoryPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerTelesignPhoneIdPortingStatusPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerTelesignPhoneIdPortingStatusPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerTelesignPhoneIdStandardPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerTelesignPhoneIdStandardPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerTelesignPhoneIdSubscriberStatusPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerTelesignPhoneIdSubscriberStatusPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerTelesignPhoneScorePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerTelesignPhoneScorePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PartnerUltimateBeneficialOwnersCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PartnerUltimateBeneficialOwnersCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}
