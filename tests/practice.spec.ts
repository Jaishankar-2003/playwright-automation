import { test ,expect, Locator } from '@playwright/test';
import { get } from 'node:http';

test("practice automation elements" ,async ({page}) =>{

await page.goto("https://testautomationpractice.blogspot.com/");

for(let i=1 ; i<= 5 ; i++)
{
    let buttonlocat : Locator = page.locator('//button[text()="STOP" or text()="START"]');

    await buttonlocat.click();

    await page.waitForTimeout(2000);
}


const dynamiletter : Locator= page.locator('//div/h2[text()="Dynamic Button"]');

await expect(dynamiletter).toBeVisible();






});