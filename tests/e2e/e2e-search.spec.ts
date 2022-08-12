import {test, expect} from "@playwright/test"

test.describe.parallel("Search Result", () => {

    // go to url
    test.beforeEach(async ({page}) => { 
    await page.goto("http://zero.webappsecurity.com/index.html")
    })

test("Should find some search results", async ({ page }) =>{
    
    await page.type("#searchTerm", "bank")
    await page.keyboard.press("Enter")

    const numberOfLinks = page.locator('li > a')
    await expect(numberOfLinks).toHaveCount(2)

})

test("No results were found", async ({ page }) => {
    
    await page.type("#searchTerm", "adadaadadaadadadd")
    await page.keyboard.press("Enter")
    const pageText = await page.locator(".top_offset") 
    await expect(pageText).toContainText("No results were found for the query")
})

test("Validate links content", async ({ page }) => {
    await page.type("#searchTerm", "money")
    await page.keyboard.press("Enter")
    const linkText = await page.locator("ul > li > a")
    await expect(linkText).toContainText("Zero - My Money Map")
})

})