// 1. Introduction to JavaScript
// JavaScript kya hai? Ek powerful scripting language hai jo mainly web pages ko interactive banane ke liye use hoti hai. Isse hum browser aur server dono pe code likh sakte hain.
// JavaScript is a versatile, high-level, interpreted programming language used for web development, server-side scripting, and more.

// 2. Variables (var, let, const)
// Variables kya hain? Ye memory me data store karne ke liye containers hain. var, let, const teen tarah ke variables hote hain, scope aur update/redeclare hone ke rules alag hain.
var x = 10; // function-scoped, can be redeclared/updated
let y = 20; // block-scoped, can be updated but not redeclared in same scope
const z = 30; // block-scoped, cannot be updated or redeclared

// 3. Data Types
// Data types matlab kis type ka data variable me store ho raha hai, jaise string, number, boolean, null, undefined, symbol, object.
let str = "Hello"; // String
let num = 42; // Number
let bool = true; // Boolean
let n = null; // Null
let u; // Undefined
let sym = Symbol('id'); // Symbol
let obj = { name: "Alice" }; // Object

// 4. Operators
// Operators se hum variables ya values pe operations karte hain, jaise +, -, ==, &&, ||, etc. Arithmetic, assignment, comparison, logical, bitwise, ternary types hote hain.
let sum = 5 + 3; // Arithmetic
let a = 10; a += 2; // Assignment
let isEqual = (5 == '5'); // Comparison
let and = true && false; // Logical
let bit = 5 & 1; // Bitwise
let ternary = (a > 5) ? "Yes" : "No"; // Ternary

// 5. Conditional Statements
// Conditional statements se hum code ko condition ke hisaab se chalate hain, jaise if, else, else if, switch.
if (a > 5) {
  // ...code...
} else if (a === 5) {
  // ...code...
} else {
  // ...code...
}
switch(a) {
  case 10: /*...*/ break;
  default: /*...*/
}

// 6. Loops
// Loops se hum ek hi code ko baar-baar chala sakte hain, jaise for, while, do...while, for...in, for...of.
for (let i = 0; i < 3; i++) { /*...*/ }
let i = 0; while (i < 3) { i++; }
i = 0; do { i++; } while (i < 3);
const arr = [1,2,3];
for (let idx in arr) { /*...*/ } // index
for (let val of arr) { /*...*/ } // value

// 7. Functions
// Function ek block of code hai jo baar-baar use ho sakta hai. Declaration, expression, arrow function, parameters, return value sab isme aate hain.
function add(a, b) { return a + b; } // Declaration
const sub = function(a, b) { return a - b; }; // Expression
const mul = (a, b) => a * b; // Arrow function

// 8. Scope
// Scope matlab variable ya function kis area me accessible hai. Global, local, block, lexical scope hote hain.
// Global scope
let globalVar = "global";
function testScope() {
  let localVar = "local"; // Local scope
  if (true) {
    let blockVar = "block"; // Block scope
  }
}

// 9. Hoisting
// Hoisting ka matlab hai variables aur functions ka declaration code ke top pe chala jata hai (var ke case me).
console.log(hoistedVar); // undefined
var hoistedVar = 5;
// let/const are not hoisted the same way

// 10. Closures
// Closure ek aisa function hai jo apne parent function ke variables ko yaad rakhta hai, even after parent function finish ho gaya ho.
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
counter(); // 1
counter(); // 2

// 11. Template Literals
// Template literals se hum string me variables ya expressions easily embed kar sakte hain, backticks (`) ka use hota hai.
let name = "Bob";
let greeting = `Hello, ${name}!`;

// 12. Arrays and Array Methods
// Array ek ordered collection hai. push, pop, shift, unshift, map, filter, reduce jaise methods se array ko modify ya process karte hain.
let nums = [1,2,3];
nums.push(4); // [1,2,3,4]
nums.pop(); // [1,2,3]
nums.shift(); // [2,3]
nums.unshift(0); // [0,2,3]
let mapped = nums.map(n => n * 2); // [0,4,6]
let filtered = nums.filter(n => n > 1); // [2,3]
let reduced = nums.reduce((acc, n) => acc + n, 0); // 5

// 13. Objects and Object Methods
// Object ek key-value pair ka collection hai. Properties, methods, destructuring sab isme aata hai.
let person = {
  first: "Alice",
  last: "Smith",
  fullName() { return `${this.first} ${this.last}`; }
};
let { first, last } = person; // Destructuring

// 14. String Methods
// String methods se hum string ko manipulate ya check kar sakte hain, jaise length, toUpperCase, includes, replace, etc.
let s = "hello";
s.length; // 5
s.toUpperCase(); // "HELLO"
s.includes("ell"); // true
s.replace("h", "y"); // "yello"

