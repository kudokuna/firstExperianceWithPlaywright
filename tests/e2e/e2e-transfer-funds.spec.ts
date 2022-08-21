import {test, expect} from "@playwright/test"
import {HomePage} from "../../page-objects/HomePage"
import {LoginPage} from "../../page-objects/LoginPage" 
import { Navbar } from "../../page-objects/components/Navbar"
import { TransferFundsPage } from "../../page-objects/TransferFunds"

test.describe.only("Transfer funds and make payments", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let navBar: Navbar
    let transferFunds: TransferFundsPage

    // login to the site
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navBar = new Navbar(page)
        transferFunds = new TransferFundsPage(page)
        await homePage.visit()
        await homePage.clickOnSignIn()
        await loginPage.login("username","password")
        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html") // for success redirect
    })

    // Transfer funds case

    test("Transfer funds", async ({ page }) => {
        navBar.clickOnTab("Transfer Funds")

        // from account = value, to account = value, amount = value, description = value 
        await transferFunds.tofillTheForm("2","3","500","Some description")
        await expect(transferFunds.boardheader).toContainText("Verify")

        await transferFunds.toConfirmTransfer()
        await expect(transferFunds.succTransferText).toContainText("You successfully submitted your transaction.")
    })

})