# BigDataCorp API Documentation

**Generated**: 2025-11-30 11:46:40
**Source**: [https://docs.bigdatacorp.com.br/plataforma/openapi](https://docs.bigdatacorp.com.br/plataforma/openapi)
**Statistics**:
- Total Specs: 305
- Successful: 304
- Failed: 1
- Total Operations: 330

---

## Table of Contents

- [Api-De-Batch-Canceljobexecution](#api-de-batch-CancelJobExecution) (1 operations)
- [Api-De-Batch-Getjobdetails](#api-de-batch-GetJobDetails) (1 operations)
- [Api-De-Batch-Listjobs](#api-de-batch-ListJobs) (1 operations)
- [Api-De-Batch-Pausejobexecution](#api-de-batch-PauseJobExecution) (1 operations)
- [Api-De-Batch-Restartjobexecution](#api-de-batch-RestartJobExecution) (1 operations)
- [Api-De-Batch-Resumejobexecution](#api-de-batch-ResumeJobExecution) (1 operations)
- [Api-De-Batch-Savejobdefinition](#api-de-batch-SaveJobDefinition) (1 operations)
- [Api-De-Batch-Startjobexecution](#api-de-batch-StartJobExecution) (1 operations)
- [Api-De-Estatísticas-De-Uso-Query](#api-de-estatísticas-de-uso-Query) (1 operations)
- [Api-De-Monitoramento-Details](#api-de-monitoramento-Details) (1 operations)
- [Api-De-Monitoramento-Diffexplainer](#api-de-monitoramento-DiffExplainer) (1 operations)
- [Api-De-Monitoramento-List](#api-de-monitoramento-List) (1 operations)
- [Api-De-Monitoramento-Report](#api-de-monitoramento-Report) (1 operations)
- [Api-De-Monitoramento-Setusersettings](#api-de-monitoramento-SetUserSettings) (1 operations)
- [Api-De-Monitoramento-Subscribe](#api-de-monitoramento-Subscribe) (1 operations)
- [Api-De-Monitoramento-Test](#api-de-monitoramento-Test) (1 operations)
- [Api-De-Monitoramento-Unsubscribe](#api-de-monitoramento-Unsubscribe) (1 operations)
- [Api-De-Monitoramento-Update](#api-de-monitoramento-Update) (1 operations)
- [Api-De-Preços-Query](#api-de-preços-Query) (1 operations)
- [Api-Eventos-Query](#api-eventos-Query) (1 operations)
- [Api-Hooks-Metadata](#api-hooks-Metadata) (1 operations)
- [Api-Hooks-Query](#api-hooks-Query) (1 operations)
- [Api-Hooks-Status](#api-hooks-Status) (1 operations)
- [Api-Metadata-Datasets](#api-metadata-datasets) (1 operations)
- [Api-Metadata-Definitions](#api-metadata-definitions) (1 operations)
- [Api-Tokens-Disable](#api-tokens-disable) (1 operations)
- [Api-Tokens-Disablebyid](#api-tokens-disableById) (1 operations)
- [Api-Tokens-Generate](#api-tokens-generate) (1 operations)
- [Api-Tokens-Getactivetokenids](#api-tokens-getactivetokenids) (1 operations)
- [Api-Views-Add](#api-views-Add) (1 operations)
- [Api-Views-Delete](#api-views-Delete) (1 operations)
- [Api-Views-Details](#api-views-Details) (1 operations)
- [Api-Views-Update](#api-views-Update) (1 operations)
- [Empresas](#empresas) (79 operations)
- [Enderecos](#enderecos) (17 operations)
- [Health-Check-Empresas](#health-check-empresas) (2 operations)
- [Health-Check-Pessoas](#health-check-pessoas) (2 operations)
- [Marketplace](#marketplace) (36 operations)
- [Ondemand](#ondemand) (68 operations)
- [Pessoas](#pessoas) (83 operations)
- [Processos](#processos) (2 operations)
- [Produtos](#produtos) (7 operations)
- [Veiculos](#veiculos) (1 operations)

---

## Quick Reference: All Operations

| Domain | Operation ID | Method | Path | Summary |
|--------|--------------|--------|------|---------|
| api-de-batch-CancelJobExecution | `api-de-batch-CancelJobExecution` | POST | `/cancelarExecucao` | Cancelar Execução |
| api-de-batch-GetJobDetails | `api-de-batch-GetJobDetails` | POST | `/obterDetalhes` | Obter Detalhes |
| api-de-batch-ListJobs | `api-de-batch-ListJobs` | POST | `/listar` | Listar |
| api-de-batch-PauseJobExecution | `api-de-batch-PauseJobExecution` | POST | `/pausarExecucao` | Pausar Execução |
| api-de-batch-RestartJobExecution | `api-de-batch-RestartJobExecution` | POST | `/reiniciarExecucao` | Reiniciar Execução |
| api-de-batch-ResumeJobExecution | `api-de-batch-ResumeJobExecution` | POST | `/resumirExecucao` | Resumir Execução |
| api-de-batch-SaveJobDefinition | `api-de-batch-SaveJobDefinition` | POST | `/salvarDefinicao` | Salvar Definição |
| api-de-batch-StartJobExecution | `api-de-batch-StartJobExecution` | POST | `/iniciarExecucao` | Iniciar Execução |
| api-de-estatísticas-de-uso-Query | `api-de-estatísticas-de-uso-Query` | POST | `/` | Requisição |
| api-de-monitoramento-Details | `api-de-monitoramento-Details` | POST | `/detalhes` | Detalhes de Monitoramento |
| api-de-monitoramento-DiffExplainer | `api-de-monitoramento-DiffExplainer` | POST | `/diferencas` | Diferenças de Monitoramento |
| api-de-monitoramento-List | `api-de-monitoramento-List` | POST | `/listar` | Listar Inscrições |
| api-de-monitoramento-Report | `api-de-monitoramento-Report` | POST | `/relatorio` | Histórico de Monitoramento |
| api-de-monitoramento-SetUserSettings | `api-de-monitoramento-SetUserSettings` | POST | `/definirUsuario` | Configurar Usuário |
| api-de-monitoramento-Subscribe | `api-de-monitoramento-Subscribe` | POST | `/monitorar` | Habilitar Monitoramento |
| api-de-monitoramento-Test | `api-de-monitoramento-Test` | POST | `/teste` | Teste de Monitoramento |
| api-de-monitoramento-Unsubscribe | `api-de-monitoramento-Unsubscribe` | POST | `/desabilitar` | Desabilitar Monitoramento |
| api-de-monitoramento-Update | `api-de-monitoramento-Update` | POST | `/atualizar` | Atualizar Monitoramento |
| api-de-preços-Query | `api-de-preços-Query` | POST | `/` | Requisição |
| api-eventos-Query | `api-eventos-Query` | POST | `/` | Requisição |
| api-hooks-Metadata | `api-hooks-Metadata` | POST | `/obterMetadado` | Obter Metadado |
| api-hooks-Query | `api-hooks-Query` | POST | `/` | Requisição |
| api-hooks-Status | `api-hooks-Status` | POST | `/status` | Estatísticas de Envios |
| api-metadata-datasets | `api-metadata-datasets` | POST | `/datasets` | Datasets |
| api-metadata-definitions | `api-metadata-definitions` | POST | `/definicoes` | Definições De Datasets |
| api-tokens-disable | `api-tokens-disable` | POST | `/desabilitar` | Desabilitar |
| api-tokens-disableById | `api-tokens-disableById` | POST | `/desabilitarPorId` | Desabilitar Por ID |
| api-tokens-generate | `api-tokens-generate` | POST | `/gerar` | Gerar |
| api-tokens-getactivetokenids | `api-tokens-getactivetokenids` | POST | `/obterTokenIdsAtivos` | Obter Token IDs Ativos |
| api-views-Add | `api-views-Add` | POST | `/adicionar` | Adicionar |
| api-views-Delete | `api-views-Delete` | POST | `/deletar` | Deletar |
| api-views-Details | `api-views-Details` | POST | `/obterDetalhes` | Obter Detalhes |
| api-views-Update | `api-views-Update` | POST | `/atualizar` | Atualizar |
| empresas | `empresas_activity_indicators` | POST | `/empresas` | Indicadores de Atividade |
| empresas | `empresas_addresses_extended` | POST | `/empresas` | Endereços - Estendido |
| empresas | `empresas_apps_networks_and_platforms` | POST | `/empresas` | Presença em Apps e Plataformas |
| empresas | `empresas_awards_and_certifications` | POST | `/empresas` | Prêmios e Certificações |
| empresas | `empresas_basic_data` | POST | `/empresas` | Dados Cadastrais Básicos |
| empresas | `empresas_circles_employees` | POST | `/empresas` | Círculos - Funcionários |
| empresas | `empresas_circles_first_level_owners` | POST | `/empresas` | Círculos - Sócios de Primeiro Nível |
| empresas | `empresas_circles_legal_representatives` | POST | `/empresas` | Círculos - Representantes Legais |
| empresas | `empresas_civil_construction_data` | POST | `/empresas` | Dados de Obras Civis |
| empresas | `empresas_collections` | POST | `/empresas` | Presença em Cobrança |
| empresas | `empresas_company_evolution` | POST | `/empresas` | Evolução da Empresa |
| empresas | `empresas_company_group_building` | POST | `/empresas` | Grupo Empresarial - Prédio |
| empresas | `empresas_company_group_building_activity` | POST | `/empresas` | Grupo Empresarial - Atividade no Mesmo Prédio |
| empresas | `empresas_company_group_documentroot` | POST | `/empresas` | Grupo Empresarial - Raiz do CNPJ |
| empresas | `empresas_company_group_household` | POST | `/empresas` | Grupo Empresarial - Mesmo Endereço |
| empresas | `empresas_company_group_household_activity` | POST | `/empresas` | Grupo Empresarial - Atividade no Mesmo Endereço |
| empresas | `empresas_company_group_household_owners_surname` | POST | `/empresas` | Grupo Empresarial - Sócios Relacionados no Mesmo E... |
| empresas | `empresas_company_group_legal_representative` | POST | `/empresas` | Grupo Empresarial - Representante Legal |
| empresas | `empresas_company_group_officialname` | POST | `/empresas` | Grupo Empresarial - Razão Social |
| empresas | `empresas_company_group_owners` | POST | `/empresas` | Grupo Empresarial - Sócios |
| empresas | `empresas_company_group_rfcontact` | POST | `/empresas` | Grupo Empresarial - Contato na Receita Federal |
| empresas | `empresas_company_group_tradename` | POST | `/empresas` | Grupo Empresarial - Nome Fantasia |
| empresas | `empresas_company_group_tradename_city` | POST | `/empresas` | Grupo Empresarial - Nome Fantasia por Cidade |
| empresas | `empresas_domains` | POST | `/empresas` | Dados de Sites |
| empresas | `empresas_domains_extended` | POST | `/empresas` | Dados de Sites - Estendido |
| empresas | `empresas_dynamic_qsa_data` | POST | `/empresas` | Busca Dinâmica de QSA |
| empresas | `empresas_economic_group_first_level` | POST | `/empresas` | Grupo Econômico de Primeiro Nível |
| empresas | `empresas_economic_group_first_level_extended` | POST | `/empresas` | Grupo Econômico de Primeiro Nível Estendido |
| empresas | `empresas_economic_group_full` | POST | `/empresas` | Grupo Econômico Completo |
| empresas | `empresas_economic_group_full_extended` | POST | `/empresas` | Grupo Econômico Completo Estendido |
| empresas | `empresas_economic_group_kyc` | POST | `/empresas` | KYC e Compliance do Grupo Econômico |
| empresas | `empresas_economic_group_relationships` | POST | `/empresas` | Relacionamentos - Grupo Econômico |
| empresas | `empresas_economic_group_second_level` | POST | `/empresas` | Grupo Econômico de Segundo Nível |
| empresas | `empresas_economic_group_second_level_extended` | POST | `/empresas` | Grupo Econômico de Segundo Nível Estendido |
| empresas | `empresas_economic_group_third_level` | POST | `/empresas` | Grupo Econômico de Terceiro Nível |
| empresas | `empresas_economic_group_third_level_extended` | POST | `/empresas` | Grupo Econômico de Terceiro Nível Estendido |
| empresas | `empresas_electoral_donors` | POST | `/empresas` | Doações Eleitorais |
| empresas | `empresas_electoral_providers` | POST | `/empresas` | Prestadores de Serviços Eleitorais |
| empresas | `empresas_emails_extended` | POST | `/empresas` | E-mails - Estendido |
| empresas | `empresas_employees_industrial_property` | POST | `/empresas` | Propriedades Industriais de Funcionários |
| empresas | `empresas_employees_kyc` | POST | `/empresas` | KYC e Compliance dos Funcionários |
| empresas | `empresas_financial_market` | POST | `/empresas` | Mercado Financeiro |
| empresas | `empresas_genai_description_gpt_x1_0` | POST | `/empresas` | Firmografia da Empresa - GPT x1.0 |
| empresas | `empresas_genai_description_gpt_x1_5` | POST | `/empresas` | Firmografia da Empresa - GPT x1.5 |
| empresas | `empresas_genai_description_mistral_x1_0` | POST | `/empresas` | Firmografia da Empresa - Mistral x1.0 |
| empresas | `empresas_genai_description_mistral_x1_5` | POST | `/empresas` | Firmografia da Empresa - Mistral x1.5 |
| empresas | `empresas_genai_description_nova_x1_0` | POST | `/empresas` | Firmografia da Empresa - Nova x1.0 |
| empresas | `empresas_genai_description_nova_x1_5` | POST | `/empresas` | Firmografia da Empresa - Nova x1.5 |
| empresas | `empresas_government_debtors` | POST | `/empresas` | Devedores do Governo |
| empresas | `empresas_history_basic_data` | POST | `/empresas` | Histórico de Dados Básicos Cadastrais |
| empresas | `empresas_industrial_property` | POST | `/empresas` | Propriedades Industriais |
| empresas | `empresas_interests_and_behaviors` | POST | `/empresas` | Interesses e Comportamentos |
| empresas | `empresas_investment_fund_data` | POST | `/empresas` | Dados de Fundos de Investimento |
| empresas | `empresas_kyc` | POST | `/empresas` | KYC e Compliance |
| empresas | `empresas_lawsuits_distribution_data` | POST | `/empresas` | Dados de Distribuição de Processos Judiciais |
| empresas | `empresas_licenses_and_authorizations` | POST | `/empresas` | Licenças e Autorizações |
| empresas | `empresas_marketplace_data` | POST | `/empresas` | Marketplaces |
| empresas | `empresas_media_profile_and_exposure` | POST | `/empresas` | Exposição e Perfil na Mídia |
| empresas | `empresas_merchant_category_data` | POST | `/empresas` | Dados de Categoria Comercial - MCC |
| empresas | `empresas_online_ads` | POST | `/empresas` | Anúncios Online |
| empresas | `empresas_owners_electoral_donors` | POST | `/empresas` | Doações Eleitorais de Sócios |
| empresas | `empresas_owners_industrial_property` | POST | `/empresas` | Propriedades Industriais de Sócios |
| empresas | `empresas_owners_influence` | POST | `/empresas` | Influência do Quadro Societário |
| empresas | `empresas_owners_kyc` | POST | `/empresas` | KYC e Compliance dos Sócios |
| empresas | `empresas_owners_lawsuits` | POST | `/empresas` | Processos Judiciais dos Sócios |
| empresas | `empresas_owners_lawsuits_distribution_data` | POST | `/empresas` | Dados de Distribuição de Processos dos Sócios |
| empresas | `empresas_phones_extended` | POST | `/empresas` | Telefones - Estendido |
| empresas | `empresas_political_involvement` | POST | `/empresas` | Envolvimento Político |
| empresas | `empresas_processes` | POST | `/empresas` | Processos Judiciais e Administrativos |
| empresas | `empresas_registration_data` | POST | `/empresas` | Dados Cadastrais |
| empresas | `empresas_related_people_addresses` | POST | `/empresas` | Endereços - Pessoas Relacionadas |
| empresas | `empresas_related_people_emails` | POST | `/empresas` | Emails - Pessoas Relacionadas |
| empresas | `empresas_related_people_phones` | POST | `/empresas` | Telefones - Pessoas Relacionadas |
| empresas | `empresas_relationships` | POST | `/empresas` | Relacionamentos |
| empresas | `empresas_reputations_and_reviews` | POST | `/empresas` | Avaliações e Reputação |
| empresas | `empresas_social_conscience` | POST | `/empresas` | Consciência Social |
| empresas | `empresas_syndicate_agreements` | POST | `/empresas` | Acordos Sindicais |
| empresas | `empresas_unified_modeling_data_x1_0` | POST | `/empresas` | Dados Unificados para Modelagem x1.0 |
| empresas | `empresas_unified_modeling_data_x1_5` | POST | `/empresas` | Dados Unificados para Modelagem x1.5 |
| enderecos | `enderecos_address_risk` | POST | `/enderecos` | Endereços em Área de Risco |
| enderecos | `enderecos_archaeological_sites` | POST | `/enderecos` | Sítios Arqueológicos |
| enderecos | `enderecos_basic_data` | POST | `/enderecos` | Dados Básicos |
| enderecos | `enderecos_biomes_data` | POST | `/enderecos` | Biomas |
| enderecos | `enderecos_companies_data` | POST | `/enderecos` | Dados de Empresas nas Proximidades |
| enderecos | `enderecos_companies_statistics` | POST | `/enderecos` | Estatísticas de Empresas |
| enderecos | `enderecos_conservation_units` | POST | `/enderecos` | Unidades de Conservação |
| enderecos | `enderecos_counties_map` | POST | `/enderecos` | Mapa de municípios |
| enderecos | `enderecos_criminal_statistics_data` | POST | `/enderecos` | Dados de Estatísticas Criminais |
| enderecos | `enderecos_embargoed_areas` | POST | `/enderecos` | Consulta de Áreas Embargadas ICMBio |
| enderecos | `enderecos_embargoed_areas` | POST | `/enderecos` | Consulta de Áreas Embargadas ICMBio |
| enderecos | `enderecos_environmental_preservation_areas` | POST | `/enderecos` | Áreas de Proteção Ambiental |
| enderecos | `enderecos_indigenous_lands_data` | POST | `/enderecos` | Terras Indígenas |
| enderecos | `enderecos_legal_amazon` | POST | `/enderecos` | Amazônia Legal |
| enderecos | `enderecos_legal_reserve` | POST | `/enderecos` | Consulta de Reservas Legais SICAR |
| enderecos | `enderecos_sicar_property_data` | POST | `/enderecos` | Dados de Propriedades Rurais SICAR |
| enderecos | `enderecos_sugarcane_agroecological_zoning` | POST | `/enderecos` | Zoneamento Agroecológico |
| health-check-empresas | `health-check-empresas` | POST | `/empresas` | Health Check - Empresas |
| health-check-empresas | `health-check-empresas` | POST | `/empresas` | Health Check - Empresas |
| health-check-pessoas | `health-check-pessoas` | POST | `/pessoas` | Health Check - Pessoas |
| health-check-pessoas | `health-check-pessoas` | POST | `/pessoas` | Health Check - Pessoas |
| marketplace | `marketplace_partner_b2e_score_person` | POST | `/marketplace` | Acelerador de Vendas B2e |
| marketplace | `marketplace_partner_b4b_optin_contact_person` | POST | `/marketplace` | Status de Opt-In de Contatos |
| marketplace | `marketplace_partner_blu365_phone_report_data_person` | POST | `/marketplace` | Dados sobre status de entrega de SMS |
| marketplace | `marketplace_partner_blu365_phone_score_data_person` | POST | `/marketplace` | Modelo de Score de Telefone |
| marketplace | `marketplace_partner_boavista_credit_score_company` | POST | `/marketplace` | Dados Restritivos de Crédito |
| marketplace | `marketplace_partner_boavista_credit_score_person` | POST | `/marketplace` | Dados Restritivos de Crédito |
| marketplace | `marketplace_partner_boavista_one_score_company` | POST | `/marketplace` | Score Multidados de Crédito Pessoa Jurídica |
| marketplace | `marketplace_partner_boavista_one_score_person` | POST | `/marketplace` | Score Multidados de Crédito Pessoa Física |
| marketplace | `marketplace_partner_boavista_owner_participation_data_company` | POST | `/marketplace` | Percentual de Participação Societária |
| marketplace | `marketplace_partner_fuellog_fuel_pricing_data_address` | POST | `/marketplace` | Dados de Preços de Combustível |
| marketplace | `marketplace_partner_fuellog_fuel_pricing_data_company` | POST | `/marketplace` | Dados de Preços de Combustível |
| marketplace | `marketplace_partner_fuellog_fuel_pricing_data_person` | POST | `/marketplace` | Dados de Preços de Combustível |
| marketplace | `marketplace_partner_geofusion_intraurban_segmentation_company` | POST | `/marketplace` | Segmentação Intraurbana Geofusion [Temporariamente... |
| marketplace | `marketplace_partner_geofusion_sociodemographic_and_economic_data_company` | POST | `/marketplace` | Dados Sociodemográficos e Econômicos Geofusion [Te... |
| marketplace | `marketplace_partner_murabei_credit_score_company` | POST | `/marketplace` | Score Murabei de Risco de Crédito |
| marketplace | `marketplace_partner_network_data` | POST | `/marketplace` | Dados de Rede |
| marketplace | `marketplace_partner_public_safety_company` | POST | `/marketplace` | Dados de Segurança Pública |
| marketplace | `marketplace_partner_public_safety_person` | POST | `/marketplace` | Dados de Segurança Pública |
| marketplace | `marketplace_partner_quantum_custom_score_company` | POST | `/marketplace` | Score de Crédito de Pessoa Jurídica |
| marketplace | `marketplace_partner_quantum_custom_score_person` | POST | `/marketplace` | Score de Crédito de Pessoa Física |
| marketplace | `marketplace_partner_quantum_score_person` | POST | `/marketplace` | Score de Crédito Rotativo |
| marketplace | `marketplace_partner_quod_credit_risk_company` | POST | `/marketplace` | Módulo Flag Negativo |
| marketplace | `marketplace_partner_quod_credit_risk_details_company` | POST | `/marketplace` | Módulo Detalhe Negativo |
| marketplace | `marketplace_partner_quod_credit_risk_details_person` | POST | `/marketplace` | Módulo Detalhe Negativo e Consulta |
| marketplace | `marketplace_partner_quod_credit_risk_person` | POST | `/marketplace` | Módulo Flag Negativo e Consulta |
| marketplace | `marketplace_partner_quod_credit_score_company` | POST | `/marketplace` | Módulo Score |
| marketplace | `marketplace_partner_quod_credit_score_person` | POST | `/marketplace` | Módulo Score |
| marketplace | `marketplace_partner_rede_vistorias_address` | POST | `/marketplace` | Qualificação de Imóveis da Rede Vistorias |
| marketplace | `marketplace_partner_scorepositivo_company_finance` | POST | `/marketplace` | Exposição Financeira de Pessoa Jurídica |
| marketplace | `marketplace_partner_scorepositivo_individual_finance` | POST | `/marketplace` | Exposição Financeira de Pessoa Física |
| marketplace | `marketplace_partner_telesign_phone_id_porting_history_person` | POST | `/marketplace` | Histórico de Portabilidade de Contato |
| marketplace | `marketplace_partner_telesign_phone_id_porting_status_person` | POST | `/marketplace` | Status de Portabilidade |
| marketplace | `marketplace_partner_telesign_phone_id_standard_person` | POST | `/marketplace` | Informações de Número de Telefone |
| marketplace | `marketplace_partner_telesign_phone_id_subscriber_status_person` | POST | `/marketplace` | Status do Assinante |
| marketplace | `marketplace_partner_telesign_phone_score_person` | POST | `/marketplace` | Score de Risco de Telefone |
| marketplace | `marketplace_partner_ultimate_beneficial_owners_company` | POST | `/marketplace` | Beneficiário Final |
| ondemand | `ondemand_administrative_sanctions_person` | POST | `/ondemand` | Sanções Administrativas do Banco Central |
| ondemand | `ondemand_antt_data_vehicle` | POST | `/ondemand` | Consulta de Transportadores (RNTRC) |
| ondemand | `ondemand_cartaosus_person` | POST | `/ondemand` | Cartão do SUS |
| ondemand | `ondemand_cdcit_company` | POST | `/ondemand` | Certidão de Contratação Pessoas com Deficiência e ... |
| ondemand | `ondemand_cert_debt_absence_by_state_company` | POST | `/ondemand` | Certidão Negativa de Debitos Estadual |
| ondemand | `ondemand_cert_debt_absence_by_state_person` | POST | `/ondemand` | Certidão Negativa de Débitos Estaduais |
| ondemand | `ondemand_cert_labor_debt_absence_company` | POST | `/ondemand` | Certidão Negativa de Débitos Trabalhistas |
| ondemand | `ondemand_cert_labor_debt_absence_person` | POST | `/ondemand` | Certidão Negativa de Débitos Trabalhistas |
| ondemand | `ondemand_cert_rais_person` | POST | `/ondemand` | Consulta Rais Empregado |
| ondemand | `ondemand_cert_siproquim_company` | POST | `/ondemand` | Certidão SIPROQUIM |
| ondemand | `ondemand_cgu_negative_certificate_company` | POST | `/ondemand` | Certidão Negativa CGU (Pessoa Jurídica) |
| ondemand | `ondemand_cgu_negative_certificate_person` | POST | `/ondemand` | Certidão Negativa Correcional CGU (Pessoa Física) |
| ondemand | `ondemand_cnj_negative_certificate_company` | POST | `/ondemand` | Certidão Negativa CNJ (Pessoa Jurídica) |
| ondemand | `ondemand_cnj_negative_certificate_person` | POST | `/ondemand` | Certidão Negativa CNJ (Pessoa Física) |
| ondemand | `ondemand_comex_company` | POST | `/ondemand` | Dados de Habilitação COMEX |
| ondemand | `ondemand_comprot_processes_company` | POST | `/ondemand` | Consulta de Processos no COMPROT |
| ondemand | `ondemand_comprot_processes_person` | POST | `/ondemand` | Consulta de Processos no COMPROT |
| ondemand | `ondemand_data_receipt` | POST | `/ondemand` | Consulta NFe |
| ondemand | `ondemand_detran_data_vehicle` | POST | `/ondemand` | Consulta Detran |
| ondemand | `ondemand_ecd_company` | POST | `/ondemand` | Consulta de Escrituração Contábil Digital |
| ondemand | `ondemand_esocial_certificate_person` | POST | `/ondemand` | Qualificação Cadastral no E-Social |
| ondemand | `ondemand_fgts_company` | POST | `/ondemand` | Certidão FGTS |
| ondemand | `ondemand_freight_service_certificate_receipt` | POST | `/ondemand` | Consulta CTe |
| ondemand | `ondemand_health_insurance_person` | POST | `/ondemand` | Consulta de Plano de Saúde na ANS [Temporariamente... |
| ondemand | `ondemand_ibama_cert_negativa_company` | POST | `/ondemand` | Certidão Negativa do Ibama |
| ondemand | `ondemand_ibama_cert_negativa_person` | POST | `/ondemand` | Certidão Negativa do Ibama |
| ondemand | `ondemand_ibama_embargados_company` | POST | `/ondemand` | Certidão de Embargos do Ibama |
| ondemand | `ondemand_ibama_embargados_person` | POST | `/ondemand` | Certidão de Embargos do Ibama |
| ondemand | `ondemand_irt_certificate_company` | POST | `/ondemand` | Certidão IRT |
| ondemand | `ondemand_irt_certificate_person` | POST | `/ondemand` | Certidão IRT |
| ondemand | `ondemand_labor_lawsuits_certificate_company` | POST | `/ondemand` | Certidão de Ações Trabalhistas (Pessoa Jurídica) |
| ondemand | `ondemand_labor_lawsuits_certificate_person` | POST | `/ondemand` | Certidão de Ações Trabalhistas (Pessoa Física) |
| ondemand | `ondemand_legal_representative_company` | POST | `/ondemand` | Consulta de Representante Legal na Receita Federal |
| ondemand | `ondemand_municipal_registration_company` | POST | `/ondemand` | Consulta de Inscrição Municipal |
| ondemand | `ondemand_nada_consta_person` | POST | `/ondemand` | Certidão de Nada Consta - Ações Judiciais |
| ondemand | `ondemand_pc_antecedente_by_state_person` | POST | `/ondemand` | Certidão Antecedentes Criminais - Polícia Civil |
| ondemand | `ondemand_pesquisa_protesto_by_state_company` | POST | `/ondemand` | Consulta de Protestos Estadual |
| ondemand | `ondemand_pesquisa_protesto_by_state_person` | POST | `/ondemand` | Consulta de Protestos Estadual |
| ondemand | `ondemand_pf_antecedente_person` | POST | `/ondemand` | Certidão Antecedentes Criminais - Polícia Federal |
| ondemand | `ondemand_pgfn_company` | POST | `/ondemand` | Certidão PGFN |
| ondemand | `ondemand_pgfn_person` | POST | `/ondemand` | Certidão PGFN |
| ondemand | `ondemand_pgmei_company` | POST | `/ondemand` | Consulta de Arrecadação do Simples Nacional para M... |
| ondemand | `ondemand_pis_person` | POST | `/ondemand` | Consulta de Dados do PIS |
| ondemand | `ondemand_police_report_bo_person` | POST | `/ondemand` | Consulta de Boletim de Ocorrência - Policia Civil |
| ondemand | `ondemand_public_projects_company` | POST | `/ondemand` | Consulta de Projetos Públicos |
| ondemand | `ondemand_query_pesquisaprotesto_company` | POST | `/ondemand` | Certidão Negativa de Protesto |
| ondemand | `ondemand_query_pesquisaprotesto_person` | POST | `/ondemand` | Certidão Negativa de Protesto |
| ondemand | `ondemand_rais_consulta_crea_person` | POST | `/ondemand` | Consulta de Controle de Arquivos RAIS |
| ondemand | `ondemand_regularity_certificate_ibama_company` | POST | `/ondemand` | Certidão Regulatória do Ibama |
| ondemand | `ondemand_regularity_certificate_ibama_person` | POST | `/ondemand` | Certificado de Regularidade Ibama |
| ondemand | `ondemand_restituicao_person` | POST | `/ondemand` | Consulta de Restituição do Imposto de Renda |
| ondemand | `ondemand_rf_qsa_company` | POST | `/ondemand` | Consulta de QSA na Receita Federal |
| ondemand | `ondemand_rf_status_company` | POST | `/ondemand` | Consulta de CNPJ na Receita Federal |
| ondemand | `ondemand_rf_status_person` | POST | `/ondemand` | Consulta de CPF na Receita Federal |
| ondemand | `ondemand_sanitary_license_company` | POST | `/ondemand` | Licenças Sanitárias |
| ondemand | `ondemand_sanitary_license_person` | POST | `/ondemand` | Licenças Sanitárias |
| ondemand | `ondemand_seguro_desemprego_person` | POST | `/ondemand` | Consulta de Seguro Desemprego |
| ondemand | `ondemand_sicar_statement_address` | POST | `/ondemand` | Certificado SICAR |
| ondemand | `ondemand_sigef_installments_company` | POST | `/ondemand` | Consulta de Parcelas no SIGEF |
| ondemand | `ondemand_sigef_installments_person` | POST | `/ondemand` | Consulta de Parcelas no SIGEF |
| ondemand | `ondemand_simples_company` | POST | `/ondemand` | Consulta de Optante pelo Simples |
| ondemand | `ondemand_sintegra_company` | POST | `/ondemand` | Consulta do SINTEGRA |
| ondemand | `ondemand_sintegra_company_v2` | POST | `/ondemand` | Consulta do SINTEGRA (v2) |
| ondemand | `ondemand_sintegra_person` | POST | `/ondemand` | Consulta do SINTEGRA |
| ondemand | `ondemand_sintegra_person_v2` | POST | `/ondemand` | Consulta do SINTEGRA (v2) |
| ondemand | `ondemand_traffic_ticket_person` | POST | `/ondemand` | Consulta de Multa de Trânsito |
| ondemand | `ondemand_tse_electoral_discharge_person` | POST | `/ondemand` | Certidão de Quitação Eleitoral do TSE |
| ondemand | `ondemand_tse_polling_place_person` | POST | `/ondemand` | Consulta TSE de Local de Votação |
| pessoas | `pessoas_addresses_extended` | POST | `/pessoas` | Endereços - Estendido |
| pessoas | `pessoas_apps_networks_and_platforms` | POST | `/pessoas` | Presença em Apps e Plataformas |
| pessoas | `pessoas_awards_and_certifications` | POST | `/pessoas` | Prêmios e Certificações |
| pessoas | `pessoas_basic_data` | POST | `/pessoas` | Dados Cadastrais Básicos |
| pessoas | `pessoas_basic_data_with_configurable_recency` | POST | `/pessoas` | Dados Cadastrais de Recência Configurável |
| pessoas | `pessoas_business_relationships` | POST | `/pessoas` | Relacionamentos Econômicos |
| pessoas | `pessoas_circles_building` | POST | `/pessoas` | Círculos - Vizinhos (Mesmo prédio) |
| pessoas | `pessoas_circles_college_class` | POST | `/pessoas` | Círculos - Colegas de Classe |
| pessoas | `pessoas_circles_coworkers` | POST | `/pessoas` | Círculos - Colegas de Trabalho |
| pessoas | `pessoas_circles_first_level_relatives` | POST | `/pessoas` | Círculos - Parentes (1º grau) |
| pessoas | `pessoas_circles_household` | POST | `/pessoas` | Círculos - Household |
| pessoas | `pessoas_circles_lawsuit_parties` | POST | `/pessoas` | Círculos - Processos Judiciais |
| pessoas | `pessoas_circles_neighbors` | POST | `/pessoas` | Círculos - Vizinhos |
| pessoas | `pessoas_circles_partners` | POST | `/pessoas` | Círculos - Sócios |
| pessoas | `pessoas_circles_relatives` | POST | `/pessoas` | Círculos - Parentes |
| pessoas | `pessoas_class_organization` | POST | `/pessoas` | Conselhos de Classe |
| pessoas | `pessoas_collections` | POST | `/pessoas` | Presença em Cobrança |
| pessoas | `pessoas_company_group_employed` | POST | `/pessoas` | Grupo Empresarial - Emprego |
| pessoas | `pessoas_company_group_family_ownership` | POST | `/pessoas` | Grupo Empresarial - Família |
| pessoas | `pessoas_company_group_ownership` | POST | `/pessoas` | Grupo Empresarial - Sociedade |
| pessoas | `pessoas_company_group_sued` | POST | `/pessoas` | Grupo Empresarial - Processos |
| pessoas | `pessoas_demographic_data` | POST | `/pessoas` | Informações Sócio-Demográficas |
| pessoas | `pessoas_domains` | POST | `/pessoas` | Dados de Sites |
| pessoas | `pessoas_domains_extended` | POST | `/pessoas` | Dados de Sites - Estendido |
| pessoas | `pessoas_election_candidate_data` | POST | `/pessoas` | Candidatos Eleitorais |
| pessoas | `pessoas_electoral_donors` | POST | `/pessoas` | Doações Eleitorais |
| pessoas | `pessoas_electoral_providers` | POST | `/pessoas` | Prestadores de Serviços Eleitorais |
| pessoas | `pessoas_emails_extended` | POST | `/pessoas` | E-mails - Estendido |
| pessoas | `pessoas_family_financial_data` | POST | `/pessoas` | Dados Financeiros Familiares |
| pessoas | `pessoas_family_financial_risk` | POST | `/pessoas` | Risco Financeiro Familiar |
| pessoas | `pessoas_family_lawsuits_distribution_data` | POST | `/pessoas` | Dados de Distribuição de Processos Judiciais Famil... |
| pessoas | `pessoas_family_online_participation` | POST | `/pessoas` | Participação Online Familiar |
| pessoas | `pessoas_family_political_history` | POST | `/pessoas` | Histórico Político Familiar |
| pessoas | `pessoas_family_social_assistance` | POST | `/pessoas` | Benefícios Sociais Familiares |
| pessoas | `pessoas_financial_data` | POST | `/pessoas` | Informações Financeiras |
| pessoas | `pessoas_financial_interests` | POST | `/pessoas` | Interesses Financeiros |
| pessoas | `pessoas_financial_risk` | POST | `/pessoas` | Risco Financeiro |
| pessoas | `pessoas_first_level_relatives_kyc` | POST | `/pessoas` | KYC e Compliance dos Familiares de Primeiro Nível |
| pessoas | `pessoas_first_level_relatives_lawsuit_data` | POST | `/pessoas` | Processos Judiciais e Administrativos de Familiare... |
| pessoas | `pessoas_flags_and_features` | POST | `/pessoas` | Indicadores e Características |
| pessoas | `pessoas_genai_description_gpt_x1_0` | POST | `/pessoas` | Biografia de Vida - GPT x1.0 |
| pessoas | `pessoas_genai_description_gpt_x1_5` | POST | `/pessoas` | Biografia de Vida - GPT x1.5 |
| pessoas | `pessoas_genai_description_mistral_x1_0` | POST | `/pessoas` | Biografia de Vida - Mistral x1.0 |
| pessoas | `pessoas_genai_description_mistral_x1_5` | POST | `/pessoas` | Biografia de Vida - Mistral x1.5 |
| pessoas | `pessoas_genai_description_nova_x1_0` | POST | `/pessoas` | Biografia de Vida - Nova x1.0 |
| pessoas | `pessoas_genai_description_nova_x1_5` | POST | `/pessoas` | Biografia de Vida - Nova x1.5 |
| pessoas | `pessoas_government_debtors` | POST | `/pessoas` | Devedores do Governo |
| pessoas | `pessoas_historical_basic_data` | POST | `/pessoas` | Histórico de Dados Básicos |
| pessoas | `pessoas_indebtedness_question` | POST | `/pessoas` | Probabilidade de Negativação |
| pessoas | `pessoas_industrial_property` | POST | `/pessoas` | Propriedades Industriais |
| pessoas | `pessoas_influence_data` | POST | `/pessoas` | Dados de Influência |
| pessoas | `pessoas_interests_and_behaviors` | POST | `/pessoas` | Interesses e Comportamentos |
| pessoas | `pessoas_kyc` | POST | `/pessoas` | KYC e Compliance |
| pessoas | `pessoas_lawsuits_distribution_data` | POST | `/pessoas` | Dados de Distribuição de Processos Judiciais |
| pessoas | `pessoas_licenses_and_authorizations` | POST | `/pessoas` | Licenças e Autorizações |
| pessoas | `pessoas_life_stages` | POST | `/pessoas` | Momentos de Vida |
| pessoas | `pessoas_media_profile_and_exposure` | POST | `/pessoas` | Exposição e Perfil na Mídia |
| pessoas | `pessoas_occupation_data` | POST | `/pessoas` | Dados Profissionais |
| pessoas | `pessoas_online_ads` | POST | `/pessoas` | Anúncios Online |
| pessoas | `pessoas_online_betting_compliance` | POST | `/pessoas` | Compliance de Casas de Aposta |
| pessoas | `pessoas_online_betting_propensity` | POST | `/pessoas` | Propensão à Aposta Online |
| pessoas | `pessoas_online_presence` | POST | `/pessoas` | Presença Online |
| pessoas | `pessoas_passages` | POST | `/pessoas` | Passagens pela Web |
| pessoas | `pessoas_phones_extended` | POST | `/pessoas` | Telefones - Estendido |
| pessoas | `pessoas_political_involvement` | POST | `/pessoas` | Envolvimento Político |
| pessoas | `pessoas_political_relationships` | POST | `/pessoas` | Relacionamentos Políticos |
| pessoas | `pessoas_processes` | POST | `/pessoas` | Processos Judiciais e Administrativos |
| pessoas | `pessoas_profession_data` | POST | `/pessoas` | Servidores Públicos |
| pessoas | `pessoas_professional_turnover` | POST | `/pessoas` | Turnover Profissional |
| pessoas | `pessoas_qsa_bet_data` | POST | `/pessoas` | QSA - Casas de Apostas |
| pessoas | `pessoas_registration_data` | POST | `/pessoas` | Dados Cadastrais |
| pessoas | `pessoas_related_people` | POST | `/pessoas` | Relacionamentos Pessoais |
| pessoas | `pessoas_related_people_addresses` | POST | `/pessoas` | Endereços - Pessoas Relacionadas |
| pessoas | `pessoas_related_people_emails` | POST | `/pessoas` | E-mails - Pessoas Relacionadas |
| pessoas | `pessoas_related_people_phones` | POST | `/pessoas` | Telefones - Pessoas Relacionadas |
| pessoas | `pessoas_security_data` | POST | `/pessoas` | Dados de Segurança |
| pessoas | `pessoas_social_assistance` | POST | `/pessoas` | Programas de Benefícios e Assistência Social |
| pessoas | `pessoas_social_assistance_extended` | POST | `/pessoas` | Programas de Benefícios e Assistência Social - Est... |
| pessoas | `pessoas_sports_exposure` | POST | `/pessoas` | Exposição Esportiva |
| pessoas | `pessoas_unified_modeling_data_x1_0` | POST | `/pessoas` | Dados Unificados para Modelagem x1.0 |
| pessoas | `pessoas_unified_modeling_data_x1_5` | POST | `/pessoas` | Dados Unificados para Modelagem x1.5 |
| pessoas | `pessoas_university_student_data` | POST | `/pessoas` | Histórico Escolar e Acadêmico |
| pessoas | `pessoas_vehicles` | POST | `/pessoas` | Veículos |
| processos | `processos_basic_data` | POST | `/processos` | Dados Básicos de Processos Judiciais |
| processos | `processos_cade_processes_data` | POST | `/processos` | Dados de Processos do CADE |
| produtos | `produtos_availability_data` | POST | `/produtos` | Dados de Disponibilidade |
| produtos | `produtos_basic_data` | POST | `/produtos` | Dados de Cadastro e Categorização |
| produtos | `produtos_extra_info_data` | POST | `/produtos` | Dados Extras |
| produtos | `produtos_images_data` | POST | `/produtos` | Dados de Imagens |
| produtos | `produtos_price_data` | POST | `/produtos` | Dados de Precificação |
| produtos | `produtos_related_product_data` | POST | `/produtos` | Dados de Produtos Relacionados |
| produtos | `produtos_review_data` | POST | `/produtos` | Dados de Avaliações |
| veiculos | `veiculos_license_plates` | POST | `/veiculos` | Dados de Placa de Veículo |

---

## Api-De-Batch-Canceljobexecution

**1 operations**

### `api-de-batch-CancelJobExecution`

- **Method**: `POST`
- **Path**: `/cancelarExecucao`
- **Source**: API de Processamento em Lote
- **Summary**: Cancelar Execução
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | Yes | Id único de job |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |

**TypeScript Signature**:
```typescript
api-de-batch-CancelJobExecution(body: api-de-batch-CancelJobExecutionResponse): Promise<api-de-batch-CancelJobExecutionResponse>
```

---

## Api-De-Batch-Getjobdetails

**1 operations**

### `api-de-batch-GetJobDetails`

- **Method**: `POST`
- **Path**: `/obterDetalhes`
- **Source**: API de Processamento em Lote
- **Summary**: Obter Detalhes
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | Yes | Id único de job |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |
| `CurrentJobStatus` | string |  |
| `TotalRecords` | integer |  |
| `PercentComplete` | number |  |
| `ErrorPercent` | number |  |
| `ElapsedTime` | number |  |
| `EstimatedTotalTime` | number |  |
| `EstimatedJobCost` | number |  |
| `FirstQueryItem` | string |  |
| `OutputFileName` | string |  |
| `Observation` | string |  |
| ... | ... | *1 more* |

**TypeScript Signature**:
```typescript
api-de-batch-GetJobDetails(body: api-de-batch-GetJobDetailsResponse): Promise<api-de-batch-GetJobDetailsResponse>
```

---

## Api-De-Batch-Listjobs

**1 operations**

### `api-de-batch-ListJobs`

- **Method**: `POST`
- **Path**: `/listar`
- **Source**: API de Processamento em Lote
- **Summary**: Listar
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | No |  |
| `PageNumber` | integer | No |  |
| `PageSize` | integer | No |  |
| `SortByDescending` | boolean | No |  |
| `ShowHistoricalJobs` | boolean | No |  |
| `Filter` | object | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |
| `TotalNumberOfCurrentJobs` | integer |  |
| `TotalNumberOfJobs` | integer |  |
| `Jobs` | array |  |

**TypeScript Signature**:
```typescript
api-de-batch-ListJobs(body: api-de-batch-ListJobsResponse): Promise<api-de-batch-ListJobsResponse>
```

---

## Api-De-Batch-Pausejobexecution

**1 operations**

### `api-de-batch-PauseJobExecution`

- **Method**: `POST`
- **Path**: `/pausarExecucao`
- **Source**: API de Processamento em Lote
- **Summary**: Pausar Execução
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | Yes | Id único de job |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |

**TypeScript Signature**:
```typescript
api-de-batch-PauseJobExecution(body: api-de-batch-PauseJobExecutionResponse): Promise<api-de-batch-PauseJobExecutionResponse>
```

---

## Api-De-Batch-Restartjobexecution

**1 operations**

### `api-de-batch-RestartJobExecution`

- **Method**: `POST`
- **Path**: `/reiniciarExecucao`
- **Source**: API de Processamento em Lote
- **Summary**: Reiniciar Execução
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | Yes | Id único de job |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |

**TypeScript Signature**:
```typescript
api-de-batch-RestartJobExecution(body: api-de-batch-RestartJobExecutionResponse): Promise<api-de-batch-RestartJobExecutionResponse>
```

---

## Api-De-Batch-Resumejobexecution

**1 operations**

### `api-de-batch-ResumeJobExecution`

- **Method**: `POST`
- **Path**: `/resumirExecucao`
- **Source**: API de Processamento em Lote
- **Summary**: Resumir Execução
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | Yes | Id único de job |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |

**TypeScript Signature**:
```typescript
api-de-batch-ResumeJobExecution(body: api-de-batch-ResumeJobExecutionResponse): Promise<api-de-batch-ResumeJobExecutionResponse>
```

---

## Api-De-Batch-Savejobdefinition

**1 operations**

### `api-de-batch-SaveJobDefinition`

- **Method**: `POST`
- **Path**: `/salvarDefinicao`
- **Source**: API de Processamento em Lote
- **Summary**: Salvar Definição
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | No |  |
| `InputFileUrl` | string | No |  |
| `InputFileDelimiter` | string | No |  |
| `InputFileHasHeader` | boolean | No |  |
| `OutputFileFormat` | string | No |  |
| `OutputFileEncoding` | string | No |  |
| `OutputFileDelimiter` | string | No |  |
| `OutputFileUrl` | string | No |  |
| `InputKeysHeader` | string | No |  |
| `InputFileSampleRate` | integer | No |  |
| `InputFileExpectedNumberOfRecords` | integer | No |  |
| `APIName` | string | No |  |
| `Datasets` | string | No |  |
| `View` | string | No |  |
| `QueryTemplate` | string | No |  |
| `SubscriptionHooks` | string | No |  |
| `APIResultLimit` | integer | No |  |
| `Hooks` | string | No |  |
| `CopyEmails` | array | No |  |
| `UseDoubleQuotes` | boolean | No | Flag indicando se deve usar aspas duplas |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |

**TypeScript Signature**:
```typescript
api-de-batch-SaveJobDefinition(body: api-de-batch-SaveJobDefinitionResponse): Promise<api-de-batch-SaveJobDefinitionResponse>
```

---

## Api-De-Batch-Startjobexecution

**1 operations**

### `api-de-batch-StartJobExecution`

- **Method**: `POST`
- **Path**: `/iniciarExecucao`
- **Source**: API de Processamento em Lote
- **Summary**: Iniciar Execução
- **Tags**: api-de-batch

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `JobId` | string | Yes | Id único de job |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `JobId` | string |  |
| `StatusCode` | integer |  |
| `StatusMessage` | string |  |
| `TotalExecutionTime` | integer |  |
| `RequestTimestamp` | string |  |

**TypeScript Signature**:
```typescript
api-de-batch-StartJobExecution(body: api-de-batch-StartJobExecutionResponse): Promise<api-de-batch-StartJobExecutionResponse>
```

---

## Api-De-Estatísticas-De-Uso-Query

**1 operations**

### `api-de-estatísticas-de-uso-Query`

- **Method**: `POST`
- **Path**: `/`
- **Source**: API de Estatísticas de Uso
- **Summary**: Requisição
- **Tags**: api-de-estatísticas-de-uso

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | No | API escolhida pra consulta. |
| `Datasets` | string | No | Datasets escolhidos pra consulta. |
| `InitialReferenceDate` | string | No | Data de inicio da contagem. |
| `FinalReferenceDate` | string | No | Data de fim da contagem. |
| `DateFormat` | string | No | Formato de data para as datas enviadas. |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `UsageData` | object |  |
| `QueryId` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-estatísticas-de-uso-Query(body: api-de-estatísticas-de-uso-QueryResponse): Promise<api-de-estatísticas-de-uso-QueryResponse>
```

---

## Api-De-Monitoramento-Details

**1 operations**

### `api-de-monitoramento-Details`

- **Method**: `POST`
- **Path**: `/detalhes`
- **Source**: API de Monitoramento
- **Summary**: Detalhes de Monitoramento
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `SubscriptionId` | string | No |  |
| `Api` | string | No |  |
| `Datasets` | string | No |  |
| `Parameters` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `SubscriptionDetails` | object |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-Details(body: api-de-monitoramento-DetailsResponse): Promise<api-de-monitoramento-DetailsResponse>
```

---

## Api-De-Monitoramento-Diffexplainer

**1 operations**

### `api-de-monitoramento-DiffExplainer`

- **Method**: `POST`
- **Path**: `/diferencas`
- **Source**: API de Monitoramento
- **Summary**: Diferenças de Monitoramento
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `SubscriptionId` | string | No |  |
| `QueryId1` | string | No |  |
| `QueryId2` | string | No |  |
| `Json1` | string | No |  |
| `Json2` | string | No |  |
| `API` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `SubscriptionDiff` | object |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-DiffExplainer(body: api-de-monitoramento-DiffExplainerResponse): Promise<api-de-monitoramento-DiffExplainerResponse>
```

---

## Api-De-Monitoramento-List

**1 operations**

### `api-de-monitoramento-List`

- **Method**: `POST`
- **Path**: `/listar`
- **Source**: API de Monitoramento
- **Summary**: Listar Inscrições
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `OrderByDescendingDate` | boolean | No |  |
| `Cursor` | string | No |  |
| `PageSize` | integer | No |  |
| `FilterByParameters` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `ActiveSubscriptions` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-List(body: api-de-monitoramento-ListResponse): Promise<api-de-monitoramento-ListResponse>
```

---

## Api-De-Monitoramento-Report

**1 operations**

### `api-de-monitoramento-Report`

- **Method**: `POST`
- **Path**: `/relatorio`
- **Source**: API de Monitoramento
- **Summary**: Histórico de Monitoramento
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Limit` | integer | No |  |
| `PageId` | string | No |  |
| `OrderByDescendingDate` | boolean | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `SubscriptionDeliveryHistory` | object |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-Report(body: api-de-monitoramento-ReportResponse): Promise<api-de-monitoramento-ReportResponse>
```

---

## Api-De-Monitoramento-Setusersettings

**1 operations**

### `api-de-monitoramento-SetUserSettings`

- **Method**: `POST`
- **Path**: `/definirUsuario`
- **Source**: API de Monitoramento
- **Summary**: Configurar Usuário
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `AccessToken` | string | No |  |
| `AuthorizationKey` | string | No |  |
| `AuthorizationToken` | string | No |  |
| `AuthorizationMethod` | string | No |  |
| `OAuthBasicToken` | string | No |  |
| `OAuthPublicKey` | string | No |  |
| `OAuthPrivateKey` | string | No |  |
| `OAuthURLTarget` | string | No |  |
| `OAuthContentType` | string | No |  |
| `OAuthGrantType` | string | No |  |
| `OAuthExpectedTokenFieldName` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `SubscriptionConfiguration` | object |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-SetUserSettings(body: api-de-monitoramento-SetUserSettingsResponse): Promise<api-de-monitoramento-SetUserSettingsResponse>
```

---

## Api-De-Monitoramento-Subscribe

**1 operations**

### `api-de-monitoramento-Subscribe`

- **Method**: `POST`
- **Path**: `/monitorar`
- **Source**: API de Monitoramento
- **Summary**: Habilitar Monitoramento
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `SubscriptionHooks` | string | No |  |
| `QueryId` | string | No |  |
| `Q` | string | No |  |
| `View` | string | No |  |
| `Datasets` | string | No |  |
| `Api` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `SubscriptionId` | string |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-Subscribe(body: api-de-monitoramento-SubscribeResponse): Promise<api-de-monitoramento-SubscribeResponse>
```

---

## Api-De-Monitoramento-Test

**1 operations**

### `api-de-monitoramento-Test`

- **Method**: `POST`
- **Path**: `/teste`
- **Source**: API de Monitoramento
- **Summary**: Teste de Monitoramento
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Limit` | integer | No |  |
| `PageId` | string | No |  |
| `OrderByDescendingDate` | boolean | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `SubscriptionTest` | object |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-Test(body: api-de-monitoramento-TestResponse): Promise<api-de-monitoramento-TestResponse>
```

---

## Api-De-Monitoramento-Unsubscribe

**1 operations**

### `api-de-monitoramento-Unsubscribe`

- **Method**: `POST`
- **Path**: `/desabilitar`
- **Source**: API de Monitoramento
- **Summary**: Desabilitar Monitoramento
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `SubscriptionIds` | array | No |  |
| `QueryIds` | array | No |  |
| `Api` | string | No |  |
| `Datasets` | string | No |  |
| `Parameters` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `UnsubscriptionsStatus` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-Unsubscribe(body: api-de-monitoramento-UnsubscribeResponse): Promise<api-de-monitoramento-UnsubscribeResponse>
```

---

## Api-De-Monitoramento-Update

**1 operations**

### `api-de-monitoramento-Update`

- **Method**: `POST`
- **Path**: `/atualizar`
- **Source**: API de Monitoramento
- **Summary**: Atualizar Monitoramento
- **Tags**: api-de-monitoramento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `SubscriptionId` | string | No |  |
| `QueryId` | string | No |  |
| `Datasets` | string | No |  |
| `SubscriptionHooks` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `SubscriptionDetails` | object |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-de-monitoramento-Update(body: api-de-monitoramento-UpdateResponse): Promise<api-de-monitoramento-UpdateResponse>
```

---

## Api-De-Preços-Query

**1 operations**

### `api-de-preços-Query`

- **Method**: `POST`
- **Path**: `/`
- **Source**: API de Preços
- **Summary**: Requisição
- **Tags**: api-de-preços

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `API` | string | Yes | API escolhida pra consulta. |
| `Datasets` | string | Yes | Datasets escolhidos pra consulta. |
| `Quantity` | string | No | Quantidade de consultas realizada |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Datasets` | object |  |
| `AnyDatasetsNotFound` | boolean |  |
| `DatasetsNotFound` | array |  |
| `AnyApisNotFound` | boolean |  |
| `ApisNotFound` | array |  |
| `QueryId` | string |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `ElapsedTime` | integer |  |
| `ErrorMessage` | string |  |

**TypeScript Signature**:
```typescript
api-de-preços-Query(body: api-de-preços-QueryResponse): Promise<api-de-preços-QueryResponse>
```

---

## Api-Eventos-Query

**1 operations**

### `api-eventos-Query`

- **Method**: `POST`
- **Path**: `/`
- **Source**: API de Eventos
- **Summary**: Requisição
- **Tags**: api-eventos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Q` | string | No | Parametro usado na chamada |
| `QueryId` | string | No | QueryId da chamada retornada |
| `Tags` | object | No | Tags utilizadas na chamada |
| `QueryDate` | string | No | Data de consulta |
| `DateFormat` | string | No | Formato de Data de consulta |
| `Cursor` | string | No | Cursor de paginação |
| `PageSize` | integer | No | Tamanho da página |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array |  |
| `Status` | object |  |
| `Cursor` | string |  |

**TypeScript Signature**:
```typescript
api-eventos-Query(body: api-eventos-QueryResponse): Promise<api-eventos-QueryResponse>
```

---

## Api-Hooks-Metadata

**1 operations**

### `api-hooks-Metadata`

- **Method**: `POST`
- **Path**: `/obterMetadado`
- **Source**: API de Chamadas Assíncronas
- **Summary**: Obter Metadado
- **Tags**: api-hooks

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `QueryId` | string | Yes | QueryId da chamada de hooks. |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | object |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `Evidences` | object |  |

**TypeScript Signature**:
```typescript
api-hooks-Metadata(body: api-hooks-MetadataResponse): Promise<api-hooks-MetadataResponse>
```

---

## Api-Hooks-Query

**1 operations**

### `api-hooks-Query`

- **Method**: `POST`
- **Path**: `/`
- **Source**: API de Chamadas Assíncronas
- **Summary**: Requisição
- **Tags**: api-hooks

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | Yes | API escolhida pra consulta. |
| `Datasets` | string | Yes | Datasets escolhidos pra consulta. |
| `Q` | string | Yes | Parametros de entrada escolhidos pra con |
| `Hooks` | string | Yes | Parametros de callback de Hooks. |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `Evidences` | object |  |

**TypeScript Signature**:
```typescript
api-hooks-Query(body: api-hooks-QueryResponse): Promise<api-hooks-QueryResponse>
```

---

## Api-Hooks-Status

**1 operations**

### `api-hooks-Status`

- **Method**: `POST`
- **Path**: `/status`
- **Source**: API de Chamadas Assíncronas
- **Summary**: Estatísticas de Envios
- **Tags**: api-hooks

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `SearchByDomain` | boolean | No | Opcional. Define o escopo da busca. Se t |
| `Datasets` | string | No | Opcional. Filtra as métricas de dataset  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | object | Contém as estatísticas detalhadas sobre  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `Evidences` | object |  |

**TypeScript Signature**:
```typescript
api-hooks-Status(body: api-hooks-StatusResponse): Promise<api-hooks-StatusResponse>
```

---

## Api-Metadata-Datasets

**1 operations**

### `api-metadata-datasets`

- **Method**: `POST`
- **Path**: `/datasets`
- **Source**: API de Metadados
- **Summary**: Datasets
- **Tags**: api-metadados-datasets

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | No | API escolhida pra consulta. |
| `Datasets` | string | No | Datasets escolhidos pra consulta. |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Datasets` | object |  |
| `AnyDatasetsNotFound` | boolean |  |
| `DatasetsNotFound` | array |  |
| `AnyApisNotFound` | boolean |  |
| `ApisNotFound` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-metadata-datasets(body: api-metadata-datasetsResponse): Promise<api-metadata-datasetsResponse>
```

---

## Api-Metadata-Definitions

**1 operations**

### `api-metadata-definitions`

- **Method**: `POST`
- **Path**: `/definicoes`
- **Source**: API de Metadados
- **Summary**: Definições De Datasets
- **Tags**: api-metadados

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | No | API escolhida pra consulta. |
| `Datasets` | string | No | Datasets escolhidos pra consulta. |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Datasets` | object |  |
| `AnyDatasetsNotFound` | boolean |  |
| `DatasetsNotFound` | array |  |
| `AnyApisNotFound` | boolean |  |
| `ApisNotFound` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
api-metadata-definitions(body: api-metadata-definitionsResponse): Promise<api-metadata-definitionsResponse>
```

---

## Api-Tokens-Disable

**1 operations**

### `api-tokens-disable`

- **Method**: `POST`
- **Path**: `/desabilitar`
- **Source**: API de Tokens
- **Summary**: Desabilitar
- **Tags**: api-tokens

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `login` | string | Yes | Usuario de login |
| `password` | string | Yes | Senha para o usuario |
| `token` | string | Yes | Token de acesso |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `message` | string |  |
| `success` | boolean |  |

**TypeScript Signature**:
```typescript
api-tokens-disable(body: api-tokens-disableResponse): Promise<api-tokens-disableResponse>
```

---

## Api-Tokens-Disablebyid

**1 operations**

### `api-tokens-disableById`

- **Method**: `POST`
- **Path**: `/desabilitarPorId`
- **Source**: API de Tokens
- **Summary**: Desabilitar Por ID
- **Tags**: api-tokens

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `login` | string | Yes | Usuario de login |
| `password` | string | Yes | Senha para o usuario |
| `tokenID` | string | Yes | Id do token de acesso |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `message` | string |  |
| `success` | boolean |  |

**TypeScript Signature**:
```typescript
api-tokens-disableById(body: api-tokens-disableByIdResponse): Promise<api-tokens-disableByIdResponse>
```

---

## Api-Tokens-Generate

**1 operations**

### `api-tokens-generate`

- **Method**: `POST`
- **Path**: `/gerar`
- **Source**: API de Tokens
- **Summary**: Gerar
- **Tags**: api-tokens

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `login` | string | Yes | Usuario de login |
| `password` | string | Yes | Senha para o usuario |
| `expires` | integer | Yes | Horas de validade do token |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `expiration` | string |  |
| `message` | string |  |
| `success` | boolean |  |
| `token` | string |  |
| `tokenID` | string |  |

**TypeScript Signature**:
```typescript
api-tokens-generate(body: api-tokens-generateResponse): Promise<api-tokens-generateResponse>
```

---

## Api-Tokens-Getactivetokenids

**1 operations**

### `api-tokens-getactivetokenids`

- **Method**: `POST`
- **Path**: `/obterTokenIdsAtivos`
- **Source**: API de Tokens
- **Summary**: Obter Token IDs Ativos
- **Tags**: api-tokens

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `login` | string | Yes | Usuario de login |
| `password` | string | Yes | Senha para o usuario |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `active_token_ids` | array |  |

**TypeScript Signature**:
```typescript
api-tokens-getactivetokenids(body: api-tokens-getactivetokenidsResponse): Promise<api-tokens-getactivetokenidsResponse>
```

---

## Api-Views-Add

**1 operations**

### `api-views-Add`

- **Method**: `POST`
- **Path**: `/adicionar`
- **Source**: API de Views
- **Summary**: Adicionar
- **Tags**: api-views

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | No |  |
| `Datasets` | string | No |  |
| `View` | string | No |  |
| `Q` | string | No |  |
| `Locale` | string | No |  |
| `QueryId` | string | No |  |
| `Scope` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `Evidences` | object |  |
| `DatasetDetails` | object |  |
| `Views` | array |  |

**TypeScript Signature**:
```typescript
api-views-Add(body: api-views-AddResponse): Promise<api-views-AddResponse>
```

---

## Api-Views-Delete

**1 operations**

### `api-views-Delete`

- **Method**: `POST`
- **Path**: `/deletar`
- **Source**: API de Views
- **Summary**: Deletar
- **Tags**: api-views

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | No |  |
| `Datasets` | string | No |  |
| `View` | string | No |  |
| `Q` | string | No |  |
| `Locale` | string | No |  |
| `QueryId` | string | No |  |
| `Scope` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `Evidences` | object |  |
| `DatasetDetails` | object |  |
| `Views` | array |  |

**TypeScript Signature**:
```typescript
api-views-Delete(body: api-views-DeleteResponse): Promise<api-views-DeleteResponse>
```

---

## Api-Views-Details

**1 operations**

### `api-views-Details`

- **Method**: `POST`
- **Path**: `/obterDetalhes`
- **Source**: API de Views
- **Summary**: Obter Detalhes
- **Tags**: api-views

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | No |  |
| `Datasets` | string | No |  |
| `View` | string | No |  |
| `Q` | string | No |  |
| `Locale` | string | No |  |
| `QueryId` | string | No |  |
| `Scope` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `Evidences` | object |  |
| `DatasetDetails` | object |  |
| `Views` | array |  |

**TypeScript Signature**:
```typescript
api-views-Details(body: api-views-DetailsResponse): Promise<api-views-DetailsResponse>
```

---

## Api-Views-Update

**1 operations**

### `api-views-Update`

- **Method**: `POST`
- **Path**: `/atualizar`
- **Source**: API de Views
- **Summary**: Atualizar
- **Tags**: api-views

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Api` | string | No |  |
| `Datasets` | string | No |  |
| `View` | string | No |  |
| `Q` | string | No |  |
| `Locale` | string | No |  |
| `QueryId` | string | No |  |
| `Scope` | string | No |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `QueryId` | string |  |
| `ElapsedMilliseconds` | number |  |
| `QueryDate` | string |  |
| `Status` | object |  |
| `Evidences` | object |  |
| `DatasetDetails` | object |  |
| `Views` | array |  |

**TypeScript Signature**:
```typescript
api-views-Update(body: api-views-UpdateResponse): Promise<api-views-UpdateResponse>
```

---

## Empresas

**79 operations**

### `empresas_activity_indicators`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Indicadores de Atividade

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_activity_indicators(body: empresas_activity_indicatorsResponse): Promise<empresas_activity_indicatorsResponse>
```

---

### `empresas_addresses_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Endereços - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_addresses_extended(body: empresas_addresses_extendedResponse): Promise<empresas_addresses_extendedResponse>
```

---

### `empresas_apps_networks_and_platforms`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Presença em Apps e Plataformas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_apps_networks_and_platforms(body: empresas_apps_networks_and_platformsResponse): Promise<empresas_apps_networks_and_platformsResponse>
```

---

### `empresas_awards_and_certifications`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Prêmios e Certificações

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_awards_and_certifications(body: empresas_awards_and_certificationsResponse): Promise<empresas_awards_and_certificationsResponse>
```

---

### `empresas_basic_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados Cadastrais Básicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_basic_data(body: empresas_basic_dataResponse): Promise<empresas_basic_dataResponse>
```

---

### `empresas_circles_employees`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Funcionários

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_circles_employees(body: empresas_circles_employeesResponse): Promise<empresas_circles_employeesResponse>
```

---

### `empresas_circles_first_level_owners`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Sócios de Primeiro Nível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_circles_first_level_owners(body: empresas_circles_first_level_ownersResponse): Promise<empresas_circles_first_level_ownersResponse>
```

---

### `empresas_circles_legal_representatives`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Representantes Legais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_circles_legal_representatives(body: empresas_circles_legal_representativesResponse): Promise<empresas_circles_legal_representativesResponse>
```

---

### `empresas_civil_construction_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados de Obras Civis

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_civil_construction_data(body: empresas_civil_construction_dataResponse): Promise<empresas_civil_construction_dataResponse>
```

---

### `empresas_collections`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Presença em Cobrança

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_collections(body: empresas_collectionsResponse): Promise<empresas_collectionsResponse>
```

---

### `empresas_company_evolution`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Evolução da Empresa

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_evolution(body: empresas_company_evolutionResponse): Promise<empresas_company_evolutionResponse>
```

---

### `empresas_company_group_building`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Prédio

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_building(body: empresas_company_group_buildingResponse): Promise<empresas_company_group_buildingResponse>
```

---

### `empresas_company_group_building_activity`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Atividade no Mesmo Prédio

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_building_activity(body: empresas_company_group_building_activityResponse): Promise<empresas_company_group_building_activityResponse>
```

---

### `empresas_company_group_documentroot`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Raiz do CNPJ

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_documentroot(body: empresas_company_group_documentrootResponse): Promise<empresas_company_group_documentrootResponse>
```

---

### `empresas_company_group_household`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Mesmo Endereço

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_household(body: empresas_company_group_householdResponse): Promise<empresas_company_group_householdResponse>
```

---

### `empresas_company_group_household_activity`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Atividade no Mesmo Endereço

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_household_activity(body: empresas_company_group_household_activityResponse): Promise<empresas_company_group_household_activityResponse>
```

---

### `empresas_company_group_household_owners_surname`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Sócios Relacionados no Mesmo Endereço

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_household_owners_surname(body: empresas_company_group_household_owners_surnameResponse): Promise<empresas_company_group_household_owners_surnameResponse>
```

---

### `empresas_company_group_legal_representative`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Representante Legal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_legal_representative(body: empresas_company_group_legal_representativeResponse): Promise<empresas_company_group_legal_representativeResponse>
```

---

### `empresas_company_group_officialname`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Razão Social

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_officialname(body: empresas_company_group_officialnameResponse): Promise<empresas_company_group_officialnameResponse>
```

---

### `empresas_company_group_owners`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Sócios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_owners(body: empresas_company_group_ownersResponse): Promise<empresas_company_group_ownersResponse>
```

---

### `empresas_company_group_rfcontact`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Contato na Receita Federal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_rfcontact(body: empresas_company_group_rfcontactResponse): Promise<empresas_company_group_rfcontactResponse>
```

---

### `empresas_company_group_tradename`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Nome Fantasia

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_tradename(body: empresas_company_group_tradenameResponse): Promise<empresas_company_group_tradenameResponse>
```

---

### `empresas_company_group_tradename_city`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Nome Fantasia por Cidade

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_company_group_tradename_city(body: empresas_company_group_tradename_cityResponse): Promise<empresas_company_group_tradename_cityResponse>
```

---

### `empresas_domains`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados de Sites

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_domains(body: empresas_domainsResponse): Promise<empresas_domainsResponse>
```

---

### `empresas_domains_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados de Sites - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_domains_extended(body: empresas_domains_extendedResponse): Promise<empresas_domains_extendedResponse>
```

---

### `empresas_dynamic_qsa_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Busca Dinâmica de QSA

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_dynamic_qsa_data(body: empresas_dynamic_qsa_dataResponse): Promise<empresas_dynamic_qsa_dataResponse>
```

---

### `empresas_economic_group_first_level`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico de Primeiro Nível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_first_level(body: empresas_economic_group_first_levelResponse): Promise<empresas_economic_group_first_levelResponse>
```

---

### `empresas_economic_group_first_level_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico de Primeiro Nível Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_first_level_extended(body: empresas_economic_group_first_level_extendedResponse): Promise<empresas_economic_group_first_level_extendedResponse>
```

---

### `empresas_economic_group_full`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico Completo

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_full(body: empresas_economic_group_fullResponse): Promise<empresas_economic_group_fullResponse>
```

---

### `empresas_economic_group_full_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico Completo Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_full_extended(body: empresas_economic_group_full_extendedResponse): Promise<empresas_economic_group_full_extendedResponse>
```

---

### `empresas_economic_group_kyc`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: KYC e Compliance do Grupo Econômico

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_kyc(body: empresas_economic_group_kycResponse): Promise<empresas_economic_group_kycResponse>
```

---

### `empresas_economic_group_relationships`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Relacionamentos - Grupo Econômico

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_relationships(body: empresas_economic_group_relationshipsResponse): Promise<empresas_economic_group_relationshipsResponse>
```

---

### `empresas_economic_group_second_level`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico de Segundo Nível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_second_level(body: empresas_economic_group_second_levelResponse): Promise<empresas_economic_group_second_levelResponse>
```

---

### `empresas_economic_group_second_level_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico de Segundo Nível Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_second_level_extended(body: empresas_economic_group_second_level_extendedResponse): Promise<empresas_economic_group_second_level_extendedResponse>
```

---

### `empresas_economic_group_third_level`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico de Terceiro Nível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_third_level(body: empresas_economic_group_third_levelResponse): Promise<empresas_economic_group_third_levelResponse>
```

---

### `empresas_economic_group_third_level_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Grupo Econômico de Terceiro Nível Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_economic_group_third_level_extended(body: empresas_economic_group_third_level_extendedResponse): Promise<empresas_economic_group_third_level_extendedResponse>
```

---

### `empresas_electoral_donors`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Doações Eleitorais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_electoral_donors(body: empresas_electoral_donorsResponse): Promise<empresas_electoral_donorsResponse>
```

---

### `empresas_electoral_providers`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Prestadores de Serviços Eleitorais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_electoral_providers(body: empresas_electoral_providersResponse): Promise<empresas_electoral_providersResponse>
```

---

### `empresas_emails_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: E-mails - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_emails_extended(body: empresas_emails_extendedResponse): Promise<empresas_emails_extendedResponse>
```

---

### `empresas_employees_industrial_property`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Propriedades Industriais de Funcionários

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_employees_industrial_property(body: empresas_employees_industrial_propertyResponse): Promise<empresas_employees_industrial_propertyResponse>
```

---

### `empresas_employees_kyc`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: KYC e Compliance dos Funcionários

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_employees_kyc(body: empresas_employees_kycResponse): Promise<empresas_employees_kycResponse>
```

---

### `empresas_financial_market`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Mercado Financeiro

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_financial_market(body: empresas_financial_marketResponse): Promise<empresas_financial_marketResponse>
```

---

### `empresas_genai_description_gpt_x1_0`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Firmografia da Empresa - GPT x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_genai_description_gpt_x1_0(body: empresas_genai_description_gpt_x1_0Response): Promise<empresas_genai_description_gpt_x1_0Response>
```

---

### `empresas_genai_description_gpt_x1_5`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Firmografia da Empresa - GPT x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_genai_description_gpt_x1_5(body: empresas_genai_description_gpt_x1_5Response): Promise<empresas_genai_description_gpt_x1_5Response>
```

---

### `empresas_genai_description_mistral_x1_0`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Firmografia da Empresa - Mistral x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_genai_description_mistral_x1_0(body: empresas_genai_description_mistral_x1_0Response): Promise<empresas_genai_description_mistral_x1_0Response>
```

---

### `empresas_genai_description_mistral_x1_5`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Firmografia da Empresa - Mistral x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_genai_description_mistral_x1_5(body: empresas_genai_description_mistral_x1_5Response): Promise<empresas_genai_description_mistral_x1_5Response>
```

---

### `empresas_genai_description_nova_x1_0`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Firmografia da Empresa - Nova x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_genai_description_nova_x1_0(body: empresas_genai_description_nova_x1_0Response): Promise<empresas_genai_description_nova_x1_0Response>
```

---

### `empresas_genai_description_nova_x1_5`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Firmografia da Empresa - Nova x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_genai_description_nova_x1_5(body: empresas_genai_description_nova_x1_5Response): Promise<empresas_genai_description_nova_x1_5Response>
```

---

### `empresas_government_debtors`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Devedores do Governo

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_government_debtors(body: empresas_government_debtorsResponse): Promise<empresas_government_debtorsResponse>
```

---

### `empresas_history_basic_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Histórico de Dados Básicos Cadastrais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_history_basic_data(body: empresas_history_basic_dataResponse): Promise<empresas_history_basic_dataResponse>
```

---

### `empresas_industrial_property`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Propriedades Industriais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_industrial_property(body: empresas_industrial_propertyResponse): Promise<empresas_industrial_propertyResponse>
```

---

### `empresas_interests_and_behaviors`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Interesses e Comportamentos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_interests_and_behaviors(body: empresas_interests_and_behaviorsResponse): Promise<empresas_interests_and_behaviorsResponse>
```

---

### `empresas_investment_fund_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados de Fundos de Investimento

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_investment_fund_data(body: empresas_investment_fund_dataResponse): Promise<empresas_investment_fund_dataResponse>
```

---

### `empresas_kyc`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: KYC e Compliance

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_kyc(body: empresas_kycResponse): Promise<empresas_kycResponse>
```

---

### `empresas_lawsuits_distribution_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados de Distribuição de Processos Judiciais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_lawsuits_distribution_data(body: empresas_lawsuits_distribution_dataResponse): Promise<empresas_lawsuits_distribution_dataResponse>
```

---

### `empresas_licenses_and_authorizations`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Licenças e Autorizações

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_licenses_and_authorizations(body: empresas_licenses_and_authorizationsResponse): Promise<empresas_licenses_and_authorizationsResponse>
```

---

### `empresas_marketplace_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Marketplaces

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_marketplace_data(body: empresas_marketplace_dataResponse): Promise<empresas_marketplace_dataResponse>
```

---

### `empresas_media_profile_and_exposure`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Exposição e Perfil na Mídia

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_media_profile_and_exposure(body: empresas_media_profile_and_exposureResponse): Promise<empresas_media_profile_and_exposureResponse>
```

---

### `empresas_merchant_category_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados de Categoria Comercial - MCC

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_merchant_category_data(body: empresas_merchant_category_dataResponse): Promise<empresas_merchant_category_dataResponse>
```

---

### `empresas_online_ads`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Anúncios Online

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_online_ads(body: empresas_online_adsResponse): Promise<empresas_online_adsResponse>
```

---

### `empresas_owners_electoral_donors`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Doações Eleitorais de Sócios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_owners_electoral_donors(body: empresas_owners_electoral_donorsResponse): Promise<empresas_owners_electoral_donorsResponse>
```

---

### `empresas_owners_industrial_property`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Propriedades Industriais de Sócios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_owners_industrial_property(body: empresas_owners_industrial_propertyResponse): Promise<empresas_owners_industrial_propertyResponse>
```

---

### `empresas_owners_influence`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Influência do Quadro Societário

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_owners_influence(body: empresas_owners_influenceResponse): Promise<empresas_owners_influenceResponse>
```

---

### `empresas_owners_kyc`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: KYC e Compliance dos Sócios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_owners_kyc(body: empresas_owners_kycResponse): Promise<empresas_owners_kycResponse>
```

---

### `empresas_owners_lawsuits`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Processos Judiciais dos Sócios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_owners_lawsuits(body: empresas_owners_lawsuitsResponse): Promise<empresas_owners_lawsuitsResponse>
```

---

### `empresas_owners_lawsuits_distribution_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados de Distribuição de Processos dos Sócios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_owners_lawsuits_distribution_data(body: empresas_owners_lawsuits_distribution_dataResponse): Promise<empresas_owners_lawsuits_distribution_dataResponse>
```

---

### `empresas_phones_extended`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Telefones - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_phones_extended(body: empresas_phones_extendedResponse): Promise<empresas_phones_extendedResponse>
```

---

### `empresas_political_involvement`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Envolvimento Político

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_political_involvement(body: empresas_political_involvementResponse): Promise<empresas_political_involvementResponse>
```

---

### `empresas_processes`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Processos Judiciais e Administrativos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_processes(body: empresas_processesResponse): Promise<empresas_processesResponse>
```

---

### `empresas_registration_data`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados Cadastrais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_registration_data(body: empresas_registration_dataResponse): Promise<empresas_registration_dataResponse>
```

---

### `empresas_related_people_addresses`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Endereços - Pessoas Relacionadas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_related_people_addresses(body: empresas_related_people_addressesResponse): Promise<empresas_related_people_addressesResponse>
```

---

### `empresas_related_people_emails`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Emails - Pessoas Relacionadas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_related_people_emails(body: empresas_related_people_emailsResponse): Promise<empresas_related_people_emailsResponse>
```

---

### `empresas_related_people_phones`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Telefones - Pessoas Relacionadas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_related_people_phones(body: empresas_related_people_phonesResponse): Promise<empresas_related_people_phonesResponse>
```

---

### `empresas_relationships`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Relacionamentos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_relationships(body: empresas_relationshipsResponse): Promise<empresas_relationshipsResponse>
```

---

### `empresas_reputations_and_reviews`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Avaliações e Reputação

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_reputations_and_reviews(body: empresas_reputations_and_reviewsResponse): Promise<empresas_reputations_and_reviewsResponse>
```

---

### `empresas_social_conscience`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Consciência Social

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_social_conscience(body: empresas_social_conscienceResponse): Promise<empresas_social_conscienceResponse>
```

---

### `empresas_syndicate_agreements`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Acordos Sindicais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_syndicate_agreements(body: empresas_syndicate_agreementsResponse): Promise<empresas_syndicate_agreementsResponse>
```

---

### `empresas_unified_modeling_data_x1_0`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados Unificados para Modelagem x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_unified_modeling_data_x1_0(body: empresas_unified_modeling_data_x1_0Response): Promise<empresas_unified_modeling_data_x1_0Response>
```

---

### `empresas_unified_modeling_data_x1_5`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: DataPlatform API
- **Summary**: Dados Unificados para Modelagem x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
empresas_unified_modeling_data_x1_5(body: empresas_unified_modeling_data_x1_5Response): Promise<empresas_unified_modeling_data_x1_5Response>
```

---

## Enderecos

**17 operations**

### `enderecos_address_risk`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Endereços em Área de Risco

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_address_risk(body: enderecos_address_riskResponse): Promise<enderecos_address_riskResponse>
```

---

### `enderecos_archaeological_sites`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Sítios Arqueológicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_archaeological_sites(body: enderecos_archaeological_sitesResponse): Promise<enderecos_archaeological_sitesResponse>
```

---

### `enderecos_basic_data`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Dados Básicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_basic_data(body: enderecos_basic_dataResponse): Promise<enderecos_basic_dataResponse>
```

---

### `enderecos_biomes_data`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Biomas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_biomes_data(body: enderecos_biomes_dataResponse): Promise<enderecos_biomes_dataResponse>
```

---

### `enderecos_companies_data`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Dados de Empresas nas Proximidades

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_companies_data(body: enderecos_companies_dataResponse): Promise<enderecos_companies_dataResponse>
```

---

### `enderecos_companies_statistics`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Estatísticas de Empresas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_companies_statistics(body: enderecos_companies_statisticsResponse): Promise<enderecos_companies_statisticsResponse>
```

---

### `enderecos_conservation_units`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Unidades de Conservação

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_conservation_units(body: enderecos_conservation_unitsResponse): Promise<enderecos_conservation_unitsResponse>
```

---

### `enderecos_counties_map`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Mapa de municípios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_counties_map(body: enderecos_counties_mapResponse): Promise<enderecos_counties_mapResponse>
```

---

### `enderecos_criminal_statistics_data`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Dados de Estatísticas Criminais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_criminal_statistics_data(body: enderecos_criminal_statistics_dataResponse): Promise<enderecos_criminal_statistics_dataResponse>
```

---

### `enderecos_embargoed_areas`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Consulta de Áreas Embargadas ICMBio

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_embargoed_areas(body: enderecos_embargoed_areasResponse): Promise<enderecos_embargoed_areasResponse>
```

---

### `enderecos_embargoed_areas`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Consulta de Áreas Embargadas ICMBio

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_embargoed_areas(body: enderecos_embargoed_areasResponse): Promise<enderecos_embargoed_areasResponse>
```

---

### `enderecos_environmental_preservation_areas`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Áreas de Proteção Ambiental

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_environmental_preservation_areas(body: enderecos_environmental_preservation_areasResponse): Promise<enderecos_environmental_preservation_areasResponse>
```

---

### `enderecos_indigenous_lands_data`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Terras Indígenas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_indigenous_lands_data(body: enderecos_indigenous_lands_dataResponse): Promise<enderecos_indigenous_lands_dataResponse>
```

---

### `enderecos_legal_amazon`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Amazônia Legal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_legal_amazon(body: enderecos_legal_amazonResponse): Promise<enderecos_legal_amazonResponse>
```

---

### `enderecos_legal_reserve`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Consulta de Reservas Legais SICAR

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_legal_reserve(body: enderecos_legal_reserveResponse): Promise<enderecos_legal_reserveResponse>
```

---

### `enderecos_sicar_property_data`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Dados de Propriedades Rurais SICAR

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_sicar_property_data(body: enderecos_sicar_property_dataResponse): Promise<enderecos_sicar_property_dataResponse>
```

---

### `enderecos_sugarcane_agroecological_zoning`

- **Method**: `POST`
- **Path**: `/enderecos`
- **Source**: DataPlatform API
- **Summary**: Zoneamento Agroecológico

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
enderecos_sugarcane_agroecological_zoning(body: enderecos_sugarcane_agroecological_zoningResponse): Promise<enderecos_sugarcane_agroecological_zoningResponse>
```

---

## Health-Check-Empresas

**2 operations**

### `health-check-empresas`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: Health Check
- **Summary**: Health Check - Empresas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Datasets` | string | Yes |  |
| `AccessToken` | string | Yes | Token de acesso do usuário |
| `TokenId` | string | Yes | Id do Token de acesso do usuário |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | integer |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
health-check-empresas(body: health-check-empresasResponse): Promise<health-check-empresasResponse>
```

---

### `health-check-empresas`

- **Method**: `POST`
- **Path**: `/empresas`
- **Source**: Health Check
- **Summary**: Health Check - Empresas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Datasets` | string | Yes |  |
| `AccessToken` | string | Yes | Token de acesso do usuário |
| `TokenId` | string | Yes | Id do Token de acesso do usuário |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | integer |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
health-check-empresas(body: health-check-empresasResponse): Promise<health-check-empresasResponse>
```

---

## Health-Check-Pessoas

**2 operations**

### `health-check-pessoas`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: Health Check
- **Summary**: Health Check - Pessoas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Datasets` | string | Yes |  |
| `AccessToken` | string | Yes |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | integer |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
health-check-pessoas(body: health-check-pessoasResponse): Promise<health-check-pessoasResponse>
```

---

### `health-check-pessoas`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: Health Check
- **Summary**: Health Check - Pessoas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Datasets` | string | Yes |  |
| `AccessToken` | string | Yes |  |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array |  |
| `QueryId` | string |  |
| `ElapsedMilliseconds` | integer |  |
| `Status` | object |  |

**TypeScript Signature**:
```typescript
health-check-pessoas(body: health-check-pessoasResponse): Promise<health-check-pessoasResponse>
```

---

## Marketplace

**36 operations**

### `marketplace_partner_b2e_score_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Acelerador de Vendas B2e

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_b2e_score_person(body: marketplace_partner_b2e_score_personResponse): Promise<marketplace_partner_b2e_score_personResponse>
```

---

### `marketplace_partner_b4b_optin_contact_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Status de Opt-In de Contatos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_b4b_optin_contact_person(body: marketplace_partner_b4b_optin_contact_personResponse): Promise<marketplace_partner_b4b_optin_contact_personResponse>
```

---

### `marketplace_partner_blu365_phone_report_data_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados sobre status de entrega de SMS

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_blu365_phone_report_data_person(body: marketplace_partner_blu365_phone_report_data_personResponse): Promise<marketplace_partner_blu365_phone_report_data_personResponse>
```

---

### `marketplace_partner_blu365_phone_score_data_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Modelo de Score de Telefone

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_blu365_phone_score_data_person(body: marketplace_partner_blu365_phone_score_data_personResponse): Promise<marketplace_partner_blu365_phone_score_data_personResponse>
```

---

### `marketplace_partner_boavista_credit_score_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados Restritivos de Crédito

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_boavista_credit_score_company(body: marketplace_partner_boavista_credit_score_companyResponse): Promise<marketplace_partner_boavista_credit_score_companyResponse>
```

---

### `marketplace_partner_boavista_credit_score_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados Restritivos de Crédito

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_boavista_credit_score_person(body: marketplace_partner_boavista_credit_score_personResponse): Promise<marketplace_partner_boavista_credit_score_personResponse>
```

---

### `marketplace_partner_boavista_one_score_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Score Multidados de Crédito Pessoa Jurídica

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_boavista_one_score_company(body: marketplace_partner_boavista_one_score_companyResponse): Promise<marketplace_partner_boavista_one_score_companyResponse>
```

---

### `marketplace_partner_boavista_one_score_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Score Multidados de Crédito Pessoa Física

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_boavista_one_score_person(body: marketplace_partner_boavista_one_score_personResponse): Promise<marketplace_partner_boavista_one_score_personResponse>
```

---

### `marketplace_partner_boavista_owner_participation_data_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Percentual de Participação Societária

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_boavista_owner_participation_data_company(body: marketplace_partner_boavista_owner_participation_data_companyResponse): Promise<marketplace_partner_boavista_owner_participation_data_companyResponse>
```

---

### `marketplace_partner_fuellog_fuel_pricing_data_address`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados de Preços de Combustível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_fuellog_fuel_pricing_data_address(body: marketplace_partner_fuellog_fuel_pricing_data_addressResponse): Promise<marketplace_partner_fuellog_fuel_pricing_data_addressResponse>
```

---

### `marketplace_partner_fuellog_fuel_pricing_data_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados de Preços de Combustível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_fuellog_fuel_pricing_data_company(body: marketplace_partner_fuellog_fuel_pricing_data_companyResponse): Promise<marketplace_partner_fuellog_fuel_pricing_data_companyResponse>
```

---

### `marketplace_partner_fuellog_fuel_pricing_data_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados de Preços de Combustível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_fuellog_fuel_pricing_data_person(body: marketplace_partner_fuellog_fuel_pricing_data_personResponse): Promise<marketplace_partner_fuellog_fuel_pricing_data_personResponse>
```

---

### `marketplace_partner_geofusion_intraurban_segmentation_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Segmentação Intraurbana Geofusion [Temporariamente Indisponível]

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Lista de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_geofusion_intraurban_segmentation_company(body: marketplace_partner_geofusion_intraurban_segmentation_companyResponse): Promise<marketplace_partner_geofusion_intraurban_segmentation_companyResponse>
```

---

### `marketplace_partner_geofusion_sociodemographic_and_economic_data_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados Sociodemográficos e Econômicos Geofusion [Temporariamente Indisponível]

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Lista de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_geofusion_sociodemographic_and_economic_data_company(body: marketplace_partner_geofusion_sociodemographic_and_economic_data_companyResponse): Promise<marketplace_partner_geofusion_sociodemographic_and_economic_data_companyResponse>
```

---

### `marketplace_partner_murabei_credit_score_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Score Murabei de Risco de Crédito

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_murabei_credit_score_company(body: marketplace_partner_murabei_credit_score_companyResponse): Promise<marketplace_partner_murabei_credit_score_companyResponse>
```

---

### `marketplace_partner_network_data`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados de Rede

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_network_data(body: marketplace_partner_network_dataResponse): Promise<marketplace_partner_network_dataResponse>
```

---

### `marketplace_partner_public_safety_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados de Segurança Pública

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_public_safety_company(body: marketplace_partner_public_safety_companyResponse): Promise<marketplace_partner_public_safety_companyResponse>
```

---

### `marketplace_partner_public_safety_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Dados de Segurança Pública

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_public_safety_person(body: marketplace_partner_public_safety_personResponse): Promise<marketplace_partner_public_safety_personResponse>
```

---

### `marketplace_partner_quantum_custom_score_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Score de Crédito de Pessoa Jurídica

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quantum_custom_score_company(body: marketplace_partner_quantum_custom_score_companyResponse): Promise<marketplace_partner_quantum_custom_score_companyResponse>
```

---

### `marketplace_partner_quantum_custom_score_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Score de Crédito de Pessoa Física

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quantum_custom_score_person(body: marketplace_partner_quantum_custom_score_personResponse): Promise<marketplace_partner_quantum_custom_score_personResponse>
```

---

### `marketplace_partner_quantum_score_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Score de Crédito Rotativo

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quantum_score_person(body: marketplace_partner_quantum_score_personResponse): Promise<marketplace_partner_quantum_score_personResponse>
```

---

### `marketplace_partner_quod_credit_risk_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Módulo Flag Negativo

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quod_credit_risk_company(body: marketplace_partner_quod_credit_risk_companyResponse): Promise<marketplace_partner_quod_credit_risk_companyResponse>
```

---

### `marketplace_partner_quod_credit_risk_details_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Módulo Detalhe Negativo

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quod_credit_risk_details_company(body: marketplace_partner_quod_credit_risk_details_companyResponse): Promise<marketplace_partner_quod_credit_risk_details_companyResponse>
```

---

### `marketplace_partner_quod_credit_risk_details_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Módulo Detalhe Negativo e Consulta

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quod_credit_risk_details_person(body: marketplace_partner_quod_credit_risk_details_personResponse): Promise<marketplace_partner_quod_credit_risk_details_personResponse>
```

---

### `marketplace_partner_quod_credit_risk_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Módulo Flag Negativo e Consulta

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quod_credit_risk_person(body: marketplace_partner_quod_credit_risk_personResponse): Promise<marketplace_partner_quod_credit_risk_personResponse>
```

---

### `marketplace_partner_quod_credit_score_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Módulo Score

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quod_credit_score_company(body: marketplace_partner_quod_credit_score_companyResponse): Promise<marketplace_partner_quod_credit_score_companyResponse>
```

---

### `marketplace_partner_quod_credit_score_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Módulo Score

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_quod_credit_score_person(body: marketplace_partner_quod_credit_score_personResponse): Promise<marketplace_partner_quod_credit_score_personResponse>
```

---

### `marketplace_partner_rede_vistorias_address`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Qualificação de Imóveis da Rede Vistorias

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_rede_vistorias_address(body: marketplace_partner_rede_vistorias_addressResponse): Promise<marketplace_partner_rede_vistorias_addressResponse>
```

---

### `marketplace_partner_scorepositivo_company_finance`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Exposição Financeira de Pessoa Jurídica

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_scorepositivo_company_finance(body: marketplace_partner_scorepositivo_company_financeResponse): Promise<marketplace_partner_scorepositivo_company_financeResponse>
```

---

### `marketplace_partner_scorepositivo_individual_finance`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Exposição Financeira de Pessoa Física

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_scorepositivo_individual_finance(body: marketplace_partner_scorepositivo_individual_financeResponse): Promise<marketplace_partner_scorepositivo_individual_financeResponse>
```

---

### `marketplace_partner_telesign_phone_id_porting_history_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Histórico de Portabilidade de Contato

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_telesign_phone_id_porting_history_person(body: marketplace_partner_telesign_phone_id_porting_history_personResponse): Promise<marketplace_partner_telesign_phone_id_porting_history_personResponse>
```

---

### `marketplace_partner_telesign_phone_id_porting_status_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Status de Portabilidade

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_telesign_phone_id_porting_status_person(body: marketplace_partner_telesign_phone_id_porting_status_personResponse): Promise<marketplace_partner_telesign_phone_id_porting_status_personResponse>
```

---

### `marketplace_partner_telesign_phone_id_standard_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Informações de Número de Telefone

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_telesign_phone_id_standard_person(body: marketplace_partner_telesign_phone_id_standard_personResponse): Promise<marketplace_partner_telesign_phone_id_standard_personResponse>
```

---

### `marketplace_partner_telesign_phone_id_subscriber_status_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Status do Assinante

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_telesign_phone_id_subscriber_status_person(body: marketplace_partner_telesign_phone_id_subscriber_status_personResponse): Promise<marketplace_partner_telesign_phone_id_subscriber_status_personResponse>
```

---

### `marketplace_partner_telesign_phone_score_person`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Score de Risco de Telefone

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_telesign_phone_score_person(body: marketplace_partner_telesign_phone_score_personResponse): Promise<marketplace_partner_telesign_phone_score_personResponse>
```

---

### `marketplace_partner_ultimate_beneficial_owners_company`

- **Method**: `POST`
- **Path**: `/marketplace`
- **Source**: DataPlatform API
- **Summary**: Beneficiário Final

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
marketplace_partner_ultimate_beneficial_owners_company(body: marketplace_partner_ultimate_beneficial_owners_companyResponse): Promise<marketplace_partner_ultimate_beneficial_owners_companyResponse>
```

---

## Ondemand

**68 operations**

### `ondemand_administrative_sanctions_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Sanções Administrativas do Banco Central

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_administrative_sanctions_person(body: ondemand_administrative_sanctions_personResponse): Promise<ondemand_administrative_sanctions_personResponse>
```

---

### `ondemand_antt_data_vehicle`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Transportadores (RNTRC)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_antt_data_vehicle(body: ondemand_antt_data_vehicleResponse): Promise<ondemand_antt_data_vehicleResponse>
```

---

### `ondemand_cartaosus_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Cartão do SUS

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cartaosus_person(body: ondemand_cartaosus_personResponse): Promise<ondemand_cartaosus_personResponse>
```

---

### `ondemand_cdcit_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão de Contratação Pessoas com Deficiência e Beneficiários Reabilitados da Previdência Social – Subsecretaria de Inspeção do Trabalho

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cdcit_company(body: ondemand_cdcit_companyResponse): Promise<ondemand_cdcit_companyResponse>
```

---

### `ondemand_cert_debt_absence_by_state_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa de Debitos Estadual

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cert_debt_absence_by_state_company(body: ondemand_cert_debt_absence_by_state_companyResponse): Promise<ondemand_cert_debt_absence_by_state_companyResponse>
```

---

### `ondemand_cert_debt_absence_by_state_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa de Débitos Estaduais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cert_debt_absence_by_state_person(body: ondemand_cert_debt_absence_by_state_personResponse): Promise<ondemand_cert_debt_absence_by_state_personResponse>
```

---

### `ondemand_cert_labor_debt_absence_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa de Débitos Trabalhistas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cert_labor_debt_absence_company(body: ondemand_cert_labor_debt_absence_companyResponse): Promise<ondemand_cert_labor_debt_absence_companyResponse>
```

---

### `ondemand_cert_labor_debt_absence_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa de Débitos Trabalhistas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cert_labor_debt_absence_person(body: ondemand_cert_labor_debt_absence_personResponse): Promise<ondemand_cert_labor_debt_absence_personResponse>
```

---

### `ondemand_cert_rais_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta Rais Empregado

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cert_rais_person(body: ondemand_cert_rais_personResponse): Promise<ondemand_cert_rais_personResponse>
```

---

### `ondemand_cert_siproquim_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão SIPROQUIM

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cert_siproquim_company(body: ondemand_cert_siproquim_companyResponse): Promise<ondemand_cert_siproquim_companyResponse>
```

---

### `ondemand_cgu_negative_certificate_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa CGU (Pessoa Jurídica)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cgu_negative_certificate_company(body: ondemand_cgu_negative_certificate_companyResponse): Promise<ondemand_cgu_negative_certificate_companyResponse>
```

---

### `ondemand_cgu_negative_certificate_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa Correcional CGU (Pessoa Física)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cgu_negative_certificate_person(body: ondemand_cgu_negative_certificate_personResponse): Promise<ondemand_cgu_negative_certificate_personResponse>
```

---

### `ondemand_cnj_negative_certificate_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa CNJ (Pessoa Jurídica)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cnj_negative_certificate_company(body: ondemand_cnj_negative_certificate_companyResponse): Promise<ondemand_cnj_negative_certificate_companyResponse>
```

---

### `ondemand_cnj_negative_certificate_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa CNJ (Pessoa Física)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_cnj_negative_certificate_person(body: ondemand_cnj_negative_certificate_personResponse): Promise<ondemand_cnj_negative_certificate_personResponse>
```

---

### `ondemand_comex_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Dados de Habilitação COMEX

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_comex_company(body: ondemand_comex_companyResponse): Promise<ondemand_comex_companyResponse>
```

---

### `ondemand_comprot_processes_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Processos no COMPROT

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_comprot_processes_company(body: ondemand_comprot_processes_companyResponse): Promise<ondemand_comprot_processes_companyResponse>
```

---

### `ondemand_comprot_processes_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Processos no COMPROT

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_comprot_processes_person(body: ondemand_comprot_processes_personResponse): Promise<ondemand_comprot_processes_personResponse>
```

---

### `ondemand_data_receipt`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta NFe

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_data_receipt(body: ondemand_data_receiptResponse): Promise<ondemand_data_receiptResponse>
```

---

### `ondemand_detran_data_vehicle`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta Detran

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_detran_data_vehicle(body: ondemand_detran_data_vehicleResponse): Promise<ondemand_detran_data_vehicleResponse>
```

---

### `ondemand_ecd_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Escrituração Contábil Digital

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_ecd_company(body: ondemand_ecd_companyResponse): Promise<ondemand_ecd_companyResponse>
```

---

### `ondemand_esocial_certificate_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Qualificação Cadastral no E-Social

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_esocial_certificate_person(body: ondemand_esocial_certificate_personResponse): Promise<ondemand_esocial_certificate_personResponse>
```

---

### `ondemand_fgts_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão FGTS

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_fgts_company(body: ondemand_fgts_companyResponse): Promise<ondemand_fgts_companyResponse>
```

---

### `ondemand_freight_service_certificate_receipt`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta CTe

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_freight_service_certificate_receipt(body: ondemand_freight_service_certificate_receiptResponse): Promise<ondemand_freight_service_certificate_receiptResponse>
```

---

### `ondemand_health_insurance_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Plano de Saúde na ANS [Temporariamente Indisponível]

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_health_insurance_person(body: ondemand_health_insurance_personResponse): Promise<ondemand_health_insurance_personResponse>
```

---

### `ondemand_ibama_cert_negativa_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa do Ibama

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_ibama_cert_negativa_company(body: ondemand_ibama_cert_negativa_companyResponse): Promise<ondemand_ibama_cert_negativa_companyResponse>
```

---

### `ondemand_ibama_cert_negativa_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa do Ibama

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_ibama_cert_negativa_person(body: ondemand_ibama_cert_negativa_personResponse): Promise<ondemand_ibama_cert_negativa_personResponse>
```

---

### `ondemand_ibama_embargados_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão de Embargos do Ibama

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_ibama_embargados_company(body: ondemand_ibama_embargados_companyResponse): Promise<ondemand_ibama_embargados_companyResponse>
```

---

### `ondemand_ibama_embargados_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão de Embargos do Ibama

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_ibama_embargados_person(body: ondemand_ibama_embargados_personResponse): Promise<ondemand_ibama_embargados_personResponse>
```

---

### `ondemand_irt_certificate_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão IRT

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_irt_certificate_company(body: ondemand_irt_certificate_companyResponse): Promise<ondemand_irt_certificate_companyResponse>
```

---

### `ondemand_irt_certificate_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão IRT

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_irt_certificate_person(body: ondemand_irt_certificate_personResponse): Promise<ondemand_irt_certificate_personResponse>
```

---

### `ondemand_labor_lawsuits_certificate_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão de Ações Trabalhistas (Pessoa Jurídica)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_labor_lawsuits_certificate_company(body: ondemand_labor_lawsuits_certificate_companyResponse): Promise<ondemand_labor_lawsuits_certificate_companyResponse>
```

---

### `ondemand_labor_lawsuits_certificate_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão de Ações Trabalhistas (Pessoa Física)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_labor_lawsuits_certificate_person(body: ondemand_labor_lawsuits_certificate_personResponse): Promise<ondemand_labor_lawsuits_certificate_personResponse>
```

---

### `ondemand_legal_representative_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Representante Legal na Receita Federal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_legal_representative_company(body: ondemand_legal_representative_companyResponse): Promise<ondemand_legal_representative_companyResponse>
```

---

### `ondemand_municipal_registration_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Inscrição Municipal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_municipal_registration_company(body: ondemand_municipal_registration_companyResponse): Promise<ondemand_municipal_registration_companyResponse>
```

---

### `ondemand_nada_consta_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão de Nada Consta - Ações Judiciais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_nada_consta_person(body: ondemand_nada_consta_personResponse): Promise<ondemand_nada_consta_personResponse>
```

---

### `ondemand_pc_antecedente_by_state_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Antecedentes Criminais - Polícia Civil

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pc_antecedente_by_state_person(body: ondemand_pc_antecedente_by_state_personResponse): Promise<ondemand_pc_antecedente_by_state_personResponse>
```

---

### `ondemand_pesquisa_protesto_by_state_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Protestos Estadual

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pesquisa_protesto_by_state_company(body: ondemand_pesquisa_protesto_by_state_companyResponse): Promise<ondemand_pesquisa_protesto_by_state_companyResponse>
```

---

### `ondemand_pesquisa_protesto_by_state_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Protestos Estadual

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pesquisa_protesto_by_state_person(body: ondemand_pesquisa_protesto_by_state_personResponse): Promise<ondemand_pesquisa_protesto_by_state_personResponse>
```

---

### `ondemand_pf_antecedente_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Antecedentes Criminais - Polícia Federal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pf_antecedente_person(body: ondemand_pf_antecedente_personResponse): Promise<ondemand_pf_antecedente_personResponse>
```

---

### `ondemand_pgfn_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão PGFN

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pgfn_company(body: ondemand_pgfn_companyResponse): Promise<ondemand_pgfn_companyResponse>
```

---

### `ondemand_pgfn_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão PGFN

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pgfn_person(body: ondemand_pgfn_personResponse): Promise<ondemand_pgfn_personResponse>
```

---

### `ondemand_pgmei_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Arrecadação do Simples Nacional para MEI

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pgmei_company(body: ondemand_pgmei_companyResponse): Promise<ondemand_pgmei_companyResponse>
```

---

### `ondemand_pis_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Dados do PIS

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_pis_person(body: ondemand_pis_personResponse): Promise<ondemand_pis_personResponse>
```

---

### `ondemand_police_report_bo_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Boletim de Ocorrência - Policia Civil

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_police_report_bo_person(body: ondemand_police_report_bo_personResponse): Promise<ondemand_police_report_bo_personResponse>
```

---

### `ondemand_public_projects_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Projetos Públicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_public_projects_company(body: ondemand_public_projects_companyResponse): Promise<ondemand_public_projects_companyResponse>
```

---

### `ondemand_query_pesquisaprotesto_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa de Protesto

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_query_pesquisaprotesto_company(body: ondemand_query_pesquisaprotesto_companyResponse): Promise<ondemand_query_pesquisaprotesto_companyResponse>
```

---

### `ondemand_query_pesquisaprotesto_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Negativa de Protesto

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_query_pesquisaprotesto_person(body: ondemand_query_pesquisaprotesto_personResponse): Promise<ondemand_query_pesquisaprotesto_personResponse>
```

---

### `ondemand_rais_consulta_crea_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Controle de Arquivos RAIS

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_rais_consulta_crea_person(body: ondemand_rais_consulta_crea_personResponse): Promise<ondemand_rais_consulta_crea_personResponse>
```

---

### `ondemand_regularity_certificate_ibama_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão Regulatória do Ibama

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_regularity_certificate_ibama_company(body: ondemand_regularity_certificate_ibama_companyResponse): Promise<ondemand_regularity_certificate_ibama_companyResponse>
```

---

### `ondemand_regularity_certificate_ibama_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certificado de Regularidade Ibama

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_regularity_certificate_ibama_person(body: ondemand_regularity_certificate_ibama_personResponse): Promise<ondemand_regularity_certificate_ibama_personResponse>
```

---

### `ondemand_restituicao_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Restituição do Imposto de Renda

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_restituicao_person(body: ondemand_restituicao_personResponse): Promise<ondemand_restituicao_personResponse>
```

---

### `ondemand_rf_qsa_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de QSA na Receita Federal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_rf_qsa_company(body: ondemand_rf_qsa_companyResponse): Promise<ondemand_rf_qsa_companyResponse>
```

---

### `ondemand_rf_status_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de CNPJ na Receita Federal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_rf_status_company(body: ondemand_rf_status_companyResponse): Promise<ondemand_rf_status_companyResponse>
```

---

### `ondemand_rf_status_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de CPF na Receita Federal

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_rf_status_person(body: ondemand_rf_status_personResponse): Promise<ondemand_rf_status_personResponse>
```

---

### `ondemand_sanitary_license_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Licenças Sanitárias

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sanitary_license_company(body: ondemand_sanitary_license_companyResponse): Promise<ondemand_sanitary_license_companyResponse>
```

---

### `ondemand_sanitary_license_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Licenças Sanitárias

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sanitary_license_person(body: ondemand_sanitary_license_personResponse): Promise<ondemand_sanitary_license_personResponse>
```

---

### `ondemand_seguro_desemprego_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Seguro Desemprego

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_seguro_desemprego_person(body: ondemand_seguro_desemprego_personResponse): Promise<ondemand_seguro_desemprego_personResponse>
```

---

### `ondemand_sicar_statement_address`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certificado SICAR

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sicar_statement_address(body: ondemand_sicar_statement_addressResponse): Promise<ondemand_sicar_statement_addressResponse>
```

---

### `ondemand_sigef_installments_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Parcelas no SIGEF

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sigef_installments_company(body: ondemand_sigef_installments_companyResponse): Promise<ondemand_sigef_installments_companyResponse>
```

---

### `ondemand_sigef_installments_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Parcelas no SIGEF

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sigef_installments_person(body: ondemand_sigef_installments_personResponse): Promise<ondemand_sigef_installments_personResponse>
```

---

### `ondemand_simples_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Optante pelo Simples

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_simples_company(body: ondemand_simples_companyResponse): Promise<ondemand_simples_companyResponse>
```

---

### `ondemand_sintegra_company`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta do SINTEGRA

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sintegra_company(body: ondemand_sintegra_companyResponse): Promise<ondemand_sintegra_companyResponse>
```

---

### `ondemand_sintegra_company_v2`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta do SINTEGRA (v2)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sintegra_company_v2(body: ondemand_sintegra_company_v2Response): Promise<ondemand_sintegra_company_v2Response>
```

---

### `ondemand_sintegra_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta do SINTEGRA

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sintegra_person(body: ondemand_sintegra_personResponse): Promise<ondemand_sintegra_personResponse>
```

---

### `ondemand_sintegra_person_v2`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta do SINTEGRA (v2)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_sintegra_person_v2(body: ondemand_sintegra_person_v2Response): Promise<ondemand_sintegra_person_v2Response>
```

---

### `ondemand_traffic_ticket_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta de Multa de Trânsito

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_traffic_ticket_person(body: ondemand_traffic_ticket_personResponse): Promise<ondemand_traffic_ticket_personResponse>
```

---

### `ondemand_tse_electoral_discharge_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Certidão de Quitação Eleitoral do TSE

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_tse_electoral_discharge_person(body: ondemand_tse_electoral_discharge_personResponse): Promise<ondemand_tse_electoral_discharge_personResponse>
```

---

### `ondemand_tse_polling_place_person`

- **Method**: `POST`
- **Path**: `/ondemand`
- **Source**: DataPlatform API
- **Summary**: Consulta TSE de Local de Votação

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
ondemand_tse_polling_place_person(body: ondemand_tse_polling_place_personResponse): Promise<ondemand_tse_polling_place_personResponse>
```

---

## Pessoas

**83 operations**

### `pessoas_addresses_extended`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Endereços - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_addresses_extended(body: pessoas_addresses_extendedResponse): Promise<pessoas_addresses_extendedResponse>
```

---

### `pessoas_apps_networks_and_platforms`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Presença em Apps e Plataformas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_apps_networks_and_platforms(body: pessoas_apps_networks_and_platformsResponse): Promise<pessoas_apps_networks_and_platformsResponse>
```

---

### `pessoas_awards_and_certifications`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Prêmios e Certificações

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_awards_and_certifications(body: pessoas_awards_and_certificationsResponse): Promise<pessoas_awards_and_certificationsResponse>
```

---

### `pessoas_basic_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados Cadastrais Básicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_basic_data(body: pessoas_basic_dataResponse): Promise<pessoas_basic_dataResponse>
```

---

### `pessoas_basic_data_with_configurable_recency`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados Cadastrais de Recência Configurável

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_basic_data_with_configurable_recency(body: pessoas_basic_data_with_configurable_recencyResponse): Promise<pessoas_basic_data_with_configurable_recencyResponse>
```

---

### `pessoas_business_relationships`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Relacionamentos Econômicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_business_relationships(body: pessoas_business_relationshipsResponse): Promise<pessoas_business_relationshipsResponse>
```

---

### `pessoas_circles_building`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Vizinhos (Mesmo prédio)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_building(body: pessoas_circles_buildingResponse): Promise<pessoas_circles_buildingResponse>
```

---

### `pessoas_circles_college_class`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Colegas de Classe

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_college_class(body: pessoas_circles_college_classResponse): Promise<pessoas_circles_college_classResponse>
```

---

### `pessoas_circles_coworkers`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Colegas de Trabalho

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_coworkers(body: pessoas_circles_coworkersResponse): Promise<pessoas_circles_coworkersResponse>
```

---

### `pessoas_circles_first_level_relatives`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Parentes (1º grau)

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_first_level_relatives(body: pessoas_circles_first_level_relativesResponse): Promise<pessoas_circles_first_level_relativesResponse>
```

---

### `pessoas_circles_household`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Household

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_household(body: pessoas_circles_householdResponse): Promise<pessoas_circles_householdResponse>
```

---

### `pessoas_circles_lawsuit_parties`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Processos Judiciais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_lawsuit_parties(body: pessoas_circles_lawsuit_partiesResponse): Promise<pessoas_circles_lawsuit_partiesResponse>
```

---

### `pessoas_circles_neighbors`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Vizinhos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_neighbors(body: pessoas_circles_neighborsResponse): Promise<pessoas_circles_neighborsResponse>
```

---

### `pessoas_circles_partners`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Sócios

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_partners(body: pessoas_circles_partnersResponse): Promise<pessoas_circles_partnersResponse>
```

---

### `pessoas_circles_relatives`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Círculos - Parentes

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_circles_relatives(body: pessoas_circles_relativesResponse): Promise<pessoas_circles_relativesResponse>
```

---

### `pessoas_class_organization`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Conselhos de Classe

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_class_organization(body: pessoas_class_organizationResponse): Promise<pessoas_class_organizationResponse>
```

---

### `pessoas_collections`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Presença em Cobrança

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_collections(body: pessoas_collectionsResponse): Promise<pessoas_collectionsResponse>
```

---

### `pessoas_company_group_employed`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Emprego

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_company_group_employed(body: pessoas_company_group_employedResponse): Promise<pessoas_company_group_employedResponse>
```

---

### `pessoas_company_group_family_ownership`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Família

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_company_group_family_ownership(body: pessoas_company_group_family_ownershipResponse): Promise<pessoas_company_group_family_ownershipResponse>
```

---

### `pessoas_company_group_ownership`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Sociedade

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_company_group_ownership(body: pessoas_company_group_ownershipResponse): Promise<pessoas_company_group_ownershipResponse>
```

---

### `pessoas_company_group_sued`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Grupo Empresarial - Processos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_company_group_sued(body: pessoas_company_group_suedResponse): Promise<pessoas_company_group_suedResponse>
```

---

### `pessoas_demographic_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Informações Sócio-Demográficas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_demographic_data(body: pessoas_demographic_dataResponse): Promise<pessoas_demographic_dataResponse>
```

---

### `pessoas_domains`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados de Sites

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_domains(body: pessoas_domainsResponse): Promise<pessoas_domainsResponse>
```

---

### `pessoas_domains_extended`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados de Sites - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_domains_extended(body: pessoas_domains_extendedResponse): Promise<pessoas_domains_extendedResponse>
```

---

### `pessoas_election_candidate_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Candidatos Eleitorais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_election_candidate_data(body: pessoas_election_candidate_dataResponse): Promise<pessoas_election_candidate_dataResponse>
```

---

### `pessoas_electoral_donors`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Doações Eleitorais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_electoral_donors(body: pessoas_electoral_donorsResponse): Promise<pessoas_electoral_donorsResponse>
```

---

### `pessoas_electoral_providers`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Prestadores de Serviços Eleitorais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_electoral_providers(body: pessoas_electoral_providersResponse): Promise<pessoas_electoral_providersResponse>
```

---

### `pessoas_emails_extended`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: E-mails - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_emails_extended(body: pessoas_emails_extendedResponse): Promise<pessoas_emails_extendedResponse>
```

---

### `pessoas_family_financial_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados Financeiros Familiares

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_family_financial_data(body: pessoas_family_financial_dataResponse): Promise<pessoas_family_financial_dataResponse>
```

---

### `pessoas_family_financial_risk`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Risco Financeiro Familiar

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_family_financial_risk(body: pessoas_family_financial_riskResponse): Promise<pessoas_family_financial_riskResponse>
```

---

### `pessoas_family_lawsuits_distribution_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados de Distribuição de Processos Judiciais Familiares

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_family_lawsuits_distribution_data(body: pessoas_family_lawsuits_distribution_dataResponse): Promise<pessoas_family_lawsuits_distribution_dataResponse>
```

---

### `pessoas_family_online_participation`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Participação Online Familiar

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_family_online_participation(body: pessoas_family_online_participationResponse): Promise<pessoas_family_online_participationResponse>
```

---

### `pessoas_family_political_history`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Histórico Político Familiar

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_family_political_history(body: pessoas_family_political_historyResponse): Promise<pessoas_family_political_historyResponse>
```

---

### `pessoas_family_social_assistance`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Benefícios Sociais Familiares

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_family_social_assistance(body: pessoas_family_social_assistanceResponse): Promise<pessoas_family_social_assistanceResponse>
```

---

### `pessoas_financial_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Informações Financeiras

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_financial_data(body: pessoas_financial_dataResponse): Promise<pessoas_financial_dataResponse>
```

---

### `pessoas_financial_interests`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Interesses Financeiros

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_financial_interests(body: pessoas_financial_interestsResponse): Promise<pessoas_financial_interestsResponse>
```

---

### `pessoas_financial_risk`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Risco Financeiro

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_financial_risk(body: pessoas_financial_riskResponse): Promise<pessoas_financial_riskResponse>
```

---

### `pessoas_first_level_relatives_kyc`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: KYC e Compliance dos Familiares de Primeiro Nível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_first_level_relatives_kyc(body: pessoas_first_level_relatives_kycResponse): Promise<pessoas_first_level_relatives_kycResponse>
```

---

### `pessoas_first_level_relatives_lawsuit_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Processos Judiciais e Administrativos de Familiares de Primeiro Nível

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_first_level_relatives_lawsuit_data(body: pessoas_first_level_relatives_lawsuit_dataResponse): Promise<pessoas_first_level_relatives_lawsuit_dataResponse>
```

---

### `pessoas_flags_and_features`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Indicadores e Características

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_flags_and_features(body: pessoas_flags_and_featuresResponse): Promise<pessoas_flags_and_featuresResponse>
```

---

### `pessoas_genai_description_gpt_x1_0`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Biografia de Vida - GPT x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_genai_description_gpt_x1_0(body: pessoas_genai_description_gpt_x1_0Response): Promise<pessoas_genai_description_gpt_x1_0Response>
```

---

### `pessoas_genai_description_gpt_x1_5`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Biografia de Vida - GPT x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_genai_description_gpt_x1_5(body: pessoas_genai_description_gpt_x1_5Response): Promise<pessoas_genai_description_gpt_x1_5Response>
```

---

### `pessoas_genai_description_mistral_x1_0`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Biografia de Vida - Mistral x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_genai_description_mistral_x1_0(body: pessoas_genai_description_mistral_x1_0Response): Promise<pessoas_genai_description_mistral_x1_0Response>
```

---

### `pessoas_genai_description_mistral_x1_5`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Biografia de Vida - Mistral x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_genai_description_mistral_x1_5(body: pessoas_genai_description_mistral_x1_5Response): Promise<pessoas_genai_description_mistral_x1_5Response>
```

---

### `pessoas_genai_description_nova_x1_0`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Biografia de Vida - Nova x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_genai_description_nova_x1_0(body: pessoas_genai_description_nova_x1_0Response): Promise<pessoas_genai_description_nova_x1_0Response>
```

---

### `pessoas_genai_description_nova_x1_5`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Biografia de Vida - Nova x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_genai_description_nova_x1_5(body: pessoas_genai_description_nova_x1_5Response): Promise<pessoas_genai_description_nova_x1_5Response>
```

---

### `pessoas_government_debtors`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Devedores do Governo

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_government_debtors(body: pessoas_government_debtorsResponse): Promise<pessoas_government_debtorsResponse>
```

---

### `pessoas_historical_basic_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Histórico de Dados Básicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_historical_basic_data(body: pessoas_historical_basic_dataResponse): Promise<pessoas_historical_basic_dataResponse>
```

---

### `pessoas_indebtedness_question`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Probabilidade de Negativação

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_indebtedness_question(body: pessoas_indebtedness_questionResponse): Promise<pessoas_indebtedness_questionResponse>
```

---

### `pessoas_industrial_property`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Propriedades Industriais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_industrial_property(body: pessoas_industrial_propertyResponse): Promise<pessoas_industrial_propertyResponse>
```

---

### `pessoas_influence_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados de Influência

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_influence_data(body: pessoas_influence_dataResponse): Promise<pessoas_influence_dataResponse>
```

---

### `pessoas_interests_and_behaviors`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Interesses e Comportamentos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_interests_and_behaviors(body: pessoas_interests_and_behaviorsResponse): Promise<pessoas_interests_and_behaviorsResponse>
```

---

### `pessoas_kyc`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: KYC e Compliance

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_kyc(body: pessoas_kycResponse): Promise<pessoas_kycResponse>
```

---

### `pessoas_lawsuits_distribution_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados de Distribuição de Processos Judiciais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_lawsuits_distribution_data(body: pessoas_lawsuits_distribution_dataResponse): Promise<pessoas_lawsuits_distribution_dataResponse>
```

---

### `pessoas_licenses_and_authorizations`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Licenças e Autorizações

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_licenses_and_authorizations(body: pessoas_licenses_and_authorizationsResponse): Promise<pessoas_licenses_and_authorizationsResponse>
```

---

### `pessoas_life_stages`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Momentos de Vida

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_life_stages(body: pessoas_life_stagesResponse): Promise<pessoas_life_stagesResponse>
```

---

### `pessoas_media_profile_and_exposure`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Exposição e Perfil na Mídia

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_media_profile_and_exposure(body: pessoas_media_profile_and_exposureResponse): Promise<pessoas_media_profile_and_exposureResponse>
```

---

### `pessoas_occupation_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados Profissionais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_occupation_data(body: pessoas_occupation_dataResponse): Promise<pessoas_occupation_dataResponse>
```

---

### `pessoas_online_ads`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Anúncios Online

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_online_ads(body: pessoas_online_adsResponse): Promise<pessoas_online_adsResponse>
```

---

### `pessoas_online_betting_compliance`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Compliance de Casas de Aposta

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_online_betting_compliance(body: pessoas_online_betting_complianceResponse): Promise<pessoas_online_betting_complianceResponse>
```

---

### `pessoas_online_betting_propensity`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Propensão à Aposta Online

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_online_betting_propensity(body: pessoas_online_betting_propensityResponse): Promise<pessoas_online_betting_propensityResponse>
```

---

### `pessoas_online_presence`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Presença Online

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_online_presence(body: pessoas_online_presenceResponse): Promise<pessoas_online_presenceResponse>
```

---

### `pessoas_passages`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Passagens pela Web

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_passages(body: pessoas_passagesResponse): Promise<pessoas_passagesResponse>
```

---

### `pessoas_phones_extended`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Telefones - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_phones_extended(body: pessoas_phones_extendedResponse): Promise<pessoas_phones_extendedResponse>
```

---

### `pessoas_political_involvement`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Envolvimento Político

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_political_involvement(body: pessoas_political_involvementResponse): Promise<pessoas_political_involvementResponse>
```

---

### `pessoas_political_relationships`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Relacionamentos Políticos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_political_relationships(body: pessoas_political_relationshipsResponse): Promise<pessoas_political_relationshipsResponse>
```

---

### `pessoas_processes`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Processos Judiciais e Administrativos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_processes(body: pessoas_processesResponse): Promise<pessoas_processesResponse>
```

---

### `pessoas_profession_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Servidores Públicos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_profession_data(body: pessoas_profession_dataResponse): Promise<pessoas_profession_dataResponse>
```

---

### `pessoas_professional_turnover`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Turnover Profissional

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_professional_turnover(body: pessoas_professional_turnoverResponse): Promise<pessoas_professional_turnoverResponse>
```

---

### `pessoas_qsa_bet_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: QSA - Casas de Apostas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_qsa_bet_data(body: pessoas_qsa_bet_dataResponse): Promise<pessoas_qsa_bet_dataResponse>
```

---

### `pessoas_registration_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados Cadastrais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_registration_data(body: pessoas_registration_dataResponse): Promise<pessoas_registration_dataResponse>
```

---

### `pessoas_related_people`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Relacionamentos Pessoais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_related_people(body: pessoas_related_peopleResponse): Promise<pessoas_related_peopleResponse>
```

---

### `pessoas_related_people_addresses`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Endereços - Pessoas Relacionadas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_related_people_addresses(body: pessoas_related_people_addressesResponse): Promise<pessoas_related_people_addressesResponse>
```

---

### `pessoas_related_people_emails`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: E-mails - Pessoas Relacionadas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_related_people_emails(body: pessoas_related_people_emailsResponse): Promise<pessoas_related_people_emailsResponse>
```

---

### `pessoas_related_people_phones`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Telefones - Pessoas Relacionadas

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_related_people_phones(body: pessoas_related_people_phonesResponse): Promise<pessoas_related_people_phonesResponse>
```

---

### `pessoas_security_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados de Segurança

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_security_data(body: pessoas_security_dataResponse): Promise<pessoas_security_dataResponse>
```

---

### `pessoas_social_assistance`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Programas de Benefícios e Assistência Social

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_social_assistance(body: pessoas_social_assistanceResponse): Promise<pessoas_social_assistanceResponse>
```

---

### `pessoas_social_assistance_extended`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Programas de Benefícios e Assistência Social - Estendido

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_social_assistance_extended(body: pessoas_social_assistance_extendedResponse): Promise<pessoas_social_assistance_extendedResponse>
```

---

### `pessoas_sports_exposure`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Exposição Esportiva

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_sports_exposure(body: pessoas_sports_exposureResponse): Promise<pessoas_sports_exposureResponse>
```

---

### `pessoas_unified_modeling_data_x1_0`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados Unificados para Modelagem x1.0

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_unified_modeling_data_x1_0(body: pessoas_unified_modeling_data_x1_0Response): Promise<pessoas_unified_modeling_data_x1_0Response>
```

---

### `pessoas_unified_modeling_data_x1_5`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Dados Unificados para Modelagem x1.5

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_unified_modeling_data_x1_5(body: pessoas_unified_modeling_data_x1_5Response): Promise<pessoas_unified_modeling_data_x1_5Response>
```

---

### `pessoas_university_student_data`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Histórico Escolar e Acadêmico

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_university_student_data(body: pessoas_university_student_dataResponse): Promise<pessoas_university_student_dataResponse>
```

---

### `pessoas_vehicles`

- **Method**: `POST`
- **Path**: `/pessoas`
- **Source**: DataPlatform API
- **Summary**: Veículos

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
pessoas_vehicles(body: pessoas_vehiclesResponse): Promise<pessoas_vehiclesResponse>
```

---

## Processos

**2 operations**

### `processos_basic_data`

- **Method**: `POST`
- **Path**: `/processos`
- **Source**: DataPlatform API
- **Summary**: Dados Básicos de Processos Judiciais

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
processos_basic_data(body: processos_basic_dataResponse): Promise<processos_basic_dataResponse>
```

---

### `processos_cade_processes_data`

- **Method**: `POST`
- **Path**: `/processos`
- **Source**: DataPlatform API
- **Summary**: Dados de Processos do CADE

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
processos_cade_processes_data(body: processos_cade_processes_dataResponse): Promise<processos_cade_processes_dataResponse>
```

---

## Produtos

**7 operations**

### `produtos_availability_data`

- **Method**: `POST`
- **Path**: `/produtos`
- **Source**: DataPlatform API
- **Summary**: Dados de Disponibilidade

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
produtos_availability_data(body: produtos_availability_dataResponse): Promise<produtos_availability_dataResponse>
```

---

### `produtos_basic_data`

- **Method**: `POST`
- **Path**: `/produtos`
- **Source**: DataPlatform API
- **Summary**: Dados de Cadastro e Categorização

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
produtos_basic_data(body: produtos_basic_dataResponse): Promise<produtos_basic_dataResponse>
```

---

### `produtos_extra_info_data`

- **Method**: `POST`
- **Path**: `/produtos`
- **Source**: DataPlatform API
- **Summary**: Dados Extras

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
produtos_extra_info_data(body: produtos_extra_info_dataResponse): Promise<produtos_extra_info_dataResponse>
```

---

### `produtos_images_data`

- **Method**: `POST`
- **Path**: `/produtos`
- **Source**: DataPlatform API
- **Summary**: Dados de Imagens

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
produtos_images_data(body: produtos_images_dataResponse): Promise<produtos_images_dataResponse>
```

---

### `produtos_price_data`

- **Method**: `POST`
- **Path**: `/produtos`
- **Source**: DataPlatform API
- **Summary**: Dados de Precificação

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
produtos_price_data(body: produtos_price_dataResponse): Promise<produtos_price_dataResponse>
```

---

### `produtos_related_product_data`

- **Method**: `POST`
- **Path**: `/produtos`
- **Source**: DataPlatform API
- **Summary**: Dados de Produtos Relacionados

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
produtos_related_product_data(body: produtos_related_product_dataResponse): Promise<produtos_related_product_dataResponse>
```

---

### `produtos_review_data`

- **Method**: `POST`
- **Path**: `/produtos`
- **Source**: DataPlatform API
- **Summary**: Dados de Avaliações

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
produtos_review_data(body: produtos_review_dataResponse): Promise<produtos_review_dataResponse>
```

---

## Veiculos

**1 operations**

### `veiculos_license_plates`

- **Method**: `POST`
- **Path**: `/veiculos`
- **Source**: DataPlatform API
- **Summary**: Dados de Placa de Veículo

**Request Body** (`application/json`):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `q` | string | Yes | String de parâmetros de entrada. |
| `Datasets` | string | Yes | String de services de consulta. |
| `Limit` | number | No | Limite de entidades retornadas. Usado pa |

**Responses**:

*200*: `object`

| Property | Type | Description |
|----------|------|-------------|
| `Result` | array | Listas de resultados |
| `QueryId` | string | Id único identificador da chamada. |
| `ElapsedMilliseconds` | number | A quantidade de milisegundos decorridos  |
| `QueryDate` | string | A data de quando o request foi recebido  |
| `Status` | object | Lista de status para cada dataset. |
| `Evidences` | object | Lista de evidências usadas para cada dat |

**TypeScript Signature**:
```typescript
veiculos_license_plates(body: veiculos_license_platesResponse): Promise<veiculos_license_platesResponse>
```

---


## ⚠️ Failed Specifications

- `6824834c6a01f0001e46d9e1`: Invalid JSON: Expecting value: line 1 column 1 (char 0)