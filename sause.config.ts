import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: "tests/sause_demo",
    use: {
        headless: true,
        viewport: {width: 1920, height: 1080},
        actionTimeout: 10000,
        video: "off",
        screenshot: "only-on-failure",
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

