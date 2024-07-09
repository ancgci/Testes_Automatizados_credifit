/// <reference types="cypress" />
describe('Validar Menu Principal', () => {
  beforeEach(() => {
    cy.visit('https://www.credifit.com.br/')
  })
    it("Validar menu página inicial", () => {
        cy.get('#menu-menu > .current-menu-item > a').should('be.visible').click()
        cy.get('.small').should("have.text", "Crédito do tamanho dos seus sonhos!")
    })
    
    it("Validar menu página A Credifit", () => {
      cy.get('#menu-menu > :nth-child(2) > a').should('be.visible').click()
      cy.get('.py-2 > h2').should("have.text",  '\n            Até a forma de conseguir crédito mudou!\n             Prazer, somos a Credifit \n          ')
  })
    
    it("Validar menu página Soluções", () => {
      cy.get('.dropdown-toggle').should('be.visible').click()
      cy.get(':nth-child(1) > .dropdown-item').should('be.visible').should("have.text",  '\n                        Crédito consignado para funcionários\n                      ')
  })
    it("Validar menu página Duvidas", () => {
      cy.get('#menu-menu > .current-menu-item > a').should('be.visible').click()
      cy.get('.col-lg-6 > h2').should("have.text", '\n            Acreditamos no crescimento econômico inclusivo e sustentável.\n            Venha ser parte dessa mudança\n          ')
  })

    it("Validar menu página Portal da Transparência", () => {
      cy.get('#menu-menu > :nth-child(5) > a').should('be.visible').click()
      cy.get('.col-lg-6 > :nth-child(3)').should("have.text", "Qualquer dúvida, pode falar conosco.")
  })

})