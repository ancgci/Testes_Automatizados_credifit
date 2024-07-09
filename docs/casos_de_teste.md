# Casos de Teste

## Caso de Teste para o Menu Principal do Site

### ID: CT001

**Título:** Verificar se os links do menu principal navegam para as páginas corretas

**Descrição:** Este teste verifica se cada link no menu principal do site navega para a página correta.

**Pré-condições:** 
- O usuário deve estar na página inicial do site.

**Passos:**
1. Acessar a página inicial do site.
2. Verificar a presença do menu principal no topo da página.
3. Clicar no link "Inicial" e verificar se a página inicial é carregada.
4. Clicar no link "A Credifit" e verificar se a página é carregada.
5. Clicar no link "Soluções" e verificar se a página sobre a empresa é carregada.
6. Clicar no link "Duvidas" e verificar se a página de contato é carregada.
7. Clicar no link "Portal da Transparência" e verificar se a página de contato é carregada.

**Resultados Esperados:**
- Após cada clique, a página correspondente deve ser carregada sem erros.
- O conteúdo da página deve ser exibido corretamente.

**Critérios de Sucesso:**
- Todas as páginas devem ser carregadas corretamente e correspondentes aos links do menu.

---

## Caso de Teste para o Endpoint de Login

### ID: CT002

**Título:** Verificar resposta de endpoint de login sem sucesso

**Descrição:** Este teste verifica se o endpoint de login responde corretamente quando as credenciais inválidas são fornecidas e confirma retorno 400.

**Pré-condições:**
- A API deve estar em execução e acessível.

**Passos:**
1. Enviar uma requisição POST para `https://company-api.credifit.com.br/login` com as credenciais válidas:
    ```json
    {
      "username": "antonio@carlos.com",
      "password": "123456"
    }
    ```
2. Verificar o status code da resposta.

**Resultados Esperados:**
- O status code da resposta deve ser 400.

**Critérios de Sucesso:**
- As credenciais inválidas devem resultar em uma resposta devida ao não login.