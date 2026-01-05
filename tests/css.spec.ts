import { test ,expect, Locator } from '@playwright/test';

test("verify CSS locator" , async ({page}) => {


// css faster than xpath 

/*
2 types 
------------


1 absolute css locators

2 relative css locators

based on tag and id we create css locators

tag is optional :

tag with id       tag#id

tag with class    tag.class

tag with any other attribute     tag[attribute='value']           [attribute='value']

tag with class and attribute     tag.class[attribute=value]        .class[attribute=value]

page.locator(css/xpath)


*/

await page.goto("https://demowebshop.tricentis.com/")

// tag#id

// const searchbox : Locator = page.locator("input#small-searchterms");

//  await searchbox.fill("books");

 //await page.locator("input#small-searchterms").fill("books");

//  await expect(page.locator("input#small-searchterms")).toBeVisible();

//  


// tag.class

await page.locator("input.search-box-text.ui-autocomplete-input").fill("test");

await page.locator("input.search-box-text.ui-autocomplete-input").clear();
await page.waitForTimeout(2000);


//tag[attribute='value']

await page.locator("input[name='q']").fill("teting");
await page.locator("input[name='q']").clear();

await page.waitForTimeout(2000);


//tag.class[attribute=value]  

// input.search-box-text.ui-autocomplete-input[value = 'Search store']


});