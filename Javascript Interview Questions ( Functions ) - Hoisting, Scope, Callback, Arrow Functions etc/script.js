//Functions in Javascript
//Q1 - what is Function Declaration ?
//Q2 - what is Function Expression ?
//Q2.1 - what is Function Expression & Normal function ?
//Q3 - What is first class Functions ?
//Q4 - What is IIFE(Immediately Invoked Function Expressions) ?
//Q5 - IIFE - O/P Based Quetions ?
//Q6 - What is Function Scope ?
//Q6.1 - What is Function Scope & closures ?
//Q7 - Function Scope - O/P Based Quetions ?
//Q8 - Function Hoisting ?
//Q9 - Function Hoisting - O/P based questions ?
//Q10 - Params vs Arguments & spread vs rest oprator ?
//Q11 - Params vs Argument - O/P Based questions  ?
//Q12 - Callback Function 
//Q13 - Arrow functions vs Regular Function

////Q1 - what is Function Declaration ?
//A function declaration (or function statement) defines a function with a specified name. These functions are hoisted, meaning they can be called before their declaration in the code.

// Example:
function square(num){
    return num*num;
}

function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!


//Q2 - what is Function Expression ?
//A function expression is when a function is assigned to a variable. These functions are not hoisted.
// anonymous function
//Q2 - what is Function Expression & Normal function ?
//Function Declaration (Normal Function): Uses the function keyword and is hoisted.
//Function Expression: Assigned to a variable and not hoisted.

// Example:
const square = function (num){
    return num*num;
};

console.log(square(5)) // output: 25


const greet = function() {
    console.log("Hello, World!");
};
greet(); // Output: Hello, World!


//Q3 - What is first class Functions ?
//A function is called a first-class function if it can be treated as a value (assigned to variables, passed as an argument, or returned from another function).

// Example:
const square = function (num){
    return num*num;
};

function displaySquare(fn){
    console.log("Square is " + fn(5));
}
displaySquare(square); // output : Square is 25

//Q4 - What is IIFE ?
//An IIFE is a function that runs immediately after being defined.

// Example:
(function square(num){
    console.log(num*num);
})(5);

//Q5 - IIFE - O/P Based Quetions ?

(function(x){
    return(function(y){
        console.log(x);  
    })(2);
})(1);  //1

//Q6 - What is Function Scope ?
//Function scope means variables declared inside a function are only accessible within that function.

// Example:
// // The following variables are defined in the global scope
var num1 = 20;
num2 = 3;
name = "Chamakh";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

console.log(multiply()); //output : 60

// // A nested function example
function getScore() {
    var num1 = 2;
    num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

console.log(getScore()); // "Chamakh scored 5"

//Q6.1 - What is Function Scope & closures ?
//Function Scope: Variables are accessible only within the function.
//Closure: A function that remembers variables from its parent scope even after the parent function has executed.

// Example:
//The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

//Q7 - Function Scope - O/P Based Quetions

// Example:
for (let i = 0; i < 5; i++) {
   setTimeout(function(){
    console.log(i);
   }, i * 1000);
}

//Q8 - Function Hoisting
// Function declarations are hoisted, meaning they can be called before being defined.

// Example:
// 1.
function functionName(){
    console.log("Output return value normaly")
}
// functionName();
// 2.
functionName();
function functionName(){
    console.log("Output return value in this case also before return this function at top")
}

// imp 
// 1.
var x= 5;
console.log(x); // 5
//2.
console.log(x); // undifined
var x= 5;

//Q9 - Function Hoisting - O/P based questions 

var x =21;  //this is globle scope value

var fun = function(){
    console.log(x);
    var x =20;   // local scope present value
};

fun();  // undifined

//Q10 - Params vs Arguments & spread vs rest oprator
// Parameters are variables in function definitions.
// Arguments are actual values passed to functions.
// Spread (...) expands an array into separate values.
// Rest (...) gathers values into an array.

// Example:
//1.  Params vs Arguments
function square(num){ // Params
    console.log(num*num);

}
square(5);  // Arguments
//2. spread vs rest oprator
function multiply(...nums){
    console.log(nums[0] * nums[1]);

}
var arr = [5 , 6]
multiply(...arr);  // 30

//Q11 - Params vs Argument - O/P Based questions  

// Example:
//1. 
const fn = (a, ...numbers, x, y) => {
    console.log(x, y)
};
fn(5, 6, 7, 8, 9)  // Rest parameter must be last formal parameter

//2. correct way 
const fn = (a, x, y, ...numbers) => {
    console.log(x, y,numbers);
};
fn(5, 6, 7, 8, 9,3)  // 6 7 (3) [8, 9, 3]

//Q12 - Callback Function 
// A function passed as an argument to another function.

// Example:
function processUserInput(callback) {
    callback("John");
}
processUserInput(name => console.log(`Hello, ${name}!`)); 


//Q13 - Arrow functions vs Regular Function

// Example:
// 1. Regular function 
const add = function (firstNum, secondNum) {
    return firstNum + secondNum;

};
//1.1 regular function
function square(num) {
    return num * num;
}

//2. Arrow function 
const add1 = (firstNum, secondNum) => firstNum + secondNum;
//2.2 
const square = (num) => {
    return num * num;
};

//imp1 - Implicit "return" keyword
const square = (num) => num * num;

//imp2 - arguments
function fn(){
    console.log(arguments);
}
fn(1,3,2); //Arguments(3) [1, 3, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//imp3 -argument function in side the arrow is show error
const fnArr = ()=>{
    console.log(arguments);
}
fnArr(1,3,2); //script.js:209 Uncaught ReferenceError: arguments is not defined at fnArr

//imp4 - "this"  keyword
let user = {
    username: "Lucky",
    rc1: () => {
        console.log("Subscribe to " + this.username);  //Subscribe to undefined
    },
    rc2() {
        console.log("Subscribe to " + this.username)  // Subscribe to lucky
    },
};

user.rc1();
user.rc2();





















