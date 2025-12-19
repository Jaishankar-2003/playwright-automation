
import { test ,expect } from '@playwright/test';

// test("title ",()=>{
//     //step 1: 
//     //step 2:
//     //step 3: 
// })

// fixture - global variable : page, browser ,context

test("verify page title",({page})=>
{
    page.goto("https://www.webpagetest.org/"); 

    let title : string = page.title();
    console.log("Title :",title);


    expect(page).toHaveTitle("catchpoint.");
    
})

