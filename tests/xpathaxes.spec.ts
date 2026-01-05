import { test ,expect, Locator } from '@playwright/test';

test("xpath axes demo" , async ({page}) => {


await page.goto("https://www.w3schools.com/html/html_tables.asp")

// 1 self

const gernamycell :  Locator = page.locator("//td[text()='Germany']/self::td");

    console.log(await gernamycell.textContent());

gernamycell.getByText
//.toHaveText()

// 2 parent

const parentrow :  Locator = page.locator("//td[text()='Germany']/parent::tr");
await expect(parentrow).toContainText("Maria Anders");
console.log(await parentrow.textContent());


// child 
const child :  Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
expect(child).toHaveCount(3);


// ancestor ( parent and grant parents)

const table :  Locator = page.locator("//td[text() = 'Germany']/ancestor::table");

await expect(table).toHaveAttribute('id' , 'customers')

// descendent ( child and grant child)

const decendent :  Locator = page.locator("//table[@id='customers']/descendant::td");


// following  //td[normalize-space()='Germany']/following::td


// PRECEDING   (before elements)

const preceding :  Locator = page.locator("//td[text()='Germany']/preceding::td[1]");

await expect(preceding).toHaveText("Maria Anders");

// PRECEDING-sibling  (before elements)

const precedingsibling :  Locator = page.locator("//td[text()='Germany']/preceding-sibling::td[1]");

await expect(precedingsibling).toHaveCount(1);

console.log(await precedingsibling.textContent());




});