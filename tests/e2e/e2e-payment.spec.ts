import {test, expect} from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe("New paument", () => {
  let loginPage: LoginPage
  let homePage: HomePage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)

        await homePage.visit()
        await homePage.clickOnSignIn()
        await loginPage.login("username","password")
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