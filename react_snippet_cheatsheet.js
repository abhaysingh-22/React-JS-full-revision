// 📘 React + JavaScript Snippet Cheatsheet for Interviews (Hinglish + Real-Life Examples)
// Covers JS basics, React syntax, usage, edge cases, interview-style notes, and relatable explanations

// ----------------------
// 🧠 JavaScript Concepts (Must for React Interviews)

// 1. var, let, const
// var - function scoped
// let - block scoped ({} ke andar ka scope)
// const - block scoped + value change nahi hoti (but object/array ke andar change ho sakta hai)
// 🎯 Real life:
// var = purana TV remote (har jagah kaam karta hai)
// let = naya remote sirf ek room ke liye
// const = remote fixed hai, naye batteries nahi daal sakte
// Interview Tip:
// Hamesha let ya const use karo. var avoid karo due to hoisting issues

// 2. map, filter, reduce
const names = ['Abhay', 'Ravi', 'Neha'];
const upper = names.map(name => name.toUpperCase());
const shortNames = names.filter(name => name.length <= 4);
const numbers = [1, 2, 3];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
// 🎯 map = sabse sabzi leke naya taste banana
// 🎯 filter = sabzi me se sirf bhindi nikaalna
// 🎯 reduce = sabka total weight nikalna

// 3. async, await, promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
});
async function getData() {
  const result = await promise;
  console.log(result);
}
getData();
// 🎯 Promise = Amazon order — delivery aayegi
// 🎯 await = ghar baith ke parcel ka intezaar

// 4. Closures
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
const countUp = outer();
countUp();
countUp();
// 🎯 Jaise shopkeeper sirf trusted helper ko drawer key deta hai

// 5. Hoisting
console.log(x); // undefined
var x = 5;
// let/const hoist hote hain par use pehle nahi kar sakte (TDZ)
// 🎯 Banda party me aa gaya, lekin list me naam nahi – access nahi milega

// 6. Destructuring
const person = { name: 'Abhay', age: 21 };
const { name, age } = person;
const arr = [1, 2, 3];
const [a, b] = arr;
// 🎯 Tiffin box se sirf aloo aur roti lena

// 7. Spread & Rest Operators
const newArr = [...arr, 4, 5];
const newObj = { ...person, city: 'Delhi' };
function sum(a, b, ...rest) {
  return a + b + rest.reduce((acc, val) => acc + val, 0);
}
// 🎯 Spread = suitcase kholo aur sab kapde bed pe phaila do
// 🎯 Rest = jo bacha hua saman ek bag me daal do

// ----------------------
// React Concepts

// 1. useState
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
// 🎯 WhatsApp unread counter jaise – turant update nahi hota

// 2. useEffect
import { useEffect } from 'react';
useEffect(() => {
  console.log('Mounted or updated');
  return () => console.log('Cleanup');
}, [dependency]);
// 🎯 Ghar se nikalne se pehle light band karna – cleanup

// 3. Conditional Rendering
{isLoggedIn ? <Dashboard /> : <Login />} 
{isLoading && <Spinner />}
// 🎯 Flipkart par login status ke hisab se page dikhana

// 4. Props & Prop Drilling
const Child = ({ name }) => <h1>Hello {name}</h1>;
const Parent = () => <Child name="Abhay" />;
// 🎯 Courier boy package ko change nahi karega – sirf forward karega

// 5. useContext
// 🎯 Ghar me ek hi AC remote sabko chahiye – shared context

// 6. useRef
// 🎯 Ek diary jo dikhti nahi but value yaad rakhti hai

// 7. Lifting State Up
// 🎯 2 siblings ko ek toy chahiye – parent ke pass hona chahiye

// 8. useMemo & useCallback
// 🎯 useMemo = Excel ka heavy formula store kar lena
// 🎯 useCallback = ek hi function baar baar reuse

// 9. useReducer
// 🎯 TV remote ke buttons – har button ka ek fix kaam

// 10. Custom Hooks
// 🎯 Ek reusable routine jaisa – har jagah kaam aata

// 11. Controlled vs Uncontrolled Input
// 🎯 Controlled = React manage karta hai
// 🎯 Uncontrolled = hum manually DOM access karte hain

// 12. React Router v6+
// 🎯 Zomato jaise navigation – bina reload ke pages badalna

// 13. Error Boundaries
// 🎯 Agar ek machine part fail ho – pura machine band na ho

// 14. Memoization
// 🎯 Ready-made answer yaad rakhna – baar baar na sochna

// 15. React Interview Concept Notes
// - Virtual DOM = photo album jaisa
// - Reconciliation = sirf changed part update
// - Keys in lists = grocery item ID jaisa
// - useEffect cleanup = alarm off karna
// - Lazy loading = Netflix movie load tabhi hoti hai jab click karo
// - Declarative = mummy ko “bhook lagi” bolna, recipe nahi batani
// - Synthetic Events = ek wrapper sab browser ke liye same feel deta hai

// 👑 Final Tip:
// Interview me code ke sath soch bhi important hai. Examples aur reason ke sath explain karo = confidence level 🔥
