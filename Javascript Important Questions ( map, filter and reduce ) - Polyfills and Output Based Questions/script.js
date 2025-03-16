//(Important - You have to print the output example in console and in the terminal comment out all the examples except that one to print answers )
//map , filter and reduce
//What is map() ?
//What is filter() ?
//What is reduce() ?
//polyfill for map()
//polyfill for filter()
//polyfill for reduce()
//quetion : what is diffrent between map vs forEach
// map, filter and reduce - o/p Based Quetions



// map(), filter(), and reduce() in JavaScript
// These are higher-order functions in JavaScript that are used for array manipulation.




//map
// The map() method is used to create a new array by applying a function to each element of an existing array. It does not modify the original array.

// Example:
const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {
    return num * 5 + i;
});

console.log(multiplyThree); // [5, 11, 17, 23];

// Example:
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

//filter
//The filter() method is used to create a new array containing only the elements that satisfy a certain condition.

// Example:

const nums1 = [1, 2, 3, 4];

const moreThanTwo = nums1.filter((num) => {
    return num > 2;
})

console.log(moreThanTwo);

// Example:

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//reduce
//The reduce() method is used to accumulate values from an array into a single value by applying a function.
//if there is no initial value, it takes first element of array as value for accumulator

// Example:

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);

console.log(sum);

// Example:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 10


// Polyfills for map(), filter(), and reduce()
// A polyfill is a way to provide support for functions that may not be available in older browsers.

//polyfill for map()
// cb means callback 
//this callback array

// Example:

Array.map((num, i, arr) => { })

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp;
};
const nums = [1, 2, 3, 4]

const multiplyThree = nums.myMap((num, i, arr) => {
    return num * 5;
});

console.log(multiplyThree);

// Example:

Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this)); // Pass (element, index, array)
    }
    return result;
};

// Usage
const numbers = [1, 2, 3];
const squared = numbers.myMap(num => num * num);
console.log(squared); // Output: [1, 4, 9]


//polyfill for filter()

// Example:

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this))
            temp.push(this[i]);
    }
    return temp;
};

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.myFilter((num) => {
    return num > 2;
})

console.log(moreThanTwo);

// Example:

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Usage
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//polyfill for reduce()
// curr means current value 
//arr.reduce((acc, curr, i , arr)=>{},initialValue)

// Example:

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];

    }

    return accumulator;
};

const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);

console.log(sum);

// Example:

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Usage
const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10



//quetion in unaccandmy: what is diffrent between map vs forEach

const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map((ar) => {
    return ar + 2;
});


const forEachResult = arr.forEach((ar, i)=>{
    arr[i] = ar +  3;
});

console.log(mapResult, forEachResult, arr);

// map, filter and reduce - o/p Based Quetions
// Question 1 - return only name of students in capital

let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Rohan", rollNumber: 15, marks: 69 },
    { name: "Kamlesh", rollNumber: 16, marks: 35 },
    { name: "Deepak", rollNumber: 7, marks: 55 },
];

// using for method
let names =[];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}

console.log(names);

//using for map
const names = students.map((stu) => stu.name.toUpperCase());
console.log(names);

// output :
// (4) ['PIYUSH', 'ROHAN', 'KAMLESH', 'DEEPAK']

// Question 2 - return only details of thoes who scored more than 60 marks
// using filter

const details = students.filter((stu) => stu.marks > 60  );
console.log(details);

// outpu :
// (2) [{…}, {…}]
// 0:{name: 'Piyush', rollNumber: 31, marks: 80}
// 1:{name: 'Rohan', rollNumber: 15, marks: 69}
// length: 2

// Question 3 - More than 60 marks and rollNumber grater than 15
// using filter

const details = students.filter((stu) => stu.marks> 60 && stu.rollNumber > 15)
console.log(details);

// output :
// 0:{name: 'Piyush', rollNumber: 31, marks: 80}
// length :1

// Question 4 - Sum of marks of all students
//using reduce

const totalSum = students.reduce((acc, curr) => acc+curr.marks, 0)
console.log(totalSum);

// output :
// 239

// Question - retuern name of the student who scored more than 60
// using filter and map method togeother

const names = students.filter((stu)=> stu.marks > 60).map((stu) => stu.name);
console.log(names);

// output :
// [ 'Piyush', 'Rohan' ]

//Question - return total marks for student with marks greater than 60 , after 20 marks have been added to thoes who scored less than 60

const  totalmarks = students.map((stu)=>{
     if(stu.marks < 60){
        stu.marks+= 20;
     }
     return stu;
}).filter(stu => stu.marks > 60).reduce((acc, curr) => acc+ curr.marks, 0 )
console.log(totalmarks);

// output :
// 224




