import { Locator, Page } from "@playwright/test"

export class LoginPage {
    // Define Selectors

    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly subMess: Locator

    // Initialize selector using constructor

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator("#user_login")
        this.passwordInput = page.locator("#user_password")
        this.submitButton = page.locator(".btn-primary")
        this.subMess = page.locator(".btn-success")

    }

    // Define login page methods



    async login(username: string, password: string) {
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.submitButton.click()
    }

}   