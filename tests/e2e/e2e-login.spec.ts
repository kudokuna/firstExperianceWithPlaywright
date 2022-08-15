import { test, expect } from "@playwright/test"
import { LoginPage } from "../../page-objects/LoginPage"
import { HomePage } from "../../page-objects/HomePage"

test.describe.parallel("Login / Logut flow", () => {
    let loginPage: LoginPage
    let homePage: HomePage

    // Before Hook
        test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        
        await homePage.visit()
    })

    // Negative
    test("Negative Scenario for Login", async ({ page })   => {
        
        await homePage.clickOnSignIn()
        await loginPage.login("invalid username", "invalid password")
        await loginPage.assertErrorMessage()
    })

    // Positive + logout
     test("Positive Scenario for Login + Logout", async ({ page }) => {
        
        await homePage.clickOnSignIn()
        await loginPage.login("username", "password")
        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html")

        const accountSummary = await page.locator("#account_summary_tab")
        await expect(accountSummary).toBeVisible

        await page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html")
    })
})

