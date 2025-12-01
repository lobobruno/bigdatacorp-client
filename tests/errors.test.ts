import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { BigDataCorp } from '../src/client';
import {
  BigDataCorpError,
  AuthenticationError,
  RateLimitError,
  TimeoutError,
} from '../src/http/errors';

describe('Error Handling', () => {
  let client: BigDataCorp;

  beforeEach(() => {
    client = new BigDataCorp({
      accessToken: 'test-access-token',
      tokenId: 'test-token-id',
      maxRetries: 0, // Disable retries for error testing
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('AuthenticationError', () => {
    it('should throw AuthenticationError on 401 response', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        headers: new Headers(),
        text: () => Promise.resolve(JSON.stringify({ message: 'Invalid credentials' })),
      }));

      await expect(client.pessoas.basicData('12345678900'))
        .rejects
        .toThrow(AuthenticationError);
    });

    it('should throw AuthenticationError on 403 response', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 403,
        headers: new Headers(),
        text: () => Promise.resolve(JSON.stringify({ message: 'Forbidden' })),
      }));

      await expect(client.pessoas.basicData('12345678900'))
        .rejects
        .toThrow(AuthenticationError);
    });

    it('AuthenticationError should have correct properties', () => {
      const error = new AuthenticationError('Invalid API key');

      expect(error.name).toBe('AuthenticationError');
      expect(error.message).toBe('Invalid API key');
      expect(error.statusCode).toBe(401);
      expect(error.code).toBe('AUTHENTICATION_ERROR');
      expect(error).toBeInstanceOf(BigDataCorpError);
    });
  });

  describe('RateLimitError', () => {
    it('should throw RateLimitError on 429 response', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 429,
        headers: new Headers({ 'Retry-After': '60' }),
        text: () => Promise.resolve(JSON.stringify({ message: 'Rate limit exceeded' })),
      }));

      await expect(client.pessoas.basicData('12345678900'))
        .rejects
        .toThrow(RateLimitError);
    });

    it('RateLimitError should have retryAfter property', () => {
      const error = new RateLimitError('Rate limit exceeded', 60000);

      expect(error.name).toBe('RateLimitError');
      expect(error.message).toBe('Rate limit exceeded');
      expect(error.statusCode).toBe(429);
      expect(error.code).toBe('RATE_LIMIT_ERROR');
      expect(error.retryAfter).toBe(60000);
      expect(error).toBeInstanceOf(BigDataCorpError);
    });
  });

  describe('TimeoutError', () => {
    it('should throw TimeoutError when request times out', async () => {
      const clientWithShortTimeout = new BigDataCorp({
        accessToken: 'test-access-token',
        tokenId: 'test-token-id',
        timeout: 1, // 1ms timeout
        maxRetries: 0,
      });

      // Simulate a slow response that respects the abort signal
      vi.stubGlobal('fetch', vi.fn().mockImplementation((_url: string, options?: { signal?: AbortSignal }) => {
        return new Promise((resolve, reject) => {
          const timer = setTimeout(() => resolve({
            ok: true,
            text: () => Promise.resolve('{}'),
          }), 100);

          // Listen for abort signal
          options?.signal?.addEventListener('abort', () => {
            clearTimeout(timer);
            const error = new Error('Aborted');
            error.name = 'AbortError';
            reject(error);
          });
        });
      }));

      await expect(clientWithShortTimeout.pessoas.basicData('12345678900'))
        .rejects
        .toThrow(TimeoutError);
    });

    it('TimeoutError should have correct properties', () => {
      const error = new TimeoutError('Request timeout after 30000ms');

      expect(error.name).toBe('TimeoutError');
      expect(error.message).toBe('Request timeout after 30000ms');
      expect(error.code).toBe('TIMEOUT_ERROR');
      expect(error).toBeInstanceOf(BigDataCorpError);
    });
  });

  describe('BigDataCorpError', () => {
    it('should throw BigDataCorpError on 500 response', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        headers: new Headers(),
        text: () => Promise.resolve(JSON.stringify({ message: 'Internal server error' })),
      }));

      await expect(client.pessoas.basicData('12345678900'))
        .rejects
        .toThrow(BigDataCorpError);
    });

    it('should throw BigDataCorpError on 404 response', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        headers: new Headers(),
        text: () => Promise.resolve(JSON.stringify({ message: 'Not found' })),
      }));

      await expect(client.pessoas.basicData('12345678900'))
        .rejects
        .toThrow(BigDataCorpError);
    });

    it('BigDataCorpError should have correct properties', () => {
      const error = new BigDataCorpError('API error', 500, 'SERVER_ERROR');

      expect(error.name).toBe('BigDataCorpError');
      expect(error.message).toBe('API error');
      expect(error.statusCode).toBe(500);
      expect(error.code).toBe('SERVER_ERROR');
    });
  });

  describe('AbortController', () => {
    it('should throw BigDataCorpError with ABORTED code when request is aborted', async () => {
      const controller = new AbortController();

      vi.stubGlobal('fetch', vi.fn().mockImplementation(() => {
        return new Promise((_, reject) => {
          controller.signal.addEventListener('abort', () => {
            const error = new Error('Aborted');
            error.name = 'AbortError';
            reject(error);
          });
        });
      }));

      // Abort immediately
      setTimeout(() => controller.abort(), 0);

      await expect(
        client.pessoas.basicData('12345678900', { signal: controller.signal })
      ).rejects.toMatchObject({
        code: 'ABORTED',
      });
    });
  });

  describe('Network errors', () => {
    it('should throw BigDataCorpError on network failure', async () => {
      vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')));

      await expect(client.pessoas.basicData('12345678900'))
        .rejects
        .toThrow(BigDataCorpError);
    });
  });
});
