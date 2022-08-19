import {expect, Locator, Page } from "@playwright/test"

export class FeedbackPage {
    readonly page: Page
    readonly nameInput: Locator
    readonly emailinput: Locator
    readonly subjectInput: Locator
    readonly commentInput: Locator
    readonly clearButton: Locator
    readonly sendButton: Locator
    readonly feedbackTitle: Locator

    constructor(page: Page) {
        this.page = page
        this.nameInput = page.locator("#name")
        this.emailinput = page.locator("#email")
        this.subjectInput = page.locator("#subject")
        this.commentInput = page.locator("#comment")
        this.clearButton = page.locator("input[name=clear]")
        this.sendButton = page.locator("input[type=submit]")
        this.feedbackTitle = page.locator("#feedback-title")
    }

    async fillForm(name: string, email: string, subject: string, comment: string) {
        await this.nameInput.type(name)
        await this.emailinput.type(email)
        await this.subjectInput.type(subject)
        await this.commentInput.type(comment)
    }

    async clearForm() {
        await this.clearButton.click()
    }

    async submitForm() {
        await this.sendButton.click()
    }

    async assertClear() {
        await expect(this.nameInput).toBeEmpty()
        await expect(this.emailinput).toBeEmpty()
        await expect(this.subjectInput).toBeEmpty()
        await expect(this.commentInput).toBeEmpty()
    }

    async formIsSend() {
        await expect(this.feedbackTitle).toBeVisible()
    }
}

