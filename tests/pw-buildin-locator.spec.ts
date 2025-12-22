/*

page.getByRole() to locate by explicit and implicit accessibility attributes.(button , link , checkbox ,textbox ,heading ,table)

page.getByText() to locate by text content.  east to get value dont have attribute (non intractive element)

page.getByLabel() to locate a form control by associated label's text.

page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.

page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element based on its data-testid attribute 

*/

import { test ,expect, Locator } from '@playwright/test';
import { get } from 'node:http';

test("playwright locator" ,async ({page}) =>{

await page.goto("https://demo.nopcommerce.com/");

// 1, page.getbyAltText() support alt txt img area element

let logo = page.getByAltText('nopCommerce demo store');
await expect(logo).toBeVisible();


// 2 page.getbyText() find element txt it contain match sub string , exact sring , visibletxt  
// find non intractive ele div span p 
// intractive ele button a input use role locator


await expect(page.getByText('Welcome to our store')).toBeVisible(); // it work even it is full string ,substring , regular expression also  case sensitive


// 3 page.getbyrole() locate by role (role is not an attribute)
//role locators include button , checkbox , links , lists , headings , textbox ,table


await page.getByRole('link', {name: 'Register'}).click();
await expect(page.getByRole('heading' , {name : 'Register'})).toBeVisible();

await page.getByLabel('First name:').fill("test");
await page.getByLabel('Last name:').fill("user");
await page.getByLabel('Email:').fill("test@gmail.com");




// 5 page.getbyplaceholder() - find element by placeholder text (best for input without label but have a placeholder)

await page.getByPlaceholder("Search store").fill("apple macbook pro");

// page.getbytitle() to locate an element by its title attribute
// when element have an meaning full title attribute 

//let link:Locator = page.getByTitle("Computers")



})