import { test ,expect, Locator } from '@playwright/test';
import { text } from 'stream/consumers';

test("Actions" , async ({page}) => {


    // Text box , Text input 


    await page.goto("https://testautomationpractice.blogspot.com/");

//     await page.waitForTimeout(2000);

//    const textbox : Locator =  page.locator('#name');

//    await expect(textbox).toBeVisible();
//     await expect(textbox).toBeEnabled();

//     console.log(await textbox.getAttribute("maxlength"));

//     await textbox.fill("hello world");




//     const entervalue : string = await textbox.inputValue();

//     console.log( "text content of first " + entervalue);  

//     expect(entervalue).toBe("hello world");



//      await page.waitForTimeout(3000);


     
    const radio : Locator= page.locator("//input[@id='monday']");

    console.log(await radio.isChecked());


    // select specific 1 


    await page.locator("//input[@id='male']").check();

    await page.locator("//input[@id='female']").check();


    await page.waitForTimeout(3000);

    await page.locator("//input[@id='monday']").check();

    const mondaycheck = page.locator('#monday');


     console.log(await mondaycheck.isChecked());

    expect(await mondaycheck.isChecked()).toBe(true);


    const sundaycheck = page.getByLabel('sunday');

    await sundaycheck.check();

    await expect(sundaycheck).toBeChecked();

    console.log(await sundaycheck.isChecked());




   const week = page.locator('input[type="checkbox"].form-check-input');



   // select all checkboxes
   for(const day of await week.all())
   {
        await day.check();
        await expect(day).toBeChecked();
   }


   for(const checkweek of await week.all())
   {
        if(await checkweek.isChecked())
        {
            await checkweek.uncheck();
        }
        else
        {
            await checkweek.check();
        }
   }


   // un check the last 3 check boxes
   const lastThreeDays = (await week.all()).slice(-3);

    for (const day of lastThreeDays) 
    {
        await day.uncheck();
        await expect(day).not.toBeChecked();
    }
    

    await page.waitForTimeout(3000);








});