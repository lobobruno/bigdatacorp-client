import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { BigDataCorp } from '../src/client';

// Sample response from data/pessoas-basic-data.json
const pessoasBasicDataResponse = {
  Result: [
    {
      MatchKeys: 'doc{45317828791}',
      BasicData: {
        TaxIdNumber: '45317828791',
        TaxIdCountry: 'BRAZIL',
        AlternativeIdNumbers: {},
        Name: 'JAIR MESSIAS BOLSONARO',
        Aliases: {
          CommonName: 'JAIR BOLSONARO',
          StandardizedName: 'JAIR MESIA BOLSONARO',
        },
        Gender: 'M',
        NameWordCount: 3,
        NumberOfFullNameNamesakes: 1,
        NameUniquenessScore: 1,
        FirstNameUniquenessScore: 0.001,
        FirstAndLastNameUniquenessScore: 0.5,
        BirthDate: '1955-03-21T00:00:00Z',
        Age: 70,
        ZodiacSign: 'ARIES',
        ChineseSign: 'Goat',
        BirthCountry: 'BRASILEIRA',
        MotherName: 'OLINDA BONTURI BOLSONARO',
        FatherName: '',
        MaritalStatusData: {
          MaritalStatus: 'CASADO(A)',
          MaritalStatusSource: 'TSE',
        },
        TaxIdStatus: 'REGULAR',
        TaxIdOrigin: 'RECEITA FEDERAL',
        HasObitIndication: false,
      },
    },
  ],
  QueryId: '79914213-cb90-4ed4-a3d3-c5556c3a8ef6',
  ElapsedMilliseconds: 88,
  QueryDate: '2025-11-30T14:22:49.9761622Z',
  Status: {
    basic_data: [
      {
        Code: 0,
        Message: 'OK',
      },
    ],
  },
  Evidences: {},
};

describe('PessoasResource', () => {
  let client: BigDataCorp;
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    client = new BigDataCorp({
      accessToken: 'test-access-token',
      tokenId: 'test-token-id',
    });

    fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(JSON.stringify(pessoasBasicDataResponse)),
    });

    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('basicData', () => {
    it('should fetch basic data with CPF string', async () => {
      const result = await client.pessoas.basicData('45317828791');

      expect(fetchMock).toHaveBeenCalledOnce();
      const [url, options] = fetchMock.mock.calls[0];

      expect(url).toBe('https://plataforma.bigdatacorp.com.br/pessoas');
      expect(options.method).toBe('POST');
      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Datasets: 'basic_data',
      });
      expect(options.headers['AccessToken']).toBe('test-access-token');
      expect(options.headers['TokenId']).toBe('test-token-id');

      expect(result.Result).toHaveLength(1);
      expect(result.Result[0].BasicData.TaxIdNumber).toBe('45317828791');
      expect(result.Result[0].BasicData.Name).toBe('JAIR MESSIAS BOLSONARO');
    });

    it('should fetch basic data with params object', async () => {
      const result = await client.pessoas.basicData({
        q: 'doc{45317828791}',
        Limit: 1,
      });

      expect(fetchMock).toHaveBeenCalledOnce();
      const [, options] = fetchMock.mock.calls[0];

      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Limit: 1,
        Datasets: 'basic_data',
      });
    });
  });

  describe('query (multiple datasets)', () => {
    it('should query multiple datasets', async () => {
      const result = await client.pessoas.query('45317828791', [
        'basic_data',
        'emails_extended',
        'phones_extended',
      ]);

      expect(fetchMock).toHaveBeenCalledOnce();
      const [, options] = fetchMock.mock.calls[0];

      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Datasets: 'basic_data,emails_extended,phones_extended',
      });
    });
  });

  describe('addressesExtended', () => {
    it('should fetch addresses with CPF string', async () => {
      await client.pessoas.addressesExtended('45317828791');

      expect(fetchMock).toHaveBeenCalledOnce();
      const [, options] = fetchMock.mock.calls[0];

      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Datasets: 'addresses_extended',
      });
    });
  });

  describe('kyc', () => {
    it('should fetch KYC data with CPF string', async () => {
      await client.pessoas.kyc('45317828791');

      expect(fetchMock).toHaveBeenCalledOnce();
      const [, options] = fetchMock.mock.calls[0];

      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Datasets: 'kyc',
      });
    });
  });

  describe('financialRisk', () => {
    it('should fetch financial risk with CPF string', async () => {
      await client.pessoas.financialRisk('45317828791');

      expect(fetchMock).toHaveBeenCalledOnce();
      const [, options] = fetchMock.mock.calls[0];

      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Datasets: 'financial_risk',
      });
    });
  });

  describe('emailsExtended', () => {
    it('should fetch emails with CPF string', async () => {
      await client.pessoas.emailsExtended('45317828791');

      expect(fetchMock).toHaveBeenCalledOnce();
      const [, options] = fetchMock.mock.calls[0];

      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Datasets: 'emails_extended',
      });
    });
  });

  describe('phonesExtended', () => {
    it('should fetch phones with CPF string', async () => {
      await client.pessoas.phonesExtended('45317828791');

      expect(fetchMock).toHaveBeenCalledOnce();
      const [, options] = fetchMock.mock.calls[0];

      expect(JSON.parse(options.body)).toEqual({
        q: 'doc{45317828791}',
        Datasets: 'phones_extended',
      });
    });
  });
});
