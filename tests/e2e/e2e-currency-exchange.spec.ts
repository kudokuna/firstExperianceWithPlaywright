import {test, expect} from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe("Currency exchange form testing", () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({page}) => {
        let homePage = new HomePage(page)
        let loginPage = new LoginPage(page)

        await homePage.visit()
        await homePage.clickOnSignIn()
        await loginPage.login("username", "password")
        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html") // for successful redirecti
      })
    
    test("Currency exchange", async ({ page }) => {
        await page.click("#pay_bills_tab")
        await page.click("text=Purchase Foreign Currency")
        await page.selectOption("#pc_currency","CHF")

        const currencyRate = page.locator(".controls > p")
        await expect(currencyRate).toBeVisible()
        await expect(currencyRate).toContainText("Today's Sell Rate:")

        await page.type("#pc_amount","500")
        await page.click("#pc_inDollars_true")
        await page.click("#pc_calculate_costs")

        const conversionMessage = page.locator("#pc_conversion_amount")
        await expect(conversionMessage).toBeVisible()
        await expect(conversionMessage).toContainText(" 500.00 U.S.")

        await page.click("#purchase_cash")

        const successMessage = page.locator("#alert_content")
        await expect(successMessage).toBeVisible()
        await expect(successMessage).toContainText("Foreign currency cash was successfully purchased.")
        
    })
})