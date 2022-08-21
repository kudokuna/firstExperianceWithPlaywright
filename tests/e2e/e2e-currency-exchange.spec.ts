import {test, expect} from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import { Navbar } from "../../page-objects/components/Navbar"
import { CurrenctExchangePage } from "../../page-objects/CurrencyExchange"

test.describe("Currency exchange form testing", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let navBar: Navbar
    let currencyExchange: CurrenctExchangePage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navBar = new Navbar(page)
        currencyExchange = new CurrenctExchangePage(page) 

        await homePage.visit()
        await homePage.clickOnSignIn()
        await loginPage.login("username", "password")
        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html") // for successful redirecti
      })
    
    test("Currency exchange", async ({ page }) => {
        await navBar.clickOnTab("Pay Bills")
        
        await currencyExchange.selectCurrency()
        await expect(currencyExchange.currencyNowRate).toBeVisible()
        await expect(currencyExchange.currencyNowRate).toContainText("(CHF)")

        await currencyExchange.typeValueAndCalculateCosts()
        await expect(currencyExchange.conversionMessage).toBeVisible()
        await expect(currencyExchange.conversionMessage).toContainText(" 500.00 U.S.")

        await currencyExchange.purcahseMoney()
        await expect(currencyExchange.successMessage).toBeVisible()
        await expect(currencyExchange.successMessage).toContainText("Foreign currency cash was successfully purchased.")
        
    })
})