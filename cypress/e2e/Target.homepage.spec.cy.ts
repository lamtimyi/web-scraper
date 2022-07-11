import { Target } from "../support/page.controller"

const envFile = require("./env.json")

describe('empty spec', () => {
    let username, password
    beforeEach(() => { 
        username = envFile.username
        password = envFile.password
        Target.TargetHomePage.visitHomePage()
    })

    it("should be able to add things to cart", () => {
        Target.TargetHomePage.searchBarInput.type("body wash")
        Target.TargetHomePage.searchButton.click()
        cy.wait(5000)
        Target.TargetHomePage.addToCartButton.click()
        Target.TargetHomePage.viewCartAndCheckOutButton.click()
        Target.TargetHomePage.cartSummary.should('contain','1 item')
    })

    it("should be able to find the closest store", () => {
        Target.TargetHomePage.findStoresButton.click()
        Target.TargetHomePage.enterZipButton.click()
        Target.TargetHomePage.enterZipBar.type('84005')
        Target.TargetHomePage.zipSearchButton.click()
        Target.TargetHomePage.myStoresResult.should('contain','My store')
    })

    it.only("should be able to create an account", () => {
        Target.TargetHomePage.signInIconButton.click()
        Target.TargetHomePage.createAccountButton.click()
        Target.TargetHomePage.userName.type(username)
        Target.TargetHomePage.firstName.type('Tim')
        Target.TargetHomePage.lastName.type('Bo')
        Target.TargetHomePage.passWord.type(password)
        Target.TargetHomePage.createAccountSumitButton.click()
        Target.TargetHomePage.profileIcon.should('contain','Hi, Tim') 
    })

    it("should be able to sign in", () => {
        Target.TargetHomePage.signInIconButton.click()
        Target.TargetHomePage.signInButton.click()
        Target.TargetHomePage.userName.type(username)
        Target.TargetHomePage.passWord.type(password)
        Target.TargetHomePage.logInButton.click()
        Target.TargetHomePage.profileIcon.should('contain','Hi, Tim')
    })

    it("should be able to search - search bar", () => {
        Target.TargetHomePage.searchBarInput.type('roma tomatoes')
        Target.TargetHomePage.searchButton.click()
        Target.TargetHomePage.searchResult.first().should('contain', 'roma tomatoes')
    })


})