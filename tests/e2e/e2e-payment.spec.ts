import { test, expect } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import { Navbar } from "../../page-objects/components/Navbar"
import { PaymentPage } from "../../page-objects/PaymentPage"

test.describe("New paument", () => {
  let loginPage: LoginPage
  let homePage: HomePage
  let navBar: Navbar
  let paymentPage: PaymentPage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        navBar = new Navbar(page)
        paymentPage = new PaymentPage(page)

        await homePage.visit()
        await homePage.clickOnSignIn()
        await loginPage.login("username","password")
        await page.goto("http://zero.webappsecurity.com/bank/account-summary.html") // for successful redirect
      })
    
    test("Should sent new payment", async ({ page }) => {
        await navBar.clickOnTab("Pay Bills")
        await paymentPage.createPayment()

        const alerMessage = page.locator("#alert_content > span")
        await expect(alerMessage).toBeVisible
        await expect(alerMessage).toContainText("The payment was successfully submitted.")

      })
})