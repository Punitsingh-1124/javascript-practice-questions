//Call, Bind and Apply in Javascript (Explicit Binding)
// Call, Apply, and Bind in JavaScript (Explicit Binding)
// In JavaScript, call, apply, and bind are methods that allow us to explicitly set the value of this when invoking a function. These methods are part of Function.prototype and are used for function borrowing and dynamic function invocation.

// 1. call() Method
// The call() method invokes a function with a specified this value and individual arguments passed one by one.

functionName.call(thisArg, arg1, arg2, ...);

// Example:
const person = {
  name: "Alice",
};

function greet(age, country) {
  console.log(`Hello, my name is ${this.name}, I am ${age} years old from ${country}.`);
}

greet.call(person, 25, "USA"); // Hello, my name is Alice, I am 25 years old from USA.
// 📌 Key Point: this is explicitly set to person, and parameters are passed individually.

// 2. apply() Method
// The apply() method is similar to call(), but it takes an array of arguments instead of passing them individually.

functionName.apply(thisArg, [arg1, arg2, ...]);

// Example:

greet.apply(person, [25, "USA"]); // Hello, my name is Alice, I am 25 years old from USA.
// 📌 Key Point: Arguments are passed as an array.

3. bind() Method
The bind() method does not invoke the function immediately. Instead, it returns a new function with this bound to the provided value.

// Syntax:
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);

// Example:
const boundGreet = greet.bind(person, 25, "USA");
boundGreet(); // Hello, my name is Alice, I am 25 years old from USA.
// 📌 Key Point: bind() returns a new function that can be called later.

// Polyfill for call(), apply(), and bind()
// Since JavaScript allows modifying prototype methods, we can create polyfills for these methods.

// Polyfill for call()
Function.prototype.myCall = function (context, ...args) {
  context = context || window; // Use global object if no context is provided
  const fnSymbol = Symbol(); // Unique key to avoid overriding existing properties
  context[fnSymbol] = this; // Assign function to the context

  const result = context[fnSymbol](...args); // Call function with arguments
  delete context[fnSymbol]; // Clean up

  return result;
};

// Example Usage
function sayHello(age) {
  console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
}

const user = { name: "Bob" };
sayHello.myCall(user, 30); // Hello, my name is Bob and I am 30 years old.

// Polyfill for apply()

Function.prototype.myApply = function (context, argsArray) {
  context = context || window;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = context[fnSymbol](...(argsArray || [])); // Spread syntax for array
  delete context[fnSymbol];

  return result;
};

// Polyfill for bind()

Function.prototype.myBind = function (context, ...bindArgs) {
  const fn = this; // Store reference to the original function

  return function (...callArgs) {
    return fn.apply(context, [...bindArgs, ...callArgs]); // Merge bound & runtime arguments
  };
};

// Example Usage
const boundFunction = sayHello.myBind(user, 30);
boundFunction(); // Hello, my name is Bob and I am 30 years old.

// Example Usage
sayHello.myApply(user, [30]); // Hello, my name is Bob and I am 30 years old.

// Conclusion:
// call() and apply() invoke functions immediately with an explicit this.

// apply() accepts arguments as an array, whereas call() takes them individually.

// bind() returns a new function with this bound to the given object.

// We can create polyfills for these methods by modifying Function.prototype.



// Most Important
//Quetion 1 - what is Call?

var obj = { name: 'ksrishna' };

function sayHello(age) {
    return " Hello " +  this.name + " is " + age;
}
console.log(sayHello.call(obj,24));

//Question 2 - what is Apply?

var obj = { name: 'ksrishna' };

function sayHello(age, performance) {
    return " Hello " + this.name + " is " + age + performance;
}
console.log(sayHello.apply(obj, [24, " Software Engineer "]));

//Question 3 - what is bind?

var obj = { name: 'ksrishna' };

function sayHello(age, perfession) {
    return " Hello " + this.name + " is " + age + perfession;
}
const bindFunc = sayHello.bind(obj);
console.log(bindFunc(24, " Software Engineer "));
console.log(bindFunc(60, " Software Engineer "));

//Question 4 -  Output Based Question?

const person = { name: "krishna" };

function sayHi(age) {
    return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 24)); //krishna is 24
console.log(sayHi.bind(person, 24)); // ƒ sayHi(age) {
                                    //  return `${this.name} is ${age}`;
                                    //        }

//Question 5 - Call with Function Inside object

const age = 10;

