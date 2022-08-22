import { Locator, Page } from "@playwright/test"


export class InventoryCard {
    readonly page: Page
    readonly itemTitle: Locator



    // Initialize selector using constructor

    constructor(page: Page) {
        this.page = page
        this.itemTitle = page.locator(".inventory_details_desc_container > .inventory_details_name")
    }

    // Define page methods

    async visit() {
        this.page.goto("https://www.saucedemo.com/inventory-item.html?id=4")
    }
    
}   