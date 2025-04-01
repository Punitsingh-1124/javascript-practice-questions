//Event Propagation in javascript
//Question 1 - What is Event Propagation?
//Question 2 - what is event Bubbling?
//Question 3 - event.target vs this.target vs event.currentTarget
//Question 4 - what is event capturing / trickling
//Question 5 - How to stop bubbling or capturing?
//Question 6 - what is event Delegation?


// Event Propagation in JavaScript
// Event propagation determines the order in which events fire when an element inside another element is clicked. It has two phases: Bubbling and Capturing (Trickling).


// 1️⃣ What is Event Propagation?
// Event propagation is the way events travel through the DOM tree when an event occurs on a child element. It consists of three stages:

// Capturing phase: The event starts at the root (document) and moves down to the target element.

// Target phase: The event reaches the target element.

// Bubbling phase: The event propagates back up to the root (document).

//Question 2 - what is event Bubbling?
// In event bubbling, when an event occurs on a child element, it first executes the child element’s event handler and then moves up to its parent, grandparent, and so on.

const div = document.querySelector(".Div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
    alert("div");
});
form.addEventListener("click", function () {
    alert("form");
});
button.addEventListener("click", function () {
    alert("button");
});

//Question 3 - event.target vs this.target vs event.currentTarget
//1. event.target : The actual element that triggered the event.
//2. this.target : ❌ Not valid in JavaScript event handling. (this refers to the element that has the event listener, but .target doesn’t exist)
//3. event.currentTarget : The element on which the event listener is attached.

const div = document.querySelector(".Div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", func);
form.addEventListener("click", func);
button.addEventListener("click", func);

function func(event) {
    alert("currentTarget =" + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this =" + this.tagName)
}

//Question 4 - what is event capturing / trickling
// Event capturing (also called trickling) is the opposite of bubbling. The event starts from the root (document) and goes down to the target element before firing.

const div = document.querySelector(".Div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
    alert("div");
}, {
    capture: true,
});
form.addEventListener("click", function () {
    alert("form");
}, {
    capture: true
});
button.addEventListener("click", function () {
    alert("button");
}, {
    capture: true
});

//Question 5 - How to stop bubbling or capturing?
// You can stop event propagation using:

// event.stopPropagation() → Stops the event from bubbling or capturing.

// event.stopImmediatePropagation() → Stops bubbling/capturing and prevents other event listeners of the same event.

const div = document.querySelector(".Div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (e) {
    // e.stopPropagation();
    alert("div");
});
form.addEventListener("click", function (e) {
    // e.stopPropagation();
    alert("form");
});
button.addEventListener("click", function (e) {
    e.stopPropagation();
    alert("button");
});

//Question 6 - what is event Delegation?
// Event delegation is a technique where you attach a single event listener to a parent instead of multiple child elements. It works because of event bubbling.

document.querySelector(".products").addEventListener("click", (event) => {
   console.log(event.target.closest("SPAN"));


    if(event.target.tagName === "SPAN"){
        window.location.href += "/" + event.target.className;
    }

});

//Question 7 -  what is output?

const div = document.querySelector(".Div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
    alert("div");
});
form.addEventListener("click", function () {
    alert("form");
},{
    capture: true
});
button.addEventListener("click", function () {
    alert("button");
});

//Question 8 - create a model which closes by clicking on negative space?

const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click", () => {
    toggleModal(true);
})

function toggleModal(toggle) {
    container.style.display = toggle ? "flex " : "none";
}

container.addEventListener("click", (e) => {
    if(e.target.className === "modalContainer")
    toggleModal(false);
});




