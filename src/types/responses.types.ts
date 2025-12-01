// Common response types based on BigDataCorp API documentation

// ============================================================================
// Base Response Types
// ============================================================================

export interface StatusItem {
	Code: number
	Message: string
}

/**
 * Evidence item containing source/validation information for a dataset.
 * Structure may vary by dataset - when empty, the API returns {}.
 */
export interface EvidenceItem {
	Source?: string
	SourceUrl?: string
	CaptureDate?: string
	ValidationDate?: string
	Confidence?: number
	[key: string]: unknown
}

/**
 * Evidences record keyed by dataset name.
 * Contains source/validation evidence for each dataset in the response.
 */
export type Evidences = Record<string, EvidenceItem | EvidenceItem[]>

export interface BaseResponse<T = unknown> {
	Result?: T[]
	QueryId?: string
	ElapsedMilliseconds?: number
	QueryDate?: string
	Status?: Record<string, StatusItem[]>
	Evidences?: Evidences
}

// ============================================================================
// Common Nested Types
// ============================================================================

export interface Activity {
	IsMain: boolean
	Code: string
	Activity: string
	ActivityDivision?: string
	ActivityGroup?: string
	ActivityClass?: string
}

export interface LegalNature {
	Code: string
	Activity: string
}

export interface HistoricalValue<T = string> {
	Value: T
	StartDate: string
	EndDate?: string
}

export interface EmailAssociationClassification {
	ClassificationType: string
	ClassificationDescription: string
	ContactAssociationIndex: string
}

export interface PortabilityHistoryItem {
	Carrier: string
	StartDate: string
	EndDate?: string
}

// ============================================================================
// Empresas (Company) Types
// ============================================================================

export interface EmpresasBasicDataItem {
	MatchKeys: string
	BasicData: EmpresasBasicData
}

export interface EmpresasBasicData {
	TaxIdNumber: string
	TaxIdCountry: string
	AlternativeIdNumbers?: Record<string, string>
	OfficialName: string
	TradeName?: string
	Aliases?: {
		UnstandardizedRFOfficialName?: string
		UnstandardizedRFTradeName?: string
	}
	NameUniquenessScore?: number
	OfficialNameUniquenessScore?: number
	TradeNameUniquenessScore?: number
	FoundedDate?: string
	Age?: number
	IsHeadquarter?: boolean
	HeadquarterState?: string
	IsConglomerate?: boolean
	TaxIdStatus?: string
	TaxIdStatusReason?: string
	TaxIdOrigin?: string
	TaxIdStatusDate?: string
	TaxIdStatusRegistrationDate?: string
	TaxRegime?: string
	CompanyType_ReceitaFederal?: string
	TaxRegimes?: {
		Simples?: boolean
	}
	Activities?: Activity[]
	LegalNature?: LegalNature
	SpecialSituation?: string
	CreationDate?: string
	LastUpdateDate?: string
	AdditionalOutputData?: {
		Capital?: string
		CapitalRS?: string
		NIRE?: string
		NIRECompanySize?: string
		NIREHeadquartersType?: string
		NIREHeadquartersCapital?: string
		NIRELastCaptureDate?: string
		COMEX?: string
		COMEXLastUpdate?: string
	}
	HistoricalData?: {
		HasChangedTradeName?: boolean
		HasChangedTaxRegime?: boolean
		HistoricalDataEvolution?: {
			TradeName?: HistoricalValue[]
			TaxRegime?: HistoricalValue[]
		}
	}
}

export interface EmpresasAddressesExtendedItem {
	MatchKeys: string
	ExtendedAddresses: ExtendedAddresses
}

// ============================================================================
// Pessoas (Person) Types
// ============================================================================

export interface PessoasBasicDataItem {
	MatchKeys: string
	BasicData: PessoasBasicData
}

export interface PessoasBasicData {
	TaxIdNumber: string
	TaxIdCountry: string
	AlternativeIdNumbers?: Record<string, string>
	Name: string
	Aliases?: {
		CommonName?: string
		StandardizedName?: string
	}
	Gender?: string
	NameWordCount?: number
	NumberOfFullNameNamesakes?: number
	NameUniquenessScore?: number
	FirstNameUniquenessScore?: number
	FirstAndLastNameUniquenessScore?: number
	BirthDate?: string
	CapturedBirthDateFromRFSource?: string
	IsValidBirthDateInRFSource?: boolean
	Age?: number
	ZodiacSign?: string
	ChineseSign?: string
	BirthCountry?: string
	MotherName?: string
	FatherName?: string
	MaritalStatusData?: {
		MaritalStatus?: string
		MaritalStatusSource?: string
		MaritalStatusLastUpdateDate?: string
	}
	TaxIdStatus?: string
	TaxIdOrigin?: string
	TaxIdFiscalRegion?: string
	HasObitIndication?: boolean
	TaxIdStatusDate?: string
	TaxIdStatusRegistrationDate?: string
	CreationDate?: string
	LastUpdateDate?: string
}

