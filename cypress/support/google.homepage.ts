export class GoogleHomePage {
    public visitHomePage(): Cypress.Chainable {
        return cy.visit("www.google.com");
}

public get searchBarInput(): Cypress.Chainable {
    return cy.get(".gLFyf");
}

public get searchButton(): Cypress.Chainable {
    return cy.get('.CqAVzb > center > .gNO89b');
}

public get searchResult(): Cypress.Chainable {
    return cy.get(".yuRUbf a .LC20lb")
}
}