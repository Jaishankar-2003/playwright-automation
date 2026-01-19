import { test ,expect, Locator } from '@playwright/test';
import { text } from 'node:stream/consumers';

test("Sorted drop down " , async ({page}) => {


await page.goto("https://testautomationpractice.blogspot.com/")


const dropdownoption : Locator = page.locator("#colors > option");// not storted

// const dropdownoption : Locator = page.locator("#animals > option"); // storted

// console.log(await dropdownoption.allTextContents());


// const alloption : string[] = (await dropdownoption.allTextContents()).map(text => text.trim());

    
//     for(const option of alloption)
//     {
//         console.log(option);
//     }

//     const originallist:string [] = [...alloption];
//     const sortedlist:string [] =  [...alloption].sort();

//     console.log(originallist);
//     console.log(sortedlist);

//     expect(originallist).toEqual(sortedlist);

// check elements have the duplicate or not



/*
const alloption : string[] = (await dropdownoption.allTextContents()).map(text => text.trim());

     const myset= new Set<string>();
     const duplicates:string[]=[];


    for(const option of alloption)
    {
        if(myset.has(option))
        {
            duplicates.push(option);

        }
        else
        {
            myset.add(option);
        }
    }

    console.log(duplicates);
    */

const options = (await dropdownoption.allTextContents()).map(o => o.trim());

const seen = new Set<string>();
const duplicates = options.filter(o => seen.has(o) ? true : (seen.add(o), false));

console.log(duplicates);




})