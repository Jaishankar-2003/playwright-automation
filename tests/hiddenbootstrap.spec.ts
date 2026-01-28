import { test ,expect, Locator } from '@playwright/test';
import { count } from 'console';
import { text } from 'stream/consumers';



test("Boot strap hidden " , async ({page}) =>    
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator('[name="username"]').fill('Admin');

    await page.locator('[name="password"]').fill('admin123');

    await page.locator("button[type='submit']").click();

    await page.getByText('PIM').click();

    await page.locator('form i').nth(2).click();

    await page.waitForTimeout(3000);
    

    const option : Locator = page.locator("div[role='listbox'] span");

    const count : number = await option.count();

    console.log(" all text " , await option.allTextContents());


    console.log(" number : " , await option.count());

    for(let i=0; i < count ; i++)
    {
        console.log(await option.nth(i).textContent())
    }



    for(let i=0; i < count ; i++)
    {
        const text =await option.nth(i).textContent();
        if(text === 'Automation Tester')
        {
            await option.nth(i).click();
            break;
        }



    }











});