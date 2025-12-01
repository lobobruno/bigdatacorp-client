export interface ListRequest {
	OrderByDescendingDate?: boolean
	Cursor?: string
	PageSize?: number
	FilterByParameters?: string
}

export interface ListResponse {
	ActiveSubscriptions?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}

export interface SubscribeRequest {
	SubscriptionHooks?: string
	QueryId?: string
	Q?: string
	View?: string
	Datasets?: string
	Api?: string
}

export interface SubscribeResponse {
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
	SubscriptionId?: string
}

export interface UnsubscribeRequest {
	SubscriptionIds?: unknown[]
	QueryIds?: unknown[]
	Api?: string
	Datasets?: string
	Parameters?: string
}

export interface UnsubscribeResponse {
	UnsubscriptionsStatus?: unknown[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}

export interface DiffExplainerRequest {
	SubscriptionId?: string
	QueryId1?: string
	QueryId2?: string
	Json1?: string
	Json2?: string
	API?: string
}

export interface DiffExplainerResponse {
	SubscriptionDiff?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}

export interface SetUserSettingsRequest {
	AccessToken?: string
	AuthorizationKey?: string
	AuthorizationToken?: string
	AuthorizationMethod?: string
	OAuthBasicToken?: string
	OAuthPublicKey?: string
	OAuthPrivateKey?: string
	OAuthURLTarget?: string
	OAuthContentType?: string
	OAuthGrantType?: string
	OAuthExpectedTokenFieldName?: string
}

export interface SetUserSettingsResponse {
	SubscriptionConfiguration?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}

export interface DetailsRequest {
	SubscriptionId?: string
	Api?: string
	Datasets?: string
	Parameters?: string
}

export interface DetailsResponse {
	SubscriptionDetails?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}

export interface UpdateRequest {
	SubscriptionId?: string
	QueryId?: string
	Datasets?: string
	SubscriptionHooks?: string
}

export interface UpdateResponse {
	SubscriptionDetails?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}

export interface ReportRequest {
	Limit?: number
	PageId?: string
	OrderByDescendingDate?: boolean
}

export interface ReportResponse {
	SubscriptionDeliveryHistory?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}

export interface TestRequest {
	Limit?: number
	PageId?: string
	OrderByDescendingDate?: boolean
}

export interface TestResponse {
	SubscriptionTest?: Record<string, unknown>
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, unknown>
}
