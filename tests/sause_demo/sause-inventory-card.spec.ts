import { test, expect } from "@playwright/test"
import { LoginPage } from "../../sause-page-objects/LoginPage"
import { InventoryPage } from "../../sause-page-objects/InventoryPage"
import { InventoryCard } from "../../sause-page-objects/InventoryCard"

test.describe("Inventory card test cases", () => {
    let loginPage: LoginPage
    let inventoryPage: InventoryPage
    let inventoryCard: InventoryCard

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)
        inventoryCard = new InventoryCard(page)
        await loginPage.visit()
        await loginPage.login("standard_user","secret_sauce")
        await inventoryCard.visit()

    })

    test("Check Inventory card displaying", async ({ page }) => {
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=4")
    })

    test("Check cards title", async ({ page }) => {
        await expect(inventoryCard.itemTitle).toHaveText("Sauce Labs Backpack")
    })

})