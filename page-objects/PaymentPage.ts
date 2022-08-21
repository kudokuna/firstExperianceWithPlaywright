import {Locator, Page} from "@playwright/test"

export class PaymentPage {
    readonly page: Page
    readonly payeeSelectBox: Locator
    readonly payeeDetailsButton: Locator
    readonly payeeDetail: Locator
    readonly accountSelectBox: Locator
    readonly amountInput: Locator
    readonly dateInput: Locator
    readonly descriptionInput: Locator
    readonly submitPaymentButton: Locator
    readonly successMessage: Locator

    constructor(page: Page) {

        this.page = page
        this.payeeSelectBox = page.locator("#sp_payee")
        this.payeeDetailsButton = page.locator("#sp_get_payee_details")
        this.payeeDetail = page.locator("#sp_payee_details")
        this.accountSelectBox = page.locator("#sp_account")
        this.amountInput = page.locator("#sp_amount")
        this.dateInput = page.locator("#sp_date")
        this.descriptionInput = page.locator("#sp_description")
        this.submitPaymentButton = page.locator("#pay_saved_payees")
        this.successMessage = page.locator("#alert_content")
    }

    async createPayment() {
        await this.payeeSelectBox.selectOption("apple")
        await this.payeeDetailsButton.click()
        await this.accountSelectBox.selectOption("6")
        await this.amountInput.type("5000")
        await this.dateInput.type("2022-08-03")
        await this.descriptionInput.type("some payment description")
        await this.submitPaymentButton.click()
    }

}