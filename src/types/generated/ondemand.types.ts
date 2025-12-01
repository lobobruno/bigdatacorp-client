import type { Evidences, StatusItem } from "../responses.types"

export interface AdministrativeSanctionsPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface AdministrativeSanctionsPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface AnttDataVehicleRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface AnttDataVehicleResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CartaosusPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CartaosusPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CdcitCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CdcitCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CertDebtAbsenceByStateCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CertDebtAbsenceByStateCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CertDebtAbsenceByStatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CertDebtAbsenceByStatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CertLaborDebtAbsenceCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CertLaborDebtAbsenceCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CertLaborDebtAbsencePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CertLaborDebtAbsencePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CertRaisPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CertRaisPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CertSiproquimCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CertSiproquimCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CguNegativeCertificateCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CguNegativeCertificateCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CguNegativeCertificatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CguNegativeCertificatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CnjNegativeCertificateCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CnjNegativeCertificateCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface CnjNegativeCertificatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface CnjNegativeCertificatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface ComexCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ComexCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface ComprotProcessesCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ComprotProcessesCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface ComprotProcessesPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface ComprotProcessesPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface DataReceiptRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface DataReceiptResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface DetranDataVehicleRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface DetranDataVehicleResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface EcdCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EcdCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface EsocialCertificatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface EsocialCertificatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface FgtsCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FgtsCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface FreightServiceCertificateReceiptRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface FreightServiceCertificateReceiptResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface HealthInsurancePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface HealthInsurancePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface IbamaCertNegativaCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IbamaCertNegativaCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface IbamaCertNegativaPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IbamaCertNegativaPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface IbamaEmbargadosCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IbamaEmbargadosCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface IbamaEmbargadosPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IbamaEmbargadosPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface IrtCertificateCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IrtCertificateCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface IrtCertificatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface IrtCertificatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface LaborLawsuitsCertificateCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface LaborLawsuitsCertificateCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface LaborLawsuitsCertificatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface LaborLawsuitsCertificatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface LegalRepresentativeCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface LegalRepresentativeCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface MunicipalRegistrationCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface MunicipalRegistrationCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface NadaConstaPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface NadaConstaPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PcAntecedenteByStatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PcAntecedenteByStatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PesquisaProtestoByStateCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PesquisaProtestoByStateCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PesquisaProtestoByStatePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PesquisaProtestoByStatePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PfAntecedentePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PfAntecedentePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PgfnCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PgfnCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PgfnPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PgfnPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PgmeiCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PgmeiCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PisPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PisPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PoliceReportBoPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PoliceReportBoPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface PublicProjectsCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface PublicProjectsCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface QueryPesquisaprotestoCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface QueryPesquisaprotestoCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface QueryPesquisaprotestoPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface QueryPesquisaprotestoPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RaisConsultaCreaPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RaisConsultaCreaPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RegularityCertificateIbamaCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RegularityCertificateIbamaCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RegularityCertificateIbamaPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RegularityCertificateIbamaPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RestituicaoPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RestituicaoPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RfQsaCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RfQsaCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RfStatusCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RfStatusCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface RfStatusPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface RfStatusPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SanitaryLicenseCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SanitaryLicenseCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SanitaryLicensePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SanitaryLicensePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SeguroDesempregoPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SeguroDesempregoPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SicarStatementAddressRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SicarStatementAddressResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SigefInstallmentsCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SigefInstallmentsCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SigefInstallmentsPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SigefInstallmentsPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SimplesCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SimplesCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SintegraCompanyRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SintegraCompanyResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SintegraCompanyV2Request {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SintegraCompanyV2Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SintegraPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SintegraPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface SintegraPersonV2Request {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface SintegraPersonV2Response {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface TrafficTicketPersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface TrafficTicketPersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface TseElectoralDischargePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface TseElectoralDischargePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

export interface TsePollingPlacePersonRequest {
	/** String de parâmetros de entrada. */
	q: string
	/** String de services de consulta. */
	Datasets: string
	/** Limite de entidades retornadas. Usado para casos de chamadas de chave fraca. */
	Limit?: number
}

export interface TsePollingPlacePersonResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}
