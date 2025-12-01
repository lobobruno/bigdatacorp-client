// AUTO-GENERATED - DO NOT EDIT
// Generated from BDC_operations.json

import { HttpClient } from "./http/http-client"
import type { BigDataCorpConfig } from "./types/config"

import {
	BatchResource,
	EstatisticasResource,
	MonitoramentoResource,
	PrecosResource,
	EventosResource,
	HooksResource,
	MetadataResource,
	TokensResource,
	ViewsResource,
	EmpresasResource,
	HealthCheckResource,
	MarketplaceResource,
	OndemandResource,
	PessoasResource,
	ProcessosResource,
	ProdutosResource,
	VeiculosResource,
} from "./resources/generated"

export class BigDataCorp {
	private readonly http: HttpClient

	public readonly batch: BatchResource
	public readonly estatisticas: EstatisticasResource
	public readonly monitoramento: MonitoramentoResource
	public readonly precos: PrecosResource
	public readonly eventos: EventosResource
	public readonly hooks: HooksResource
	public readonly metadata: MetadataResource
	public readonly tokens: TokensResource
	public readonly views: ViewsResource
	public readonly empresas: EmpresasResource
	public readonly healthCheck: HealthCheckResource
	public readonly marketplace: MarketplaceResource
	public readonly ondemand: OndemandResource
	public readonly pessoas: PessoasResource
	public readonly processos: ProcessosResource
	public readonly produtos: ProdutosResource
	public readonly veiculos: VeiculosResource

	constructor(config: BigDataCorpConfig) {
		if (!config.accessToken) {
			throw new Error("AccessToken is required")
		}
		if (!config.tokenId) {
			throw new Error("TokenId is required")
		}

		this.http = new HttpClient(config)

		this.batch = new BatchResource(this.http)
		this.estatisticas = new EstatisticasResource(this.http)
		this.monitoramento = new MonitoramentoResource(this.http)
		this.precos = new PrecosResource(this.http)
		this.eventos = new EventosResource(this.http)
		this.hooks = new HooksResource(this.http)
		this.metadata = new MetadataResource(this.http)
		this.tokens = new TokensResource(this.http)
		this.views = new ViewsResource(this.http)
		this.empresas = new EmpresasResource(this.http)
		this.healthCheck = new HealthCheckResource(this.http)
		this.marketplace = new MarketplaceResource(this.http)
		this.ondemand = new OndemandResource(this.http)
		this.pessoas = new PessoasResource(this.http)
		this.processos = new ProcessosResource(this.http)
		this.produtos = new ProdutosResource(this.http)
		this.veiculos = new VeiculosResource(this.http)
	}

	/**
	 * Health check - verifies API connectivity
	 * Uses the health_check dataset to verify credentials and connectivity
	 * @returns Object with ok status and latency in milliseconds
	 */
	async ping(): Promise<{ ok: boolean; latencyMs: number }> {
		const start = Date.now()
		try {
			await this.http.post("/pessoas", { Datasets: "health_check" })
			return { ok: true, latencyMs: Date.now() - start }
		} catch {
			return { ok: false, latencyMs: Date.now() - start }
		}
	}
}
