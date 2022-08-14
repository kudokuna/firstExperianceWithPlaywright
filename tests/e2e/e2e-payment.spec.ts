import {test, expect} from "@playwright/test"

test.describe("New paument", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#signin_button")
        await page.type("#user_login","username")
        await page.type("#user_password","password")
        await page.click("input[name=submit]")
        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html") // for successful redirect
      })
    
    test("Should sent new payment", async ({ page }) => {

        await page.click("#pay_bills_tab")
        await page.selectOption("#sp_payee",'apple')
        await page.click("#sp_get_payee_details")
        await page.waitForSelector("#sp_payee_details")
        await page.selectOption("#sp_account", '6')
        await page.type("#sp_amount", "5000")
        await page.type("#sp_date","2022-08-03")
        await page.type("#sp_description","some payment description")
        await page.click("#pay_saved_payees")

        const alerMessage = page.locator("#alert_content > span")
        await expect(alerMessage).toBeVisible
        await expect(alerMessage).toContainText("The payment was successfully submitted.")

      })
})