import { Locator, Page } from "@playwright/test"
import { AbstractPage } from "./AbstractPage"

export class LoginPage extends AbstractPage {

    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly menuBurgerBtn: Locator
    readonly logoutLink: Locator

    // Initialize selector using constructor

    constructor(page: Page) {
        super(page)
        this.usernameInput = page.locator("#user-name")
        this.passwordInput = page.locator("#password")
        this.submitButton = page.locator("#login-button")
        this.menuBurgerBtn = page.locator("#react-burger-menu-btn")
        this.logoutLink = page.locator("#logout_sidebar_link")
    }

    // Define login page methods

    async visit() {
        this.page.goto("https://www.saucedemo.com/")
    }
    
    
    async login(username: string, password: string) {
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.submitButton.click()
        await this.wait(1000)
    }

    async logout() {
        await this.login('standard_user','secret_sauce')
        await this.menuBurgerBtn.click()
        await this.logoutLink.click()     
    }

}   