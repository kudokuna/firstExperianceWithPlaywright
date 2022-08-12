import { firefox, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: "tests/e2e",
    use: {
        headless: true,
        viewport: {width: 1280, height: 800},
        ignoreHTTPSErrors: true,
        actionTimeout: 10000,
        video: "off",
        screenshot: "off",
    },
    projects: [
        {
            name: "Chromium",
            use: {browserName: "chromium"}
        },
        {
            name: "Firefox",
            use: {browserName: "firefox"}
        },
        {
            name: "Webkit",
            use: {browserName: 'webkit'}
        }
    ]
}

export default config

