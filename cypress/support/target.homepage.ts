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

}
    
    // constructor() {
    //     this.searchButtonSelector = ".hfLkTW"
    //     this.searchBarSelector = ".gbZEQs"
    //     this.addToCartButton = ':nth-child(1) > [data-test="@web/site-top-of-funnel/ProductCardWrapper"] > [data-test="@web/ProductCard/ProductCardVariantDefault"] > .styles__AddToCartButtonWrapper-sc-1iglypx-2 > .styles__StyledCartAndTryOnButtons-sc-bcz5ql-2 > div > [data-test="addToCartButton"]'

    // }
    
    // search (item){
    //     cy.get(this.searchBarSelector).type(item)
    //     cy.get(this.searchButtonSelector).click()
    // }
    // addToCartButton (){
    //     cy.get(this.addToCartButton)

    // }


// module.exports = {
//     HomePage
// }