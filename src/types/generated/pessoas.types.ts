import type {
	Evidences,
	PessoasAddressesExtendedItem,
	PessoasBasicDataItem,
	PessoasEmailsExtendedItem,
	PessoasFinancialRiskItem,
	PessoasKycItem,
	PessoasPhonesExtendedItem,
	StatusItem,
} from "../responses.types"

export interface AddressesExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface AddressesExtendedResponse {
	Result?: PessoasAddressesExtendedItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface AppsNetworksAndPlatformsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface AppsNetworksAndPlatformsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface AwardsAndCertificationsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface AwardsAndCertificationsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface BasicDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface BasicDataResponse {
	Result?: PessoasBasicDataItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface BasicDataWithConfigurableRecencyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface BasicDataWithConfigurableRecencyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface BusinessRelationshipsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface BusinessRelationshipsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesBuildingRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesBuildingResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesCollegeClassRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesCollegeClassResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesCoworkersRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesCoworkersResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesFirstLevelRelativesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesFirstLevelRelativesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesHouseholdRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesHouseholdResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesLawsuitPartiesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesLawsuitPartiesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesNeighborsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesNeighborsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesPartnersRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesPartnersResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesRelativesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesRelativesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface ClassOrganizationRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ClassOrganizationResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CollectionsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CollectionsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupEmployedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupEmployedResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupFamilyOwnershipRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupFamilyOwnershipResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupOwnershipRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupOwnershipResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupSuedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupSuedResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface DemographicDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface DemographicDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface DomainsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface DomainsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface DomainsExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface DomainsExtendedResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface ElectionCandidateDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ElectionCandidateDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface ElectoralDonorsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ElectoralDonorsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface ElectoralProvidersRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ElectoralProvidersResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EmailsExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EmailsExtendedResponse {
	Result?: PessoasEmailsExtendedItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface FamilyFinancialDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FamilyFinancialDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FamilyFinancialRiskRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FamilyFinancialRiskResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FamilyLawsuitsDistributionDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FamilyLawsuitsDistributionDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FamilyOnlineParticipationRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FamilyOnlineParticipationResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FamilyPoliticalHistoryRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FamilyPoliticalHistoryResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FamilySocialAssistanceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FamilySocialAssistanceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FinancialDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FinancialDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FinancialInterestsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FinancialInterestsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FinancialRiskRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FinancialRiskResponse {
	Result?: PessoasFinancialRiskItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface FirstLevelRelativesKycRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FirstLevelRelativesKycResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FirstLevelRelativesLawsuitDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FirstLevelRelativesLawsuitDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FlagsAndFeaturesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FlagsAndFeaturesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface GenaiDescriptionGptX10Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface GenaiDescriptionGptX10Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface GenaiDescriptionGptX15Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface GenaiDescriptionGptX15Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface GenaiDescriptionMistralX10Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface GenaiDescriptionMistralX10Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface GenaiDescriptionMistralX15Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface GenaiDescriptionMistralX15Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface GenaiDescriptionNovaX10Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface GenaiDescriptionNovaX10Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface GenaiDescriptionNovaX15Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface GenaiDescriptionNovaX15Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface GovernmentDebtorsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface GovernmentDebtorsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface HistoricalBasicDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface HistoricalBasicDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface IndebtednessQuestionRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IndebtednessQuestionResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface IndustrialPropertyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IndustrialPropertyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface InfluenceDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface InfluenceDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface InterestsAndBehaviorsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface InterestsAndBehaviorsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface KycRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface KycResponse {
	Result?: PessoasKycItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface LawsuitsDistributionDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface LawsuitsDistributionDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface LicensesAndAuthorizationsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface LicensesAndAuthorizationsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface LifeStagesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface LifeStagesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface MediaProfileAndExposureRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface MediaProfileAndExposureResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OccupationDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OccupationDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OnlineAdsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OnlineAdsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OnlineBettingComplianceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OnlineBettingComplianceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OnlineBettingPropensityRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OnlineBettingPropensityResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OnlinePresenceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OnlinePresenceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface PassagesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PassagesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface PhonesExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PhonesExtendedResponse {
	Result?: PessoasPhonesExtendedItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PoliticalInvolvementRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PoliticalInvolvementResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface PoliticalRelationshipsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PoliticalRelationshipsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface ProcessesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ProcessesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface ProfessionDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ProfessionDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface ProfessionalTurnoverRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ProfessionalTurnoverResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface QsaBetDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface QsaBetDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface RegistrationDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RegistrationDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface RelatedPeopleRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RelatedPeopleResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface RelatedPeopleAddressesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RelatedPeopleAddressesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface RelatedPeopleEmailsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RelatedPeopleEmailsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface RelatedPeoplePhonesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RelatedPeoplePhonesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface SecurityDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SecurityDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface SocialAssistanceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SocialAssistanceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface SocialAssistanceExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SocialAssistanceExtendedResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface SportsExposureRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SportsExposureResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface UnifiedModelingDataX10Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface UnifiedModelingDataX10Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface UnifiedModelingDataX15Request {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface UnifiedModelingDataX15Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface UniversityStudentDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface UniversityStudentDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface VehiclesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface VehiclesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}
