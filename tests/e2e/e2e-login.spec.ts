import { test, expect } from "@playwright/test"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe.parallel.only("Login / Logut flow", () => {
    let loginPage: LoginPage

    // Before Hook
        test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        
        await loginPage.visit()
        //await page.goto("http://zero.webappsecurity.com/index.html")
    })

    // Negative

    test("Negative Scenario for Login", async ({ page })   => {
        
        await page.click("#signin_button")
        await page.type("#user_login","invalid username")
        await page.type("#user_password","invalid password")
        await page.click(".btn-primary")

        const errMessage = await page.locator(".alert-error")
        await expect(errMessage).toContainText("Login and/or password are wrong.")
    })

    // Positive + logout

    test("Positive Scenario for Login + Logout", async ({ page }) => {
        
        await page.click("#signin_button")
        await page.type("#user_login","username")
        await page.type("#user_password","password")
        await page.click(".btn-primary")

        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html")

        const accountSummary = await page.locator("#account_summary_tab")
        await expect(accountSummary).toBeVisible

        await page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html")
    })
})

