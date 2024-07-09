## Plano de Teste

### 1. Introdução

**Objetivo:**
Este plano de teste descreve a abordagem, o escopo, os recursos, o cronograma e os critérios de aceitação para os testes.

**Escopo:**
Os testes cobrirão as funcionalidades do Menu Principal. Serão realizados testes de UI e testes de API em um unico endpoint do (Portal do RH)[https://portal.credifit.com.br/] quanto a confirmação retorno 400 por tentativa de login de usuário inválido.

### 2. Itens a serem testados

- Itens do Principal do Site: Inicial, A Credifit, Soluções, Duvidas, Portal da Transparência. 
- Endpoint (API Login)[https://company-api.credifit.com.br/login]

### 3. Abordagem de Teste

**Pirâmide de Testes:**
- **Testes Unitários:** Não será testado.
- **Testes de API:** Verificação do endpoint REST.
- **Testes de UI:** Testes end-to-end com Cypress para simular o comportamento do usuário no uso do menu principal do site.

**Ferramentas:**
- Cypress para testes de UI 
- VsCode com Plugin ThunderClient para testes de API.

### 4. Critérios de Aceitação

**Critérios de Início:**
- Ambiente de testes configurado
- Documentação disponível
- Código-fonte acessível

**Critérios de Conclusão:**
- Todos os casos de teste executados
- Todos os defeitos críticos corrigidos
- Relatórios de testes revisados e aprovados

### 5. Recursos

**Equipe de Testes:**
- 1 Analista de Testes: Antonio Garcia

**Ambiente de Testes:**
- Ambiente de desenvolvimento configurado
- Acesso ao site https://www.credifit.com.br/

### 6. Cronograma

| Atividade                  | Início      | Fim        | Responsável         |
|----------------------------|-------------|------------|---------------------|
| Planejamento de Testes     | 08/07/2024  | 08/07/2024 | Analista de Testes  |
| Preparação do Ambiente     | 08/07/2024  | 08/07/2024 | Analista de Testes  |
| Criação dos Casos de Teste | 08/07/2024  | 08/07/2024 | Analista de Testes  |
| Execução dos Testes        | 08/07/2024  | 08/07/2024 | Analista de Testes  |
| Revisão e Relatório        | 08/07/2024  | 08/07/2024 | Analista de Testes  |

### 7. Riscos

**Riscos Identificados:**
- Atrasos na configuração do ambiente de testes
- Alterações nos requisitos durante o ciclo de testes
- Recursos limitados

**Mitigação:**
- Planejamento detalhado e comunicação contínua com a equipe de desenvolvimento
- Revisões regulares dos requisitos com stakeholders
- Alocação de tempo extra para ajustes no cronograma

### 8. Aprovação

**Aprovado por:**
- Nome do Gerente de Projetos: [Antonio Carlos Garcia Junior]
- Data: [08/07/2024]
