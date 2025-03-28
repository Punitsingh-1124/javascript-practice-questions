// Promises in JavaScript
// Synchronous vs Asynchronous Code
// callbacks
// Promises
// promises chaning
// uning Promises combineter
// 4 types of promises combineter
// 1. .all
// 2. .race
// 3. .allSelected
// 4. .any
// async&await


// Synchronous vs Asynchronous Code
//1. Synchronous Code
// Synchronous code executes line by line, meaning each operation must complete before the next one starts.

// Example:
console.log("Start");
console.log("Middle");
console.log("End");
// Output:
// Start
// Middle
// End
// Everything runs in order, blocking the next line until the previous one is finished.

// Example:
console.log("First line executed");

console.log("second line executed");

console.log("Third line executed");

// 2.Asynchronous Code
// Asynchronous code does not wait for a task to complete before moving to the next line. Instead, it allows execution to continue while waiting for a long-running operation.

// Example:
console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 2000);

console.log("End");
// Output:
// Start
// End
// Async Task  (appears after 2 seconds)
// The setTimeout function is asynchronous, so JavaScript moves to the next task without waiting.

// Example:
console.log("First line executed");

setTimeout(() => {
    console.log("second line executed");
}, 1000);

console.log("Third line executed");

//More exaples
console.log("Start");

function importantAction(username) {
    setTimeout(() => {
        return `Hello to ${username}`;
    }, 1000);
}
const message = importantAction("krishna");
console.log(message);

console.log("Stop");
//Start
//undifined
//stop

//3. Callbacks
// A callback is a function passed as an argument to another function, which gets executed later.

// Example:
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback(); // Call the function passed as an argument
    }, 2000);
}

function displayData() {
    console.log("Displaying Data");
}

fetchData(displayData);
// Output:
// Data fetched  (after 2 seconds)
// Displaying Data
// Callbacks are used for handling async operations but can lead to callback hell when nested deeply.
console.log("Start");

//Using callback example:
function importantAction(username,cb) {
    setTimeout(() => {
        cb (`Hello to ${username}`);
    }, 1000);
}
const message = importantAction("krishna", function(){
    console.log(message);

});

console.log("Stop");
// Start
// stop
// hello to Krishna

//More Example

console.log("Start");

function importantAction(username,cb) {
    setTimeout(() => {
        cb (`Hello to ${username}`);
    }, 1000);
}
function newPerson(username2,cb){
    setTimeout(() => {
        cb(`Hello to new friend ${username2}`);
    }, 1000);
}
function newPerson2(username3,cb){
    setTimeout(() => {
        cb(`Hello to new friend 3 ${username3}`);
    }, 1000);
}

const message = importantAction("krishna", function(message){
    console.log(message);
    newPerson("Aman",(action)=>{
        console.log(action);
    });
    newPerson2("Harry",(e)=>{
        console.log(e);
    });
});

console.log("Stop");
// Start
// Stop
// Hello to krishna
// Hello to new friend Aman
// Hello to new friend 3 Harry


//Promises
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

// States of a Promise
// Pending → Initial state
// Fulfilled → Operation completed successfully
// Rejected → Operation failed

// Example1:
console.log("Start");

const sub = new Promise((resolve, reject ) =>{
     setTimeout(() => {
        const result = true;
        if(result) resolve("Hello To EveryOne");
        else reject(new Error("Not hello to everyboddy"));
     }, 2000);
});

sub.then((res)=>{
    console.log(res);
}).catch((err)=>{
  console.error(err);
})

console.log("Stop");

// More example
console.log("start");

const sub = Promise.resolve("Hello to everyone");
console.log(sub);
sub.then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log("error to print",rej);

})
console.log("stop");

// example2:
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Data Loaded!");
        } else {
            reject("Error loading data.");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))  // Executes if resolved
    .catch(error => console.log(error));  // Executes if rejected


// Output (after 2 seconds):

// Data Loaded!

// If success is false, it will print:

// Error loading data.

//More Example using promises

console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello to ${username}`);
        }, 1000);

    })
}
function newPerson(username2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend ${username2}`);
        }, 1000);
    })
}
function newPerson2(username3) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend 3 ${username3}`);
        }, 1000);
    })
}

importantAction("Aman")
    .then((res) => {
        console.log(res);
        newPerson("Dhiraj")
            .then((res) => {
                console.log(res);
                newPerson2("Krishna")
                    .then((res) => {
                        console.log(res);
                    })
            })
    })
    .catch((err) => {
        console.log(err);
    })

console.log("Stop");

// Start
// Stop
// Hello to Aman
// Hello to new friend Dhiraj
// Hello to new friend 3 Krishna


//More exmaple using Promises chaning
// Promise Chaining
// We can chain multiple .then() methods to handle sequential asynchronous operations.

// Example1:
console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello to ${username}`);
        }, 1000);

    })
}
function newPerson(username2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend ${username2}`);
        }, 1000);
    })
}
function newPerson2(username3) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend 3 ${username3}`);
        }, 1000);
    })
}

