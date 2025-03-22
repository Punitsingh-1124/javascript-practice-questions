// 'this' Keyword in javascript (Implicit Binding)
//Explain 'this' keyword

// The this Keyword in JavaScript (Implicit Binding)
// The this keyword in JavaScript refers to the object that is executing the current function. However, its value depends on how the function is called. One of the common rules that determine the value of this is Implicit Binding.

// What is Implicit Binding?
// Implicit Binding occurs when a function is called as a method of an object. In this case, this refers to the object that owns the method.

// Syntax:
const obj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

obj.greet(); // "Hello, my name is Alice"
// Explanation:

// The function greet() is called using obj.greet(), meaning the object (obj) is the calling context.

// Due to Implicit Binding, this inside greet() refers to obj.

// So, this.name is "Alice".


// Example 1: Using Implicit Binding in an Object

const person = {
  name: "John",
  age: 25,
  sayAge: function () {
    console.log(`I am ${this.age} years old.`);
  }
};

person.sayAge(); // "I am 25 years old."
// ✅ Here, this.age refers to person.age, which is 25.

// Example 2: Implicit Binding with Nested Objects

const student = {
  name: "Emma",
  details: {
    age: 20,
    introduce: function () {
      console.log(`I am ${this.age} years old.`);
    }
  }
};

student.details.introduce(); // "I am 20 years old."
// ✅ Why does this work?

// The function introduce() is inside details, and details is the calling object.

// this refers to details, so this.age is 20.

// Example 3: Implicit Binding with Arrays of Objects

const player = {
  name: "Leo",
  sports: ["Football", "Basketball", "Tennis"],
  showSports: function () {
    this.sports.forEach(function (sport) {
      console.log(`${this.name} plays ${sport}`);
    });
  }
};

player.showSports();
// ❌ Output (Unexpected Result):
// undefined plays Football
// undefined plays Basketball
// undefined plays Tennis

// ⚠️ Why is this.name undefined?
// The issue is that the callback function inside forEach has its own this, which refers to the global object (window in browsers, undefined in strict mode).

// ✅ Fix: Use Arrow Function
const player = {
  name: "Leo",
  sports: ["Football", "Basketball", "Tennis"],
  showSports: function () {
    this.sports.forEach((sport) => {
      console.log(`${this.name} plays ${sport}`);
    });
  }
};

player.showSports();

// ✅ Output:

// Leo plays Football
// Leo plays Basketball
// Leo plays Tennis
// Why does this work?

// Arrow functions do not have their own this; they inherit this from their surrounding function (showSports), where this refers to player.

// When Implicit Binding Fails
// Implicit Binding does not work in the following cases:

// 1. Assigning Method to a Variable

const user = {
  name: "Sophia",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  }
};

const greetFunction = user.greet;
greetFunction(); // "Hello, undefined" (or error in strict mode)
// Why?

// When greetFunction() is called, it's not called on user anymore; it's called in the global scope (window in browsers).

// So this.name becomes undefined.

// ✅ Fix: Use .bind()

// const greetFunction = user.greet.bind(user);
// greetFunction(); // "Hello, Sophia"

// 2. Using Implicit Binding with Callback Functions

const car = {
  brand: "Toyota",
  showBrand: function () {
    setTimeout(function () {
      console.log(`Brand: ${this.brand}`);
    }, 1000);
  }
};

car.showBrand(); // "Brand: undefined"
// Why?

// The function inside setTimeout is executed in the global scope, so this.brand is undefined.

// ✅ Fix: Use Arrow Function

const car = {
  brand: "Toyota",
  showBrand: function () {
    setTimeout(() => {
      console.log(`Brand: ${this.brand}`);
    }, 1000);
  }
};

car.showBrand(); // "Brand: Toyota"
// Arrow functions inherit this from the surrounding function, so this.brand works correctly.



//THIS IS MOST IMPORTANT


// simple example 
this.a = 5;
console.log(this.a);

using arrow function
this.a = 5;  // targeting window object or gloable obj
const getParam = () => {
    console.log(this.a);
}
getParam(); // 5

//using Objects
let user = {
    name: "Krishna",
    age: 24,
    getDetails() {
        console.log(this.name);
    },
};
user.getDetails(); // krishna

//using two objects 
let user = {
    name: "Krishna",
    age: 24,
   childObj:{   //targeting child obj
    newName: "Harry",
    getDetails() {
        console.log(this.newName, "and", this.name);
    },
   }
};
user.childObj.getDetails(); //Harry and undefined


let user ={
    name:"krishna",
    age:24,
    getDetails:()=>{
        console.log(this.name);

    }
}
user.getDetails(); //this is not pointing any thingh only window direct arrow function 

//using normal function and in side this arrow function
let user ={
    name:"krishna",
    age:24,
    getDetails(){
       const nestedArrow =()=>console.log(this.name);
       nestedArrow();
    }
}
user.getDetails();

//using class and constructer
class user {
    constructor(n){
        this.name =n;
    }
    getName(){
        console.log(this.name);
    }
}
const User = new user("krishna")
console.log(User); //user {name: 'krishna'} for this case
User.getName();//krishna gor this case

//Question 1- What is output

const user={
    firstName:"krishna",
    getName(){
        const firstName ="piyush"
        return this.firstName;
    }
}
console.log(user.getName()); // krishna

//Question 2 - what is the result of accessing its ref? why?

function makeUser() {
    return {
        name: "john",
        ref: this,
    };
}
let user = makeUser();
console.log(user.ref.name); //nothing or emty

//Fixsing code
function makeUser() {
    return {
        name: "john",
        ref(){
            return this;
        }
    };
}
let user = makeUser();
console.log(user.ref().name);//john

//Question 3 - what is the output

const user ={
    name: 'piyush',
    logMessage(){
        console.log(this.name);
    };
};
setTimeout(user.logMessage,1000); // Nothing or emty

fixsing code
const user = {
    name: 'piyush',
    logMessage() {
        console.log(this.name);
    };
};
setTimeout(function () {
    user.logMessage();
}, 1000); //piyush

//Question 4 - what is output

const user ={
    name:"piyush",
    great(){
        return `hello, ${this.name}!`;
    },
    farewell:()=>{
        return `Goodbye, ${this.name}!`;
    },
};
console.log(user.great()); //hello piyush
console.log(user.farewell()); // goodbye undifined

//Question 5 - Creaete an object calculator

let calculator ={
   read(){
    this.a = +prompt ("a =", 0);
    this.b = +prompt ("b =", 0);
   },

   sum(){
    return this.a + this.b;
   },
   mul(){
    return this.a * this.b;
   }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//Question 6 - ehat will be the output

var length = 4;
function callback(){
    console.log(this.length);

}
const object={
    length:5,
    method(fn){
        fn();
    },
};
object.method(callback); // 4

modify question
var length = 4;
function callback() {
    console.log(this.length);

}
const object = {
    length: 5,
    method() { //argument =[callback, 2, 3]
        // console.log(arguments);
        arguments[0]();
    },
};
object.method(callback, 2, 3); // printing as output lenght of array [callback, 2, 3] 
3


//Question 7 - Implement calc

const call = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    subtract(a) {
        this.total -= a;
        return this;
    },

}

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total); //30





