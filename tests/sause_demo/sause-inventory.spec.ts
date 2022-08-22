import { test, expect } from "@playwright/test"
import { LoginPage } from "../../sause-page-objects/LoginPage"
import { InventoryPage } from "../../sause-page-objects/InventoryPage"

test.describe.only("Inventory page test cases", () => {
    let loginPage: LoginPage
    let inventoryPage: InventoryPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)

        await loginPage.visit()
        await loginPage.login("standard_user","secret_sauce")
    })

    test("Open slider via burger button and validate elements", async ({ page }) => {
        await inventoryPage.tapToBurger()
        expect(inventoryPage.sliderMenu).toBeVisible()
        expect(inventoryPage.allItemsBurgerLink).toBeVisible()
        expect(inventoryPage.aboutBurgerLink).toBeVisible()
        expect(inventoryPage.logoutBurgerLink).toBeVisible()
        expect(inventoryPage.resetStateBurgerLink).toBeVisible()
    })

    test("Close slider and validate elements absence", async ({ page }) => {
        await inventoryPage.tapToBurger() 
        await inventoryPage.closeTheSlider()
        await expect(inventoryPage.sliderMenu).toBeHidden()
    })
})