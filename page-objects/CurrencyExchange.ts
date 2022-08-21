import {expect, Locator, Page} from "@playwright/test"

export class CurrenctExchangePage {
    readonly page: Page
    readonly navBarSecondaryItemSelector: Locator
    readonly currencySelector: Locator
    readonly currencyNowRate: Locator
    readonly amountInput: Locator
    readonly inDollarsRadioBtn: Locator
    readonly calculateCostsBtn: Locator
    readonly conversionMessage: Locator
    readonly successMessage: Locator
    readonly purchaseButton: Locator

    constructor(page: Page) {

        this.page = page
        this.navBarSecondaryItemSelector = page.locator("text=Purchase Foreign Currency")
        this.currencySelector = page.locator("#pc_currency")
        this.currencyNowRate = page.locator("#sp_sell_rate")
        this.amountInput = page.locator("#pc_amount")
        this.inDollarsRadioBtn = page.locator("#pc_inDollars_true")
        this.calculateCostsBtn = page.locator("#pc_calculate_costs")
        this.conversionMessage = page.locator("#pc_conversion_amount")
        this.purchaseButton = page.locator("#purchase_cash")
        this.successMessage = page.locator("#alert_content")

    }

    async selectCurrency() {

      await  this.navBarSecondaryItemSelector.click()
      await  this.currencySelector.selectOption("CHF")  
    }

    async typeValueAndCalculateCosts() {
        await  this.amountInput.type("500")
        await  this.inDollarsRadioBtn.click()
        await  this.calculateCostsBtn.click()
    }

    async purcahseMoney() {
        await this.purchaseButton.click()
    }

}