importantAction("Aman")
    .then((res) => {
        console.log(res);
        return newPerson("Dhiraj");
    })
    .then((res) => {
        console.log(res);
        return newPerson2("krishna");
    }).then((res) => {
        console.log(res);

    })
    .catch((err)=>{
        console.log(err);   
    });

console.log("Stop");
//// Start
// Stop
// Hello to Aman
// Hello to new friend Dhiraj
// Hello to new friend 3 Krishna

// Example:
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data + " -> Processed"), 2000);
    });
}

fetchData()
    .then(result => processData(result))
    .then(finalResult => console.log(finalResult))
    .catch(error => console.log(error));

// Output (after 4 seconds):
// Data fetched -> Processed
// Each .then() returns a new Promise, enabling sequential execution.

// uning Promises combineter
// 4 types of promises combineter
// 1. .all
// 2. .race
// 3. .allSelected
// 4. .any

// Using Promise Combinators
// Promise combinators help manage multiple Promises efficiently.

// 1. Promise.all
// Waits for all Promises to resolve or rejects if any one fails.

let p1 = Promise.resolve("First Promise");
let p2 = new Promise(resolve => setTimeout(() => resolve("Second Promise"), 2000));
let p3 = Promise.resolve("Third Promise");

Promise.all([p1, p2, p3])
.then(results => console.log(results))
.catch(error => console.log(error));

// Output (after 2 seconds):
// ["First Promise", "Second Promise", "Third Promise"]
// If any promise rejects, the whole Promise.all fails.


//.all -- own
console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello to ${username}`);
        }, 1000);

    })
}
function newPerson(username2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend ${username2}`);
        }, 1000);
    })
}
function newPerson2(username3) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend 3 ${username3}`);
        }, 1000);
    })
}

Promise.all([importantAction("Aman"),
newPerson("Dhiraj"),
newPerson2("krishna"),
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('Error: Promises failed', err);
});

console.log("Stop");

//Start
//Stop
// (3) ['Hello to Aman', 'Hello to new friend Dhiraj', 'Hello to new friend 3 krishna']
// 0: "Hello to Aman"
// 1: "Hello to new friend Dhiraj"
// 2: "Hello to new friend 3 krishna"
// length: 3
// [[Prototype]]: Array(0)

// 2. Promise.race
// Returns the first settled Promise (fulfilled or rejected).

let fast = new Promise(resolve => setTimeout(() => resolve("Fastest"), 1000));
let slow = new Promise(resolve => setTimeout(() => resolve("Slowest"), 3000));

Promise.race([fast, slow])
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Output (after 1 second):
// Fastest
// It takes the result of the fastest promise.


// .race -- own
console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello to ${username}`);
        }, 1000);

    })
}
function newPerson(username2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend ${username2}`);
        }, 1000);
    })
}
function newPerson2(username3) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend 3 ${username3}`);
        }, 1000);
    })
}

Promise.race([importantAction("Aman"),
newPerson("Dhiraj"),
newPerson2("krishna"),
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('Error: Promises failed', err);
});

console.log("Stop");
//star
//stop
//hello aman

// 3. Promise.allSettled
// Waits for all Promises to settle (fulfilled or rejected) and returns all results.

let pA = Promise.resolve("Task A Done");
let pB = Promise.reject("Task B Failed");
let pC = new Promise(resolve => setTimeout(() => resolve("Task C Done"), 2000));

Promise.allSettled([pA, pB, pC])
    .then(results => console.log(results));

// Output (after 2 seconds):
// [
//   { status: "fulfilled", value: "Task A Done" },
//   { status: "rejected", reason: "Task B Failed" },
//   { status: "fulfilled", value: "Task C Done" }
// ]
// Unlike Promise.all, it doesn't fail if some promises reject.


// .allSetteled -- own

console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello to ${username}`);
        }, 1000);

    })
}
function newPerson(username2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject(`Hello to new friend ${username2}`);
        }, 1000);
    })
}
function newPerson2(username3) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend 3 ${username3}`);
        }, 1000);
    })
}

Promise.allSettled([importantAction("Aman"),
newPerson("Dhiraj"),
newPerson2("krishna"),
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('Error: Promises failed', err);
});

console.log("Stop");

// start
// stop
// (3) [{…}, {…}, {…}]
// 0: {status: 'fulfilled', value: 'Hello to Aman'}
// 1: {status: 'rejected', reason: 'Hello to new friend Dhiraj'}
// 2: {status: 'fulfilled', value: 'Hello to new friend 3 krishna'}
// length: 3[[Prototype]]: Array(0)

// 4. Promise.any
// Returns first fulfilled Promise, ignoring rejected ones. If all fail, it throws an error.

let pX = Promise.reject("X Failed");
let pY = new Promise(resolve => setTimeout(() => resolve("Y Success"), 2000));
let pZ = Promise.reject("Z Failed");

Promise.any([pX, pY, pZ])
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Output (after 2 seconds):
// Y Success
// If all promises fail, it throws an AggregateError


