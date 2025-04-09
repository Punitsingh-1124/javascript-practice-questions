//map, filter and reduce
//Polyfill for map()
//Polyfill for filter()
//Polyfill for reduce()
//call , Bind and Apply in Js (Exlicit Binding)

// Want to test it?
//map, filter and reduce
const arr = [1, 2, 3];

// Using custom map
console.log(arr.myMap(x => x * 3));  // [3, 6, 9]

// Using custom filter
console.log(arr.myFilter(x => x > 1));  // [2, 3]

// Using custom reduce
console.log(arr.myReduce((acc, val) => acc + val, 0));  // 6

// 1. map() Polyfill
// What it does:

// Returns a new array.

// Applies a function to each element of the array.

// Doesn’t mutate the original array.

// ✅ Built-in example:

//Array.map((num,i,arr)=>{ })

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
};

const nums = [1, 2, 3, 4];

const multiplyThree = nums.myMap((num, i, arr) => {
    return num * 3;
});
console.log(multiplyThree);

// example:2
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        // Skip empty slots in sparse arrays
        if (this.hasOwnProperty(i)) {
            result.push(callback(this[i], i, this));
        }
    }
    return result;
};

const nums = [1, 2, 3];
const doubled = nums.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6]

//Polyfill for filter()
2. filter() Polyfill
// 🔹 What it does:
// Returns a new array.

// Includes only elements that pass a condition (returns true).

// ✅ Built-in example:

Array.prototype.myfilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
};
const nums = [1, 2, 3, 4];

const moreThanTwo = nums.myfilter((num) => {
    return num > 2;
});
console.log(moreThanTwo);

// example:2
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};

const nums = [1, 2, 3, 4];
const evens = nums.myFilter(num => num % 2 === 0);
console.log(evens); // [2, 4]


//Polyfill for reduce()
// 3. reduce() Polyfill
// 🔹 What it does:
// Reduces array to a single value.

// Applies a function with an accumulator and current value.

// ✅ Built-in example:

//arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];

    }
    return accumulator;
};
const nums = [1, 2, 3, 4];

const sum = nums.myReduce((acc,curr,i,arr) => {
    return acc + curr;
});
console.log(sum);

// example:2
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initial value is passed, use the first element
    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }

    return accumulator;
};

const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10



//call , Bind and Apply in Js (Exlicit Binding)
//Question - polyfill for call method
// 🔹 call() – Polyfill + Explanation
// 📌 What it does:
// Calls a function immediately, setting this to the first argument.

// Any additional arguments are passed individually.

// ✅ Example:

let car1 = {
    color: "red",
    company: "Ferrari",
};

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    );

}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "It's not Callable");
    }
    context.fn = this;
    context.fn(...args);
};

purchaseCar.myCall(car1, "₹", 5000000);


//Question - polyfill for Apply method
// What it does:
// Same as call(), but it takes arguments as an array.

// ✅ Example:

let car1 = {
    color: "red",
    company: "Ferrari",
};

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    );

}

Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== 'function') {
        throw new Error(this + "It's not Callable");
    }
    if (!Array.isArray(args)) {
        throw new TypeError("createListFromArrayLike called on non-object")

    }
    context.fn = this;
    context.fn(...args);
};

purchaseCar.myApply(car1, ["₹", 5000000]);


//Question - polyfill for Bind Method
// What it does:
// Returns a new function with a bound this value.

// Doesn’t call it immediately (unlike call and apply).

// ✅ Example:


let car1 = {
    color: "red",
    company: "Ferrari",
};

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    );

}

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "It's not bind");
    }
  context.fn =this;
  return function(...newArgs){
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.myBind(car1);
console.log(newFunc("₹", 5000000));

//Closures in Javascript
// - Once Polyfill
// - Memoize Polyfill

function once(func, context) {
    let ran;
    return function () {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        };
        return ran;
    };
}
const hello = once((a, b) => console.log("hello", a, b));
hello(1, 2)

// - Memoize Polyfill

function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];

    };
}

const clumsyProduct = (num1, num2) => {
    for (let i = 1; i <= 1000000; i++) { }
    return num1 * num2;
}

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time('First call');
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd('First call');

console.time('second call');
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd('second call');

//promises in javascript
// polyfill for promises

function PromisePolyFill(executor) {
    let onResolve, onReject, isFulfilled = false, isCalled = false, isRejected = false, value;

    function resolve(val) {
        isFulfilled = true
        value = val;
        onResolve(value);

        if (typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true
        }


    }
    function reject(val) {
        isRejected = true
        value = val;
        if (typeof onReject === "function") {
            onReject(val);
            isCalled = true;
        }
    }


    this.then = function (callback) {
        onResolve = callback;

        if (isFulfilled && !isCalled) {
            isCalled = true
            onResolve(value);
        }


        return this;
    };
    this.catch = function (callback) {
        onReject = callback
        if (isFulfilled && !isCalled) {
            isCalled = true
            onResolve(value);
        }
        return this;
    };
    try {

        executor(resolve, reject)
    } catch (error) {
        reject(error);
    }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000)
});

examplePromise
    .then((res) => {
        console.log(res);

    }).catch((err) => {
        console.error(err);

    });