export interface PessoasAddressesExtendedItem {
	MatchKeys: string
	ExtendedAddresses: ExtendedAddresses
}

export interface PessoasEmailsExtendedItem {
	MatchKeys: string
	ExtendedEmails: ExtendedEmails
}

export interface PessoasPhonesExtendedItem {
	MatchKeys: string
	ExtendedPhones: ExtendedPhones
}

export interface PessoasKycItem {
	MatchKeys: string
	KycData: KycData
}

export interface PessoasFinancialRiskItem {
	MatchKeys: string
	FinancialRisk: FinancialRiskData
}

// ============================================================================
// Extended Addresses
// ============================================================================

export interface ExtendedAddresses {
	TotalAddresses: number
	TotalActiveAddresses: number
	TotalWorkAddresses: number
	TotalPersonalAddresses: number
	TotalUniqueAddresses: number
	TotalAddressPassages: number
	TotalBadAddressPassages: number
	OldestAddressPassageDate?: string
	NewestAddressPassageDate?: string
	Addresses: Address[]
}

export interface Address {
	Typology?: string
	Title?: string
	AddressMain: string
	Number?: string
	Complement?: string
	Neighborhood?: string
	ZipCode?: string
	City?: string
	State?: string
	Country?: string
	Type?: string
	AddressCurrentlyInRFSite?: boolean
	ComplementType?: string
	BuildCode?: string
	BuildingCode?: string
	HouseholdCode?: string
	AddressEntityAge?: number
	AddressEntityTotalPassages?: number
	AddressEntityBadPassages?: number
	AddressEntityCrawlingPassages?: number
	AddressEntityValidationPassages?: number
	AddressEntityQueryPassages?: number
	AddressEntityMonthAveragePassages?: number
	AddressGlobalAge?: number
	AddressGlobalTotalPassages?: number
	AddressGlobalBadPassages?: number
	AddressGlobalCrawlingPassages?: number
	AddressGlobalValidationPassages?: number
	AddressGlobalQueryPassages?: number
	AddressGlobalMonthAveragePassages?: number
	AddressNumberOfEntities?: number
	Priority?: number
	IsMainForEntity?: boolean
	IsIndirectAssociation?: boolean
	IsRecentForEntity?: boolean
	IsMainForOtherEntity?: boolean
	IsRecentForOtherEntity?: boolean
	IsActive?: boolean
	IsRatified?: boolean
	IsLikelyFromAccountant?: boolean
	LastValidationDate?: string
	EntityFirstPassageDate?: string
	EntityLastPassageDate?: string
	GlobalFirstPassageDate?: string
	GlobalLastPassageDate?: string
	CreationDate?: string
	LastUpdateDate?: string
	HasOptIn?: boolean
	Latitude?: number
	Longitude?: number
}

// ============================================================================
// Extended Emails
// ============================================================================

export interface ExtendedEmails {
	TotalEmails: number
	TotalActiveEmails: number
	TotalWorkEmails: number
	TotalPersonalEmails: number
	TotalUniqueEmails: number
	TotalEmailPassages: number
	TotalBadEmailPassages: number
	TotalLast3MonthsPassages?: number
	TotalLast6MonthsPassages?: number
	TotalLast12MonthsPassages?: number
	TotalLast18MonthsPassages?: number
	OldestEmailPassageDate?: string
	NewestEmailPassageDate?: string
	Emails: Email[]
}