//.any --own
console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello to ${username}`);
        }, 1000);

    })
}
function newPerson(username2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend ${username2}`);
        }, 100);
    })
}
function newPerson2(username3) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend 3 ${username3}`);
        }, 2000);
    })
}

Promise.any([importantAction("Aman"),
newPerson("Dhiraj"),
newPerson2("krishna"),
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('Error: Promises failed', err);
});

console.log("Stop");
//start
//stop
//Hello to new friend Dhiraj

//async&await

// async & await
// async and await simplify working with Promises, making async code look synchronous.

// Example:
async function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("Data Fetched"), 2000));
}

async function processData() {
    console.log("Fetching...");
    let data = await fetchData();  // Waits for promise to resolve
    console.log(data);
}

processData();
// Output:
// Fetching...
// (Data Fetched appears after 2 seconds)


// --own
console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello to ${username}`);
        }, 1000);

    })
}
function newPerson(username2) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend ${username2}`);
        }, 1000);
    })
}
function newPerson2(username3) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Hello to new friend 3 ${username3}`);
        }, 1000);
    })
}

const result = async () => {
    try {
        const message1 = await importantAction("Aman");
        console.log(message1);

        const message2 = await newPerson("Dhiraj");
        console.log(message2);

        const message3 = await newPerson2("Krishna");
        console.log(message3);

        console.log({ message1, message2, message3 });

    } catch (error) {
        console.error("Promises Failed", Error);

    }

}
result();

console.log("Stop");
// Start
// Stop
// Hello to Aman
// Hello to new friend Dhiraj
// Hello to new friend 3 Krishna

//Promises in Javascript
//Question 1 - Whats the output

console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
});

promise1.then((res) => {
    console.log(res);
});

console.log("stop");
start
1
stop
2

// QUestion 2 - whats output

console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
});

promise1.then((res) => {
    console.log(res);
});
console.log("end");
// start
// 1
// 3
// stop
// 2

// Question 3 - what's the output

console.log("start");

const fn = () =>
    new Promise((resolve, reject) => {
        console.log(1);
        resolve("success")
    });

console.log("middle");
fn().then((res) => {
    console.log(res);
});

console.log("end");
//start
//middle
//1
//stop
//success

//Question 4 - What's the output?

function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promise = job();

promise.then(function () {
    console.log("Success 1");
})
    .then(function () {
        console.log("Success 2");
    })
    .then(function () {
        console.log("Success 3");
    })
    .catch(function () {
        console.log("Error 1");
    })
    .then(function () {
        console.log("Success 4");
    });
//Error 1
//Success 4

//Question 5 - what is output
function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("succes");
        } else {
            reject("error");
        }
    });
}

let promise = job(true);

promise
    .then(function (data) {
        console.log(data);

        return job(false);
    })
    .catch(function (error) {
        console.log(error);

        return "Error caught";
    })
    .then(function (data) {
        console.log(data);

        return job(true);
    })
    .catch(function (error) {
        console.log(error);

    });
//success 
//error
//Error Caught

//Question 6 - whats output 

function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("succes");
        } else {
            reject("error");
        }
    });
}

let promise = job(true);  //resolve("Success")

promise
    .then(function (data) {
        console.log(data);  //Success

        return job(true);
    })
    .then(function (data) {
        if (data !== "victory") {
            throw "Defeat";
        }
        return job(true);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
        return job(false);
    })
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .catch(function (error) {
        console.log(error);
        return "Error caught";
    })
    .then(function (data) {
        console.log(data);
        return new Error("test");
    })
    .then(function (data) {
        console.log("Success", data.message);
    })
    .catch(function (data) {
        console.log("Error", data.message);
    });

//Success
//Defeat
//error
//Error caught
//Success test

//Question 7 - Promises Chainig

const firstPromise = new Promise((resolve, reject) => {
    resolve("First");
});

const secondPromise = new Promise((resolve, reject) => {
    resolve("First");
});

secondPromise
    .then((res) => {
        return res;
    })
    .then((res) => console.log(res));
//First

//Question 8 - Rewrite this example code using async/await instead of '.then/catch'

async function loadJson(url) {

    let response = await fetch(url)

    if (response.status == 200) {
        let json = await response.json()
        return json;
    }
    throw new Error(response.status);

    // return fetch(url).then((response) => {
    //     if (response.status == 200) {
    //         return response.json();
    //     } else {
    //         throw new Error(response.status);
    //     }
    // });

}

loadJson("https://fakeurl.com/no-such-user.json").catch((error) => {
    console.log(err);
});

//Question 9 - solve Promise Recursively

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Important action done for ${username}`), 1000);
    });
}
function likeTheVideo(video) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Liked the video: ${video}`), 500);
    });
}
function shareTheVideo(video) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Shared the video: ${video}`), 700);
    });
}

function promRecurse(funcPromises) {
    if (funcPromises.length === 0) return;

    const currPromise = funcPromises.shift();

    currPromise
        .then((res) => console.log(res))
        .catch((err) => console.error(err));

    promRecurse(funcPromises);
}


promRecurse(
    [importantAction("coders"),
    likeTheVideo("javascript Interview Quetion"),
    shareTheVideo("JavaScript Interview Question")]
);
// javascript Interview Quetion
// Shared the video: JavaScript Interview Question
// Important action done for coders













