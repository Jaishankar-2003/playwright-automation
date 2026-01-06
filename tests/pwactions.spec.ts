import { test ,expect, Locator } from '@playwright/test';
import { text } from 'stream/consumers';

test("Actions" , async ({page}) => {


    // Text box , Text input 


    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(2000);

   const textbox : Locator =  page.locator('#name');

   await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();

    console.log(await textbox.getAttribute("maxlength"));

    await textbox.fill("hello world");




    const entervalue : string = await textbox.inputValue();

    console.log( "text content of first " + entervalue);  

    expect(entervalue).toBe("hello world");



     await page.waitForTimeout(3000);


     
    const radio : Locator= page.locator("//input[@id='monday']");

    console.log(await radio.isChecked());




    await page.locator("//input[@id='male']").check();

    await page.locator("//input[@id='female']").check();


    await page.waitForTimeout(3000);

    await page.locator("//input[@id='monday']").check();



});