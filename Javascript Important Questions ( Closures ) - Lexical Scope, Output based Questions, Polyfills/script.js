//Closures in Javascript ?
//Lexical Scope ?
//closure scope chain ?
//Question 1 - what will be logged to console?
//Question 2 -  write a function that would allow you to do this
// Question 3 - Time Optimization
//Question 4 - Block scope and setTimeout
//Question 5 - how would you use a closure to create a private counter?
//Question 6 - what is module pattern?
//Quetions 7 - make this run only once
//Question 8 - once polyfill
//Question 9 - Memoize polyfill / implement caching
//Question 10 - Difference between clouser and scope


// Closures in JavaScript
// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. This allows it to "remember" variables from its surrounding scope even after the outer function has finished executing.

// Example of Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction("Hello");
newFunction("World"); // Output: Outer: Hello, Inner: World
//Here, innerFunction has access to outerVariable even after outerFunction has completed execution.



//lexical scope
// Lexical Scope refers to the ability of a function to access variables from its parent scope, determined by the placement of functions and variables in the code.

// Example of Lexical Scope
function outer() {
    let a = 10; // Outer scope
    function inner() {
        console.log(a); // Inner function has access to `a`
    }
    inner();
}
outer(); // Output: 10
// Here, inner() has access to the variable a due to lexical scoping.


var username = "coder";
//global scope
function local (){
    //local scope
    console.log(username);
}
local();


//global scope
function Subscribe(){
    var name = "Coders";
    //inner scope 2
    function displayName(){
        //inner scope
        alert(name);
    }
    displayName();
}
Subscribe();


function makeFunc() {
    const name = "Mozilla";
    function displayName(num) {
      console.log(name,num);
    }
    return displayName;
  }

  makeFunc()(5);

//closure scope chain
// The closure scope chain is the hierarchy of scopes that JavaScript follows to resolve variable references. The chain includes:

// Local Scope (inside the function)
// Outer Function Scope (lexical scope)
// Global Scope (window or global object)

// Example of Closure Scope Chain
let globalVar = "I am global";

function outer() {
    let outerVar = "I am outer";

    function inner() {
        let innerVar = "I am inner";
        console.log(globalVar); // Accessing global scope
        console.log(outerVar);  // Accessing outer scope
        console.log(innerVar);  // Accessing inner scope
    }
    return inner;
}

const closureFunction = outer();
closureFunction();
// Output:
// I am global
// I am outer
// I am inner

// Here, inner() accesses variables from its own scope, outer()'s scope, and the global scope due to closure scope chaining.

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20


function outer() {
    let getY;
    {
      const y = 6;
      getY = () => y;
    }
    console.log(typeof y); // undefined
    console.log(getY()); // 6
  }

  outer();

//Question 1 - what will be logged to console?

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1;  //shadowing
        console.log(count); //1
    }
    console.log(count); //0
})
();

//Question 2 -  write a function that would allow you to do this

function createBase(num) {
    return function (innerNum) {
     console.log( innerNum + num);
    };
}
var addSix = createBase(6);
addSix(10); //16
addSix(21); //27

// Question 3 - Time Optimization

function find(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");

//output :
// 36
// 6: 16.718994140625 ms
// 144
// 12: 25.73388671875 ms

//now optimizetion
function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    return function (index) {
        console.log(a[index]);
    };

}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");

//output :
// 36
// 6: 0.280029296875 ms
// 144
// 12: 0.06494140625 ms   
//time is optimize now

//Question 4 - Block scope and setTimeout
function a(){
for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); //what is logged?
    },i* 1000);
}
};
a();

// for var = 3 3 3 for let block scoppe =  0 1 2 
//using closures

for (var i = 0; i < 3; i++) {
    function inner(i) {

        setTimeout(function log() {
            console.log(i); //what is logged?
        }, i * 1000);
    }
    inner(i);
}//0 1 2 

//Question 5 - how would you use a closure to create a private counter?

function counter() {
    var _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function retrive() {
        return "Counter =" + _counter;
    }

    return {
        add,
        retrive, 
    };
};

const c = counter();
c.add(5)
c.add(10)
console.log(c.retrive())

//Question 6 - what is module pattern?

var Module = (function () {
    function privateMethod() {
        //do Something
        console.log("private");

    }

    return {
        publicMethod: function () {
            //can call PrivetMethod();
            console.log("public");

        },
    };
})();
Module.publicMethod();
Module.privateMethod();

//Quetions 7 - make this run only once

let view;
function likeTheVideo() {


    let called = 0;
    return function () {
        if (called > 0) {
            console.log("Already Subscribed to Coders")

        } else {

            view = "Coders";
            console.log("Subscribe to", view);
            called++;
        }
    };
}

let isSubscribe = likeTheVideo();
isSubscribe();
isSubscribe();
isSubscribe();
isSubscribe();
isSubscribe();
isSubscribe();

//Question 8 - once polyfill

function once(func, context) {
     let ran;

     return function(){
        if(func){
            ran= func.apply(context|| this,  arguments);
             func = null;
        }
        return ran;
     }
}

const hello = once((a,b)=> console.log("hello",a,b));

hello( 1, 2, 3,4);
hello();
hello();
hello();
hello();
hello();

//Question 9 - Memoize polyfill / implement caching


function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        } else {
            return res[argsCache]
        }
    };

}

const clumsysquare = (num1, num2) => {
    for (let i = 0; i < 100000000; i++) {
        return num1 * num2;
    }
}

const memoizedClumzyProduct = myMemoize(clumsysquare);
console.time("first call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumzyProduct(9467, 7649));
console.log("second call")

//Question 10 - Difference between clouser and scope