export interface Email {
	EmailAddress: string
	Domain?: string
	UserName?: string
	Type?: string
	EmailEntityAge?: number
	EmailAssociationClassification?: EmailAssociationClassification
	EmailCurrentlyInRFSite?: boolean
	UserNameTotalPassages?: number
	UserNameFirstPassageDate?: string
	UserNameLastPassageDate?: string
	UserNameBadPassages?: number
	UserNameCrawlingPassages?: number
	UserNameValidationPassages?: number
	UserNameQueryPassages?: number
	EmailEntityTotalPassages?: number
	EmailEntityBadPassages?: number
	EmailEntityCrawlingPassages?: number
	EmailEntityValidationPassages?: number
	EmailEntityQueryPassages?: number
	EmailEntityMonthAveragePassages?: number
	EmailGlobalAge?: number
	EmailGlobalTotalPassages?: number
	EmailGlobalBadPassages?: number
	EmailGlobalCrawlingPassages?: number
	EmailGlobalValidationPassages?: number
	EmailGlobalQueryPassages?: number
	EmailGlobalMonthAveragePassages?: number
	Last3MonthsPassages?: number
	Last6MonthsPassages?: number
	Last12MonthsPassages?: number
	Last18MonthsPassages?: number
	EmailNumberOfEntities?: number
	EmailNumberOfFamilyRelatedEntities?: number
	EmailNumberOfRelatedEntities?: number
	Priority?: number
	IsMainForEntity?: boolean
	IsRecentForEntity?: boolean
	IsMainForOtherEntity?: boolean
	IsRecentForOtherEntity?: boolean
	IsActive?: boolean
	IsLikelyFromAccountant?: boolean
	ValidationStatus?: string
	LastValidationDate?: string
	EntityFirstPassageDate?: string
	EntityLastPassageDate?: string
	GlobalFirstPassageDate?: string
	GlobalLastPassageDate?: string
	CreationDate?: string
	LastUpdateDate?: string
}

// ============================================================================
// Extended Phones
// ============================================================================

export interface ExtendedPhones {
	TotalPhones: number
	TotalActivePhones: number
	TotalWorkPhones: number
	TotalPersonalPhones: number
	TotalUniquePhones: number
	TotalPhonePassages: number
	TotalBadPhonePassages: number
	TotalLast3MonthsPassages?: number
	TotalLast6MonthsPassages?: number
	TotalLast12MonthsPassages?: number
	TotalLast18MonthsPassages?: number
	OldestPhonePassageDate?: string
	NewestPhonePassageDate?: string
	Phones: Phone[]
}

export interface Phone {
	Number: string
	AreaCode?: string
	CountryCode?: string
	Complement?: string
	Type?: string
	PhoneCurrentlyInRFSite?: boolean
	PhoneEntityAge?: number
	PhoneEntityTotalPassages?: number
	PhoneEntityBadPassages?: number
	PhoneEntityCrawlingPassages?: number
	PhoneEntityValidationPassages?: number
	PhoneEntityQueryPassages?: number
	PhoneEntityMonthAveragePassages?: number
	PhoneGlobalAge?: number
	PhoneGlobalTotalPassages?: number
	PhoneGlobalBadPassages?: number
	PhoneGlobalCrawlingPassages?: number
	PhoneGlobalValidationPassages?: number
	PhoneGlobalQueryPassages?: number
	PhoneGlobalMonthAveragePassages?: number
	Last3MonthsPassages?: number
	Last6MonthsPassages?: number
	Last12MonthsPassages?: number
	Last18MonthsPassages?: number
	PhoneNumberOfEntities?: number
	PhoneNumberOfFamilyRelatedEntities?: number
	PhoneNumberOfRelatedEntities?: number
	Priority?: number
	IsMainForEntity?: boolean
	IsRecentForEntity?: boolean
	IsMainForOtherEntity?: boolean
	IsRecentForOtherEntity?: boolean
	IsActive?: boolean
	IsLikelyFromAccountant?: boolean
	IsInDoNotCallList?: boolean
	CurrentCarrier?: string
	PlanType?: string
	LastValidationDate?: string
	EntityFirstPassageDate?: string
	EntityLastPassageDate?: string
	GlobalFirstPassageDate?: string
	GlobalLastPassageDate?: string
	CreationDate?: string
	LastUpdateDate?: string
	PortabilityHistory?: PortabilityHistoryItem[]
	HasOptIn?: boolean
}

// ============================================================================
// KYC Data
// ============================================================================

