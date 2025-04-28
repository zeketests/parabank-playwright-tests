import { test, expect } from '@playwright/test'

test("Go to site and verify Title", async ({page})=>{
    await page.goto("https://parabank.parasoft.com/")
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
})