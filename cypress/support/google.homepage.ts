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

public get googleIcon(): Cypress.Chainable {
    return cy.get('.lnXdpd')
}

public get imageButton(): Cypress.Chainable {
    return cy.get(':nth-child(2) > .gb_d')
}

public get imageSearchBarInput(): Cypress.Chainable {
    return cy.get('.SDkEP')
}

public get imageSearchButton(): Cypress.Chainable {
    return cy.get('.zgAlFc > .z1asCe > svg')
}

public get imageSearchResult(): Cypress.Chainable {
    return cy.get('.islrc')
}

public get settingButton(): Cypress.Chainable {
    return cy.get('.rIbAWc .ayzqOc')
}

public get darkThemeButton(): Cypress.Chainable {
    return cy.get('.tFYjZe > :nth-child(1)')
}

public get searchSettingButton(): Cypress.Chainable {
    return cy.get(':nth-child(2) > .znKVS > a')
}

public get languagesButton(): Cypress.Chainable {
    return cy.get('#langSecLink')
}

public get deutschButoon(): Cypress.Chainable {
    return cy.get('#langtde > .jfk-radiobutton > .jfk-radiobutton-radio')
}

public get saveButton(): Cypress.Chainable {
    return cy.get('.jfk-button-action')
}

public get currentLanguage(): Cypress.Chainable {
    return cy.get('#lrtext')
}
}