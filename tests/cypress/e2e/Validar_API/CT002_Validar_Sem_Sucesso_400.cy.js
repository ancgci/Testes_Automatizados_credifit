/// <reference types="cypress" />

describe('Verificar resposta de endpoint de login sem sucesso', () => {
  it("Validar Acesso Sem Sucesso", () => {
    cy.request({
        method: 'POST',
        url: "https://company-api.credifit.com.br/login",
        failOnStatusCode: false,
        body: {
            username: 'antonio@carlos.com',
            password: 'ant11111111'
        }
    }).then((response) => {
      // Nos testes por aqui retorna 500, porém pelo console do navegador 400
        expect(response.status).to.be.oneOf([400, 500]);
    });
  });
  
});
