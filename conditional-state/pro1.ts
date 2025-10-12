
/*
if(condition)
{

}


*/
// example 1
console.log("-----ex 1 ------");
let age : number = 10;
if(age >= 18)
{
    console.log("Eligible for vote");
}
else
{
    console.log("Not Eligible for vote");
}


// example 2

console.log("-----ex 2 ------");

let num : number = 11
if(num % 2)
{

    console.log(`${num} given num is even :`);
}
else
{
    console.log("given num is odd");

}

console.log("-----ex 3 ------")
// example 3

/*

switch (expression)
{
    case 1: statement;
    break

    case 2: statement;
    break

    default: statement;
}
*/

// example 5
let day : number = 7;
switch(day)
{
    case 1: console.log("Monday");
    break;

    case 2: console.log("Tuesday");
    break;

    case 3: console.log("Wednesday");
    break;

    case 4: console.log("Thursday");
    break;

    case 5: console.log("Friday");
    break;

    case 6: console.log("Saturday");
    break;

    case 7: console.log("Sunday");
    break;

    default: console.log("Invalid day");

}   

// ex 4 

console.log("-------ex 4--------");

let x:number = 20 , y:number = 5;

switch(x-y)
{
    case 0 : console.log("result is zero");
    break;
    
    case 5 : console.log("result is five");
    break;

    case 15 : console.log("result is fifteen");
    break;
    default : console.log("result is not matching");
}