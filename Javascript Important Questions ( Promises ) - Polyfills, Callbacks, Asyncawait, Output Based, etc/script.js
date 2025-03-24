//Promises in JavaScript
//Synchronous vs Asynchronous Code
//callbacks
//Promises
//promises chaning

//sync
console.log("First line executed");

console.log("second line executed");

console.log("Third line executed");

//Async
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

// Using callBack
console.log("Start");

function importantAction(username,cb) {
    setTimeout(() => {
        cb (`Hello to ${username}`);
    }, 1000);
}
const message = importantAction("krishna", function(){
    console.log(message);

});

console.log("Stop");
Start
stop
hello to Krishna

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










