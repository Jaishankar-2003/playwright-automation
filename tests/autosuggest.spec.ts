import { test ,expect, Locator } from '@playwright/test';
import { text } from 'stream/consumers';



test("Auto suggest " , async ({page}) =>    
{

    await page.goto("https://www.flipkart.com/");

    await page.locator("(//input[@placeholder='Search for Products, Brands and More'])[1]").fill("smart");

    await page.waitForTimeout(3000);

    // get all suggestion ctrl + shift + p

    const option: Locator = page.locator("ul>li");

    const count = await option.count();

    console.log("total suggestion " , count);

    console.log("5 th " , await option.nth(5).innerText());

    for(let i=0 ; i<count ;i++)
    {
        //console.log( await option.nth(i).innerText());

        console.log( await option.nth(i).textContent());
    }


    // select click on smart option

     for(let i=0 ; i<count ;i++)
    {
          const text = await option.nth(i).innerText();

          if(text==='smartphone')
          {
            option.nth(i).click();
            break;
          }
    }





    await page.waitForTimeout(3000)




});