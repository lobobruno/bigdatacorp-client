// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: ondemand
// Operations: 68

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/ondemand.types"

export class OndemandResource extends BaseResource {
	/**
	 * Sanções Administrativas do Banco Central
	 */
	async administrativeSanctionsPerson(
		params: Types.AdministrativeSanctionsPersonRequest,
		options?: RequestOptions,
	): Promise<Types.AdministrativeSanctionsPersonResponse> {
		return this.http.post<
			Types.AdministrativeSanctionsPersonResponse,
			Types.AdministrativeSanctionsPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Transportadores (RNTRC)
	 */
	async anttDataVehicle(
		params: Types.AnttDataVehicleRequest,
		options?: RequestOptions,
	): Promise<Types.AnttDataVehicleResponse> {
		return this.http.post<
			Types.AnttDataVehicleResponse,
			Types.AnttDataVehicleRequest
		>("/ondemand", params, options)
	}

	/**
	 * Cartão do SUS
	 */
	async cartaosusPerson(
		params: Types.CartaosusPersonRequest,
		options?: RequestOptions,
	): Promise<Types.CartaosusPersonResponse> {
		return this.http.post<
			Types.CartaosusPersonResponse,
			Types.CartaosusPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão de Contratação Pessoas com Deficiência e Beneficiários Reabilitados da Previdência Social – Subsecretaria de Inspeção do Trabalho
	 */
	async cdcitCompany(
		params: Types.CdcitCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.CdcitCompanyResponse> {
		return this.http.post<
			Types.CdcitCompanyResponse,
			Types.CdcitCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa de Debitos Estadual
	 */
	async certDebtAbsenceByStateCompany(
		params: Types.CertDebtAbsenceByStateCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.CertDebtAbsenceByStateCompanyResponse> {
		return this.http.post<
			Types.CertDebtAbsenceByStateCompanyResponse,
			Types.CertDebtAbsenceByStateCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa de Débitos Estaduais
	 */
	async certDebtAbsenceByStatePerson(
		params: Types.CertDebtAbsenceByStatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.CertDebtAbsenceByStatePersonResponse> {
		return this.http.post<
			Types.CertDebtAbsenceByStatePersonResponse,
			Types.CertDebtAbsenceByStatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa de Débitos Trabalhistas
	 */
	async certLaborDebtAbsenceCompany(
		params: Types.CertLaborDebtAbsenceCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.CertLaborDebtAbsenceCompanyResponse> {
		return this.http.post<
			Types.CertLaborDebtAbsenceCompanyResponse,
			Types.CertLaborDebtAbsenceCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa de Débitos Trabalhistas
	 */
	async certLaborDebtAbsencePerson(
		params: Types.CertLaborDebtAbsencePersonRequest,
		options?: RequestOptions,
	): Promise<Types.CertLaborDebtAbsencePersonResponse> {
		return this.http.post<
			Types.CertLaborDebtAbsencePersonResponse,
			Types.CertLaborDebtAbsencePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta Rais Empregado
	 */
	async certRaisPerson(
		params: Types.CertRaisPersonRequest,
		options?: RequestOptions,
	): Promise<Types.CertRaisPersonResponse> {
		return this.http.post<
			Types.CertRaisPersonResponse,
			Types.CertRaisPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão SIPROQUIM
	 */
	async certSiproquimCompany(
		params: Types.CertSiproquimCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.CertSiproquimCompanyResponse> {
		return this.http.post<
			Types.CertSiproquimCompanyResponse,
			Types.CertSiproquimCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa CGU (Pessoa Jurídica)
	 */
	async cguNegativeCertificateCompany(
		params: Types.CguNegativeCertificateCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.CguNegativeCertificateCompanyResponse> {
		return this.http.post<
			Types.CguNegativeCertificateCompanyResponse,
			Types.CguNegativeCertificateCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa Correcional CGU (Pessoa Física)
	 */
	async cguNegativeCertificatePerson(
		params: Types.CguNegativeCertificatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.CguNegativeCertificatePersonResponse> {
		return this.http.post<
			Types.CguNegativeCertificatePersonResponse,
			Types.CguNegativeCertificatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa CNJ (Pessoa Jurídica)
	 */
	async cnjNegativeCertificateCompany(
		params: Types.CnjNegativeCertificateCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.CnjNegativeCertificateCompanyResponse> {
		return this.http.post<
			Types.CnjNegativeCertificateCompanyResponse,
			Types.CnjNegativeCertificateCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa CNJ (Pessoa Física)
	 */
	async cnjNegativeCertificatePerson(
		params: Types.CnjNegativeCertificatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.CnjNegativeCertificatePersonResponse> {
		return this.http.post<
			Types.CnjNegativeCertificatePersonResponse,
			Types.CnjNegativeCertificatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Dados de Habilitação COMEX
	 */
	async comexCompany(
		params: Types.ComexCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.ComexCompanyResponse> {
		return this.http.post<
			Types.ComexCompanyResponse,
			Types.ComexCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Processos no COMPROT
	 */
	async comprotProcessesCompany(
		params: Types.ComprotProcessesCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.ComprotProcessesCompanyResponse> {
		return this.http.post<
			Types.ComprotProcessesCompanyResponse,
			Types.ComprotProcessesCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Processos no COMPROT
	 */
	async comprotProcessesPerson(
		params: Types.ComprotProcessesPersonRequest,
		options?: RequestOptions,
	): Promise<Types.ComprotProcessesPersonResponse> {
		return this.http.post<
			Types.ComprotProcessesPersonResponse,
			Types.ComprotProcessesPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta NFe
	 */
	async dataReceipt(
		params: Types.DataReceiptRequest,
		options?: RequestOptions,
	): Promise<Types.DataReceiptResponse> {
		return this.http.post<Types.DataReceiptResponse, Types.DataReceiptRequest>(
			"/ondemand",
			params,
			options,
		)
	}

	/**
	 * Consulta Detran
	 */
	async detranDataVehicle(
		params: Types.DetranDataVehicleRequest,
		options?: RequestOptions,
	): Promise<Types.DetranDataVehicleResponse> {
		return this.http.post<
			Types.DetranDataVehicleResponse,
			Types.DetranDataVehicleRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Escrituração Contábil Digital
	 */
	async ecdCompany(
		params: Types.EcdCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.EcdCompanyResponse> {
		return this.http.post<Types.EcdCompanyResponse, Types.EcdCompanyRequest>(
			"/ondemand",
			params,
			options,
		)
	}

	/**
	 * Qualificação Cadastral no E-Social
	 */
	async esocialCertificatePerson(
		params: Types.EsocialCertificatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.EsocialCertificatePersonResponse> {
		return this.http.post<
			Types.EsocialCertificatePersonResponse,
			Types.EsocialCertificatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão FGTS
	 */
	async fgtsCompany(
		params: Types.FgtsCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.FgtsCompanyResponse> {
		return this.http.post<Types.FgtsCompanyResponse, Types.FgtsCompanyRequest>(
			"/ondemand",
			params,
			options,
		)
	}

	/**
	 * Consulta CTe
	 */
	async freightServiceCertificateReceipt(
		params: Types.FreightServiceCertificateReceiptRequest,
		options?: RequestOptions,
	): Promise<Types.FreightServiceCertificateReceiptResponse> {
		return this.http.post<
			Types.FreightServiceCertificateReceiptResponse,
			Types.FreightServiceCertificateReceiptRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Plano de Saúde na ANS [Temporariamente Indisponível]
	 */
	async healthInsurancePerson(
		params: Types.HealthInsurancePersonRequest,
		options?: RequestOptions,
	): Promise<Types.HealthInsurancePersonResponse> {
		return this.http.post<
			Types.HealthInsurancePersonResponse,
			Types.HealthInsurancePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa do Ibama
	 */
	async ibamaCertNegativaCompany(
		params: Types.IbamaCertNegativaCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.IbamaCertNegativaCompanyResponse> {
		return this.http.post<
			Types.IbamaCertNegativaCompanyResponse,
			Types.IbamaCertNegativaCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa do Ibama
	 */
	async ibamaCertNegativaPerson(
		params: Types.IbamaCertNegativaPersonRequest,
		options?: RequestOptions,
	): Promise<Types.IbamaCertNegativaPersonResponse> {
		return this.http.post<
			Types.IbamaCertNegativaPersonResponse,
			Types.IbamaCertNegativaPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão de Embargos do Ibama
	 */
	async ibamaEmbargadosCompany(
		params: Types.IbamaEmbargadosCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.IbamaEmbargadosCompanyResponse> {
		return this.http.post<
			Types.IbamaEmbargadosCompanyResponse,
			Types.IbamaEmbargadosCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão de Embargos do Ibama
	 */
	async ibamaEmbargadosPerson(
		params: Types.IbamaEmbargadosPersonRequest,
		options?: RequestOptions,
	): Promise<Types.IbamaEmbargadosPersonResponse> {
		return this.http.post<
			Types.IbamaEmbargadosPersonResponse,
			Types.IbamaEmbargadosPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão IRT
	 */
	async irtCertificateCompany(
		params: Types.IrtCertificateCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.IrtCertificateCompanyResponse> {
		return this.http.post<
			Types.IrtCertificateCompanyResponse,
			Types.IrtCertificateCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão IRT
	 */
	async irtCertificatePerson(
		params: Types.IrtCertificatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.IrtCertificatePersonResponse> {
		return this.http.post<
			Types.IrtCertificatePersonResponse,
			Types.IrtCertificatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão de Ações Trabalhistas (Pessoa Jurídica)
	 */
	async laborLawsuitsCertificateCompany(
		params: Types.LaborLawsuitsCertificateCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.LaborLawsuitsCertificateCompanyResponse> {
		return this.http.post<
			Types.LaborLawsuitsCertificateCompanyResponse,
			Types.LaborLawsuitsCertificateCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão de Ações Trabalhistas (Pessoa Física)
	 */
	async laborLawsuitsCertificatePerson(
		params: Types.LaborLawsuitsCertificatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.LaborLawsuitsCertificatePersonResponse> {
		return this.http.post<
			Types.LaborLawsuitsCertificatePersonResponse,
			Types.LaborLawsuitsCertificatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Representante Legal na Receita Federal
	 */
	async legalRepresentativeCompany(
		params: Types.LegalRepresentativeCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.LegalRepresentativeCompanyResponse> {
		return this.http.post<
			Types.LegalRepresentativeCompanyResponse,
			Types.LegalRepresentativeCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Inscrição Municipal
	 */
	async municipalRegistrationCompany(
		params: Types.MunicipalRegistrationCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.MunicipalRegistrationCompanyResponse> {
		return this.http.post<
			Types.MunicipalRegistrationCompanyResponse,
			Types.MunicipalRegistrationCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão de Nada Consta - Ações Judiciais
	 */
	async nadaConstaPerson(
		params: Types.NadaConstaPersonRequest,
		options?: RequestOptions,
	): Promise<Types.NadaConstaPersonResponse> {
		return this.http.post<
			Types.NadaConstaPersonResponse,
			Types.NadaConstaPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Antecedentes Criminais - Polícia Civil
	 */
	async pcAntecedenteByStatePerson(
		params: Types.PcAntecedenteByStatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PcAntecedenteByStatePersonResponse> {
		return this.http.post<
			Types.PcAntecedenteByStatePersonResponse,
			Types.PcAntecedenteByStatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Protestos Estadual
	 */
	async pesquisaProtestoByStateCompany(
		params: Types.PesquisaProtestoByStateCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PesquisaProtestoByStateCompanyResponse> {
		return this.http.post<
			Types.PesquisaProtestoByStateCompanyResponse,
			Types.PesquisaProtestoByStateCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Protestos Estadual
	 */
	async pesquisaProtestoByStatePerson(
		params: Types.PesquisaProtestoByStatePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PesquisaProtestoByStatePersonResponse> {
		return this.http.post<
			Types.PesquisaProtestoByStatePersonResponse,
			Types.PesquisaProtestoByStatePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Antecedentes Criminais - Polícia Federal
	 */
	async pfAntecedentePerson(
		params: Types.PfAntecedentePersonRequest,
		options?: RequestOptions,
	): Promise<Types.PfAntecedentePersonResponse> {
		return this.http.post<
			Types.PfAntecedentePersonResponse,
			Types.PfAntecedentePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão PGFN
	 */
	async pgfnCompany(
		params: Types.PgfnCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PgfnCompanyResponse> {
		return this.http.post<Types.PgfnCompanyResponse, Types.PgfnCompanyRequest>(
			"/ondemand",
			params,
			options,
		)
	}

	/**
	 * Certidão PGFN
	 */
	async pgfnPerson(
		params: Types.PgfnPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PgfnPersonResponse> {
		return this.http.post<Types.PgfnPersonResponse, Types.PgfnPersonRequest>(
			"/ondemand",
			params,
			options,
		)
	}

	/**
	 * Consulta de Arrecadação do Simples Nacional para MEI
	 */
	async pgmeiCompany(
		params: Types.PgmeiCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PgmeiCompanyResponse> {
		return this.http.post<
			Types.PgmeiCompanyResponse,
			Types.PgmeiCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Dados do PIS
	 */
	async pisPerson(
		params: Types.PisPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PisPersonResponse> {
		return this.http.post<Types.PisPersonResponse, Types.PisPersonRequest>(
			"/ondemand",
			params,
			options,
		)
	}

	/**
	 * Consulta de Boletim de Ocorrência - Policia Civil
	 */
	async policeReportBoPerson(
		params: Types.PoliceReportBoPersonRequest,
		options?: RequestOptions,
	): Promise<Types.PoliceReportBoPersonResponse> {
		return this.http.post<
			Types.PoliceReportBoPersonResponse,
			Types.PoliceReportBoPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Projetos Públicos
	 */
	async publicProjectsCompany(
		params: Types.PublicProjectsCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.PublicProjectsCompanyResponse> {
		return this.http.post<
			Types.PublicProjectsCompanyResponse,
			Types.PublicProjectsCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa de Protesto
	 */
	async queryPesquisaprotestoCompany(
		params: Types.QueryPesquisaprotestoCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.QueryPesquisaprotestoCompanyResponse> {
		return this.http.post<
			Types.QueryPesquisaprotestoCompanyResponse,
			Types.QueryPesquisaprotestoCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Negativa de Protesto
	 */
	async queryPesquisaprotestoPerson(
		params: Types.QueryPesquisaprotestoPersonRequest,
		options?: RequestOptions,
	): Promise<Types.QueryPesquisaprotestoPersonResponse> {
		return this.http.post<
			Types.QueryPesquisaprotestoPersonResponse,
			Types.QueryPesquisaprotestoPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Controle de Arquivos RAIS
	 */
	async raisConsultaCreaPerson(
		params: Types.RaisConsultaCreaPersonRequest,
		options?: RequestOptions,
	): Promise<Types.RaisConsultaCreaPersonResponse> {
		return this.http.post<
			Types.RaisConsultaCreaPersonResponse,
			Types.RaisConsultaCreaPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão Regulatória do Ibama
	 */
	async regularityCertificateIbamaCompany(
		params: Types.RegularityCertificateIbamaCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.RegularityCertificateIbamaCompanyResponse> {
		return this.http.post<
			Types.RegularityCertificateIbamaCompanyResponse,
			Types.RegularityCertificateIbamaCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certificado de Regularidade Ibama
	 */
	async regularityCertificateIbamaPerson(
		params: Types.RegularityCertificateIbamaPersonRequest,
		options?: RequestOptions,
	): Promise<Types.RegularityCertificateIbamaPersonResponse> {
		return this.http.post<
			Types.RegularityCertificateIbamaPersonResponse,
			Types.RegularityCertificateIbamaPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Restituição do Imposto de Renda
	 */
	async restituicaoPerson(
		params: Types.RestituicaoPersonRequest,
		options?: RequestOptions,
	): Promise<Types.RestituicaoPersonResponse> {
		return this.http.post<
			Types.RestituicaoPersonResponse,
			Types.RestituicaoPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de QSA na Receita Federal
	 */
	async rfQsaCompany(
		params: Types.RfQsaCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.RfQsaCompanyResponse> {
		return this.http.post<
			Types.RfQsaCompanyResponse,
			Types.RfQsaCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de CNPJ na Receita Federal
	 */
	async rfStatusCompany(
		params: Types.RfStatusCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.RfStatusCompanyResponse> {
		return this.http.post<
			Types.RfStatusCompanyResponse,
			Types.RfStatusCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de CPF na Receita Federal
	 */
	async rfStatusPerson(
		params: Types.RfStatusPersonRequest,
		options?: RequestOptions,
	): Promise<Types.RfStatusPersonResponse> {
		return this.http.post<
			Types.RfStatusPersonResponse,
			Types.RfStatusPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Licenças Sanitárias
	 */
	async sanitaryLicenseCompany(
		params: Types.SanitaryLicenseCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.SanitaryLicenseCompanyResponse> {
		return this.http.post<
			Types.SanitaryLicenseCompanyResponse,
			Types.SanitaryLicenseCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Licenças Sanitárias
	 */
	async sanitaryLicensePerson(
		params: Types.SanitaryLicensePersonRequest,
		options?: RequestOptions,
	): Promise<Types.SanitaryLicensePersonResponse> {
		return this.http.post<
			Types.SanitaryLicensePersonResponse,
			Types.SanitaryLicensePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Seguro Desemprego
	 */
	async seguroDesempregoPerson(
		params: Types.SeguroDesempregoPersonRequest,
		options?: RequestOptions,
	): Promise<Types.SeguroDesempregoPersonResponse> {
		return this.http.post<
			Types.SeguroDesempregoPersonResponse,
			Types.SeguroDesempregoPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certificado SICAR
	 */
	async sicarStatementAddress(
		params: Types.SicarStatementAddressRequest,
		options?: RequestOptions,
	): Promise<Types.SicarStatementAddressResponse> {
		return this.http.post<
			Types.SicarStatementAddressResponse,
			Types.SicarStatementAddressRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Parcelas no SIGEF
	 */
	async sigefInstallmentsCompany(
		params: Types.SigefInstallmentsCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.SigefInstallmentsCompanyResponse> {
		return this.http.post<
			Types.SigefInstallmentsCompanyResponse,
			Types.SigefInstallmentsCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Parcelas no SIGEF
	 */
	async sigefInstallmentsPerson(
		params: Types.SigefInstallmentsPersonRequest,
		options?: RequestOptions,
	): Promise<Types.SigefInstallmentsPersonResponse> {
		return this.http.post<
			Types.SigefInstallmentsPersonResponse,
			Types.SigefInstallmentsPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Optante pelo Simples
	 */
	async simplesCompany(
		params: Types.SimplesCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.SimplesCompanyResponse> {
		return this.http.post<
			Types.SimplesCompanyResponse,
			Types.SimplesCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta do SINTEGRA
	 */
	async sintegraCompany(
		params: Types.SintegraCompanyRequest,
		options?: RequestOptions,
	): Promise<Types.SintegraCompanyResponse> {
		return this.http.post<
			Types.SintegraCompanyResponse,
			Types.SintegraCompanyRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta do SINTEGRA (v2)
	 */
	async sintegraCompanyV2(
		params: Types.SintegraCompanyV2Request,
		options?: RequestOptions,
	): Promise<Types.SintegraCompanyV2Response> {
		return this.http.post<
			Types.SintegraCompanyV2Response,
			Types.SintegraCompanyV2Request
		>("/ondemand", params, options)
	}

	/**
	 * Consulta do SINTEGRA
	 */
	async sintegraPerson(
		params: Types.SintegraPersonRequest,
		options?: RequestOptions,
	): Promise<Types.SintegraPersonResponse> {
		return this.http.post<
			Types.SintegraPersonResponse,
			Types.SintegraPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta do SINTEGRA (v2)
	 */
	async sintegraPersonV2(
		params: Types.SintegraPersonV2Request,
		options?: RequestOptions,
	): Promise<Types.SintegraPersonV2Response> {
		return this.http.post<
			Types.SintegraPersonV2Response,
			Types.SintegraPersonV2Request
		>("/ondemand", params, options)
	}

	/**
	 * Consulta de Multa de Trânsito
	 */
	async trafficTicketPerson(
		params: Types.TrafficTicketPersonRequest,
		options?: RequestOptions,
	): Promise<Types.TrafficTicketPersonResponse> {
		return this.http.post<
			Types.TrafficTicketPersonResponse,
			Types.TrafficTicketPersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Certidão de Quitação Eleitoral do TSE
	 */
	async tseElectoralDischargePerson(
		params: Types.TseElectoralDischargePersonRequest,
		options?: RequestOptions,
	): Promise<Types.TseElectoralDischargePersonResponse> {
		return this.http.post<
			Types.TseElectoralDischargePersonResponse,
			Types.TseElectoralDischargePersonRequest
		>("/ondemand", params, options)
	}

	/**
	 * Consulta TSE de Local de Votação
	 */
	async tsePollingPlacePerson(
		params: Types.TsePollingPlacePersonRequest,
		options?: RequestOptions,
	): Promise<Types.TsePollingPlacePersonResponse> {
		return this.http.post<
			Types.TsePollingPlacePersonResponse,
			Types.TsePollingPlacePersonRequest
		>("/ondemand", params, options)
	}
}
