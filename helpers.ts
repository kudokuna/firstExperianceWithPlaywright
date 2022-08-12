export async function loadHomepage(page) {
    await page.goto("https://example.com/")
}

export async function assertTitle(page) {
    await page.waitForSelector('h1')
}

export async function takeScreenshotOfFullPage(page) {
    await page.screenshot({path: "screenTest.png", fullPage: true})
}