// js is Dynamically typer program
/*
let age = 30;
console.log(typeof(age))

age = "thirty";

console.log(age);
console.log(typeof(age))
*/

// Not Type safety 
/*
let message = "hello"; // string 
let count = 30; // number

message = 100;

let result = "5" + 3;
console.log(result);
*/


function temp()
{
    var a = 10;
    var b = 20;

    
    let tempp = a;
    a = b;
    b = tempp;
    

    console.log("After Swapping");
    console.log(a);
    console.log(b);

}
//temp();
