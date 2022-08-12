import {test, expect} from "@playwright/test"

test.describe.parallel("", () => {

// goto the testing page
test.beforeEach( async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html") 
    await page.click("#feedback")
})

// reset feedback form

test("reset feedback form", async ({page}) => {
    await page.type("#name", "gorgonzolla")
    await page.type("#email","qwerty123")
    await page.type("#subject","subject")
    await page.type("#comment","qwerty")
    await page.click("input[name=clear]") 
    
    const nameInput = await page.locator('#name') 
    const emailInput = await page.locator('#email')
    const subjectinput = await page.locator('#subject')
    const commentInput = await page.locator('#comment')

    await expect(nameInput).toBeEmpty()
    await expect(emailInput).toBeEmpty()
    await expect(subjectinput).toBeEmpty()
    await expect(commentInput).toBeEmpty()

})

// submit feedback form

test("submit feedback", async ({ page }) => {
    await page.type("#name", "gorgonzolla")
    await page.type("#email","qwerty123")
    await page.type("#subject","subject")
    await page.type("#comment","qwerty")
    await page.click("input[type=submit]") 

    await page.waitForSelector("#feedback-title")
    //await expect(page).toHaveURL("http://zero.webappsecurity.com/sendFeedback.html")
})

})

