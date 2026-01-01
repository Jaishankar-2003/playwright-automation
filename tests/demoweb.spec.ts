import { test ,expect, Locator } from '@playwright/test';
import { get } from 'node:http';

test("playwright locator" ,async ({page}) =>{

await page.goto("https://demowebshop.tricentis.com/");

// absolute path 

const ablogo:Locator = page.locator("xpath =/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
await expect(ablogo).toBeVisible();


// relative path 

const rellogo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(rellogo).toBeVisible();

// contains()

const product:Locator = page.locator("//h2/a[contains(@href,'computer')]");

const productcount:number= await product.count();
console.log("num " , productcount) // 4
expect(productcount).toBeGreaterThan(0);

//console.log(await product.textContent());  // error : strict mode violation 
const text = await product.allTextContents(); // store in array formate
console.log(text);

console.log("FIrst product : " , await product.first().textContent());
console.log("last product : " , await product.last().textContent());
console.log("3 nth  product : " , await product.nth(1).textContent());

// start-with()

const build: Locator = page.locator("//h2/a[starts-with(@href,'/build')]");

console.log("build count :" , await build.count());


})