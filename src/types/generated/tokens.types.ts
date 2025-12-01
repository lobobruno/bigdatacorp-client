export interface GenerateRequest {
	/** Usuario de login */
	login: string
	/** Senha para o usuario */
	password: string
	/** Horas de validade do token */
	expires: number
}

export interface GenerateResponse {
	expiration?: string
	message?: string
	success?: boolean
	token?: string
	tokenID?: string
}

export interface DisableRequest {
	/** Usuario de login */
	login: string
	/** Senha para o usuario */
	password: string
	/** Token de acesso */
	token: string
}

export interface DisableResponse {
	message?: string
	success?: boolean
}

export interface DisableByIdRequest {
	/** Usuario de login */
	login: string
	/** Senha para o usuario */
	password: string
	/** Id do token de acesso */
	tokenID: string
}

export interface DisableByIdResponse {
	message?: string
	success?: boolean
}

export interface GetactivetokenidsRequest {
	/** Usuario de login */
	login: string
	/** Senha para o usuario */
	password: string
}

export interface GetactivetokenidsResponse {
	active_token_ids?: unknown[]
}
