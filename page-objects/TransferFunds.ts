import {expect, Locator, Page} from "@playwright/test"

export class TransferFundsPage {
    readonly page: Page
    readonly fromAccountSelector: Locator
    readonly toAccountSelector: Locator
    readonly amountInputFeield: Locator
    readonly descriptionInputField: Locator
    readonly continueBtn: Locator
    readonly boardheader: Locator
    readonly submitBtn: Locator
    readonly succTransferText: Locator


    constructor(page: Page) {

        this.page = page
        this.fromAccountSelector = page.locator("#tf_fromAccountId")
        this.toAccountSelector = page.locator("#tf_toAccountId")
        this.amountInputFeield = page.locator("#tf_amount")
        this.descriptionInputField = page.locator("#tf_description")
        this.continueBtn = page.locator("#btn_submit")
        this.boardheader = page.locator("h2.board-header")
        this.submitBtn = page.locator("#btn_submit") 
        this.succTransferText = page.locator(".alert-success")
    }

    async tofillTheForm(from, to, amountValue, description) {
        await this.fromAccountSelector.selectOption(from)
        await this.toAccountSelector.selectOption(to)
        await this.amountInputFeield.type(amountValue)
        await this.descriptionInputField.type(description)
        await this.continueBtn.click()      
    }

    async toConfirmTransfer() {
        await this.submitBtn.click()
    }


}