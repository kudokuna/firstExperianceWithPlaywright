import { test, expect } from "@playwright/test"
import { LoginPage } from "../../sause-page-objects/LoginPage"

test.describe("Login flow", () => {
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)

        await loginPage.visit()
    })

    test("Invalid credentials", async ({ page }) => {
        await loginPage.login("invalid","invalid")
        
        const errorMessage = page.locator(".error-message-container > h3")
        await expect(errorMessage).toContainText("Epic sadface: Username and password do not match any user in this service")
    })

    test("Standart user success login", async ({ page }) => {
        await loginPage.login("standard_user","secret_sauce")

        const productsTitle = page.locator(".title")
        await expect(productsTitle).toContainText("Products") // TODO: import it from Inventory PageObject
    })

    test("Locked user error login", async ({ page }) => {
        await loginPage.login("locked_out_user","secret_sauce")

        const errorMessage = page.locator(".error-message-container > h3")
        await expect(errorMessage).toContainText("Epic sadface: Sorry, this user has been locked out.")
    })

    test("Problem user login", async ({ page }) => {
        await loginPage.login("problem_user","secret_sauce")

        const problemItemimage = page.locator("#item_4_img_link > img")
        expect(problemItemimage).toHaveAttribute("src","/static/media/sl-404.168b1cce.jpg")
    })
})


