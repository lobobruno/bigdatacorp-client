/**
 * Integration tests that call the real BigDataCorp API
 *
 * These tests require valid API credentials in .env file:
 *   BDC_ACCESS_TOKEN=your_access_token
 *   BDC_TOKEN_ID=your_token_id
 *
 * Run with: pnpm run test:integration
 */

import "dotenv/config"
import { beforeAll, describe, expect, it } from "vitest"
import { BigDataCorp } from "../src/client"

const CPF = "45317828791"
const CNPJ = "00000000000191"

// Skip integration tests if credentials are not configured
const hasCredentials = process.env.BDC_ACCESS_TOKEN && process.env.BDC_TOKEN_ID

describe.skipIf(!hasCredentials)("Integration Tests", () => {
	let api: BigDataCorp

	beforeAll(() => {
		api = new BigDataCorp({
			accessToken: process.env.BDC_ACCESS_TOKEN!,
			tokenId: process.env.BDC_TOKEN_ID!,
			timeout: 30000,
			maxRetries: 3,
		})
	})

	describe("pessoas", () => {
		it("should fetch basic data for a CPF", async () => {
			const result = await api.pessoas.basicData(CPF)

			expect(result).toBeDefined()
			expect(result.Result).toBeDefined()
			expect(Array.isArray(result.Result)).toBe(true)
			expect(result.QueryId).toBeDefined()
			expect(result.Status).toBeDefined()

			if (result.Result && result.Result.length > 0) {
				const person = result.Result[0]
				expect(person.MatchKeys).toBeDefined()
				expect(person.BasicData).toBeDefined()
				expect(person.BasicData.TaxIdNumber).toBe(CPF)
			}
		})

		it("should fetch basic data using params object", async () => {
			const result = await api.pessoas.basicData({
				q: `doc{${CPF}}`,
				Limit: 1,
			})

			expect(result).toBeDefined()
			expect(result.Result).toBeDefined()
		})

		it("should query multiple datasets", async () => {
			const result = await api.pessoas.query(CPF, [
				"basic_data",
				"emails_extended",
			])

			expect(result).toBeDefined()
		})

		it("should fetch addresses", async () => {
			const result = await api.pessoas.addressesExtended(CPF)

			expect(result).toBeDefined()
			expect(result.Result).toBeDefined()
		})

		it("should fetch KYC data", async () => {
			const result = await api.pessoas.kyc(CPF)

			expect(result).toBeDefined()
			expect(result.Result).toBeDefined()
		})
	})

	describe("empresas", () => {
		it("should fetch basic data for a CNPJ", async () => {
			const result = await api.empresas.basicData(CNPJ)

			expect(result).toBeDefined()
			expect(result.Result).toBeDefined()
			expect(Array.isArray(result.Result)).toBe(true)
			expect(result.QueryId).toBeDefined()
			expect(result.Status).toBeDefined()

			if (result.Result && result.Result.length > 0) {
				const company = result.Result[0]
				expect(company.MatchKeys).toBeDefined()
				expect(company.BasicData).toBeDefined()
				expect(company.BasicData.TaxIdNumber).toBe(CNPJ)
				expect(company.BasicData.OfficialName).toBeDefined()
			}
		})

		it("should fetch basic data using params object", async () => {
			const result = await api.empresas.basicData({
				q: `doc{${CNPJ}}`,
				Limit: 1,
			})

			expect(result).toBeDefined()
			expect(result.Result).toBeDefined()
		})

		it("should query multiple datasets", async () => {
			const result = await api.empresas.query(CNPJ, [
				"basic_data",
				"relationships",
			])

			expect(result).toBeDefined()
		})

		it("should fetch addresses", async () => {
			const result = await api.empresas.addressesExtended(CNPJ)

			expect(result).toBeDefined()
			expect(result.Result).toBeDefined()
		})
	})

	describe("metadata", () => {
		it("should fetch dataset metadata", async () => {
			const result = await api.metadata.datasets({})

			expect(result).toBeDefined()
		})
	})

	describe("client ping", () => {
		it("should return ok: true with valid credentials", async () => {
			const result = await api.ping()

			expect(result).toBeDefined()
			expect(result.ok).toBe(true)
			expect(result.latencyMs).toBeGreaterThan(0)
		})
	})
})
