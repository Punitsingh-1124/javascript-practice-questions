//Debouncing and Throttling in javascript
//Polyfill Implementation

// 1. Debouncing
// Concept
// Debouncing ensures that a function is executed only after a certain delay, preventing frequent execution due to rapid events like keypress, window resize, or button clicks.

// Example Use Case
// Search input box: The API call should be made only after the user stops typing.

// 2. Throttling
// Concept
// Throttling ensures that a function is executed at most once in a specified time interval, even if triggered multiple times.

// Example Use Case
// Handling scroll or resize events: The event listener should trigger at fixed intervals rather than every time the event fires.

//Question 1 - Create a button UI add Debounce as follows =>
//           --> show "button pressed <x> times" every time button is pressed
//           --> Increase "Trriggered <y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const debouncedCount = _.debounce(()=>{
    count.innerHTML = ++triggerCount;
},800);

btn.addEventListener("click", ()=>{
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
});


//Question 2 - Create a button UI add Throttle as follows =>
//           --> show "button pressed <x> times" every time button is pressed
//           --> Increase "Trriggered <y> Times" count after 800ms of Throttle

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();

const throttleCount =_.throttle(()=>{
    const now = new Date().getTime();
    console.log(now - start);
    count.innerHTML = ++triggerCount;

},800);

btn.addEventListener("click", ()=>{
    btnPress.innerHTML = ++pressedCount;
    throttleCount();
});

//Question 3 - Create debounce() Polyfill Implementation

// Implementation of Debounce
// A debounce function delays the execution of a function until after a specified wait time has passed since the last time the function was called.

// Polyfill Implementation 1:

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const myDebounce = (cb, d) => {
    let timer;

    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, d);
    }


};

const debouncedCount = myDebounce(() => {
    triggerCount += 1;
    count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
});


// Polyfill Implementation 2:

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Example Usage
function handleSearchInput(event) {
    console.log("Searching for:", event.target.value);
}

const debouncedSearch = debounce(handleSearchInput, 500);

// Attach to an input field
document.getElementById("searchBox").addEventListener("input", debouncedSearch);


// Explanation
// Every time the function is triggered, the previous timer is cleared.

// A new timer starts, and the function is executed only after the delay if no new event occurs.

// This avoids unnecessary function calls while the user is typing.




//Question 4 - Create Throttle() Polyfill Implementation

// Implementation of Throttle
// A throttle function ensures that a function is executed at most once per specified interval.

// Polyfill Implementation 1:

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();


const myThrottle = (cb, d) => {
    let last = 0;  //1100ms

    return (...args) => {
        let now = new Date().getTime();
        if (now - last < d) return; //(example)1500ms - 1100ms = 400ms
        last = now;
        return cb(...args);
    };


};

const debouncedCount = myThrottle(() => {
    triggerCount += 1;
    count.innerHTML = ++triggerCount;
}, 1000);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
});

// Polyfill Implementation 2:

function throttle(fn, interval) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Example Usage
function handleScroll() {
    console.log("Scroll event triggered at", new Date().toISOString());
}

const throttledScroll = throttle(handleScroll, 1000);

// Attach to window scroll event
window.addEventListener("scroll", throttledScroll);

// Explanation
// The function is executed immediately and then blocked for the specified interval.

// If the event is triggered again within that interval, it is ignored.

// Ensures that a function is not executed too frequently, preventing performance issues.

