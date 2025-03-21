// Objects in javascript
// Introduction to Objects
// In JavaScript, an object is a collection of properties, where each property is a key-value pair. Objects allow you to store and manipulate data efficiently.

// Creating an Object
// There are multiple ways to create objects:
// 1.1 Using Object Literals

const person = {
  name: "Alice",
  age: 25,
  isStudent: false
};

// 1.2 Using the new Object() Constructor

const person = new Object();
person.name = "Alice";
person.age = 25;
person.isStudent = false;

// 1.3 Using a Constructor Function

function Person(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
}

const person1 = new Person("Alice", 25, false);

// 1.4 Using ES6 Classes

class Person {
  constructor(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
  }
}

const person1 = new Person("Alice", 25, false);


// 2. Accessing Object Properties

// 2.1 Dot Notation

console.log(person.name); // Alice

// 2.2 Bracket Notation


console.log(person["age"]); // 25

// 2.3 Dynamic Property Access

const key = "isStudent";
console.log(person[key]); // false

// Modifying Object Properties

person.age = 26;  // Modifying existing property
person.city = "New York"; // Adding new property
delete person.isStudent; // Deleting a property

// Object Methods
// A method is a function stored as an object property.

// 4.1 Defining a Method

const person = {
  name: "Alice",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet()); // Hello, my name is Alice

// 4.2 Using this Keyword
// this refers to the current object inside a method.

const person = {
  name: "Alice",
  showThis: function() {
    console.log(this);
  }
};

person.showThis(); // Logs the `person` object

// Object Iteration

// 5.1 Using for...in Loop

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// 5.2 Using Object.keys()

console.log(Object.keys(person)); // ["name", "age"]

// 5.3 Using Object.values()

console.log(Object.values(person)); // ["Alice", 25]

// 5.4 Using Object.entries()

console.log(Object.entries(person)); 
// [["name", "Alice"], ["age", 25]]

// Object Methods (Advanced)
// 6.1 Object.assign()
// Copies properties from one or more source objects to a target object.

const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// 6.2 Object.freeze()
// Prevents modification of object properties.

const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob"; // Doesn't change
console.log(obj.name); // Alice

// 6.3 Object.seal()
// Prevents adding or removing properties but allows modifying existing ones.

const obj = { age: 25 };
Object.seal(obj);
obj.age = 30; // Allowed
obj.name = "Alice"; // Not allowed
delete obj.age; // Not allowed
console.log(obj); // { age: 30 }

// 6.4 Object.hasOwnProperty()
// Checks if an object has a specific property.


console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("gender")); // false

// Prototypes and Inheritance
// Every JavaScript object has an internal prototype ([[Prototype]]).

// 7.1 Prototype Inheritance

const parent = {
  greet: function() {
    return "Hello!";
  }
};

const child = Object.create(parent);
console.log(child.greet()); // Hello!

// 7.2 Checking Prototypes

console.log(Object.getPrototypeOf(child)); // parent object
console.log(child.__proto__ === parent); // true

// ES6+ Features for Objects
// 8.1 Object Destructuring

const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25
// 8.2 Spread Operator (...)

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// 8.3 Object.entries() and Object.fromEntries()
// Convert objects to arrays and vice versa.

const obj = { name: "Alice", age: 25 };
const arr = Object.entries(obj);
console.log(arr); // [["name", "Alice"], ["age", 25]]

const objAgain = Object.fromEntries(arr);
console.log(objAgain); // { name: "Alice", age: 25 }

// 9. JSON (JavaScript Object Notation)
// JSON is a lightweight format for storing and transporting data.

// 9.1 Convert Object to JSON

const person = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(person);
console.log(jsonStr); // '{"name":"Alice","age":25}'

// 9.2 Convert JSON to Object

const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj); // { name: "Alice", age: 25 }

// 10. Object Performance Tips
// Use Object.freeze() for immutable objects
// This prevents accidental modifications.
// Use Map if keys are dynamic
// Objects have performance limitations with dynamic keys; Map is more efficient.
// Minimize Prototype Chain Lookups
// Accessing properties through multiple levels of the prototype chain can slow down performance.





//MORE EXAMPLE:

// EXAMPLE1:
const user = {
    name: "Lucky",
    age: 24,
    "like this video": true
};

console.log(user["like this video"]);

// EXAMPLE2:
const property = "firstName"
const name = "Piyush Agarwal"

const user ={
    [property] : name,
};
console.log(user.firstName); //Piyush Agarwal

// EXAMPLE3:
const func =(function(a){
    delete a;  //its not work because there is no objects or arr
    return a;
})(5);

console.log(func);

