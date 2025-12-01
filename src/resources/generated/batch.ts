// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json
// Domain: batch
// Operations: 8

import { BaseResource } from "../base"
import type { RequestOptions } from "../../types/config"
import type * as Types from "../../types/generated/batch.types"

export class BatchResource extends BaseResource {
	/**
	 * Salvar Definição
	 */
	async saveJobDefinition(
		params: Types.SaveJobDefinitionRequest,
		options?: RequestOptions,
	): Promise<Types.SaveJobDefinitionResponse> {
		return this.http.post<
			Types.SaveJobDefinitionResponse,
			Types.SaveJobDefinitionRequest
		>("/lote/salvarDefinicao", params, options)
	}

	/**
	 * Iniciar Execução
	 */
	async startJobExecution(
		params: Types.StartJobExecutionRequest,
		options?: RequestOptions,
	): Promise<Types.StartJobExecutionResponse> {
		return this.http.post<
			Types.StartJobExecutionResponse,
			Types.StartJobExecutionRequest
		>("/lote/iniciarExecucao", params, options)
	}

	/**
	 * Cancelar Execução
	 */
	async cancelJobExecution(
		params: Types.CancelJobExecutionRequest,
		options?: RequestOptions,
	): Promise<Types.CancelJobExecutionResponse> {
		return this.http.post<
			Types.CancelJobExecutionResponse,
			Types.CancelJobExecutionRequest
		>("/lote/cancelarExecucao", params, options)
	}

	/**
	 * Pausar Execução
	 */
	async pauseJobExecution(
		params: Types.PauseJobExecutionRequest,
		options?: RequestOptions,
	): Promise<Types.PauseJobExecutionResponse> {
		return this.http.post<
			Types.PauseJobExecutionResponse,
			Types.PauseJobExecutionRequest
		>("/lote/pausarExecucao", params, options)
	}

	/**
	 * Reiniciar Execução
	 */
	async restartJobExecution(
		params: Types.RestartJobExecutionRequest,
		options?: RequestOptions,
	): Promise<Types.RestartJobExecutionResponse> {
		return this.http.post<
			Types.RestartJobExecutionResponse,
			Types.RestartJobExecutionRequest
		>("/lote/reiniciarExecucao", params, options)
	}

	/**
	 * Resumir Execução
	 */
	async resumeJobExecution(
		params: Types.ResumeJobExecutionRequest,
		options?: RequestOptions,
	): Promise<Types.ResumeJobExecutionResponse> {
		return this.http.post<
			Types.ResumeJobExecutionResponse,
			Types.ResumeJobExecutionRequest
		>("/lote/resumirExecucao", params, options)
	}

	/**
	 * Obter Detalhes
	 */
	async getJobDetails(
		params: Types.GetJobDetailsRequest,
		options?: RequestOptions,
	): Promise<Types.GetJobDetailsResponse> {
		return this.http.post<
			Types.GetJobDetailsResponse,
			Types.GetJobDetailsRequest
		>("/lote/obterDetalhes", params, options)
	}

	/**
	 * Listar
	 */
	async listJobs(
		params: Types.ListJobsRequest,
		options?: RequestOptions,
	): Promise<Types.ListJobsResponse> {
		return this.http.post<Types.ListJobsResponse, Types.ListJobsRequest>(
			"/lote/listar",
			params,
			options,
		)
	}
}
