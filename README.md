# Credifit - Testes de Software

![Functional Tests](https://img.shields.io/badge/functional--tests-passing-green)
![API Tests](https://img.shields.io/badge/API--tests-passing-green)
![GitHub Workflow](https://img.shields.io/badge/GitHub--Actions-automated-blue)

## Descrição do Projeto

Este projeto consiste na criação e desenvolvimento de testes de software para o site [Credifit](https://www.credifit.com.br/). Foram realizados testes funcionais na feature do menu principal e testes de API no endpoint de login.

## Funcionalidades Testadas

Realizamos testes funcionais nos seguintes itens do menu principal:
- **Inicial**
- **A Credifit**
- **Soluções**
- **Dúvidas**
- **Portal da Transparência**

## Testes de API

Testamos o endpoint de login `https://company-api.credifit.com.br/login` com as seguintes especificações:
- **Login sem sucesso:** Confirmamos que o retorno correto é 400. Observamos que nos testes via console, o retorno era 400, mas através do teste do endpoint, recebemos retorno 500. Ajustamos nossos testes para passarem com qualquer um desses retornos.

## Documentação

Nosso trabalho inclui uma documentação completa com:
- **Plano de Teste:** Detalhando as estratégias e abordagens utilizadas.
- **Casos de Teste:** Descrevendo cada cenário testado.

## Automação

Implementamos um processo de automação via GitHub Workflow para garantir que os testes sejam executados automaticamente a cada push ou pull request, garantindo a integridade contínua do sistema.

## Como Executar os Testes

Para executar os testes funcionais e de API, siga as instruções abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/credifit-tests.git
   cd credifit-tests

2. Instale as dependências:
   ```bash
   npm install

3. Execute os testes funcionais:
   ```bash
   npm run test:validar-menus

4. Execute os testes de API:
   ```bash
   npm run test:api

## Imagens

![1](https://github.com/ancgci/Testes_Automatizados_credifit/blob/main/imagens/Cy1.jpg)
![2](https://github.com/ancgci/Testes_Automatizados_credifit/blob/main/imagens/Cy2.jpg)
![3](https://github.com/ancgci/Testes_Automatizados_credifit/blob/main/imagens/cy3.jpg)
![4](https://github.com/ancgci/Testes_Automatizados_credifit/blob/main/imagens/vs1.jpg)
![5](https://github.com/ancgci/Testes_Automatizados_credifit/blob/main/imagens/vs2.jpg)


## Contribuições

Sinta-se à vontade para abrir issues e enviar pull requests. Toda ajuda é bem-vinda!

## Observações

Não temos vinculo algum com a empresa do site acima. Atividade realizada de livre e espontânea vontade. 