// EXAMPLE4:
const user ={
    name:"lucky",
    age:24,
    isTotallyAwesome:true,
}
for(key in user){

    console.log(user[key]);//lucky 24 true
}

//Question 1 - whats the output

const obj ={
    a:"one",
    b:"two",
    a:"three"  
};
console.log(obj); //{a: 'three', b: 'two'}  objects have two same value a,a first a will remove and second a take place and order og plase is a is first

//Question 2 - create a function  multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

let nums = {
    a: 100,
    b: 200,
    tittle: "My nums",
};
multiplyByTwo(nums);

function multiplyByTwo(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}
console.log(nums); //{a: 200, b: 400, tittle: 'My nums'}

//Question 3 - whats the output of the following code

const a ={};
const b ={key : "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

//Question 4 -  whats JSON.strigify and JSON.Parse

//using json.str
const user ={
    name:"lucky",
    age:24,
};

console.log(JSON.stringify(user)); //{"name":"lucky","age":24}

//using parse

const user ={
        name:"lucky",
        age:24,
    };
    const strObj = JSON.stringify(user)

    console.log(JSON.parse(strObj));  //{name: 'lucky', age: 24}age: 24name: "lucky"[[Prototype]]: Object

//commemt use to store value in local store

const user ={
    name:"lucky",
    age:24,
};
const strObj = JSON.stringify(user)

localStorage.setItem("test",strObj);
console.log(JSON.parse(localStorage.setItem("test")));  //{name: 'lucky', age: 24}age: 24name: "lucky"[[Prototype]]: Object

//Question 5 - whats the output 
console.log([..."human"]); //(5) ['h', 'u', 'm', 'a', 'n']

//Questions 6 - whats the output

const user = {name:"lydia", age:21};
const admin = {admin:true, ...user};

console.log(admin); //{admin: true, name: 'lydia', age: 21}

//Question 7 - whats the output

const settings ={
    username:"human",
    level:19,
    health:90,
};

const data = JSON.stringify(settings,["level","health"]);
console.log(data); //{"level":19,"health":90} 

//Question 8 -  whats the output

const shape = {
    redius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); //NAN

//Question 9 - what is destructing in object ?

let user ={
    name:"lucky",
    age:24,
    fullname:{
         first:"lucky1",
         last:"Singh",
    }
};

const name = "my name"
const {fullname : {first}} = user;  
console.log(first); 
//lucky1

//Question 10 - whats is output

function getItem(fruitList ,  favoriteFruit ,...args){
    return [...fruitList,...args,favoriteFruit]
}
console.log(getItem(["banana","apple"], "pear", "orange"));
(4) ['banana', 'apple', 'orange', 'pear']

//Question 11 - whats is output

let c ={greeting :"hey"}
let d;

d=c;
c.greeting ="hello";
console.log(d.greeting); //hello

//Question 12 - whats is output

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });
// both are targeting diffrent memory space and
// false
// false for both output

//Question 13 - whats is output

let person = {name: "human"};
const members =[person];
person =null;

console.log(members); //not effecting output: {name: 'human'}

let person = {name: "human"};
const members =[person];
person.name =null;

console.log(members); //now its effect output :  {name: null}

//Question 14 - What the output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));

};

multiply();//20
multiply();//20
multiply(value);//20
multiply(value);//40


//Question 15 - what the output

function changeAgeReference(person) {
    person.age = 25;
    person = {
        name: "john",
        age: 50,
    };
    return person;
}

const personObj1 = {
    name: "alex",
    age: 30,
};

const personObj2 = changeAgeReference = (personObj1);
console.log(personObj1); //{name: 'alex', age: 30}
console.log(personObj2); //{name: 'john', age: 50}


//Question 16 - what shallow copy and deep copy?


//Question 17 - what shallow copy and deep copy?
//1
let user ={
    name: "Human",
    age: 25
};

const objClone = Object.assign({}, user);

console.log(user, objClone); 
// {name: 'Human', age: 25}
// {name: 'Human', age: 25}

//2
let user ={
    name: "Human",
    age: 25
};

const objClone = Object.assign({}, user);
objClone.name ="lucky";
console.log(user, objClone); 
// {name: 'Human', age: 25}  not effecting original data
// {name: 'lucky', age: 25}

//3
let user ={
    name: "Human",
    age: 25
};

const objClone = JSON.parse(JSON.stringify(user));
objClone.name ="lucky";
console.log(user, objClone); 
// {name: 'Human', age: 25} 
// {name: 'lucky', age: 25}

// 4
let user ={
    name: "Human",
    age: 25
};

const objClone = {...user}
objClone.name ="lucky";
console.log(user, objClone); 
// {name: 'Human', age: 25} 
// // {name: 'lucky', age: 25}






















