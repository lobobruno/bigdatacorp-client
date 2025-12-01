import { describe, it, expect } from 'vitest';
import {
  isValidCPF,
  isValidCNPJ,
  formatCPF,
  formatCNPJ,
  cleanDocument,
} from '../src/utils/validators';

describe('CPF Validators', () => {
  describe('isValidCPF', () => {
    it('should return true for valid CPFs', () => {
      expect(isValidCPF('45317828791')).toBe(true);
      expect(isValidCPF('12345678909')).toBe(true);
      expect(isValidCPF('11144477735')).toBe(true);
    });

    it('should return true for valid CPFs with formatting', () => {
      expect(isValidCPF('453.178.287-91')).toBe(true);
      expect(isValidCPF('123.456.789-09')).toBe(true);
      expect(isValidCPF('111.444.777-35')).toBe(true);
    });

    it('should return false for invalid CPFs', () => {
      expect(isValidCPF('12345678901')).toBe(false);
      expect(isValidCPF('00000000001')).toBe(false);
      expect(isValidCPF('99999999999')).toBe(false);
    });

    it('should return false for CPFs with all same digits', () => {
      expect(isValidCPF('00000000000')).toBe(false);
      expect(isValidCPF('11111111111')).toBe(false);
      expect(isValidCPF('22222222222')).toBe(false);
      expect(isValidCPF('33333333333')).toBe(false);
      expect(isValidCPF('44444444444')).toBe(false);
      expect(isValidCPF('55555555555')).toBe(false);
      expect(isValidCPF('66666666666')).toBe(false);
      expect(isValidCPF('77777777777')).toBe(false);
      expect(isValidCPF('88888888888')).toBe(false);
      expect(isValidCPF('99999999999')).toBe(false);
    });

    it('should return false for CPFs with wrong length', () => {
      expect(isValidCPF('1234567890')).toBe(false);
      expect(isValidCPF('123456789012')).toBe(false);
      expect(isValidCPF('')).toBe(false);
    });
  });

  describe('formatCPF', () => {
    it('should format CPF correctly', () => {
      expect(formatCPF('45317828791')).toBe('453.178.287-91');
      expect(formatCPF('12345678909')).toBe('123.456.789-09');
    });

    it('should return original string for invalid length', () => {
      expect(formatCPF('1234567890')).toBe('1234567890');
      expect(formatCPF('123456789012')).toBe('123456789012');
    });

    it('should handle already formatted input', () => {
      expect(formatCPF('453.178.287-91')).toBe('453.178.287-91');
    });
  });
});

describe('CNPJ Validators', () => {
  describe('isValidCNPJ', () => {
    it('should return true for valid CNPJs', () => {
      expect(isValidCNPJ('00000000000191')).toBe(true); // Banco do Brasil
      expect(isValidCNPJ('11222333000181')).toBe(true);
      expect(isValidCNPJ('11444777000161')).toBe(true);
    });

    it('should return true for valid CNPJs with formatting', () => {
      expect(isValidCNPJ('00.000.000/0001-91')).toBe(true);
      expect(isValidCNPJ('11.222.333/0001-81')).toBe(true);
      expect(isValidCNPJ('11.444.777/0001-61')).toBe(true);
    });

    it('should return false for invalid CNPJs', () => {
      expect(isValidCNPJ('12345678000199')).toBe(false);
      expect(isValidCNPJ('00000000000000')).toBe(false);
      expect(isValidCNPJ('99999999999999')).toBe(false);
    });

    it('should return false for CNPJs with all same digits', () => {
      expect(isValidCNPJ('00000000000000')).toBe(false);
      expect(isValidCNPJ('11111111111111')).toBe(false);
      expect(isValidCNPJ('22222222222222')).toBe(false);
      expect(isValidCNPJ('33333333333333')).toBe(false);
      expect(isValidCNPJ('44444444444444')).toBe(false);
      expect(isValidCNPJ('55555555555555')).toBe(false);
      expect(isValidCNPJ('66666666666666')).toBe(false);
      expect(isValidCNPJ('77777777777777')).toBe(false);
      expect(isValidCNPJ('88888888888888')).toBe(false);
      expect(isValidCNPJ('99999999999999')).toBe(false);
    });

    it('should return false for CNPJs with wrong length', () => {
      expect(isValidCNPJ('1234567800019')).toBe(false);
      expect(isValidCNPJ('123456780001999')).toBe(false);
      expect(isValidCNPJ('')).toBe(false);
    });
  });

  describe('formatCNPJ', () => {
    it('should format CNPJ correctly', () => {
      expect(formatCNPJ('00000000000191')).toBe('00.000.000/0001-91');
      expect(formatCNPJ('11222333000181')).toBe('11.222.333/0001-81');
    });

    it('should return original string for invalid length', () => {
      expect(formatCNPJ('1234567800019')).toBe('1234567800019');
      expect(formatCNPJ('123456780001999')).toBe('123456780001999');
    });

    it('should handle already formatted input', () => {
      expect(formatCNPJ('00.000.000/0001-91')).toBe('00.000.000/0001-91');
    });
  });
});

describe('cleanDocument', () => {
  it('should remove formatting from CPF', () => {
    expect(cleanDocument('453.178.287-91')).toBe('45317828791');
    expect(cleanDocument('123.456.789-09')).toBe('12345678909');
  });

  it('should remove formatting from CNPJ', () => {
    expect(cleanDocument('00.000.000/0001-91')).toBe('00000000000191');
    expect(cleanDocument('11.222.333/0001-81')).toBe('11222333000181');
  });

  it('should return same string if no formatting', () => {
    expect(cleanDocument('45317828791')).toBe('45317828791');
    expect(cleanDocument('00000000000191')).toBe('00000000000191');
  });

  it('should remove any non-digit characters', () => {
    expect(cleanDocument('abc123def456')).toBe('123456');
    expect(cleanDocument('(11) 99999-9999')).toBe('11999999999');
  });
});
