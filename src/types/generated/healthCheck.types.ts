export interface EmpresasRequest {
	Datasets: string
	/** Token de acesso do usuário */
	AccessToken: string
	/** Id do Token de acesso do usuário */
	TokenId: string
}

export interface EmpresasResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	Status?: Record<string, unknown>
}

export interface PessoasRequest {
	Datasets: string
	AccessToken: string
}

export interface PessoasResponse {
	Result?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	Status?: Record<string, unknown>
}
