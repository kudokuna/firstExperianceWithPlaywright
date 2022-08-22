import { Locator, Page } from "@playwright/test"

export class InventoryPage {
    readonly page: Page
    readonly menuBurgerBtn: Locator
    readonly sliderMenu: Locator
    readonly logoutBurgerLink: Locator
    readonly allItemsBurgerLink: Locator
    readonly aboutBurgerLink: Locator
    readonly resetStateBurgerLink: Locator
    readonly crossBurgerBtn: Locator
    readonly inventaryList: Locator
    readonly itemElement: Locator


    // Initialize selector using constructor

    constructor(page: Page) {
        this.page = page
        this.menuBurgerBtn = page.locator("#react-burger-menu-btn")
        this.sliderMenu = page.locator(".bm-menu")
        this.logoutBurgerLink = page.locator("#logout_sidebar_link")
        this.allItemsBurgerLink = page.locator("#inventory_sidebar_link")
        this.aboutBurgerLink = page.locator("#about_sidebar_link")
        this.resetStateBurgerLink = page.locator("#reset_sidebar_link")
        this.crossBurgerBtn = page.locator("#react-burger-cross-btn")
        this.inventaryList = page.locator(".inventory_list > div")
        this.itemElement = page.locator("#item_4_img_link")
    }

    // Define page methods

    async tapToBurger() {
       await this.menuBurgerBtn.click()
    }
    
    async closeTheSlider() {
        await this.crossBurgerBtn.click()
    }

    async openProductDetails() {
        await this.itemElement.click()
    }
}   