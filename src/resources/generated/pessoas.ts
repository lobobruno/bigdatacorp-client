// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: pessoas
// Operations: 83

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/pessoas.types"

export class PessoasResource extends BaseResource {
	/**
	 * Endereços - Estendido
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.addressesExtended('12345678900');
	 * // Or using params object
	 * await api.pessoas.addressesExtended({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "addresses_extended" }, options)
	}

	/**
	 * Presença em Apps e Plataformas
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.appsNetworksAndPlatforms('12345678900');
	 * // Or using params object
	 * await api.pessoas.appsNetworksAndPlatforms({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "apps_networks_and_platforms" },
			options,
		)
	}

	/**
	 * Prêmios e Certificações
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.awardsAndCertifications('12345678900');
	 * // Or using params object
	 * await api.pessoas.awardsAndCertifications({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "awards_and_certifications" }, options)
	}

	/**
	 * Dados Cadastrais Básicos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.basicData('12345678900');
	 * // Or using params object
	 * await api.pessoas.basicData({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "basic_data" }, options)
	}

	/**
	 * Dados Cadastrais de Recência Configurável
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.basicDataWithConfigurableRecency('12345678900');
	 * // Or using params object
	 * await api.pessoas.basicDataWithConfigurableRecency({ q: 'doc{12345678900}' });
	 * @dataset basic_data_with_configurable_recency
	 */
	async basicDataWithConfigurableRecency(
		docOrParams: string | Types.BasicDataWithConfigurableRecencyRequest,
		options?: RequestOptions,
	): Promise<Types.BasicDataWithConfigurableRecencyResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.BasicDataWithConfigurableRecencyResponse,
			Types.BasicDataWithConfigurableRecencyRequest & { Datasets: string }
		>(
			"/pessoas",
			{ ...params, Datasets: "basic_data_with_configurable_recency" },
			options,
		)
	}

	/**
	 * Relacionamentos Econômicos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.businessRelationships('12345678900');
	 * // Or using params object
	 * await api.pessoas.businessRelationships({ q: 'doc{12345678900}' });
	 * @dataset business_relationships
	 */
	async businessRelationships(
		docOrParams: string | Types.BusinessRelationshipsRequest,
		options?: RequestOptions,
	): Promise<Types.BusinessRelationshipsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.BusinessRelationshipsResponse,
			Types.BusinessRelationshipsRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "business_relationships" }, options)
	}

	/**
	 * Círculos - Vizinhos (Mesmo prédio)
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesBuilding('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesBuilding({ q: 'doc{12345678900}' });
	 * @dataset circles_building
	 */
	async circlesBuilding(
		docOrParams: string | Types.CirclesBuildingRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesBuildingResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesBuildingResponse,
			Types.CirclesBuildingRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_building" }, options)
	}

	/**
	 * Círculos - Colegas de Classe
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesCollegeClass('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesCollegeClass({ q: 'doc{12345678900}' });
	 * @dataset circles_college_class
	 */
	async circlesCollegeClass(
		docOrParams: string | Types.CirclesCollegeClassRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesCollegeClassResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesCollegeClassResponse,
			Types.CirclesCollegeClassRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_college_class" }, options)
	}

	/**
	 * Círculos - Colegas de Trabalho
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesCoworkers('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesCoworkers({ q: 'doc{12345678900}' });
	 * @dataset circles_coworkers
	 */
	async circlesCoworkers(
		docOrParams: string | Types.CirclesCoworkersRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesCoworkersResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesCoworkersResponse,
			Types.CirclesCoworkersRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_coworkers" }, options)
	}

	/**
	 * Círculos - Parentes (1º grau)
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesFirstLevelRelatives('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesFirstLevelRelatives({ q: 'doc{12345678900}' });
	 * @dataset circles_first_level_relatives
	 */
	async circlesFirstLevelRelatives(
		docOrParams: string | Types.CirclesFirstLevelRelativesRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesFirstLevelRelativesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesFirstLevelRelativesResponse,
			Types.CirclesFirstLevelRelativesRequest & { Datasets: string }
		>(
			"/pessoas",
			{ ...params, Datasets: "circles_first_level_relatives" },
			options,
		)
	}

	/**
	 * Círculos - Household
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesHousehold('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesHousehold({ q: 'doc{12345678900}' });
	 * @dataset circles_household
	 */
	async circlesHousehold(
		docOrParams: string | Types.CirclesHouseholdRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesHouseholdResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesHouseholdResponse,
			Types.CirclesHouseholdRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_household" }, options)
	}

	/**
	 * Círculos - Processos Judiciais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesLawsuitParties('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesLawsuitParties({ q: 'doc{12345678900}' });
	 * @dataset circles_lawsuit_parties
	 */
	async circlesLawsuitParties(
		docOrParams: string | Types.CirclesLawsuitPartiesRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesLawsuitPartiesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesLawsuitPartiesResponse,
			Types.CirclesLawsuitPartiesRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_lawsuit_parties" }, options)
	}

	/**
	 * Círculos - Vizinhos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesNeighbors('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesNeighbors({ q: 'doc{12345678900}' });
	 * @dataset circles_neighbors
	 */
	async circlesNeighbors(
		docOrParams: string | Types.CirclesNeighborsRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesNeighborsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesNeighborsResponse,
			Types.CirclesNeighborsRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_neighbors" }, options)
	}

	/**
	 * Círculos - Sócios
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesPartners('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesPartners({ q: 'doc{12345678900}' });
	 * @dataset circles_partners
	 */
	async circlesPartners(
		docOrParams: string | Types.CirclesPartnersRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesPartnersResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesPartnersResponse,
			Types.CirclesPartnersRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_partners" }, options)
	}

	/**
	 * Círculos - Parentes
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.circlesRelatives('12345678900');
	 * // Or using params object
	 * await api.pessoas.circlesRelatives({ q: 'doc{12345678900}' });
	 * @dataset circles_relatives
	 */
	async circlesRelatives(
		docOrParams: string | Types.CirclesRelativesRequest,
		options?: RequestOptions,
	): Promise<Types.CirclesRelativesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CirclesRelativesResponse,
			Types.CirclesRelativesRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "circles_relatives" }, options)
	}

	/**
	 * Conselhos de Classe
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.classOrganization('12345678900');
	 * // Or using params object
	 * await api.pessoas.classOrganization({ q: 'doc{12345678900}' });
	 * @dataset class_organization
	 */
	async classOrganization(
		docOrParams: string | Types.ClassOrganizationRequest,
		options?: RequestOptions,
	): Promise<Types.ClassOrganizationResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ClassOrganizationResponse,
			Types.ClassOrganizationRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "class_organization" }, options)
	}

	/**
	 * Presença em Cobrança
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.collections('12345678900');
	 * // Or using params object
	 * await api.pessoas.collections({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "collections" }, options)
	}

	/**
	 * Grupo Empresarial - Emprego
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.companyGroupEmployed('12345678900');
	 * // Or using params object
	 * await api.pessoas.companyGroupEmployed({ q: 'doc{12345678900}' });
	 * @dataset company_group_employed
	 */
	async companyGroupEmployed(
		docOrParams: string | Types.CompanyGroupEmployedRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupEmployedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupEmployedResponse,
			Types.CompanyGroupEmployedRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "company_group_employed" }, options)
	}

	/**
	 * Grupo Empresarial - Família
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.companyGroupFamilyOwnership('12345678900');
	 * // Or using params object
	 * await api.pessoas.companyGroupFamilyOwnership({ q: 'doc{12345678900}' });
	 * @dataset company_group_family_ownership
	 */
	async companyGroupFamilyOwnership(
		docOrParams: string | Types.CompanyGroupFamilyOwnershipRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupFamilyOwnershipResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupFamilyOwnershipResponse,
			Types.CompanyGroupFamilyOwnershipRequest & { Datasets: string }
		>(
			"/pessoas",
			{ ...params, Datasets: "company_group_family_ownership" },
			options,
		)
	}

	/**
	 * Grupo Empresarial - Sociedade
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.companyGroupOwnership('12345678900');
	 * // Or using params object
	 * await api.pessoas.companyGroupOwnership({ q: 'doc{12345678900}' });
	 * @dataset company_group_ownership
	 */
	async companyGroupOwnership(
		docOrParams: string | Types.CompanyGroupOwnershipRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupOwnershipResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupOwnershipResponse,
			Types.CompanyGroupOwnershipRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "company_group_ownership" }, options)
	}

	/**
	 * Grupo Empresarial - Processos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.companyGroupSued('12345678900');
	 * // Or using params object
	 * await api.pessoas.companyGroupSued({ q: 'doc{12345678900}' });
	 * @dataset company_group_sued
	 */
	async companyGroupSued(
		docOrParams: string | Types.CompanyGroupSuedRequest,
		options?: RequestOptions,
	): Promise<Types.CompanyGroupSuedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.CompanyGroupSuedResponse,
			Types.CompanyGroupSuedRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "company_group_sued" }, options)
	}

	/**
	 * Informações Sócio-Demográficas
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.demographicData('12345678900');
	 * // Or using params object
	 * await api.pessoas.demographicData({ q: 'doc{12345678900}' });
	 * @dataset demographic_data
	 */
	async demographicData(
		docOrParams: string | Types.DemographicDataRequest,
		options?: RequestOptions,
	): Promise<Types.DemographicDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.DemographicDataResponse,
			Types.DemographicDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "demographic_data" }, options)
	}

	/**
	 * Dados de Sites
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.domains('12345678900');
	 * // Or using params object
	 * await api.pessoas.domains({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "domains" }, options)
	}

	/**
	 * Dados de Sites - Estendido
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.domainsExtended('12345678900');
	 * // Or using params object
	 * await api.pessoas.domainsExtended({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "domains_extended" }, options)
	}

	/**
	 * Candidatos Eleitorais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.electionCandidateData('12345678900');
	 * // Or using params object
	 * await api.pessoas.electionCandidateData({ q: 'doc{12345678900}' });
	 * @dataset election_candidate_data
	 */
	async electionCandidateData(
		docOrParams: string | Types.ElectionCandidateDataRequest,
		options?: RequestOptions,
	): Promise<Types.ElectionCandidateDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ElectionCandidateDataResponse,
			Types.ElectionCandidateDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "election_candidate_data" }, options)
	}

	/**
	 * Doações Eleitorais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.electoralDonors('12345678900');
	 * // Or using params object
	 * await api.pessoas.electoralDonors({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "electoral_donors" }, options)
	}

	/**
	 * Prestadores de Serviços Eleitorais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.electoralProviders('12345678900');
	 * // Or using params object
	 * await api.pessoas.electoralProviders({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "electoral_providers" }, options)
	}

	/**
	 * E-mails - Estendido
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.emailsExtended('12345678900');
	 * // Or using params object
	 * await api.pessoas.emailsExtended({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "emails_extended" }, options)
	}

	/**
	 * Dados Financeiros Familiares
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.familyFinancialData('12345678900');
	 * // Or using params object
	 * await api.pessoas.familyFinancialData({ q: 'doc{12345678900}' });
	 * @dataset family_financial_data
	 */
	async familyFinancialData(
		docOrParams: string | Types.FamilyFinancialDataRequest,
		options?: RequestOptions,
	): Promise<Types.FamilyFinancialDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FamilyFinancialDataResponse,
			Types.FamilyFinancialDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "family_financial_data" }, options)
	}

	/**
	 * Risco Financeiro Familiar
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.familyFinancialRisk('12345678900');
	 * // Or using params object
	 * await api.pessoas.familyFinancialRisk({ q: 'doc{12345678900}' });
	 * @dataset family_financial_risk
	 */
	async familyFinancialRisk(
		docOrParams: string | Types.FamilyFinancialRiskRequest,
		options?: RequestOptions,
	): Promise<Types.FamilyFinancialRiskResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FamilyFinancialRiskResponse,
			Types.FamilyFinancialRiskRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "family_financial_risk" }, options)
	}

	/**
	 * Dados de Distribuição de Processos Judiciais Familiares
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.familyLawsuitsDistributionData('12345678900');
	 * // Or using params object
	 * await api.pessoas.familyLawsuitsDistributionData({ q: 'doc{12345678900}' });
	 * @dataset family_lawsuits_distribution_data
	 */
	async familyLawsuitsDistributionData(
		docOrParams: string | Types.FamilyLawsuitsDistributionDataRequest,
		options?: RequestOptions,
	): Promise<Types.FamilyLawsuitsDistributionDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FamilyLawsuitsDistributionDataResponse,
			Types.FamilyLawsuitsDistributionDataRequest & { Datasets: string }
		>(
			"/pessoas",
			{ ...params, Datasets: "family_lawsuits_distribution_data" },
			options,
		)
	}

	/**
	 * Participação Online Familiar
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.familyOnlineParticipation('12345678900');
	 * // Or using params object
	 * await api.pessoas.familyOnlineParticipation({ q: 'doc{12345678900}' });
	 * @dataset family_online_participation
	 */
	async familyOnlineParticipation(
		docOrParams: string | Types.FamilyOnlineParticipationRequest,
		options?: RequestOptions,
	): Promise<Types.FamilyOnlineParticipationResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FamilyOnlineParticipationResponse,
			Types.FamilyOnlineParticipationRequest & { Datasets: string }
		>(
			"/pessoas",
			{ ...params, Datasets: "family_online_participation" },
			options,
		)
	}

	/**
	 * Histórico Político Familiar
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.familyPoliticalHistory('12345678900');
	 * // Or using params object
	 * await api.pessoas.familyPoliticalHistory({ q: 'doc{12345678900}' });
	 * @dataset family_political_history
	 */
	async familyPoliticalHistory(
		docOrParams: string | Types.FamilyPoliticalHistoryRequest,
		options?: RequestOptions,
	): Promise<Types.FamilyPoliticalHistoryResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FamilyPoliticalHistoryResponse,
			Types.FamilyPoliticalHistoryRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "family_political_history" }, options)
	}

	/**
	 * Benefícios Sociais Familiares
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.familySocialAssistance('12345678900');
	 * // Or using params object
	 * await api.pessoas.familySocialAssistance({ q: 'doc{12345678900}' });
	 * @dataset family_social_assistance
	 */
	async familySocialAssistance(
		docOrParams: string | Types.FamilySocialAssistanceRequest,
		options?: RequestOptions,
	): Promise<Types.FamilySocialAssistanceResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FamilySocialAssistanceResponse,
			Types.FamilySocialAssistanceRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "family_social_assistance" }, options)
	}

	/**
	 * Informações Financeiras
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.financialData('12345678900');
	 * // Or using params object
	 * await api.pessoas.financialData({ q: 'doc{12345678900}' });
	 * @dataset financial_data
	 */
	async financialData(
		docOrParams: string | Types.FinancialDataRequest,
		options?: RequestOptions,
	): Promise<Types.FinancialDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FinancialDataResponse,
			Types.FinancialDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "financial_data" }, options)
	}

	/**
	 * Interesses Financeiros
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.financialInterests('12345678900');
	 * // Or using params object
	 * await api.pessoas.financialInterests({ q: 'doc{12345678900}' });
	 * @dataset financial_interests
	 */
	async financialInterests(
		docOrParams: string | Types.FinancialInterestsRequest,
		options?: RequestOptions,
	): Promise<Types.FinancialInterestsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FinancialInterestsResponse,
			Types.FinancialInterestsRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "financial_interests" }, options)
	}

	/**
	 * Risco Financeiro
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.financialRisk('12345678900');
	 * // Or using params object
	 * await api.pessoas.financialRisk({ q: 'doc{12345678900}' });
	 * @dataset financial_risk
	 */
	async financialRisk(
		docOrParams: string | Types.FinancialRiskRequest,
		options?: RequestOptions,
	): Promise<Types.FinancialRiskResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FinancialRiskResponse,
			Types.FinancialRiskRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "financial_risk" }, options)
	}

	/**
	 * KYC e Compliance dos Familiares de Primeiro Nível
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.firstLevelRelativesKyc('12345678900');
	 * // Or using params object
	 * await api.pessoas.firstLevelRelativesKyc({ q: 'doc{12345678900}' });
	 * @dataset first_level_relatives_kyc
	 */
	async firstLevelRelativesKyc(
		docOrParams: string | Types.FirstLevelRelativesKycRequest,
		options?: RequestOptions,
	): Promise<Types.FirstLevelRelativesKycResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FirstLevelRelativesKycResponse,
			Types.FirstLevelRelativesKycRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "first_level_relatives_kyc" }, options)
	}

	/**
	 * Processos Judiciais e Administrativos de Familiares de Primeiro Nível
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.firstLevelRelativesLawsuitData('12345678900');
	 * // Or using params object
	 * await api.pessoas.firstLevelRelativesLawsuitData({ q: 'doc{12345678900}' });
	 * @dataset first_level_relatives_lawsuit_data
	 */
	async firstLevelRelativesLawsuitData(
		docOrParams: string | Types.FirstLevelRelativesLawsuitDataRequest,
		options?: RequestOptions,
	): Promise<Types.FirstLevelRelativesLawsuitDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FirstLevelRelativesLawsuitDataResponse,
			Types.FirstLevelRelativesLawsuitDataRequest & { Datasets: string }
		>(
			"/pessoas",
			{ ...params, Datasets: "first_level_relatives_lawsuit_data" },
			options,
		)
	}

	/**
	 * Indicadores e Características
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.flagsAndFeatures('12345678900');
	 * // Or using params object
	 * await api.pessoas.flagsAndFeatures({ q: 'doc{12345678900}' });
	 * @dataset flags_and_features
	 */
	async flagsAndFeatures(
		docOrParams: string | Types.FlagsAndFeaturesRequest,
		options?: RequestOptions,
	): Promise<Types.FlagsAndFeaturesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.FlagsAndFeaturesResponse,
			Types.FlagsAndFeaturesRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "flags_and_features" }, options)
	}

	/**
	 * Biografia de Vida - GPT x1.0
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.genaiDescriptionGptX10('12345678900');
	 * // Or using params object
	 * await api.pessoas.genaiDescriptionGptX10({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "genai_description_gpt_x1_0" },
			options,
		)
	}

	/**
	 * Biografia de Vida - GPT x1.5
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.genaiDescriptionGptX15('12345678900');
	 * // Or using params object
	 * await api.pessoas.genaiDescriptionGptX15({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "genai_description_gpt_x1_5" },
			options,
		)
	}

	/**
	 * Biografia de Vida - Mistral x1.0
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.genaiDescriptionMistralX10('12345678900');
	 * // Or using params object
	 * await api.pessoas.genaiDescriptionMistralX10({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "genai_description_mistral_x1_0" },
			options,
		)
	}

	/**
	 * Biografia de Vida - Mistral x1.5
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.genaiDescriptionMistralX15('12345678900');
	 * // Or using params object
	 * await api.pessoas.genaiDescriptionMistralX15({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "genai_description_mistral_x1_5" },
			options,
		)
	}

	/**
	 * Biografia de Vida - Nova x1.0
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.genaiDescriptionNovaX10('12345678900');
	 * // Or using params object
	 * await api.pessoas.genaiDescriptionNovaX10({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "genai_description_nova_x1_0" },
			options,
		)
	}

	/**
	 * Biografia de Vida - Nova x1.5
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.genaiDescriptionNovaX15('12345678900');
	 * // Or using params object
	 * await api.pessoas.genaiDescriptionNovaX15({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "genai_description_nova_x1_5" },
			options,
		)
	}

	/**
	 * Devedores do Governo
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.governmentDebtors('12345678900');
	 * // Or using params object
	 * await api.pessoas.governmentDebtors({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "government_debtors" }, options)
	}

	/**
	 * Histórico de Dados Básicos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.historicalBasicData('12345678900');
	 * // Or using params object
	 * await api.pessoas.historicalBasicData({ q: 'doc{12345678900}' });
	 * @dataset historical_basic_data
	 */
	async historicalBasicData(
		docOrParams: string | Types.HistoricalBasicDataRequest,
		options?: RequestOptions,
	): Promise<Types.HistoricalBasicDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.HistoricalBasicDataResponse,
			Types.HistoricalBasicDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "historical_basic_data" }, options)
	}

	/**
	 * Probabilidade de Negativação
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.indebtednessQuestion('12345678900');
	 * // Or using params object
	 * await api.pessoas.indebtednessQuestion({ q: 'doc{12345678900}' });
	 * @dataset indebtedness_question
	 */
	async indebtednessQuestion(
		docOrParams: string | Types.IndebtednessQuestionRequest,
		options?: RequestOptions,
	): Promise<Types.IndebtednessQuestionResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.IndebtednessQuestionResponse,
			Types.IndebtednessQuestionRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "indebtedness_question" }, options)
	}

	/**
	 * Propriedades Industriais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.industrialProperty('12345678900');
	 * // Or using params object
	 * await api.pessoas.industrialProperty({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "industrial_property" }, options)
	}

	/**
	 * Dados de Influência
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.influenceData('12345678900');
	 * // Or using params object
	 * await api.pessoas.influenceData({ q: 'doc{12345678900}' });
	 * @dataset influence_data
	 */
	async influenceData(
		docOrParams: string | Types.InfluenceDataRequest,
		options?: RequestOptions,
	): Promise<Types.InfluenceDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.InfluenceDataResponse,
			Types.InfluenceDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "influence_data" }, options)
	}

	/**
	 * Interesses e Comportamentos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.interestsAndBehaviors('12345678900');
	 * // Or using params object
	 * await api.pessoas.interestsAndBehaviors({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "interests_and_behaviors" }, options)
	}

	/**
	 * KYC e Compliance
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.kyc('12345678900');
	 * // Or using params object
	 * await api.pessoas.kyc({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "kyc" }, options)
	}

	/**
	 * Dados de Distribuição de Processos Judiciais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.lawsuitsDistributionData('12345678900');
	 * // Or using params object
	 * await api.pessoas.lawsuitsDistributionData({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "lawsuits_distribution_data" },
			options,
		)
	}

	/**
	 * Licenças e Autorizações
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.licensesAndAuthorizations('12345678900');
	 * // Or using params object
	 * await api.pessoas.licensesAndAuthorizations({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "licenses_and_authorizations" },
			options,
		)
	}

	/**
	 * Momentos de Vida
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.lifeStages('12345678900');
	 * // Or using params object
	 * await api.pessoas.lifeStages({ q: 'doc{12345678900}' });
	 * @dataset life_stages
	 */
	async lifeStages(
		docOrParams: string | Types.LifeStagesRequest,
		options?: RequestOptions,
	): Promise<Types.LifeStagesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.LifeStagesResponse,
			Types.LifeStagesRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "life_stages" }, options)
	}

	/**
	 * Exposição e Perfil na Mídia
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.mediaProfileAndExposure('12345678900');
	 * // Or using params object
	 * await api.pessoas.mediaProfileAndExposure({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "media_profile_and_exposure" },
			options,
		)
	}

	/**
	 * Dados Profissionais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.occupationData('12345678900');
	 * // Or using params object
	 * await api.pessoas.occupationData({ q: 'doc{12345678900}' });
	 * @dataset occupation_data
	 */
	async occupationData(
		docOrParams: string | Types.OccupationDataRequest,
		options?: RequestOptions,
	): Promise<Types.OccupationDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OccupationDataResponse,
			Types.OccupationDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "occupation_data" }, options)
	}

	/**
	 * Anúncios Online
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.onlineAds('12345678900');
	 * // Or using params object
	 * await api.pessoas.onlineAds({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "online_ads" }, options)
	}

	/**
	 * Compliance de Casas de Aposta
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.onlineBettingCompliance('12345678900');
	 * // Or using params object
	 * await api.pessoas.onlineBettingCompliance({ q: 'doc{12345678900}' });
	 * @dataset online_betting_compliance
	 */
	async onlineBettingCompliance(
		docOrParams: string | Types.OnlineBettingComplianceRequest,
		options?: RequestOptions,
	): Promise<Types.OnlineBettingComplianceResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OnlineBettingComplianceResponse,
			Types.OnlineBettingComplianceRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "online_betting_compliance" }, options)
	}

	/**
	 * Propensão à Aposta Online
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.onlineBettingPropensity('12345678900');
	 * // Or using params object
	 * await api.pessoas.onlineBettingPropensity({ q: 'doc{12345678900}' });
	 * @dataset online_betting_propensity
	 */
	async onlineBettingPropensity(
		docOrParams: string | Types.OnlineBettingPropensityRequest,
		options?: RequestOptions,
	): Promise<Types.OnlineBettingPropensityResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OnlineBettingPropensityResponse,
			Types.OnlineBettingPropensityRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "online_betting_propensity" }, options)
	}

	/**
	 * Presença Online
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.onlinePresence('12345678900');
	 * // Or using params object
	 * await api.pessoas.onlinePresence({ q: 'doc{12345678900}' });
	 * @dataset online_presence
	 */
	async onlinePresence(
		docOrParams: string | Types.OnlinePresenceRequest,
		options?: RequestOptions,
	): Promise<Types.OnlinePresenceResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.OnlinePresenceResponse,
			Types.OnlinePresenceRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "online_presence" }, options)
	}

	/**
	 * Passagens pela Web
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.passages('12345678900');
	 * // Or using params object
	 * await api.pessoas.passages({ q: 'doc{12345678900}' });
	 * @dataset passages
	 */
	async passages(
		docOrParams: string | Types.PassagesRequest,
		options?: RequestOptions,
	): Promise<Types.PassagesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.PassagesResponse,
			Types.PassagesRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "passages" }, options)
	}

	/**
	 * Telefones - Estendido
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.phonesExtended('12345678900');
	 * // Or using params object
	 * await api.pessoas.phonesExtended({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "phones_extended" }, options)
	}

	/**
	 * Envolvimento Político
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.politicalInvolvement('12345678900');
	 * // Or using params object
	 * await api.pessoas.politicalInvolvement({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "political_involvement" }, options)
	}

	/**
	 * Relacionamentos Políticos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.politicalRelationships('12345678900');
	 * // Or using params object
	 * await api.pessoas.politicalRelationships({ q: 'doc{12345678900}' });
	 * @dataset political_relationships
	 */
	async politicalRelationships(
		docOrParams: string | Types.PoliticalRelationshipsRequest,
		options?: RequestOptions,
	): Promise<Types.PoliticalRelationshipsResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.PoliticalRelationshipsResponse,
			Types.PoliticalRelationshipsRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "political_relationships" }, options)
	}

	/**
	 * Processos Judiciais e Administrativos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.processes('12345678900');
	 * // Or using params object
	 * await api.pessoas.processes({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "processes" }, options)
	}

	/**
	 * Servidores Públicos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.professionData('12345678900');
	 * // Or using params object
	 * await api.pessoas.professionData({ q: 'doc{12345678900}' });
	 * @dataset profession_data
	 */
	async professionData(
		docOrParams: string | Types.ProfessionDataRequest,
		options?: RequestOptions,
	): Promise<Types.ProfessionDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ProfessionDataResponse,
			Types.ProfessionDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "profession_data" }, options)
	}

	/**
	 * Turnover Profissional
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.professionalTurnover('12345678900');
	 * // Or using params object
	 * await api.pessoas.professionalTurnover({ q: 'doc{12345678900}' });
	 * @dataset professional_turnover
	 */
	async professionalTurnover(
		docOrParams: string | Types.ProfessionalTurnoverRequest,
		options?: RequestOptions,
	): Promise<Types.ProfessionalTurnoverResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.ProfessionalTurnoverResponse,
			Types.ProfessionalTurnoverRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "professional_turnover" }, options)
	}

	/**
	 * QSA - Casas de Apostas
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.qsaBetData('12345678900');
	 * // Or using params object
	 * await api.pessoas.qsaBetData({ q: 'doc{12345678900}' });
	 * @dataset qsa_bet_data
	 */
	async qsaBetData(
		docOrParams: string | Types.QsaBetDataRequest,
		options?: RequestOptions,
	): Promise<Types.QsaBetDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.QsaBetDataResponse,
			Types.QsaBetDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "qsa_bet_data" }, options)
	}

	/**
	 * Dados Cadastrais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.registrationData('12345678900');
	 * // Or using params object
	 * await api.pessoas.registrationData({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "registration_data" }, options)
	}

	/**
	 * Relacionamentos Pessoais
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.relatedPeople('12345678900');
	 * // Or using params object
	 * await api.pessoas.relatedPeople({ q: 'doc{12345678900}' });
	 * @dataset related_people
	 */
	async relatedPeople(
		docOrParams: string | Types.RelatedPeopleRequest,
		options?: RequestOptions,
	): Promise<Types.RelatedPeopleResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.RelatedPeopleResponse,
			Types.RelatedPeopleRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "related_people" }, options)
	}

	/**
	 * Endereços - Pessoas Relacionadas
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.relatedPeopleAddresses('12345678900');
	 * // Or using params object
	 * await api.pessoas.relatedPeopleAddresses({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "related_people_addresses" }, options)
	}

	/**
	 * E-mails - Pessoas Relacionadas
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.relatedPeopleEmails('12345678900');
	 * // Or using params object
	 * await api.pessoas.relatedPeopleEmails({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "related_people_emails" }, options)
	}

	/**
	 * Telefones - Pessoas Relacionadas
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.relatedPeoplePhones('12345678900');
	 * // Or using params object
	 * await api.pessoas.relatedPeoplePhones({ q: 'doc{12345678900}' });
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
		>("/pessoas", { ...params, Datasets: "related_people_phones" }, options)
	}

	/**
	 * Dados de Segurança
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.securityData('12345678900');
	 * // Or using params object
	 * await api.pessoas.securityData({ q: 'doc{12345678900}' });
	 * @dataset security_data
	 */
	async securityData(
		docOrParams: string | Types.SecurityDataRequest,
		options?: RequestOptions,
	): Promise<Types.SecurityDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.SecurityDataResponse,
			Types.SecurityDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "security_data" }, options)
	}

	/**
	 * Programas de Benefícios e Assistência Social
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.socialAssistance('12345678900');
	 * // Or using params object
	 * await api.pessoas.socialAssistance({ q: 'doc{12345678900}' });
	 * @dataset social_assistance
	 */
	async socialAssistance(
		docOrParams: string | Types.SocialAssistanceRequest,
		options?: RequestOptions,
	): Promise<Types.SocialAssistanceResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.SocialAssistanceResponse,
			Types.SocialAssistanceRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "social_assistance" }, options)
	}

	/**
	 * Programas de Benefícios e Assistência Social - Estendido
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.socialAssistanceExtended('12345678900');
	 * // Or using params object
	 * await api.pessoas.socialAssistanceExtended({ q: 'doc{12345678900}' });
	 * @dataset social_assistance_extended
	 */
	async socialAssistanceExtended(
		docOrParams: string | Types.SocialAssistanceExtendedRequest,
		options?: RequestOptions,
	): Promise<Types.SocialAssistanceExtendedResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.SocialAssistanceExtendedResponse,
			Types.SocialAssistanceExtendedRequest & { Datasets: string }
		>(
			"/pessoas",
			{ ...params, Datasets: "social_assistance_extended" },
			options,
		)
	}

	/**
	 * Exposição Esportiva
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.sportsExposure('12345678900');
	 * // Or using params object
	 * await api.pessoas.sportsExposure({ q: 'doc{12345678900}' });
	 * @dataset sports_exposure
	 */
	async sportsExposure(
		docOrParams: string | Types.SportsExposureRequest,
		options?: RequestOptions,
	): Promise<Types.SportsExposureResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.SportsExposureResponse,
			Types.SportsExposureRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "sports_exposure" }, options)
	}

	/**
	 * Dados Unificados para Modelagem x1.0
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.unifiedModelingDataX10('12345678900');
	 * // Or using params object
	 * await api.pessoas.unifiedModelingDataX10({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "unified_modeling_data_x1_0" },
			options,
		)
	}

	/**
	 * Dados Unificados para Modelagem x1.5
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.unifiedModelingDataX15('12345678900');
	 * // Or using params object
	 * await api.pessoas.unifiedModelingDataX15({ q: 'doc{12345678900}' });
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
			"/pessoas",
			{ ...params, Datasets: "unified_modeling_data_x1_5" },
			options,
		)
	}

	/**
	 * Histórico Escolar e Acadêmico
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.universityStudentData('12345678900');
	 * // Or using params object
	 * await api.pessoas.universityStudentData({ q: 'doc{12345678900}' });
	 * @dataset university_student_data
	 */
	async universityStudentData(
		docOrParams: string | Types.UniversityStudentDataRequest,
		options?: RequestOptions,
	): Promise<Types.UniversityStudentDataResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.UniversityStudentDataResponse,
			Types.UniversityStudentDataRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "university_student_data" }, options)
	}

	/**
	 * Veículos
	 * @param docOrParams - CPF string (e.g., '12345678900') or params object
	 * @example
	 * // Using CPF directly
	 * await api.pessoas.vehicles('12345678900');
	 * // Or using params object
	 * await api.pessoas.vehicles({ q: 'doc{12345678900}' });
	 * @dataset vehicles
	 */
	async vehicles(
		docOrParams: string | Types.VehiclesRequest,
		options?: RequestOptions,
	): Promise<Types.VehiclesResponse> {
		const params =
			typeof docOrParams === "string"
				? { q: `doc{${docOrParams}}` }
				: docOrParams
		return this.http.post<
			Types.VehiclesResponse,
			Types.VehiclesRequest & { Datasets: string }
		>("/pessoas", { ...params, Datasets: "vehicles" }, options)
	}

	/**
	 * Query multiple datasets at once
	 * @param doc - CPF string (e.g., '12345678900')
	 * @param datasets - Array of dataset names to query
	 * @example
	 * // Query basic_data and emails
	 * await api.pessoas.query('12345678900', ['basic_data', 'emails']);
	 */
	async query(
		doc: string,
		datasets: string[],
		options?: RequestOptions,
	): Promise<unknown> {
		return this.http.post<unknown, { q: string; Datasets: string }>(
			"/pessoas",
			{ q: `doc{${doc}}`, Datasets: datasets.join(",") },
			options,
		)
	}
}
