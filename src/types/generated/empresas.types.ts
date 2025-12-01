import type {
	EmpresasAddressesExtendedItem,
	EmpresasBasicDataItem,
	EmpresasEmailsExtendedItem,
	EmpresasPhonesExtendedItem,
	EmpresasRelationshipsItem,
	Evidences,
	StatusItem,
} from "../responses.types"

export interface ActivityIndicatorsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ActivityIndicatorsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface AddressesExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface AddressesExtendedResponse {
	Result?: EmpresasAddressesExtendedItem[]
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
	Status?: Record<string, unknown>
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
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface BasicDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface BasicDataResponse {
	Result?: EmpresasBasicDataItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CirclesEmployeesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesEmployeesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesFirstLevelOwnersRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesFirstLevelOwnersResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CirclesLegalRepresentativesRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CirclesLegalRepresentativesResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CivilConstructionDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CivilConstructionDataResponse {
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

export interface CompanyEvolutionRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyEvolutionResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupBuildingRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupBuildingResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupBuildingActivityRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupBuildingActivityResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupDocumentrootRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupDocumentrootResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupHouseholdRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupHouseholdResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupHouseholdActivityRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupHouseholdActivityResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupHouseholdOwnersSurnameRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupHouseholdOwnersSurnameResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupLegalRepresentativeRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupLegalRepresentativeResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupOfficialnameRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupOfficialnameResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupOwnersRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupOwnersResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupRfcontactRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupRfcontactResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupTradenameRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupTradenameResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface CompanyGroupTradenameCityRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CompanyGroupTradenameCityResponse {
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

export interface DynamicQsaDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface DynamicQsaDataResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupFirstLevelRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupFirstLevelResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupFirstLevelExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupFirstLevelExtendedResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupFullRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupFullResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupFullExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupFullExtendedResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupKycRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupKycResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupRelationshipsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupRelationshipsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupSecondLevelRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupSecondLevelResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupSecondLevelExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupSecondLevelExtendedResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupThirdLevelRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupThirdLevelResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EconomicGroupThirdLevelExtendedRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EconomicGroupThirdLevelExtendedResponse {
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
	Result?: EmpresasEmailsExtendedItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface EmployeesIndustrialPropertyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EmployeesIndustrialPropertyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface EmployeesKycRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EmployeesKycResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface FinancialMarketRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FinancialMarketResponse {
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

export interface HistoryBasicDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface HistoryBasicDataResponse {
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

export interface InvestmentFundDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface InvestmentFundDataResponse {
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
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
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

export interface MarketplaceDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface MarketplaceDataResponse {
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

export interface MerchantCategoryDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface MerchantCategoryDataResponse {
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

export interface OwnersElectoralDonorsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OwnersElectoralDonorsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OwnersIndustrialPropertyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OwnersIndustrialPropertyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OwnersInfluenceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OwnersInfluenceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OwnersKycRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OwnersKycResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OwnersLawsuitsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OwnersLawsuitsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface OwnersLawsuitsDistributionDataRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface OwnersLawsuitsDistributionDataResponse {
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
	Result?: EmpresasPhonesExtendedItem[]
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

export interface RelationshipsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RelationshipsResponse {
	Result?: EmpresasRelationshipsItem[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface ReputationsAndReviewsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ReputationsAndReviewsResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface SocialConscienceRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SocialConscienceResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	Evidences?: Evidences
}

export interface SyndicateAgreementsRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SyndicateAgreementsResponse {
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
