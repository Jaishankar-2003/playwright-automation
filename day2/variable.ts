console.log("welcome");

// var , let , const

// syntax of var  [ keyword varname : datatype = value ]   (data type is optional )
//                  var age:number = 12 
//                  var age = 30

var age = 30;
console.log(age);

// var vs let vs constant       ( var is not recommended in js/ts )
/*

   1 scope
   2 Declaration / value assignment 
   3 re declaration
   4 re iniitialization / reassignment
   5 hoistion

*/

// var -  we do not use this in modern js/ts avoid var because it has function scope and can lead to unexpected
// let - use let when you need a variable that [ can change ] 
// const - use const when variable value should [ not change ] 


let agee = 20
console.log(agee)

/*
// 1 . scope - accessible area [ Functional scope (var) & block scope(let, const) ]

 example 1 : var (functioanl scope)

 example 2 : let and const (block scope)


   2 . var can be declare with out initialization
       var x;

   3  Re - declaration    example 7

      // var - allows the Re - initialization 
      // let and const - not allow the Re - declaration (making code safer)
     


   4 Re - initialize and re assignment

     var and let - re - assignment is allowed   example : 8

     const - not allowed for re-assignment -- because it cannot be changed   

   5 Hosting var ( Hosting with unified)  , let and const (Not initialized)  example 9
      

      


*/

// example 1
function varScope()
{
   if(true)
   {
      var msg = "hello";
      console.log(msg);   //access inside the block
   }
   console.log(msg); //access outside the block
}
varScope();

// example 2  
function varrScope()
{
   if(true)
   {
      let msg = "hello0";
      const greet = "ello";

      console.log(msg);    //access inside the block
      console.log(greet);   //access inside the block
   }
   //console.log(msg);  cannot access   outside the block
   // console.log(greet)  cannot access outside the block
}
varrScope();


// example 3

function varScopee()
{
   if(true)
   {
      let msg = "hello0";
      const greet = "ello";
      var num = 20;

      console.log(msg);     //access inside the block
      console.log(greet);   //access inside the block
      console.log(num);     //access inside the block
   }
   console.log(num);  // access outside the block
   // console.log(msg);  cannot access outside the block
   // console.log(greet)  cannot access outside the block
}
varScopee();

// example 5 let can be declared without initialization 

var x; // declaration
console.log(x); // undefined
x = 40; // initialization
console.log(x);


// example 6 const must be initialize at the time of declaration 

const s = 50; //correct
// const s; in correct 
console.log(s);


// example 7 var allowes the re declaration

var city ="new";
var city = "york";
console.log(city);


/*
// example 7 let and const Not allowes the re declaration

let ciity ="new";
let ciity = "york"; not allowed in let 
console.log(city);

*/

// example 8 re initialize

var tree = "apple";
tree = "orange";
console.log(tree);

let treee = "apple";
treee = "goaw";
console.log(treee);

/*
const trree = "apple";
trree = "goaw";          // Not allowed 
console.log(trree);
*/

// example 9 
/*

console.log(2); // unifined
var a=10;
console.log(2);

console.log(2); // Not initialised
let a=10;
console.log(2);

console.log(2); // Not initialised
const a=10;
console.log(2);

*/