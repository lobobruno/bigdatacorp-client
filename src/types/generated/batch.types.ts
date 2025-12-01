export interface SaveJobDefinitionRequest {
	JobId?: string
	InputFileUrl?: string
	InputFileDelimiter?: string
	InputFileHasHeader?: boolean
	OutputFileFormat?: string
	OutputFileEncoding?: string
	OutputFileDelimiter?: string
	OutputFileUrl?: string
	InputKeysHeader?: string
	InputFileSampleRate?: number
	InputFileExpectedNumberOfRecords?: number
	APIName?: string
	Datasets?: string
	View?: string
	QueryTemplate?: string
	SubscriptionHooks?: string
	APIResultLimit?: number
	Hooks?: string
	CopyEmails?: unknown[]
	/** Flag indicando se deve usar aspas duplas na separação de colunas no retorno */
	UseDoubleQuotes?: boolean
}

export interface SaveJobDefinitionResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
}

export interface StartJobExecutionRequest {
	/** Id único de job */
	JobId: string
}

export interface StartJobExecutionResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
}

export interface CancelJobExecutionRequest {
	/** Id único de job */
	JobId: string
}

export interface CancelJobExecutionResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
}

export interface PauseJobExecutionRequest {
	/** Id único de job */
	JobId: string
}

export interface PauseJobExecutionResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
}

export interface RestartJobExecutionRequest {
	/** Id único de job */
	JobId: string
}

export interface RestartJobExecutionResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
}

export interface ResumeJobExecutionRequest {
	/** Id único de job */
	JobId: string
}

export interface ResumeJobExecutionResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
}

export interface GetJobDetailsRequest {
	/** Id único de job */
	JobId: string
}

export interface GetJobDetailsResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
	CurrentJobStatus?: string
	TotalRecords?: number
	PercentComplete?: number
	ErrorPercent?: number
	ElapsedTime?: number
	EstimatedTotalTime?: number
	EstimatedJobCost?: number
	FirstQueryItem?: string
	OutputFileName?: string
	Observation?: string
	QueryAPI?: string
}

export interface ListJobsRequest {
	JobId?: string
	PageNumber?: number
	PageSize?: number
	SortByDescending?: boolean
	ShowHistoricalJobs?: boolean
	Filter?: Record<string, unknown>
}

export interface ListJobsResponse {
	JobId?: string
	StatusCode?: number
	StatusMessage?: string
	TotalExecutionTime?: number
	RequestTimestamp?: string
	TotalNumberOfCurrentJobs?: number
	TotalNumberOfJobs?: number
	Jobs?: unknown[]
}
