import {test, expect} from "@playwright/test"

test.describe.only("Currency exchange form testing", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#signin_button")
        await page.type("#user_login","username")
        await page.type("#user_password","password")
        await page.click("input[name=submit]")
        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html") // for successful redirect
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