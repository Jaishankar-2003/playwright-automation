import { test ,expect, Locator } from '@playwright/test';
import { text } from 'node:stream/consumers';

test("single select drop down " , async ({page}) => {


await page.goto("https://testautomationpractice.blogspot.com/")


      // 1

    await page.locator("#country").selectOption("India");   // visible txt

    //await page.waitForTimeout(3000);


    await page.locator("#country").selectOption({value : "uk"});  // using value attribute

    //await page.waitForTimeout(3000);


    await page.locator("#country").selectOption({label : "Canada"});  // using label

    //await page.waitForTimeout(3000);


    await page.locator("#country").selectOption({index : 3});  // using index no

    await page.waitForTimeout(3000);



    // 2 check num of options in dropdown 

    const  dropdown : Locator = page.locator("#country>option");

    await expect(dropdown).toHaveCount(10); // Assertion 



    // 3 check option present in dropdown : 
    const alloption : string[] = (await dropdown.allTextContents()).map(text => text.trim());

    console.log(alloption);

    await expect(alloption).toContain("Japan"); // Assertion 




    // 4
    for(const option of alloption)
    {
        console.log(option);
    }
    



})