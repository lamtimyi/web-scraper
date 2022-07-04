class HomePage {
    constructor() {
        this.searchButtonSelector = ".hfLkTW"
        this.url = "www.target.com"
        this.searchBarSelector = ".gbZEQs"

    }
    
    visitHomePage (){
        cy.visit(this.url)
    }
    search (item){
        cy.get(this.searchBarSelector).type(item)
        cy.get(this.searchButtonSelector).click()
    }
}

module.exports = {
    HomePage
}