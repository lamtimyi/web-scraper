class HomePage {
    constructor() {
        this.searchButtonSelector = ".hfLkTW"
        this.url = "www.target.com"
        this.searchBarSelector = ".gbZEQs"
        this.addToCartButton = ':nth-child(1) > [data-test="@web/site-top-of-funnel/ProductCardWrapper"] > [data-test="@web/ProductCard/ProductCardVariantDefault"] > .styles__AddToCartButtonWrapper-sc-1iglypx-2 > .styles__StyledCartAndTryOnButtons-sc-bcz5ql-2 > div > [data-test="addToCartButton"]'

    }
    
    visitHomePage (){
        cy.visit(this.url)
    }
    search (item){
        cy.get(this.searchBarSelector).type(item)
        cy.get(this.searchButtonSelector).click()
    }
    addToCartButton (){
        cy.get(this.addToCartButton)

    }
}

module.exports = {
    HomePage
}