import { Google } from "../support/page.controller"

describe('empty spec', () => {
  beforeEach(() => { 
    Google.GoogleHomepage.visitHomePage()
  })
  

  it.only("should be able to search - search bar", () => {
    Google.GoogleHomepage.searchBarInput.type('Lam Tim Yi')
    Google.GoogleHomepage.searchButton.click()
    Google.GoogleHomepage.searchResult.first().contains("Tim Yi Lam")
  })

  it("should be able to sign into a account", () => {
    cy.visit('https://www.google.com')
    cy.get(".gb_1").click()
    cy.get("#identifierId").type('timyilam@gmail.com')
   }) 
   //it doesn't let me do that because of certain policy
  

  it("should be able to search for an location in Google maps", () => {
    cy.visit('https://www.google.com')
    cy.get(".gb_Ue").click()
    cy.get('[data-id="_gd"]').click() }) //can't find the iframe id

    it("homepage should have a google logo", () => {
      cy.visit('https://www.google.com')
      cy.get('.lnXdpd').should('be.visible')})

    it("should have a visible mobile menu toggle", () => {
      cy.visit('https://www.google.com')
      cy.get('#mobile-menu-toggle').should('be.visible') })
})