// Topics
// var vs let vs const
// scope
//Declaration
//Declaration without initialisation
//Re-Intialisation
//Hoisting

//var vs let vs const in JavaScript
//JavaScript provides three ways to declare variables: var, let, and const. Each has different scoping rules, hoisting behavior, and mutability.

// 1. var (Function Scoped, Hoisted)
// Introduced in ES5 and earlier.
// Function-scoped: Available throughout the function where it is declared.
// Hoisted: Moves to the top of its scope but is initialized as undefined.
// Can be redeclared and updated within the same scope.
// Example of var Scope

function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ Works (Function-scoped)
}
example();

// Hoisting Behavior

console.log(a); // ✅ Undefined (because `var` is hoisted)
var a = 5;
console.log(a); // 5


// 2. let (Block Scoped, Hoisted but Uninitialized)
// Introduced in ES6.
// Block-scoped: Only available within {} (curly braces).
// Hoisted, but not initialized (results in a ReferenceError if accessed before declaration).
// Can be updated but cannot be redeclared in the same scope.
// Example of let Scope

function example() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ❌ ReferenceError (y is block-scoped)
}
example();

// Hoisting Behavior

console.log(b); // ❌ ReferenceError (Cannot access 'b' before initialization)
let b = 10;
console.log(b); // 10

// 3. const (Block Scoped, Hoisted but Immutable)
// Introduced in ES6.
// Block-scoped (same as let).
// Hoisted, but not initialized (must be assigned a value at declaration).
// Cannot be updated or redeclared.
// Example of const Scope

const z = 30;
z = 40; // ❌ TypeError: Assignment to constant variable

// With Objects and Arrays
// Objects and arrays declared with const can have their properties modified, but the variable itself cannot be reassigned.

const person = { name: "Alice", age: 25 };
person.age = 26; // ✅ Allowed (modifying object properties)
person = { name: "Bob", age: 30 }; // ❌ TypeError (Cannot reassign a new object)


// // scope example
function test(){
    let a = "Hello";

    if(true){   //block scope
        let a = "Hi";
        console.log(a);
    }
    console.log(a);

}
test();
// this is called variable shadowing

//illegal shadowing
// function test(){
//     var a = "Hello";
//     let c ="Bye";

//     if(true){   //block scope
//         let a = "Hi";
//         var c = "Goodbye";
//         console.log(a);
//         console.log(b);
//     }
// }
// test();

//Declaretion

var  a;
var  a;
// it can be declare many times with changes in var 

let a;
let a;
// const d;
// const d;
// it can be not declare many times with changes in let&const and same value of let & const  


//Declaration without initialisation
var a; //Declaration
let a; //Declaration
//const a;  Not Declaration with out value & missing initializer in const declartion
const a = 5; //Declaration

//Re-Intialisation

var a = 1;
a=6; //valid

let a=1;
a=6; // valid

const a= 1;
a=6;  // invalid & Assignment to constant variable.


// Hoisting

console.log(count);
var count =1;  // undefined

// example :

function abc(){
    console.log(a,b,c);
    
    const c= 30;
    let b = 20;
    var a =10;
}
abc();

//exp 2:

function abc(){
    console.log(a);
    
    var a =10;
}
abc();


