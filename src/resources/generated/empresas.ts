// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: empresas
// Operations: 79

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/empresas.types"

export class EmpresasResource extends BaseResource {
	/**
	 * Indicadores de Atividade
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.activityIndicators('12345678000199');
	 * // Or using params object
	 * await api.empresas.activityIndicators({ q: 'doc{12345678000199}' });
	 * @dataset activity_indicators
	 */
	async activityIndicators(
		docOrParams: string | Types.ActivityIndicatorsRequest,
		options?: RequestOptions,
	): Promise<Types.ActivityIndicatorsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ActivityIndicatorsResponse,
			Types.ActivityIndicatorsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "activity_indicators" }, options)
	}

	/**
	 * Endereços - Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.addressesExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.addressesExtended({ q: 'doc{12345678000199}' });
	 * @dataset addresses_extended
	 */
	async addressesExtended(
		docOrParams: string | Types.AddressesExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.AddressesExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.AddressesExtendedResponse,
			Types.AddressesExtendedRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "addresses_extended" }, options)
	}

	/**
	 * Presença em Apps e Plataformas
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.appsNetworksAndPlatforms('12345678000199');
	 * // Or using params object
	 * await api.empresas.appsNetworksAndPlatforms({ q: 'doc{12345678000199}' });
	 * @dataset apps_networks_and_platforms
	 */
	async appsNetworksAndPlatforms(
		docOrParams: string | Types.AppsNetworksAndPlatformsRequest,
		options?: RequestOptions,
	): Promise<Types.AppsNetworksAndPlatformsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.AppsNetworksAndPlatformsResponse,
			Types.AppsNetworksAndPlatformsRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "apps_networks_and_platforms" },
			options,
		)
	}

	/**
	 * Prêmios e Certificações
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.awardsAndCertifications('12345678000199');
	 * // Or using params object
	 * await api.empresas.awardsAndCertifications({ q: 'doc{12345678000199}' });
	 * @dataset awards_and_certifications
	 */
	async awardsAndCertifications(
		docOrParams: string | Types.AwardsAndCertificationsRequest,
		options?: RequestOptions,
	): Promise<Types.AwardsAndCertificationsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.AwardsAndCertificationsResponse,
			Types.AwardsAndCertificationsRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "awards_and_certifications" },
			options,
		)
	}

	/**
	 * Dados Cadastrais Básicos
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.basicData('12345678000199');
	 * // Or using params object
	 * await api.empresas.basicData({ q: 'doc{12345678000199}' });
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
		>("/empresas", { ...params, Datasets: "basic_data" }, options)
	}

	/**
	 * Círculos - Funcionários
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.circlesEmployees('12345678000199');
	 * // Or using params object
	 * await api.empresas.circlesEmployees({ q: 'doc{12345678000199}' });
	 * @dataset circles_employees
	 */
	async circlesEmployees(
		docOrParams: string | Types.CirclesEmployeesRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesEmployeesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesEmployeesResponse,
			Types.CirclesEmployeesRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "circles_employees" }, options)
	}

	/**
	 * Círculos - Sócios de Primeiro Nível
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.circlesFirstLevelOwners('12345678000199');
	 * // Or using params object
	 * await api.empresas.circlesFirstLevelOwners({ q: 'doc{12345678000199}' });
	 * @dataset circles_first_level_owners
	 */
	async circlesFirstLevelOwners(
		docOrParams: string | Types.CirclesFirstLevelOwnersRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesFirstLevelOwnersResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesFirstLevelOwnersResponse,
			Types.CirclesFirstLevelOwnersRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "circles_first_level_owners" },
			options,
		)
	}

	/**
	 * Círculos - Representantes Legais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.circlesLegalRepresentatives('12345678000199');
	 * // Or using params object
	 * await api.empresas.circlesLegalRepresentatives({ q: 'doc{12345678000199}' });
	 * @dataset circles_legal_representatives
	 */
	async circlesLegalRepresentatives(
		docOrParams: string | Types.CirclesLegalRepresentativesRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesLegalRepresentativesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesLegalRepresentativesResponse,
			Types.CirclesLegalRepresentativesRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "circles_legal_representatives" },
			options,
		)
	}

	/**
	 * Dados de Obras Civis
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.civilConstructionData('12345678000199');
	 * // Or using params object
	 * await api.empresas.civilConstructionData({ q: 'doc{12345678000199}' });
	 * @dataset civil_construction_data
	 */
	async civilConstructionData(
		docOrParams: string | Types.CivilConstructionDataRequest,
		options?: RequestOptions,
	): Promise<Types.CivilConstructionDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CivilConstructionDataResponse,
			Types.CivilConstructionDataRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "civil_construction_data" }, options)
	}

	/**
	 * Presença em Cobrança
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.collections('12345678000199');
	 * // Or using params object
	 * await api.empresas.collections({ q: 'doc{12345678000199}' });
	 * @dataset collections
	 */
	async collections(
		docOrParams: string | Types.CollectionsRequest,
		options?: RequestOptions,
	): Promise<Types.CollectionsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CollectionsResponse,
			Types.CollectionsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "collections" }, options)
	}

	/**
	 * Evolução da Empresa
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyEvolution('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyEvolution({ q: 'doc{12345678000199}' });
	 * @dataset company_evolution
	 */
	async companyEvolution(
		docOrParams: string | Types.CompanyEvolutionRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyEvolutionResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyEvolutionResponse,
			Types.CompanyEvolutionRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "company_evolution" }, options)
	}

	/**
	 * Grupo Empresarial - Prédio
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupBuilding('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupBuilding({ q: 'doc{12345678000199}' });
	 * @dataset company_group_building
	 */
	async companyGroupBuilding(
		docOrParams: string | Types.CompanyGroupBuildingRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupBuildingResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupBuildingResponse,
			Types.CompanyGroupBuildingRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "company_group_building" }, options)
	}

	/**
	 * Grupo Empresarial - Atividade no Mesmo Prédio
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupBuildingActivity('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupBuildingActivity({ q: 'doc{12345678000199}' });
	 * @dataset company_group_building_activity
	 */
	async companyGroupBuildingActivity(
		docOrParams: string | Types.CompanyGroupBuildingActivityRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupBuildingActivityResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupBuildingActivityResponse,
			Types.CompanyGroupBuildingActivityRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "company_group_building_activity" },
			options,
		)
	}

	/**
	 * Grupo Empresarial - Raiz do CNPJ
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupDocumentroot('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupDocumentroot({ q: 'doc{12345678000199}' });
	 * @dataset company_group_documentroot
	 */
	async companyGroupDocumentroot(
		docOrParams: string | Types.CompanyGroupDocumentrootRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupDocumentrootResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupDocumentrootResponse,
			Types.CompanyGroupDocumentrootRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "company_group_documentroot" },
			options,
		)
	}

	/**
	 * Grupo Empresarial - Mesmo Endereço
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupHousehold('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupHousehold({ q: 'doc{12345678000199}' });
	 * @dataset company_group_household
	 */
	async companyGroupHousehold(
		docOrParams: string | Types.CompanyGroupHouseholdRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupHouseholdResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupHouseholdResponse,
			Types.CompanyGroupHouseholdRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "company_group_household" }, options)
	}

	/**
	 * Grupo Empresarial - Atividade no Mesmo Endereço
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupHouseholdActivity('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupHouseholdActivity({ q: 'doc{12345678000199}' });
	 * @dataset company_group_household_activity
	 */
	async companyGroupHouseholdActivity(
		docOrParams: string | Types.CompanyGroupHouseholdActivityRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupHouseholdActivityResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupHouseholdActivityResponse,
			Types.CompanyGroupHouseholdActivityRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "company_group_household_activity" },
			options,
		)
	}

	/**
	 * Grupo Empresarial - Sócios Relacionados no Mesmo Endereço
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupHouseholdOwnersSurname('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupHouseholdOwnersSurname({ q: 'doc{12345678000199}' });
	 * @dataset company_group_household_owners_surname
	 */
	async companyGroupHouseholdOwnersSurname(
		docOrParams: string | Types.CompanyGroupHouseholdOwnersSurnameRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupHouseholdOwnersSurnameResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupHouseholdOwnersSurnameResponse,
			Types.CompanyGroupHouseholdOwnersSurnameRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "company_group_household_owners_surname" },
			options,
		)
	}

	/**
	 * Grupo Empresarial - Representante Legal
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupLegalRepresentative('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupLegalRepresentative({ q: 'doc{12345678000199}' });
	 * @dataset company_group_legal_representative
	 */
	async companyGroupLegalRepresentative(
		docOrParams: string | Types.CompanyGroupLegalRepresentativeRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupLegalRepresentativeResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupLegalRepresentativeResponse,
			Types.CompanyGroupLegalRepresentativeRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "company_group_legal_representative" },
			options,
		)
	}

	/**
	 * Grupo Empresarial - Razão Social
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupOfficialname('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupOfficialname({ q: 'doc{12345678000199}' });
	 * @dataset company_group_officialname
	 */
	async companyGroupOfficialname(
		docOrParams: string | Types.CompanyGroupOfficialnameRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupOfficialnameResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupOfficialnameResponse,
			Types.CompanyGroupOfficialnameRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "company_group_officialname" },
			options,
		)
	}

	/**
	 * Grupo Empresarial - Sócios
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupOwners('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupOwners({ q: 'doc{12345678000199}' });
	 * @dataset company_group_owners
	 */
	async companyGroupOwners(
		docOrParams: string | Types.CompanyGroupOwnersRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupOwnersResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupOwnersResponse,
			Types.CompanyGroupOwnersRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "company_group_owners" }, options)
	}

	/**
	 * Grupo Empresarial - Contato na Receita Federal
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupRfcontact('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupRfcontact({ q: 'doc{12345678000199}' });
	 * @dataset company_group_rfcontact
	 */
	async companyGroupRfcontact(
		docOrParams: string | Types.CompanyGroupRfcontactRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupRfcontactResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupRfcontactResponse,
			Types.CompanyGroupRfcontactRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "company_group_rfcontact" }, options)
	}

	/**
	 * Grupo Empresarial - Nome Fantasia
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupTradename('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupTradename({ q: 'doc{12345678000199}' });
	 * @dataset company_group_tradename
	 */
	async companyGroupTradename(
		docOrParams: string | Types.CompanyGroupTradenameRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupTradenameResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupTradenameResponse,
			Types.CompanyGroupTradenameRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "company_group_tradename" }, options)
	}

	/**
	 * Grupo Empresarial - Nome Fantasia por Cidade
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.companyGroupTradenameCity('12345678000199');
	 * // Or using params object
	 * await api.empresas.companyGroupTradenameCity({ q: 'doc{12345678000199}' });
	 * @dataset company_group_tradename_city
	 */
	async companyGroupTradenameCity(
		docOrParams: string | Types.CompanyGroupTradenameCityRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupTradenameCityResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupTradenameCityResponse,
			Types.CompanyGroupTradenameCityRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "company_group_tradename_city" },
			options,
		)
	}

	/**
	 * Dados de Sites
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.domains('12345678000199');
	 * // Or using params object
	 * await api.empresas.domains({ q: 'doc{12345678000199}' });
	 * @dataset domains
	 */
	async domains(
		docOrParams: string | Types.DomainsRequest,
		options?: RequestOptions,
	): Promise<Types.DomainsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.DomainsResponse,
			Types.DomainsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "domains" }, options)
	}

	/**
	 * Dados de Sites - Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.domainsExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.domainsExtended({ q: 'doc{12345678000199}' });
	 * @dataset domains_extended
	 */
	async domainsExtended(
		docOrParams: string | Types.DomainsExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.DomainsExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.DomainsExtendedResponse,
			Types.DomainsExtendedRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "domains_extended" }, options)
	}

	/**
	 * Busca Dinâmica de QSA
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.dynamicQsaData('12345678000199');
	 * // Or using params object
	 * await api.empresas.dynamicQsaData({ q: 'doc{12345678000199}' });
	 * @dataset dynamic_qsa_data
	 */
	async dynamicQsaData(
		docOrParams: string | Types.DynamicQsaDataRequest,
		options?: RequestOptions,
	): Promise<Types.DynamicQsaDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.DynamicQsaDataResponse,
			Types.DynamicQsaDataRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "dynamic_qsa_data" }, options)
	}

	/**
	 * Grupo Econômico de Primeiro Nível
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupFirstLevel('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupFirstLevel({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_first_level
	 */
	async economicGroupFirstLevel(
		docOrParams: string | Types.EconomicGroupFirstLevelRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupFirstLevelResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupFirstLevelResponse,
			Types.EconomicGroupFirstLevelRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_first_level" },
			options,
		)
	}

	/**
	 * Grupo Econômico de Primeiro Nível Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupFirstLevelExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupFirstLevelExtended({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_first_level_extended
	 */
	async economicGroupFirstLevelExtended(
		docOrParams: string | Types.EconomicGroupFirstLevelExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupFirstLevelExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupFirstLevelExtendedResponse,
			Types.EconomicGroupFirstLevelExtendedRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_first_level_extended" },
			options,
		)
	}

	/**
	 * Grupo Econômico Completo
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupFull('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupFull({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_full
	 */
	async economicGroupFull(
		docOrParams: string | Types.EconomicGroupFullRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupFullResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupFullResponse,
			Types.EconomicGroupFullRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "economic_group_full" }, options)
	}

	/**
	 * Grupo Econômico Completo Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupFullExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupFullExtended({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_full_extended
	 */
	async economicGroupFullExtended(
		docOrParams: string | Types.EconomicGroupFullExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupFullExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupFullExtendedResponse,
			Types.EconomicGroupFullExtendedRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_full_extended" },
			options,
		)
	}

	/**
	 * KYC e Compliance do Grupo Econômico
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupKyc('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupKyc({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_kyc
	 */
	async economicGroupKyc(
		docOrParams: string | Types.EconomicGroupKycRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupKycResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupKycResponse,
			Types.EconomicGroupKycRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "economic_group_kyc" }, options)
	}

	/**
	 * Relacionamentos - Grupo Econômico
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupRelationships('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupRelationships({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_relationships
	 */
	async economicGroupRelationships(
		docOrParams: string | Types.EconomicGroupRelationshipsRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupRelationshipsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupRelationshipsResponse,
			Types.EconomicGroupRelationshipsRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_relationships" },
			options,
		)
	}

	/**
	 * Grupo Econômico de Segundo Nível
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupSecondLevel('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupSecondLevel({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_second_level
	 */
	async economicGroupSecondLevel(
		docOrParams: string | Types.EconomicGroupSecondLevelRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupSecondLevelResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupSecondLevelResponse,
			Types.EconomicGroupSecondLevelRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_second_level" },
			options,
		)
	}

	/**
	 * Grupo Econômico de Segundo Nível Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupSecondLevelExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupSecondLevelExtended({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_second_level_extended
	 */
	async economicGroupSecondLevelExtended(
		docOrParams: string | Types.EconomicGroupSecondLevelExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupSecondLevelExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupSecondLevelExtendedResponse,
			Types.EconomicGroupSecondLevelExtendedRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_second_level_extended" },
			options,
		)
	}

	/**
	 * Grupo Econômico de Terceiro Nível
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupThirdLevel('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupThirdLevel({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_third_level
	 */
	async economicGroupThirdLevel(
		docOrParams: string | Types.EconomicGroupThirdLevelRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupThirdLevelResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupThirdLevelResponse,
			Types.EconomicGroupThirdLevelRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_third_level" },
			options,
		)
	}

	/**
	 * Grupo Econômico de Terceiro Nível Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.economicGroupThirdLevelExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.economicGroupThirdLevelExtended({ q: 'doc{12345678000199}' });
	 * @dataset economic_group_third_level_extended
	 */
	async economicGroupThirdLevelExtended(
		docOrParams: string | Types.EconomicGroupThirdLevelExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.EconomicGroupThirdLevelExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EconomicGroupThirdLevelExtendedResponse,
			Types.EconomicGroupThirdLevelExtendedRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "economic_group_third_level_extended" },
			options,
		)
	}

	/**
	 * Doações Eleitorais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.electoralDonors('12345678000199');
	 * // Or using params object
	 * await api.empresas.electoralDonors({ q: 'doc{12345678000199}' });
	 * @dataset electoral_donors
	 */
	async electoralDonors(
		docOrParams: string | Types.ElectoralDonorsRequest,
		options?: RequestOptions,
	): Promise<Types.ElectoralDonorsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ElectoralDonorsResponse,
			Types.ElectoralDonorsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "electoral_donors" }, options)
	}

	/**
	 * Prestadores de Serviços Eleitorais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.electoralProviders('12345678000199');
	 * // Or using params object
	 * await api.empresas.electoralProviders({ q: 'doc{12345678000199}' });
	 * @dataset electoral_providers
	 */
	async electoralProviders(
		docOrParams: string | Types.ElectoralProvidersRequest,
		options?: RequestOptions,
	): Promise<Types.ElectoralProvidersResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ElectoralProvidersResponse,
			Types.ElectoralProvidersRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "electoral_providers" }, options)
	}

	/**
	 * E-mails - Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.emailsExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.emailsExtended({ q: 'doc{12345678000199}' });
	 * @dataset emails_extended
	 */
	async emailsExtended(
		docOrParams: string | Types.EmailsExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.EmailsExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EmailsExtendedResponse,
			Types.EmailsExtendedRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "emails_extended" }, options)
	}

	/**
	 * Propriedades Industriais de Funcionários
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.employeesIndustrialProperty('12345678000199');
	 * // Or using params object
	 * await api.empresas.employeesIndustrialProperty({ q: 'doc{12345678000199}' });
	 * @dataset employees_industrial_property
	 */
	async employeesIndustrialProperty(
		docOrParams: string | Types.EmployeesIndustrialPropertyRequest,
		options?: RequestOptions,
	): Promise<Types.EmployeesIndustrialPropertyResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EmployeesIndustrialPropertyResponse,
			Types.EmployeesIndustrialPropertyRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "employees_industrial_property" },
			options,
		)
	}

	/**
	 * KYC e Compliance dos Funcionários
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.employeesKyc('12345678000199');
	 * // Or using params object
	 * await api.empresas.employeesKyc({ q: 'doc{12345678000199}' });
	 * @dataset employees_kyc
	 */
	async employeesKyc(
		docOrParams: string | Types.EmployeesKycRequest,
		options?: RequestOptions,
	): Promise<Types.EmployeesKycResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.EmployeesKycResponse,
			Types.EmployeesKycRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "employees_kyc" }, options)
	}

	/**
	 * Mercado Financeiro
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.financialMarket('12345678000199');
	 * // Or using params object
	 * await api.empresas.financialMarket({ q: 'doc{12345678000199}' });
	 * @dataset financial_market
	 */
	async financialMarket(
		docOrParams: string | Types.FinancialMarketRequest,
		options?: RequestOptions,
	): Promise<Types.FinancialMarketResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FinancialMarketResponse,
			Types.FinancialMarketRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "financial_market" }, options)
	}

	/**
	 * Firmografia da Empresa - GPT x1.0
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.genaiDescriptionGptX10('12345678000199');
	 * // Or using params object
	 * await api.empresas.genaiDescriptionGptX10({ q: 'doc{12345678000199}' });
	 * @dataset genai_description_gpt_x1_0
	 */
	async genaiDescriptionGptX10(
		docOrParams: string | Types.GenaiDescriptionGptX10Request,
		options?: RequestOptions,
	): Promise<Types.GenaiDescriptionGptX10Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.GenaiDescriptionGptX10Response,
			Types.GenaiDescriptionGptX10Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "genai_description_gpt_x1_0" },
			options,
		)
	}

	/**
	 * Firmografia da Empresa - GPT x1.5
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.genaiDescriptionGptX15('12345678000199');
	 * // Or using params object
	 * await api.empresas.genaiDescriptionGptX15({ q: 'doc{12345678000199}' });
	 * @dataset genai_description_gpt_x1_5
	 */
	async genaiDescriptionGptX15(
		docOrParams: string | Types.GenaiDescriptionGptX15Request,
		options?: RequestOptions,
	): Promise<Types.GenaiDescriptionGptX15Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.GenaiDescriptionGptX15Response,
			Types.GenaiDescriptionGptX15Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "genai_description_gpt_x1_5" },
			options,
		)
	}

	/**
	 * Firmografia da Empresa - Mistral x1.0
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.genaiDescriptionMistralX10('12345678000199');
	 * // Or using params object
	 * await api.empresas.genaiDescriptionMistralX10({ q: 'doc{12345678000199}' });
	 * @dataset genai_description_mistral_x1_0
	 */
	async genaiDescriptionMistralX10(
		docOrParams: string | Types.GenaiDescriptionMistralX10Request,
		options?: RequestOptions,
	): Promise<Types.GenaiDescriptionMistralX10Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.GenaiDescriptionMistralX10Response,
			Types.GenaiDescriptionMistralX10Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "genai_description_mistral_x1_0" },
			options,
		)
	}

	/**
	 * Firmografia da Empresa - Mistral x1.5
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.genaiDescriptionMistralX15('12345678000199');
	 * // Or using params object
	 * await api.empresas.genaiDescriptionMistralX15({ q: 'doc{12345678000199}' });
	 * @dataset genai_description_mistral_x1_5
	 */
	async genaiDescriptionMistralX15(
		docOrParams: string | Types.GenaiDescriptionMistralX15Request,
		options?: RequestOptions,
	): Promise<Types.GenaiDescriptionMistralX15Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.GenaiDescriptionMistralX15Response,
			Types.GenaiDescriptionMistralX15Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "genai_description_mistral_x1_5" },
			options,
		)
	}

	/**
	 * Firmografia da Empresa - Nova x1.0
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.genaiDescriptionNovaX10('12345678000199');
	 * // Or using params object
	 * await api.empresas.genaiDescriptionNovaX10({ q: 'doc{12345678000199}' });
	 * @dataset genai_description_nova_x1_0
	 */
	async genaiDescriptionNovaX10(
		docOrParams: string | Types.GenaiDescriptionNovaX10Request,
		options?: RequestOptions,
	): Promise<Types.GenaiDescriptionNovaX10Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.GenaiDescriptionNovaX10Response,
			Types.GenaiDescriptionNovaX10Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "genai_description_nova_x1_0" },
			options,
		)
	}

	/**
	 * Firmografia da Empresa - Nova x1.5
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.genaiDescriptionNovaX15('12345678000199');
	 * // Or using params object
	 * await api.empresas.genaiDescriptionNovaX15({ q: 'doc{12345678000199}' });
	 * @dataset genai_description_nova_x1_5
	 */
	async genaiDescriptionNovaX15(
		docOrParams: string | Types.GenaiDescriptionNovaX15Request,
		options?: RequestOptions,
	): Promise<Types.GenaiDescriptionNovaX15Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.GenaiDescriptionNovaX15Response,
			Types.GenaiDescriptionNovaX15Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "genai_description_nova_x1_5" },
			options,
		)
	}

	/**
	 * Devedores do Governo
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.governmentDebtors('12345678000199');
	 * // Or using params object
	 * await api.empresas.governmentDebtors({ q: 'doc{12345678000199}' });
	 * @dataset government_debtors
	 */
	async governmentDebtors(
		docOrParams: string | Types.GovernmentDebtorsRequest,
		options?: RequestOptions,
	): Promise<Types.GovernmentDebtorsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.GovernmentDebtorsResponse,
			Types.GovernmentDebtorsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "government_debtors" }, options)
	}

	/**
	 * Histórico de Dados Básicos Cadastrais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.historyBasicData('12345678000199');
	 * // Or using params object
	 * await api.empresas.historyBasicData({ q: 'doc{12345678000199}' });
	 * @dataset history_basic_data
	 */
	async historyBasicData(
		docOrParams: string | Types.HistoryBasicDataRequest,
		options?: RequestOptions,
	): Promise<Types.HistoryBasicDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.HistoryBasicDataResponse,
			Types.HistoryBasicDataRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "history_basic_data" }, options)
	}

	/**
	 * Propriedades Industriais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.industrialProperty('12345678000199');
	 * // Or using params object
	 * await api.empresas.industrialProperty({ q: 'doc{12345678000199}' });
	 * @dataset industrial_property
	 */
	async industrialProperty(
		docOrParams: string | Types.IndustrialPropertyRequest,
		options?: RequestOptions,
	): Promise<Types.IndustrialPropertyResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.IndustrialPropertyResponse,
			Types.IndustrialPropertyRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "industrial_property" }, options)
	}

	/**
	 * Interesses e Comportamentos
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.interestsAndBehaviors('12345678000199');
	 * // Or using params object
	 * await api.empresas.interestsAndBehaviors({ q: 'doc{12345678000199}' });
	 * @dataset interests_and_behaviors
	 */
	async interestsAndBehaviors(
		docOrParams: string | Types.InterestsAndBehaviorsRequest,
		options?: RequestOptions,
	): Promise<Types.InterestsAndBehaviorsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.InterestsAndBehaviorsResponse,
			Types.InterestsAndBehaviorsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "interests_and_behaviors" }, options)
	}

	/**
	 * Dados de Fundos de Investimento
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.investmentFundData('12345678000199');
	 * // Or using params object
	 * await api.empresas.investmentFundData({ q: 'doc{12345678000199}' });
	 * @dataset investment_fund_data
	 */
	async investmentFundData(
		docOrParams: string | Types.InvestmentFundDataRequest,
		options?: RequestOptions,
	): Promise<Types.InvestmentFundDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.InvestmentFundDataResponse,
			Types.InvestmentFundDataRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "investment_fund_data" }, options)
	}

	/**
	 * KYC e Compliance
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.kyc('12345678000199');
	 * // Or using params object
	 * await api.empresas.kyc({ q: 'doc{12345678000199}' });
	 * @dataset kyc
	 */
	async kyc(
		docOrParams: string | Types.KycRequest,
		options?: RequestOptions,
	): Promise<Types.KycResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.KycResponse,
			Types.KycRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "kyc" }, options)
	}

	/**
	 * Dados de Distribuição de Processos Judiciais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.lawsuitsDistributionData('12345678000199');
	 * // Or using params object
	 * await api.empresas.lawsuitsDistributionData({ q: 'doc{12345678000199}' });
	 * @dataset lawsuits_distribution_data
	 */
	async lawsuitsDistributionData(
		docOrParams: string | Types.LawsuitsDistributionDataRequest,
		options?: RequestOptions,
	): Promise<Types.LawsuitsDistributionDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.LawsuitsDistributionDataResponse,
			Types.LawsuitsDistributionDataRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "lawsuits_distribution_data" },
			options,
		)
	}

	/**
	 * Licenças e Autorizações
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.licensesAndAuthorizations('12345678000199');
	 * // Or using params object
	 * await api.empresas.licensesAndAuthorizations({ q: 'doc{12345678000199}' });
	 * @dataset licenses_and_authorizations
	 */
	async licensesAndAuthorizations(
		docOrParams: string | Types.LicensesAndAuthorizationsRequest,
		options?: RequestOptions,
	): Promise<Types.LicensesAndAuthorizationsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.LicensesAndAuthorizationsResponse,
			Types.LicensesAndAuthorizationsRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "licenses_and_authorizations" },
			options,
		)
	}

	/**
	 * Marketplaces
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.marketplaceData('12345678000199');
	 * // Or using params object
	 * await api.empresas.marketplaceData({ q: 'doc{12345678000199}' });
	 * @dataset marketplace_data
	 */
	async marketplaceData(
		docOrParams: string | Types.MarketplaceDataRequest,
		options?: RequestOptions,
	): Promise<Types.MarketplaceDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.MarketplaceDataResponse,
			Types.MarketplaceDataRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "marketplace_data" }, options)
	}

	/**
	 * Exposição e Perfil na Mídia
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.mediaProfileAndExposure('12345678000199');
	 * // Or using params object
	 * await api.empresas.mediaProfileAndExposure({ q: 'doc{12345678000199}' });
	 * @dataset media_profile_and_exposure
	 */
	async mediaProfileAndExposure(
		docOrParams: string | Types.MediaProfileAndExposureRequest,
		options?: RequestOptions,
	): Promise<Types.MediaProfileAndExposureResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.MediaProfileAndExposureResponse,
			Types.MediaProfileAndExposureRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "media_profile_and_exposure" },
			options,
		)
	}

	/**
	 * Dados de Categoria Comercial - MCC
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.merchantCategoryData('12345678000199');
	 * // Or using params object
	 * await api.empresas.merchantCategoryData({ q: 'doc{12345678000199}' });
	 * @dataset merchant_category_data
	 */
	async merchantCategoryData(
		docOrParams: string | Types.MerchantCategoryDataRequest,
		options?: RequestOptions,
	): Promise<Types.MerchantCategoryDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.MerchantCategoryDataResponse,
			Types.MerchantCategoryDataRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "merchant_category_data" }, options)
	}

	/**
	 * Anúncios Online
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.onlineAds('12345678000199');
	 * // Or using params object
	 * await api.empresas.onlineAds({ q: 'doc{12345678000199}' });
	 * @dataset online_ads
	 */
	async onlineAds(
		docOrParams: string | Types.OnlineAdsRequest,
		options?: RequestOptions,
	): Promise<Types.OnlineAdsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OnlineAdsResponse,
			Types.OnlineAdsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "online_ads" }, options)
	}

	/**
	 * Doações Eleitorais de Sócios
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.ownersElectoralDonors('12345678000199');
	 * // Or using params object
	 * await api.empresas.ownersElectoralDonors({ q: 'doc{12345678000199}' });
	 * @dataset owners_electoral_donors
	 */
	async ownersElectoralDonors(
		docOrParams: string | Types.OwnersElectoralDonorsRequest,
		options?: RequestOptions,
	): Promise<Types.OwnersElectoralDonorsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OwnersElectoralDonorsResponse,
			Types.OwnersElectoralDonorsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "owners_electoral_donors" }, options)
	}

	/**
	 * Propriedades Industriais de Sócios
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.ownersIndustrialProperty('12345678000199');
	 * // Or using params object
	 * await api.empresas.ownersIndustrialProperty({ q: 'doc{12345678000199}' });
	 * @dataset owners_industrial_property
	 */
	async ownersIndustrialProperty(
		docOrParams: string | Types.OwnersIndustrialPropertyRequest,
		options?: RequestOptions,
	): Promise<Types.OwnersIndustrialPropertyResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OwnersIndustrialPropertyResponse,
			Types.OwnersIndustrialPropertyRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "owners_industrial_property" },
			options,
		)
	}

	/**
	 * Influência do Quadro Societário
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.ownersInfluence('12345678000199');
	 * // Or using params object
	 * await api.empresas.ownersInfluence({ q: 'doc{12345678000199}' });
	 * @dataset owners_influence
	 */
	async ownersInfluence(
		docOrParams: string | Types.OwnersInfluenceRequest,
		options?: RequestOptions,
	): Promise<Types.OwnersInfluenceResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OwnersInfluenceResponse,
			Types.OwnersInfluenceRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "owners_influence" }, options)
	}

	/**
	 * KYC e Compliance dos Sócios
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.ownersKyc('12345678000199');
	 * // Or using params object
	 * await api.empresas.ownersKyc({ q: 'doc{12345678000199}' });
	 * @dataset owners_kyc
	 */
	async ownersKyc(
		docOrParams: string | Types.OwnersKycRequest,
		options?: RequestOptions,
	): Promise<Types.OwnersKycResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OwnersKycResponse,
			Types.OwnersKycRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "owners_kyc" }, options)
	}

	/**
	 * Processos Judiciais dos Sócios
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.ownersLawsuits('12345678000199');
	 * // Or using params object
	 * await api.empresas.ownersLawsuits({ q: 'doc{12345678000199}' });
	 * @dataset owners_lawsuits
	 */
	async ownersLawsuits(
		docOrParams: string | Types.OwnersLawsuitsRequest,
		options?: RequestOptions,
	): Promise<Types.OwnersLawsuitsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OwnersLawsuitsResponse,
			Types.OwnersLawsuitsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "owners_lawsuits" }, options)
	}

	/**
	 * Dados de Distribuição de Processos dos Sócios
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.ownersLawsuitsDistributionData('12345678000199');
	 * // Or using params object
	 * await api.empresas.ownersLawsuitsDistributionData({ q: 'doc{12345678000199}' });
	 * @dataset owners_lawsuits_distribution_data
	 */
	async ownersLawsuitsDistributionData(
		docOrParams: string | Types.OwnersLawsuitsDistributionDataRequest,
		options?: RequestOptions,
	): Promise<Types.OwnersLawsuitsDistributionDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OwnersLawsuitsDistributionDataResponse,
			Types.OwnersLawsuitsDistributionDataRequest & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "owners_lawsuits_distribution_data" },
			options,
		)
	}

	/**
	 * Telefones - Estendido
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.phonesExtended('12345678000199');
	 * // Or using params object
	 * await api.empresas.phonesExtended({ q: 'doc{12345678000199}' });
	 * @dataset phones_extended
	 */
	async phonesExtended(
		docOrParams: string | Types.PhonesExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.PhonesExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.PhonesExtendedResponse,
			Types.PhonesExtendedRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "phones_extended" }, options)
	}

	/**
	 * Envolvimento Político
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.politicalInvolvement('12345678000199');
	 * // Or using params object
	 * await api.empresas.politicalInvolvement({ q: 'doc{12345678000199}' });
	 * @dataset political_involvement
	 */
	async politicalInvolvement(
		docOrParams: string | Types.PoliticalInvolvementRequest,
		options?: RequestOptions,
	): Promise<Types.PoliticalInvolvementResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.PoliticalInvolvementResponse,
			Types.PoliticalInvolvementRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "political_involvement" }, options)
	}

	/**
	 * Processos Judiciais e Administrativos
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.processes('12345678000199');
	 * // Or using params object
	 * await api.empresas.processes({ q: 'doc{12345678000199}' });
	 * @dataset processes
	 */
	async processes(
		docOrParams: string | Types.ProcessesRequest,
		options?: RequestOptions,
	): Promise<Types.ProcessesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ProcessesResponse,
			Types.ProcessesRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "processes" }, options)
	}

	/**
	 * Dados Cadastrais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.registrationData('12345678000199');
	 * // Or using params object
	 * await api.empresas.registrationData({ q: 'doc{12345678000199}' });
	 * @dataset registration_data
	 */
	async registrationData(
		docOrParams: string | Types.RegistrationDataRequest,
		options?: RequestOptions,
	): Promise<Types.RegistrationDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.RegistrationDataResponse,
			Types.RegistrationDataRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "registration_data" }, options)
	}

	/**
	 * Endereços - Pessoas Relacionadas
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.relatedPeopleAddresses('12345678000199');
	 * // Or using params object
	 * await api.empresas.relatedPeopleAddresses({ q: 'doc{12345678000199}' });
	 * @dataset related_people_addresses
	 */
	async relatedPeopleAddresses(
		docOrParams: string | Types.RelatedPeopleAddressesRequest,
		options?: RequestOptions,
	): Promise<Types.RelatedPeopleAddressesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.RelatedPeopleAddressesResponse,
			Types.RelatedPeopleAddressesRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "related_people_addresses" }, options)
	}

	/**
	 * Emails - Pessoas Relacionadas
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.relatedPeopleEmails('12345678000199');
	 * // Or using params object
	 * await api.empresas.relatedPeopleEmails({ q: 'doc{12345678000199}' });
	 * @dataset related_people_emails
	 */
	async relatedPeopleEmails(
		docOrParams: string | Types.RelatedPeopleEmailsRequest,
		options?: RequestOptions,
	): Promise<Types.RelatedPeopleEmailsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.RelatedPeopleEmailsResponse,
			Types.RelatedPeopleEmailsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "related_people_emails" }, options)
	}

	/**
	 * Telefones - Pessoas Relacionadas
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.relatedPeoplePhones('12345678000199');
	 * // Or using params object
	 * await api.empresas.relatedPeoplePhones({ q: 'doc{12345678000199}' });
	 * @dataset related_people_phones
	 */
	async relatedPeoplePhones(
		docOrParams: string | Types.RelatedPeoplePhonesRequest,
		options?: RequestOptions,
	): Promise<Types.RelatedPeoplePhonesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.RelatedPeoplePhonesResponse,
			Types.RelatedPeoplePhonesRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "related_people_phones" }, options)
	}

	/**
	 * Relacionamentos
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.relationships('12345678000199');
	 * // Or using params object
	 * await api.empresas.relationships({ q: 'doc{12345678000199}' });
	 * @dataset relationships
	 */
	async relationships(
		docOrParams: string | Types.RelationshipsRequest,
		options?: RequestOptions,
	): Promise<Types.RelationshipsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.RelationshipsResponse,
			Types.RelationshipsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "relationships" }, options)
	}

	/**
	 * Avaliações e Reputação
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.reputationsAndReviews('12345678000199');
	 * // Or using params object
	 * await api.empresas.reputationsAndReviews({ q: 'doc{12345678000199}' });
	 * @dataset reputations_and_reviews
	 */
	async reputationsAndReviews(
		docOrParams: string | Types.ReputationsAndReviewsRequest,
		options?: RequestOptions,
	): Promise<Types.ReputationsAndReviewsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ReputationsAndReviewsResponse,
			Types.ReputationsAndReviewsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "reputations_and_reviews" }, options)
	}

	/**
	 * Consciência Social
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.socialConscience('12345678000199');
	 * // Or using params object
	 * await api.empresas.socialConscience({ q: 'doc{12345678000199}' });
	 * @dataset social_conscience
	 */
	async socialConscience(
		docOrParams: string | Types.SocialConscienceRequest,
		options?: RequestOptions,
	): Promise<Types.SocialConscienceResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.SocialConscienceResponse,
			Types.SocialConscienceRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "social_conscience" }, options)
	}

	/**
	 * Acordos Sindicais
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.syndicateAgreements('12345678000199');
	 * // Or using params object
	 * await api.empresas.syndicateAgreements({ q: 'doc{12345678000199}' });
	 * @dataset syndicate_agreements
	 */
	async syndicateAgreements(
		docOrParams: string | Types.SyndicateAgreementsRequest,
		options?: RequestOptions,
	): Promise<Types.SyndicateAgreementsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.SyndicateAgreementsResponse,
			Types.SyndicateAgreementsRequest & { Datasets: string }
		>("/empresas", { ...params, Datasets: "syndicate_agreements" }, options)
	}

	/**
	 * Dados Unificados para Modelagem x1.0
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.unifiedModelingDataX10('12345678000199');
	 * // Or using params object
	 * await api.empresas.unifiedModelingDataX10({ q: 'doc{12345678000199}' });
	 * @dataset unified_modeling_data_x1_0
	 */
	async unifiedModelingDataX10(
		docOrParams: string | Types.UnifiedModelingDataX10Request,
		options?: RequestOptions,
	): Promise<Types.UnifiedModelingDataX10Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.UnifiedModelingDataX10Response,
			Types.UnifiedModelingDataX10Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "unified_modeling_data_x1_0" },
			options,
		)
	}

	/**
	 * Dados Unificados para Modelagem x1.5
	 * @param docOrParams - CNPJ string (e.g., '12345678000199') or params object
	 * @example
	 * // Using CNPJ directly
	 * await api.empresas.unifiedModelingDataX15('12345678000199');
	 * // Or using params object
	 * await api.empresas.unifiedModelingDataX15({ q: 'doc{12345678000199}' });
	 * @dataset unified_modeling_data_x1_5
	 */
	async unifiedModelingDataX15(
		docOrParams: string | Types.UnifiedModelingDataX15Request,
		options?: RequestOptions,
	): Promise<Types.UnifiedModelingDataX15Response> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.UnifiedModelingDataX15Response,
			Types.UnifiedModelingDataX15Request & { Datasets: string }
		>(
			"/empresas",
			{ ...params, Datasets: "unified_modeling_data_x1_5" },
			options,
		)
	}

	/**
	 * Query multiple datasets at once
	 * @param doc - CNPJ string (e.g., '12345678000199')
	 * @param datasets - Array of dataset names to query
	 * @example
	 * // Query basic_data and emails
	 * await api.empresas.query('12345678000199', ['basic_data', 'emails']);
	 */
	async query(
		doc: string,
		datasets: string[],
		options?: RequestOptions,
	): Promise<unknown> {
		return this.http.post<unknown, { q: string; Datasets: string }>(
			"/empresas",
			{ q: `doc{${doc}}`, Datasets: datasets.join(",") },
			options,
		)
	}
}
