import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BigDataCorp } from '../src/client';

describe('BigDataCorp Client', () => {
  describe('initialization', () => {
    it('should throw error if accessToken is not provided', () => {
      expect(() => new BigDataCorp({
        accessToken: '',
        tokenId: 'test-token-id',
      })).toThrow('AccessToken is required');
    });

    it('should throw error if tokenId is not provided', () => {
      expect(() => new BigDataCorp({
        accessToken: 'test-access-token',
        tokenId: '',
      })).toThrow('TokenId is required');
    });

    it('should create client with valid credentials', () => {
      const client = new BigDataCorp({
        accessToken: 'test-access-token',
        tokenId: 'test-token-id',
      });

      expect(client).toBeInstanceOf(BigDataCorp);
      expect(client.pessoas).toBeDefined();
      expect(client.empresas).toBeDefined();
      expect(client.batch).toBeDefined();
      expect(client.metadata).toBeDefined();
    });

    it('should initialize all resources', () => {
      const client = new BigDataCorp({
        accessToken: 'test-access-token',
        tokenId: 'test-token-id',
      });

      expect(client.batch).toBeDefined();
      expect(client.estatisticas).toBeDefined();
      expect(client.monitoramento).toBeDefined();
      expect(client.precos).toBeDefined();
      expect(client.eventos).toBeDefined();
      expect(client.hooks).toBeDefined();
      expect(client.metadata).toBeDefined();
      expect(client.tokens).toBeDefined();
      expect(client.views).toBeDefined();
      expect(client.empresas).toBeDefined();
      expect(client.healthCheck).toBeDefined();
      expect(client.marketplace).toBeDefined();
      expect(client.ondemand).toBeDefined();
      expect(client.pessoas).toBeDefined();
      expect(client.processos).toBeDefined();
      expect(client.produtos).toBeDefined();
      expect(client.veiculos).toBeDefined();
    });
  });

  describe('ping', () => {
    it('should return ok: true on successful ping', async () => {
      const client = new BigDataCorp({
        accessToken: 'test-access-token',
        tokenId: 'test-token-id',
      });

      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        text: () => Promise.resolve('{}'),
      });
      vi.stubGlobal('fetch', fetchMock);

      const result = await client.ping();

      expect(result.ok).toBe(true);
      expect(result.latencyMs).toBeGreaterThanOrEqual(0);

      // Verify it calls /pessoas with health_check dataset
      expect(fetchMock).toHaveBeenCalledOnce();
      const [url, options] = fetchMock.mock.calls[0];
      expect(url).toContain('/pessoas');
      expect(options.method).toBe('POST');
      expect(JSON.parse(options.body)).toEqual({ Datasets: 'health_check' });

      vi.unstubAllGlobals();
    });

    it('should return ok: false on failed ping', async () => {
      const client = new BigDataCorp({
        accessToken: 'test-access-token',
        tokenId: 'test-token-id',
        maxRetries: 0,
      });

      // Mock the global fetch to return an error response
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        headers: new Headers(),
        text: () => Promise.resolve('{}'),
      }));

      const result = await client.ping();

      expect(result.ok).toBe(false);
      expect(result.latencyMs).toBeGreaterThanOrEqual(0);

      vi.unstubAllGlobals();
    });
  });
});
