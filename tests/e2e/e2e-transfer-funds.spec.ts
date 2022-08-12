import {test, expect} from "@playwright/test"

test.describe("Transfer funds and make payments", () => {

    // login to the site
    test.beforeEach(async ({ page }) => {
       await page.pause()
       await page.goto("http://zero.webappsecurity.com/index.html")
       await page.click("#signin_button")
       await page.type("#user_login","username")
       await page.type("#user_password","password")
       await page.click("input[name=submit]")
       await page.goto("http://zero.webappsecurity.com/bank/account-summary.html")    

    })

    // Transfer funds case

    test("Transfer funds", async ({ page }) => {

        await page.click("#transfer_funds_tab")
        await page.selectOption("#tf_fromAccountId", '2')
        await page.selectOption("#tf_toAccountId", '3')
        await page.type("#tf_amount","25")
        await page.type("#tf_description","some description")
        await page.click("#btn_submit")
        
        const boardHeader = page.locator("h2.board-header")
        await expect(boardHeader).toContainText("Verify")

        await page.click("#btn_submit")

        const succTransferText = page.locator(".alert-success")
        await expect(succTransferText).toContainText("You successfully submitted your transaction.")

    })

})