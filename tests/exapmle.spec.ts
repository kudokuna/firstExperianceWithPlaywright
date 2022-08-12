import { test, expect } from "@playwright/test";

import {loadHomepage, assertTitle, takeScreenshotOfFullPage} from "../helpers"



test.describe.skip("My first testsuit", () => {
    test("Simple basic test", async ({ page }) => {
        await page.goto("https://example.com/")
        const pageTitle = await page.locator('h1')
        await expect(pageTitle).toContainText("Example Domain")
    })
    
    test("Clicking on elements", async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/")
        await page.click("#signin_button")
        await page.click("text=Sign in")
        
        const pageError = await page.locator(".alert-error")
        await expect(pageError).toContainText("Login and/or password are wrong.")
    })
    
    test("Working with inputs", async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#signin_button")
    
        await page.type("#user_login","some username")
        await page.type("#user_password","some password")
        await page.click("text=Sign in")
    
        const pageError = await page.locator(".alert-error")
        await expect(pageError).toContainText("Login and/or password are wrong.")
    
    })
    
    test ("Asserts practice @myTag", async ({ page }) => {
        await page.goto("https://example.com/")
        await expect(page).toHaveURL("https://example.com/")
        await expect(page).toHaveTitle("Example Domain")
    
        const element = page.locator("h1")
        await expect(element).toBeVisible()
        await expect(element).toHaveText("Example Domain")
        await expect(element).toHaveCount(1)
    
        const notExistedElement = await page.locator("h5")
        await expect(notExistedElement).not.toBeVisible()
    
    })
    
})

test.describe.skip("Screenshots practice", () => {
    test("Screenshot", async ( {page} ) => {
        await page.goto("https://example.com/")
        await page.screenshot({path: "screenshot.png", fullPage: true})
    })
    
    test("Screenshot 2 - Single Element", async ({ page }) => {
        await page.goto("https://example.com/")
        const element = await page.$('h1')
        await element?.screenshot({path: "single_element_screenshot.png"})  
    })  
    
})

test.describe.skip ("Hooks", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://example.com/")
    })

    test("Screenshot", async ( {page} ) => {
        //await page.goto("https://example.com/")
        await page.screenshot({path: "screenshot.png", fullPage: true})
    })
    
    test("Screenshot 2 - Single Element", async ({ page }) => {
        //await page.goto("https://example.com/")
        const element = await page.$('h1')
        await element?.screenshot({path: "single_element_screenshot.png"})  
    })  
})

test.describe.skip("Practice with custom functions export", () =>{
    test("Custom helpers", async ({ page }) => {
        await loadHomepage(page)
        await assertTitle(page)
        //await page.pause() //----inspector 
        await takeScreenshotOfFullPage(page)
    })    
})