export interface KycData {
	PEPHistory?: PEPHistoryItem[]
	IsCurrentlyPEP?: boolean
	SanctionsHistory?: SanctionItem[]
	IsCurrentlySanctioned?: boolean
	WasPreviouslySanctioned?: boolean
	Last30DaysSanctions?: number
	Last90DaysSanctions?: number
	Last180DaysSanctions?: number
	Last365DaysSanctions?: number
	LastYearPEPOccurence?: number
	Last3YearsPEPOccurence?: number
	Last5YearsPEPOccurence?: number
	Last5PlusYearsPEPOccurence?: number
	FirstPEPOccurenceDate?: string
	LastPEPOccurenceDate?: string
	FirstSanctionDate?: string
	LastSanctionDate?: string
	IsCurrentlyElectoralDonor?: boolean
	IsHistoricalElectoralDonor?: boolean
	TotalElectoralDonations?: number
	TotalElectoralDonationAmount?: number
	ElectoralDonations?: Record<string, ElectoralDonationYear>
}

export interface PEPHistoryItem {
	Level?: string
	JobTitle?: string
	Department?: string
	Motive?: string
	Source?: string
	TaxId?: string
	StartDate?: string
	EndDate?: string
	CreationDate?: string
	LastUpdateDate?: string
}

export interface SanctionItem {
	Source?: string
	Type?: string
	StandardizedSanctionType?: string
	MatchRate?: number
	NameUniquenessScore?: number
	Details?: SanctionDetails
	NormalizedDetails?: SanctionDetails
	StartDate?: string
	EndDate?: string
	CreationDate?: string
	LastUpdateDate?: string
	IsCurrentlyPresentOnSource?: boolean
	WasRecentlyPresentOnSource?: boolean
}

export interface SanctionDetails {
	OriginalName?: string
	SanctionName?: string
	BirthDate?: string
	StandardizedBirthDate?: string
	SourcePossibleDateOfBirthScore?: string
	Nationalities?: string
	image?: string
	charges?: string
}

export interface ElectoralDonationYear {
	DonationsCount: number
	AmountDonated: number
}

// ============================================================================
// Financial Risk Data
// ============================================================================

export interface FinancialRiskData {
	TotalAssets?: string
	EstimatedIncomeRange?: string
	IsCurrentlyEmployed?: boolean
	IsCurrentlyOwner?: boolean
	LastOccupationStartDate?: string
	IsCurrentlyOnCollection?: boolean
	Last365DaysCollectionOccurrences?: number
	CurrentConsecutiveCollectionMonths?: number
	IsCurrentlyReceivingAssistance?: boolean
	FinancialRiskScore?: number
	FinancialRiskLevel?: string
}

// ============================================================================
// Full Profile Types (combining multiple datasets)
// ============================================================================

export interface PessoasFullProfileItem {
	MatchKeys: string
	BasicData?: PessoasBasicData
	ExtendedEmails?: ExtendedEmails
	ExtendedPhones?: ExtendedPhones
	ExtendedAddresses?: ExtendedAddresses
	KycData?: KycData
	FinancialRisk?: FinancialRiskData
}

export interface EmpresasFullProfileItem {
	MatchKeys: string
	BasicData?: EmpresasBasicData
	ExtendedAddresses?: ExtendedAddresses
	Relationships?: RelationshipsData
}

// ============================================================================
// Relationships Types
// ============================================================================

export interface EmpresasRelationshipsItem {
	MatchKeys: string
	Relationships: RelationshipsData
}

export interface RelationshipsData {
	Relationships: Relationship[]
}

export interface Relationship {
	RelatedEntityTaxIdNumber?: string
	RelatedEntityTaxIdType?: string
	RelatedEntityTaxIdCountry?: string
	RelatedEntityName: string
	RelationshipType?: string
	RelationshipName?: string
	RelationshipLevel?: string
	RelationshipDataOrigin?: string
	CreationDate?: string
	LastUpdateDate?: string
	RelationshipStartDate?: string
	RelationshipEndDate?: string
}

// ============================================================================
// Empresas Emails/Phones Extended (same structure as Pessoas)
// ============================================================================

export interface EmpresasEmailsExtendedItem {
	MatchKeys: string
	ExtendedEmails: ExtendedEmails
}

export interface EmpresasPhonesExtendedItem {
	MatchKeys: string
	ExtendedPhones: ExtendedPhones
}

// ============================================================================
// Metadata Types
// ============================================================================

export interface MetadataDataset {
	Name: string
	Version: number
	CommonName: {
		"pt-br"?: string | null
		"en-us"?: string | null
	}
	IsEnabled: boolean
	IsOrchestrated: boolean
}

export interface MetadataResponse {
	Datasets: {
		"PT-BR": Record<string, Record<string, MetadataDataset>>
	}
}
