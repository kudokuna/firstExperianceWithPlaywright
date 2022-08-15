import {test, expect} from '@playwright/test'
import {HomePage} from "../../page-objects/HomePage"
import {LoginPage} from "../../page-objects/LoginPage" 

test.describe("Filters cases", () => {
  let homePage: HomePage
  let loginPage: LoginPage

    test.beforeEach(async ({page}) => {
      homePage = new HomePage(page)
      loginPage = new LoginPage(page)

      homePage.visit
      homePage.clickOnSignIn
      loginPage.login("username", "password")
      await page.goto("http://zero.webappsecurity.com/bank/account-summary.html") // for successful redirect
    })

    test ("Check recent activity", async ({page}) => {
        await page.click("#account_activity_tab")
        await page.selectOption("#aa_accountId", "2")

        const checkFilterResult = page.locator("#all_transactions_for_account tbody tr")
        await expect(checkFilterResult).toHaveCount(3)

        await page.selectOption("#aa_accountId", "4")
        const loanAccount = page.locator("#all_transactions_for_account tbody tr")
        await expect(checkFilterResult).toHaveCount(2)

        await page.selectOption("#aa_accountId", "6")
        const brokerageAccount = page.locator(".well")
        await expect(brokerageAccount).toBeVisible()
        //await expect(brokerageAccount).toContainText("No results.") -- second implementation        

    })
})