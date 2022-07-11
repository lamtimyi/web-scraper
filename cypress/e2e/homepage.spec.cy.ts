import { Google } from "../support/page.controller"

describe('empty spec', () => {
  beforeEach(() => { 
    Google.GoogleHomepage.visitHomePage()
  })
  

  it("should be able to search - search bar", () => {
    Google.GoogleHomepage.searchBarInput.type('Lam Tim Yi')
    Google.GoogleHomepage.searchButton.click()
    Google.GoogleHomepage.searchResult.first().contains("Tim Yi Lam")
  })

  it("homepage should have a google logo", () => {
    Google.GoogleHomepage.googleIcon.should('be.visible')
  })

  it("should be able to search for images", () => {
    Google.GoogleHomepage.imageButton.click()
    Google.GoogleHomepage.imageSearchBarInput.type('candy')
    Google.GoogleHomepage.imageSearchButton.click()
    Google.GoogleHomepage.imageSearchResult.first().should('contain', 'candy').and('contain','Images')
})

  it("should be able to switch the background from white to black",() =>{
    Google.GoogleHomepage.settingButton.click()
    Google.GoogleHomepage.darkThemeButton.click({force: true})
    Google.GoogleHomepage.darkThemeButton.should('contain','On')
})

  it.only("should be able to switch languages", () => {
    Google.GoogleHomepage.settingButton.click()
    Google.GoogleHomepage.searchSettingButton.click({force: true})
    Google.GoogleHomepage.languagesButton.click()
    Google.GoogleHomepage.deutschButoon.click()
    Google.GoogleHomepage.saveButton.click()
    Google.GoogleHomepage.settingButton.click()
    Google.GoogleHomepage.searchSettingButton.click({force: true})
    Google.GoogleHomepage.languagesButton.click()
    Google.GoogleHomepage.currentLanguage.should('contain','Deutsch')
  })
})