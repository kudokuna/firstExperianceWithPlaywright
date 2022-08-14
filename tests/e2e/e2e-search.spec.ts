import {test, expect} from "@playwright/test"
import {HomePage} from "../../page-objects/HomePage"

test.describe.parallel.only("Search Result", () => {
    let homePage: HomePage
    
    test.beforeEach(async ({page}) => { 
    homePage = new HomePage(page) 
    await homePage.visit()
    })

test("Should find some search results", async ({ page }) =>{
    await homePage.searchForPhrase("bank")
    const numberOfLinks = page.locator('li > a')
    await expect(numberOfLinks).toHaveCount(2)

})

test("No results were found", async ({ page }) => {
    await homePage.searchForPhrase("adadaadadaadadadd")
    const pageText = page.locator(".top_offset") 
    await expect(pageText).toContainText("No results were found for the query")
})

test("Validate links content", async ({ page }) => {
    await homePage.searchForPhrase("money")
    const linkText = page.locator("ul > li > a")
    await expect(linkText).toContainText("Zero - My Money Map")
})

})