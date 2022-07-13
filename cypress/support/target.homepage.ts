export class TargetHomePage { 
    public visitHomePage(): Cypress.Chainable {
        return cy.visit("www.target.com");
    }

    public get searchButton(): Cypress.Chainable {
        return cy.get(".hfLkTW");
    }

    public get searchBarInput(): Cypress.Chainable {
        return cy.get("#search");
    }

    public get addToCartButton(): Cypress.Chainable {
        return cy.get(".styles__StyledCartAndTryOnButtons-sc-bcz5ql-2").eq(1);
    }

    public get viewCartAndCheckOutButton(): Cypress.Chainable {
        return cy.get(".hLNTEk .VBXLQ")
    }
    
    public get cartSummary(): Cypress.Chainable {
       return cy.get(".iSSuMc") 
    }

    public get findStoresButton(): Cypress.Chainable {
        return cy.get('[data-test="@web/GlobalHeader/UtilityHeader/FindStores"]')
    }

    public get enterZipButton(): Cypress.Chainable {
        return cy.get('#web-store-id-msg-btn')
    }

    public get enterZipBar(): Cypress.Chainable {
        return cy.get('[data-test="@web/StoreLocationSearch/input"]')
    }

    public get zipSearchButton(): Cypress.Chainable {
        return cy.get('[data-test="@web/StoreLocationSearch/button"]')
    }

    public get myStoresResult(): Cypress.Chainable {
        return cy.get('[data-test="@web/StoreSearchBlockContainer/StoresList-1814"]')
    }

    public get signInIconButton(): Cypress.Chainable {
        return cy.get('.styles__AccountLinkText-sc-17dxxwu-18')
    }

    public get signInButton(): Cypress.Chainable {
        return cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-5oc0g9-1')
    }

    public get userName(): Cypress.Chainable {
        return cy.get('#username')
    }

    public get passWord(): Cypress.Chainable {
        return cy.get('#password')
    }

    public get logInButton(): Cypress.Chainable {
        return cy.get('#login')
    }

    public get profileIcon(): Cypress.Chainable {
        return cy.get('[data-test="@web/AccountLink"]')
    }

    public get searchResult(): Cypress.Chainable {
        return cy.get('.styles__ProductListGridFadedLoading-sc-u8zdb1-0')
    }

    public get createAccountButton(): Cypress.Chainable {
        return cy.get('[data-test="accountNav-createAccount"] > .styles__ListItemText-sc-5oc0g9-1')
    }

    public get firstName(): Cypress.Chainable {
        return cy.get('#firstname')
    }

    public get lastName(): Cypress.Chainable {
        return cy.get('#lastname')
    }

    public get createAccountSumitButton(): Cypress.Chainable {
        return cy.get('#createAccount')
    }
}