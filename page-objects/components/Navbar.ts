import {Locator, Page} from "@playwright/test"

export class Navbar {

    readonly page: Page
    readonly accountSummary: Locator
    readonly accountActivity: Locator
    readonly transferFunds: Locator
    readonly payBills: Locator
    readonly myMoneyMap: Locator
    readonly onlineStatements: Locator

    constructor (page: Page) {
        this.page = page
        this.accountSummary = page.locator("#account_summary_tab")
        this.accountActivity = page.locator("#account_activity_tab")
        this.transferFunds = page.locator("#transfer_funds_tab")
        this.payBills = page.locator("#pay_bills_tab")
        this.myMoneyMap = page.locator("#money_map_tab")
        this.onlineStatements = page.locator("#online_statements_tab")
    }

    async clickOnTab(tabName) {
        switch(tabName) {
            case "Account Summary":
                this.accountSummary.click()
                break
            case "Account Activity":
                this.accountActivity.click()
                break
            case "Transfer Funds":
                this.transferFunds.click()
                break
            case "Pay Bills":
                this.payBills.click()
                break
            case "My Money Map":
                this.myMoneyMap.click()
                break
            case "Online Statements":
                this.onlineStatements.click()
                break
            default: 
                throw new Error("This tab doesnt exist...")
        }
    }

}