var person ={
    name: "rohan",
    age: 20,
    getAge: function (){
        return this.age;
    },
};
var person2 = {age:24};
person.getAge.call(person2); // 24

//Question 6 -  what is output 

var status = "rahul";

setTimeout(() => {
    const status = "rohan";

    const data = {
        status: "ram",
        getStatus() {
            return this.status;
        }
    }
    console.log(data.getStatus()); // ram
    console.log(data.getStatus.call(this)); // rahul
}, 0);

//question 7 - Call printAnimal such that it prints all animal in objects

const animals = [
    { speacies: "lion", name: "king" },
    { speacies: "whale", name: "Queen" },
];

function printAnimal(i) {
    this.print = function () {

        console.log(" # " + i + " " + this.speacies + ":" + this.name);

    };
    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimal.call(animals[i], i);
}

//Question 8 - Append an array to another array

const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array,elements);

console.log(array);//(5) ['a', 'b', 0, 1, 2]

//Question 9 - Using apply to enhance built-in function

// Find min/max number in an array
const number = [5, 6, 2, 3, 7];

// Loop Based algrithm
max = -Infinity, min = + Infinity;

for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i];
    }
    if (number[i] < min) {
        min - number[i];
    }
};

// using apply
console.log(Math.max.apply(null , number)); //7
console.log(Math.min.apply(null , number)); //2

//Quuestion 10 - Bond function
function f() {
    console.log(this);
}
let user = {
    g: f.bind(nul),
};
user.g(); //window Objects

Quetions 11 = bind Chaining

function f() {
    console.log(this.name);
}
f = f.bind({ name: "john" }).bind({ name: "ann" });

f();//john

//Question 12 - Fix the line 22 make code work properly

function checkPassword(success, failed) {
    let password = prompt("Password?", "");
    if (password == "Roadside Coder") success();
    else failed();
}

let user = {
    name: "harry",

    loginSuccessFul() {
        console.log(`${this.name} logged in`);

    },

    loginFailed() {
        console.log(`${this.name} failed to log in`);

    },
};
checkPassword(user.loginSuccessFul.bind(user),user.loginFailed.bind(user))
//harry logged in

//Question 13 - Partial application for login function

function checkPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "Harry123") ok();
    else fail();
}

let user = {
    name: "Harry bahi",
    login(result) {
        console.log(this.name + (result ? " login Successful " : "login failded"));

    },
};

checkPassword(user.login.bind(user, true), user.login.bind(user, false));
// //Harry bahi login Successful 

//Question 14 - Explicit Binding With Arrow Function

const age = 10;

var person ={
    name:"human",
    age: 20,
    getAgeArrow:()=> console.log(this.age),
    gaetAge: function (){
        console.log(this.age);
    },
};

var person2 = {age:24};
person.gaetAge.call(person);  //undifined
person.gaetAge.call(person2); // 24

//Question 15 - Pilyfill for call Method

 let car1 ={
    color : "red",
    company : "Ferrari",
 };

 function puschaseCar(currency, price){
    console.log(`I hane purchase ${this.color} - ${this.company} car for ${currency}${price}`);
 }

 Function.prototype.myCall=function(context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "it's not callable");
    }

    context.fn = this;
    context.fn(...args);
 }
puschaseCar.myCall(car1,"$" , 50000);//I hane purchase red - Ferrari car for $50000

// polyfill for apply 

let car1 ={
    color : "red",
    company : "Ferrari",
 };

 function puschaseCar(currency, price){
    console.log(`I hane purchase ${this.color} - ${this.company} car for ${currency}${price}`);
 }

 Function.prototype.myApply=function(context = {}, args=[]) {
    if (typeof this !== "function") {
        throw new Error(this + "it's not callable");
    }
    if (!Array.isArray(args)) {
        throw new TypeError(" createlistformArrralike called on non-obj")

    }

    context.fn = this;
    context.fn(...args);
 }
puschaseCar.myApply(car1 ,["$" , 50000]);//I hane purchase red - Ferrari car for $50000

//Question 16 - polyfill for bind method

let car1 = {
    color: "red",
    company: "Ferrari",
};

function puschaseCar(currency, price) {
    console.log(`I hane purchase ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "cannot be bound as its not callable");
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args , ...newArgs);
    }
};
const newfunc = puschaseCar.myBind(car1, "$", 5000);
console.log(newfunc()); //I hane purchase red - Ferrari car for $5000 and undifined










