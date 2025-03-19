//Currying in javascript
//Example f(a,b) into f(a,b)
//Question 1 -why should we use currying?
//Question 2 - 
// evaluate("sum")(4)(2) =>6
// evaluate("multiply")(4)(2) =>8
// evaluate("divide")(4)(2) =>2
// evaluate("substract")(4)(2) =>2
//Question 3 - infinite currying -> sum(1)(2)(3)....(n) ?
//Quetion 4 - Currying vs partial  application
//Question 5 - Mainpulatinng DOM
//Question 6 - curry() implementetion


// What is Currying?
// Currying is a technique in functional programming where a function is transformed into a sequence of nested functions. Each function takes a single argument and returns another function until all arguments are provided.

// Example: 
// Normal function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6

// Curried function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(1)(2)(3)); // 6

// Example: 
function f(a) {
    return function(b){
        return `${a} ${b}`
    }
}
console.log(f(5) (6));

//Question  -why should we use currying?

// Avoid Repetition (Reusability)
// We can create specialized functions from a general function.
// Better Readability and Maintainability
// Helps in breaking complex functions into smaller, manageable functions.
// Improved Function Composition
// Useful when working with libraries like Redux and React.
// Partial Application
// Enables functions to be pre-configured with certain arguments.

//Question 1 - sum (2)(6)(1) and addition

// Example: 
const num = f =(a) =>{
    return function(b){
        return function(c){
            return `${a} ${b} ${c}`;
        }
    }
}
console.log(f(2)(6)(1)); // 2 6 1

// Example: 
function sum(a){
   return function(b){
    return function(c){
        return a+b+c;
    }
   }
}
console.log(sum(2)(6)(1)); //9

//Question 2 - 
// evaluate("sum")(4)(2) =>6
// evaluate("multiply")(4)(2) =>8
// evaluate("divide")(4)(2) =>2
// evaluate("substract")(4)(2) =>2

// Example: 
function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "substract") return a - b;
            else return "invaled operation"
        }
    }
}

const mul = evaluate("multiply");

console.log(mul(3)(6)); //15
console.log(mul(2)(6)); //12
//one time initialaz or many times initialaz value in currying

//Question 3 - infinite currying -> sum(1)(2)(3)....(n) ?
// Infinite currying is when a curried function keeps accepting arguments indefinitely until a termination condition (like no argument) is met.

// Example: 
function add(a){
     return function (b){
        if(b) return add(a+b);
        return a;
     }
}
console.log(add(5)(2)(4)(8)()); //19

// Example: 
function infiniteCurry(a) {
    return function(b) {
        if (b !== undefined) {
            return infiniteCurry(a + b);
        } else {
            return a;
        }
    };
}

console.log(infiniteCurry(1)(2)(3)(4)()); // 10
console.log(infiniteCurry(5)(10)(15)()); // 30


//Quetion 4 - Currying vs partial  application
//Number of Arguments
//Currying:Transforms function to accept one argument at a time
//Partial Application:Function is pre-filled with some arguments but still accepts multiple arguments
//Function Execution
//Currying:Executes one argument per function call ,example:f(a)(b)(c)
//artial Application:Partially applies a function with some arguments , example:f(a, b) (pre-fills a, b but still accepts c)

// Example: 
function partialMultiply(a, b) {
    return function(c) {
        return a * b * c;
    };
}

const multiplyBy2And3 = partialMultiply(2, 3); // Pre-fills 2 and 3
console.log(multiplyBy2And3(4)); // 24

// Example: 
function sum(a)  {
    return function (b,c){
        return a+b+c;
    }
}

const x =sum(10);
console.log(x(5,6));
console.log(x(3,2));

// // or

console.log(sum(20)(1,4));

// using currying
function sum(a){
    return function(b){
        return function(c){
            return a+ b+c;
        }
    }
}



//Question 5 - Mainpulatinng DOM
// We can use currying to create reusable functions that modify the DOM dynamically.

// Example: 
function changeColor(color) {
    return function(elementId) {
        document.getElementById(elementId).style.backgroundColor = color;
    };
}

const makeRed = changeColor("red");
makeRed("myDiv"); // Changes the background color of `myDiv` to red

// Example: 
function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    };
};

const updateHeader = updateElementText("lucky");
updateHeader("lucky is greate coder");


//Question 6 - curry() implementetion
// We can implement a generic curry() function that transforms a function into a curried version.
//Convert f(a, b, c) into f(a)(b)(c);

// Example: 
function curry(func) {
    return function curriedFunc(...args) {
        // console.log(args.length, func.length);
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    };
}

const sum = (a, b, c,d) => a + b + c +d; // sum function equal to totalsum values for e.g : (1)(2) show error

const totalSum = curry(sum);
console.log(totalSum(1)(2)(3)(4));// sum function equal to totalsum values for e.g : (1)(2) show error
//10

// or 

// Generic Curry Function:
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
}

// Example usage
function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24










