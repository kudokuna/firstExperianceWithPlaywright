import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { FeedbackPage } from "../../page-objects/FeedbackPage"

test.describe("Feedback check", () => {
    let homePage: HomePage
    let feedbackPage: FeedbackPage

test.beforeEach( async ({page}) => {
    homePage = new HomePage(page)
    feedbackPage = new FeedbackPage(page)
    await homePage.visit()
    await homePage.clickOnFeedbackLink()
    await feedbackPage.fillForm("gorgonzolla","qwerty123","subject","qwerty")
})

// reset feedback form

test("reset feedback form", async ({page}) => {
     
    await feedbackPage.clearForm()
    await feedbackPage.assertClear()

})

// submit feedback form

test("submit feedback", async ({ page }) => {

   await feedbackPage.submitForm()
   await feedbackPage.formIsSend()

})

})

