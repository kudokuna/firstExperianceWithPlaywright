import { test, expect } from "@playwright/test"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe.parallel.only("Login / Logut flow", () => {
    let loginPage: LoginPage

    // Before Hook
        test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        
        await loginPage.visit()
    })

    // Negative
    test("Negative Scenario for Login", async ({ page })   => {
        
        await page.click("#signin_button")
        await loginPage.login("invalid username", "invalid password")
        await loginPage.assertErrorMessage()
    })

    // Positive + logout
     test("Positive Scenario for Login + Logout", async ({ page }) => {
        
        await page.click("#signin_button")
        await loginPage.login("username", "password")

        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html")

        const accountSummary = await page.locator("#account_summary_tab")
        await expect(accountSummary).toBeVisible

        await page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html")
    })
})

