import { test, expect } from "@playwright/test"

test.describe ("Visual Regression testing Example", () => {
    test("Full page Snapshot", async ({ page }) => {
        await page.goto("https://example.com/")
        expect(await page.screenshot()).toMatchSnapshot("homepage.png")
    })
})