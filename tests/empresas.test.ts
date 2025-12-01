import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { BigDataCorp } from "../src/client"

// Sample response from data/empresas-basic-data.json
const empresasBasicDataResponse = {
	Result: [
		{
			MatchKeys: "doc{00000000000191}",
			BasicData: {
				TaxIdNumber: "00000000000191",
				TaxIdCountry: "Brazil",
				AlternativeIdNumbers: {
					"StateRegistration-DF": "809427800174",
				},
				OfficialName: "BANCO DO BRASIL SA",
				TradeName: "DIRECAO GERAL",
				Aliases: {
					UnstandardizedRFOfficialName: "BANCO DO BRASIL SA",
					UnstandardizedRFTradeName: "DIRECAO GERAL",
				},
				NameUniquenessScore: 0.25,
				OfficialNameUniquenessScore: 0.00012716,
				TradeNameUniquenessScore: 0.25,
				FoundedDate: "1966-08-01T00:00:00Z",
				Age: 59,
				IsHeadquarter: true,
				HeadquarterState: "DF",
				IsConglomerate: false,
				TaxIdStatus: "ATIVA",
				TaxIdStatusReason: "",
				TaxIdOrigin: "Receita Federal",
				TaxRegime: "LUCRO REAL",
				TaxRegimes: {
					Simples: false,
				},
				Activities: [
					{
						IsMain: true,
						Code: "6422100",
						Activity: "BANCOS MULTIPLOS, COM CARTEIRA COMERCIAL",
						ActivityDivision: "ATIVIDADES DE SERVICOS FINANCEIROS",
					},
				],
				LegalNature: {
					Code: "2038",
					Activity: "SOCIEDADE DE ECONOMIA MISTA",
				},
				AdditionalOutputData: {
					Capital: "CENTO E VINTE BILHÕES DE REAIS",
					CapitalRS: "120000000000.00",
					COMEX: "DEFERIDA",
				},
			},
		},
	],
	QueryId: "176fcbb2-623f-40b8-b71f-2ddd404c24b4",
	ElapsedMilliseconds: 123,
	QueryDate: "2025-11-30T14:22:50.5520783Z",
	Status: {
		basic_data: [
			{
				Code: 0,
				Message: "OK",
			},
		],
	},
	Evidences: {},
}

describe("EmpresasResource", () => {
	let client: BigDataCorp
	let fetchMock: ReturnType<typeof vi.fn>

	beforeEach(() => {
		client = new BigDataCorp({
			accessToken: "test-access-token",
			tokenId: "test-token-id",
		})

		fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			text: () => Promise.resolve(JSON.stringify(empresasBasicDataResponse)),
		})

		vi.stubGlobal("fetch", fetchMock)
	})

	afterEach(() => {
		vi.unstubAllGlobals()
	})

	describe("basicData", () => {
		it("should fetch basic data with CNPJ string", async () => {
			const result = await client.empresas.basicData("00000000000191")

			expect(fetchMock).toHaveBeenCalledOnce()
			const [url, options] = fetchMock.mock.calls[0]

			expect(url).toBe("https://plataforma.bigdatacorp.com.br/empresas")
			expect(options.method).toBe("POST")
			expect(JSON.parse(options.body)).toEqual({
				q: "doc{00000000000191}",
				Datasets: "basic_data",
			})
			expect(options.headers.AccessToken).toBe("test-access-token")
			expect(options.headers.TokenId).toBe("test-token-id")

			expect(result.Result).toHaveLength(1)
			expect(result.Result ? result.Result[0].BasicData.TaxIdNumber : 0).toBe(
				"00000000000191",
			)
			expect(result.Result ? result.Result[0].BasicData.OfficialName : "").toBe(
				"BANCO DO BRASIL SA",
			)
		})

		it("should fetch basic data with params object", async () => {
			const _result = await client.empresas.basicData({
				q: "doc{00000000000191}",
				Limit: 1,
			})

			expect(fetchMock).toHaveBeenCalledOnce()
			const [, options] = fetchMock.mock.calls[0]

			expect(JSON.parse(options.body)).toEqual({
				q: "doc{00000000000191}",
				Limit: 1,
				Datasets: "basic_data",
			})
		})
	})

	describe("query (multiple datasets)", () => {
		it("should query multiple datasets", async () => {
			const _result = await client.empresas.query("00000000000191", [
				"basic_data",
				"relationships",
				"economic_group",
			])

			expect(fetchMock).toHaveBeenCalledOnce()
			const [, options] = fetchMock.mock.calls[0]

			expect(JSON.parse(options.body)).toEqual({
				q: "doc{00000000000191}",
				Datasets: "basic_data,relationships,economic_group",
			})
		})
	})

	describe("addressesExtended", () => {
		it("should fetch addresses with CNPJ string", async () => {
			await client.empresas.addressesExtended("00000000000191")

			expect(fetchMock).toHaveBeenCalledOnce()
			const [, options] = fetchMock.mock.calls[0]

			expect(JSON.parse(options.body)).toEqual({
				q: "doc{00000000000191}",
				Datasets: "addresses_extended",
			})
		})
	})

	describe("relationships", () => {
		it("should fetch relationships with CNPJ string", async () => {
			await client.empresas.relationships("00000000000191")

			expect(fetchMock).toHaveBeenCalledOnce()
			const [, options] = fetchMock.mock.calls[0]

			expect(JSON.parse(options.body)).toEqual({
				q: "doc{00000000000191}",
				Datasets: "relationships",
			})
		})
	})

	describe("activityIndicators", () => {
		it("should fetch activity indicators with CNPJ string", async () => {
			await client.empresas.activityIndicators("00000000000191")

			expect(fetchMock).toHaveBeenCalledOnce()
			const [, options] = fetchMock.mock.calls[0]

			expect(JSON.parse(options.body)).toEqual({
				q: "doc{00000000000191}",
				Datasets: "activity_indicators",
			})
		})
	})

	describe("custom baseUrl", () => {
		it("should use custom baseUrl when provided", async () => {
			const customClient = new BigDataCorp({
				accessToken: "test-access-token",
				tokenId: "test-token-id",
				baseUrl: "https://custom.api.com",
			})

			await customClient.empresas.basicData("00000000000191")

			expect(fetchMock).toHaveBeenCalledOnce()
			const [url] = fetchMock.mock.calls[0]

			expect(url).toBe("https://custom.api.com/empresas")
		})

		it("should strip trailing slash from baseUrl", async () => {
			const customClient = new BigDataCorp({
				accessToken: "test-access-token",
				tokenId: "test-token-id",
				baseUrl: "https://custom.api.com/",
			})

			await customClient.empresas.basicData("00000000000191")

			expect(fetchMock).toHaveBeenCalledOnce()
			const [url] = fetchMock.mock.calls[0]

			expect(url).toBe("https://custom.api.com/empresas")
		})
	})
})
