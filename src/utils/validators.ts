/**
 * Validates a Brazilian CPF (Cadastro de Pessoas Fisicas)
 * @param cpf - The CPF string (with or without formatting)
 * @returns true if valid, false otherwise
 */
export function isValidCPF(cpf: string): boolean {
	// Remove non-numeric characters
	const cleaned = cpf.replace(/\D/g, "")

	// CPF must have 11 digits
	if (cleaned.length !== 11) {
		return false
	}

	// Check for known invalid patterns (all same digit)
	if (/^(\d)\1+$/.test(cleaned)) {
		return false
	}

	// Validate first check digit
	let sum = 0
	for (let i = 0; i < 9; i++) {
		sum += parseInt(cleaned[i], 10) * (10 - i)
	}
	let remainder = (sum * 10) % 11
	if (remainder === 10 || remainder === 11) remainder = 0
	if (remainder !== parseInt(cleaned[9], 10)) {
		return false
	}

	// Validate second check digit
	sum = 0
	for (let i = 0; i < 10; i++) {
		sum += parseInt(cleaned[i], 10) * (11 - i)
	}
	remainder = (sum * 10) % 11
	if (remainder === 10 || remainder === 11) remainder = 0
	if (remainder !== parseInt(cleaned[10], 10)) {
		return false
	}

	return true
}

/**
 * Validates a Brazilian CNPJ (Cadastro Nacional da Pessoa Juridica)
 * @param cnpj - The CNPJ string (with or without formatting)
 * @returns true if valid, false otherwise
 */
export function isValidCNPJ(cnpj: string): boolean {
	// Remove non-numeric characters
	const cleaned = cnpj.replace(/\D/g, "")

	// CNPJ must have 14 digits
	if (cleaned.length !== 14) {
		return false
	}

	// Check for known invalid patterns (all same digit)
	if (/^(\d)\1+$/.test(cleaned)) {
		return false
	}

	// Validate first check digit
	const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
	let sum = 0
	for (let i = 0; i < 12; i++) {
		sum += parseInt(cleaned[i], 10) * weights1[i]
	}
	let remainder = sum % 11
	const digit1 = remainder < 2 ? 0 : 11 - remainder
	if (digit1 !== parseInt(cleaned[12], 10)) {
		return false
	}

	// Validate second check digit
	const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
	sum = 0
	for (let i = 0; i < 13; i++) {
		sum += parseInt(cleaned[i], 10) * weights2[i]
	}
	remainder = sum % 11
	const digit2 = remainder < 2 ? 0 : 11 - remainder
	if (digit2 !== parseInt(cleaned[13], 10)) {
		return false
	}

	return true
}

/**
 * Format a CPF with standard punctuation
 * @param cpf - The CPF string (digits only)
 * @returns Formatted CPF (XXX.XXX.XXX-XX) or original if invalid length
 */
export function formatCPF(cpf: string): string {
	const cleaned = cpf.replace(/\D/g, "")
	if (cleaned.length !== 11) return cpf
	return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

/**
 * Format a CNPJ with standard punctuation
 * @param cnpj - The CNPJ string (digits only)
 * @returns Formatted CNPJ (XX.XXX.XXX/XXXX-XX) or original if invalid length
 */
export function formatCNPJ(cnpj: string): string {
	const cleaned = cnpj.replace(/\D/g, "")
	if (cleaned.length !== 14) return cnpj
	return cleaned.replace(
		/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
		"$1.$2.$3/$4-$5",
	)
}

/**
 * Remove formatting from CPF or CNPJ
 * @param document - The document string with formatting
 * @returns Digits only
 */
export function cleanDocument(document: string): string {
	return document.replace(/\D/g, "")
}