// 15. ES6 Features
// ES6 me naye features aaye jaise let, const, arrow functions, template literals, destructuring, spread/rest operator, default parameters.
const arr1 = [1,2]; const arr2 = [...arr1, 3]; // Spread
function f(a=1, b=2) { return a+b; } // Default params

// 16. Callback Functions
// Callback function ek aisa function hai jo kisi doosre function ko argument ke roop me diya jata hai aur baad me call hota hai.
function greet(name, cb) {
  cb(`Hello, ${name}`);
}
greet("Sam", msg => console.log(msg));

// 17. Promises
// Promise ek object hai jo future me kisi async operation ka result batata hai, resolve ya reject hota hai.
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(res => console.log(res));

// 18. async/await
// async/await se hum asynchronous code ko synchronous tarike se likh sakte hain, await promise ka result wait karta hai.
async function asyncFunc() {
  let res = await promise;
  console.log(res);
}

// 19. Event Loop & Call Stack
// Event loop JS ka mechanism hai jo async code ko handle karta hai. Call stack me synchronous code chalta hai, async code queue me jata hai.
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
// Output: Start, End, Timeout

// 20. Error Handling
// Error handling se hum code me aane wali errors ko pakad sakte hain aur handle kar sakte hain, try, catch, finally, throw ka use hota hai.
try {
  throw new Error("Oops!");
} catch (e) {
  console.log(e.message);
} finally {
  // Always runs
}

// 21. DOM Manipulation
// DOM manipulation se hum web page ke elements ko select, modify, ya events attach kar sakte hain.
//// document.getElementById, querySelector, innerHTML, etc.
// let el = document.getElementById("demo");
// el.textContent = "Changed!";

// 22. Event Handling
// Event handling se hum user ke actions (click, input, etc.) pe code chala sakte hain, jaise addEventListener, event object.
//// el.addEventListener("click", function(event) { ... });
// function(event) { event.target ... }

// 23. JSON
// JSON ek data format hai jo data ko easily exchange karne ke liye use hota hai, parse aur stringify methods se JS me convert karte hain.
let jsonStr = '{"a":1}';
let obj2 = JSON.parse(jsonStr);
let str2 = JSON.stringify(obj2);

// 24. Local Storage & Session Storage
// Local storage aur session storage browser me data ko store karne ke liye use hote hain, page reload ke baad bhi data rehta hai (localStorage).
//// localStorage.setItem("key", "value");
// let val = localStorage.getItem("key");

// 25. Fetch API/AJAX
// Fetch API se hum server se data fetch ya bhej sakte hain, AJAX ka modern replacement hai.
//// fetch('https://api.example.com/data')
//   .then(res => res.json())
//   .then(data => console.log(data));

// 26. Basic Debugging
// Debugging se hum code me bugs dhundh sakte hain, console.log aur browser ke devtools ka use hota hai.
console.log("Debug info");
// Use browser devtools breakpoints

// 27. Strict Mode
// Strict mode se JS me kuch errors ko pakadna easy ho jata hai aur code secure banta hai, "use strict" likhna padta hai.
"use strict";
// ...code...

// 28. OOP Concepts
// Object-Oriented Programming (OOP) me hum objects aur classes ka use karte hain, constructor, prototype, inheritance sab isme aata hai.
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} speaks`); }
}
class Dog extends Animal {
  speak() { console.log(`${this.name} barks`); }
}
let d = new Dog("Rex"); d.speak(); // Rex barks

// 29. Modules
// Modules se hum apne code ko alag-alag files me divide kar sakte hain, import/export ka use hota hai.
//// export function foo() {}
//// import { foo } from './foo.js';

// 30. Short-circuiting, Nullish Coalescing
// Short-circuiting (||, &&) se hum default values de sakte hain, nullish coalescing (??) null/undefined ke liye use hota hai.
let val1 = null || "default"; // "default"
let val2 = null ?? "default"; // "default"

// 31. Set, Map, WeakSet, WeakMap
// Set ek unique values ka collection hai, Map key-value pairs ka. WeakSet/WeakMap me references weak hoti hain, garbage collection easy hoti hai.
let set = new Set([1,2,2]); // {1,2}
let map = new Map([["a",1]]);
let ws = new WeakSet();
let wm = new WeakMap();

// 32. Shallow vs Deep Copy
// Shallow copy me sirf top-level properties copy hoti hain, deep copy me nested objects bhi copy ho jate hain.
let orig = {a:1, b:{c:2}};
let shallow = {...orig};
let deep = JSON.parse(JSON.stringify(orig));

// 33. Basics of Regular Expressions
// Regular expressions ek pattern matching technique hai, string me search ya replace karne ke liye use hoti hai.
let regex = /hello/i;
regex.test("Hello"); // true
"abc123".replace(/\d+/g, "#"); // "abc#"
