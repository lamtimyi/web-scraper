const envFile = require("./env.json")
const { HomePage } = require("../support/homepage")

describe('empty spec', () => {
    let username, password, homePage
    beforeEach(() => { 
        homePage = new HomePage
        username = envFile.username
        password = envFile.password
        homePage.visitHomePage()
    })

    it.only("should be able to add things to cart", () => {
        homePage.search("body wash")
        cy.get(':nth-child(1) > [data-test="@web/site-top-of-funnel/ProductCardWrapper"] > [data-test="@web/ProductCard/ProductCardVariantDefault"] > .styles__AddToCartButtonWrapper-sc-1iglypx-2 > .styles__StyledCartAndTryOnButtons-sc-bcz5ql-2 > div > [data-test="addToCartButton"]').click()
        cy.get(".hLNTEk .VBXLQ").click()
        cy.get(".iSSuMc")
        cy.get('.CartSummaryBar__CartSummarySpan-sc-nyamvu-1').should('contain','1 item')})

    it("should be able to find the closest store", () => {
        cy.get('[data-test="@web/GlobalHeader/UtilityHeader/FindStores"]').click()
        cy.get('#web-store-id-msg-btn').click()
        cy.get('[data-test="@web/StoreLocationSearch/input"]').type('84005')
        cy.get('[data-test="@web/StoreLocationSearch/button"]').click()
        cy.get('[data-test="@web/StoreSearchBlockContainer/StoresList-1814"]').should('contain','My store') //Is it a good verification here?
    })

    it("should be able to get $5 giftcard when spending $20 on sunscreen", () => {
        cy.get('.styles__ResizeText-sc-1jzjzj1-2 > [style="font-size: 90%"] > [style="line-height:1.1em;display:block;"]').click()
        cy.get(':nth-child(6) > [data-test="@web/site-top-of-funnel/ProductCardWrapper"] > [data-test="@web/ProductCard/ProductCardVariantDefault"] > .styles__AddToCartButtonWrapper-sc-1iglypx-2 > .styles__StyledCartAndTryOnButtons-sc-bcz5ql-2 > div > [data-test="addToCartButton"]').click()
        cy.get(".hLNTEk .hcoLgH").click()
        cy.get(':nth-child(5) > [data-test="@web/site-top-of-funnel/ProductCardWrapper"] > [data-test="@web/ProductCard/ProductCardVariantDefault"] > .styles__AddToCartButtonWrapper-sc-1iglypx-2 > .styles__StyledCartAndTryOnButtons-sc-bcz5ql-2 > div > [data-test="addToCartButton"]').click()
        cy.get(".hLNTEk .VBXLQ").click()
        cy.get('[data-test="cartItem"]').should('contain','GiftCard $5') //should I also verify how much I spent?
    })

    it("should be able to create an account", () => {
        cy.get('.h-margin-r-x3').click()
        cy.get('[data-test="accountNav-createAccount"] > .styles__ListItemText-sc-5oc0g9-1').click()
        cy.get('#username').type(username) //you can't use the same email address to run this test, is there a different way to do it?
        cy.get('#firstname').type('Tim')
        cy.get('#lastname').type('Bo')
        cy.get('#password').type(password)
        cy.get('#createAccount').click()
        cy.get('#circle-skip').click()
        cy.get('[data-test="@web/AccountLink"]').should('contain','Hi, Tim') })

    it("should be able to sign in", () => {
        cy.get('.styles__AccountLinkText-sc-17dxxwu-18').click()
        cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-5oc0g9-1').click()
        cy.get('#username').type(username) 
        cy.get('#password').type(password)
        cy.get('#login').click()
        cy.get('[data-test="@web/AccountLink"]').should('contain','Hi, Tim')})

    it("should be able to search - search bar", () => {
        cy.get('.gbZEQs').type('roma tomatoes')
        cy.get('.hfLkTW').click()
        cy.get('.styles__ProductListGridFadedLoading-sc-u8zdb1-0').first().contains('roma tomatoes')
    })


})