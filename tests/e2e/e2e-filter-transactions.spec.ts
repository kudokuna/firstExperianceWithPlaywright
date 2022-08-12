import {test, expect} from '@playwright/test'

test.describe.only("Filters cases", () => {
    // login action
    test.beforeEach(async ({page}) => {
      await page.goto("http://zero.webappsecurity.com/index.html")
      await page.click("#signin_button")
      await page.type("#user_login","username")
      await page.type("#user_password","password")
      await page.click("input[name=submit]")
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