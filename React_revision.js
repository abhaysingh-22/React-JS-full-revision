// 1. Introduction to React
// React kya hai? Ek popular JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai, mainly single-page applications ke liye.
// React is a declarative, component-based library for building user interfaces, especially for single-page applications.

// 2. Creating a React App (using Create React App, Vite, etc.)
// React app kaise banate hain? create-react-app ya Vite jaise tools se ek basic React project setup hota hai.
// npx create-react-app my-app
// npm create vite@latest my-app -- --template react

// 3. JSX (JavaScript XML)
// JSX kya hai? JavaScript ka extension hai jisme HTML jaise syntax me UI likh sakte hain, lekin ye JS me compile hota hai.
// Example:
const element = <h1>Hello, world!</h1>;

// 4. Components (Functional and Class Components)
// Component ek reusable UI block hai. Functional component ek function hota hai, class component ek class hoti hai.
// Functional:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// Class:
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 5. Props (Properties)
// Props kya hain? Parent component se child component ko data bhejne ka tarika hai, read-only hote hain.
function Greet(props) {
  return <p>Hi, {props.user}!</p>;
}
// <Greet user="Sam" />

// 6. State (useState, setState)
// State kya hai? Component ka internal data jo change ho sakta hai. Functional me useState, class me this.state/setState.
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
// Class:
class CounterClass extends React.Component {
  state = { count: 0 };
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count: {this.state.count}</button>;
  }
}

// 7. Component Lifecycle (Mounting, Updating, Unmounting)
// Lifecycle kya hai? Component kab mount, update, ya unmount hota hai, uske hooks/methods.
// Example (class):
class Demo extends React.Component {
  componentDidMount() { /* Mount */ }
  componentDidUpdate() { /* Update */ }
  componentWillUnmount() { /* Unmount */ }
  render() { return <div>Demo</div>; }
}

// 8. useEffect Hook
// useEffect kya hai? Functional component me side effects (API call, timer, etc.) handle karne ke liye.
// Example:
import { useEffect } from 'react';
function Example() {
  useEffect(() => {
    // effect
    return () => { /* cleanup */ };
  }, []);
  return <div>Effect Example</div>;
}

// 9. Event Handling in React
// Event handling matlab user ke actions (click, input, etc.) pe code chalana.
// Example:
function ClickBtn() {
  function handleClick() { alert('Clicked!'); }
  return <button onClick={handleClick}>Click Me</button>;
}

// 10. Conditional Rendering
// Conditional rendering se hum condition ke hisaab se UI dikhate hain.
// Example:
function UserGreeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in</h1>;
}

// 11. Lists and Keys
// List render karte waqt unique key dena zaroori hai, taki React efficiently update kar sake.
// Example:
function List({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}

// 12. Forms and Form Handling
// Form handling me input ka value state se control karte hain.
// Example:
function MyForm() {
  const [value, setValue] = useState('');
  function handleChange(e) { setValue(e.target.value); }
  function handleSubmit(e) { e.preventDefault(); alert(value); }
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

// 13. Controlled vs Uncontrolled Components
// Controlled: value state se aata hai. Uncontrolled: value DOM se aata hai (ref se).
// Controlled:
function ControlledInput() {
  const [val, setVal] = useState('');
  return <input value={val} onChange={e => setVal(e.target.value)} />;
}
// Uncontrolled:
import { useRef } from 'react';
function UncontrolledInput() {
  const inputRef = useRef();
  function showValue() { alert(inputRef.current.value); }
  return <>
    <input ref={inputRef} />
    <button onClick={showValue}>Show</button>
  </>;
}

// 14. Lifting State Up
// Lifting state up ka matlab hai state ko parent me rakhna taki multiple child components use kar saken.
// Example:
function Parent() {
  const [data, setData] = useState('');
  return (
    <>
      <ChildInput onChange={setData} />
      <p>Value: {data}</p>
    </>
  );
}
function ChildInput({ onChange }) {
  return <input onChange={e => onChange(e.target.value)} />;
}

// 15. Context API (React Context, useContext)
// Context API se data ko deeply nested components tak directly bhej sakte hain, prop drilling avoid hota hai.
import React, { createContext, useContext } from 'react';
const MyContext = createContext();
function ParentCtx() {
  return (
    <MyContext.Provider value="Hello">
      <ChildCtx />
    </MyContext.Provider>
  );
}
function ChildCtx() {
  const val = useContext(MyContext);
  return <div>{val}</div>;
}

// 16. useRef Hook
// useRef se hum kisi DOM element ya value ka reference bana sakte hain jo re-render pe change nahi hota.
function FocusInput() {
  const inputRef = useRef();
  function focus() { inputRef.current.focus(); }
  return <>
    <input ref={inputRef} />
    <button onClick={focus}>Focus</button>
  </>;
}

// 17. useMemo and useCallback Hooks
// useMemo expensive calculation ka result cache karta hai. useCallback function ko memoize karta hai.
function Expensive({ num }) {
  const result = React.useMemo(() => {
    // heavy calculation
    return num * 2;
  }, [num]);
  return <div>{result}</div>;
}
function CallbackDemo({ onClick }) {
  const memoizedClick = React.useCallback(() => onClick(), [onClick]);
  return <button onClick={memoizedClick}>Click</button>;
}

// 18. React Router (Basics of Routing, useNavigate, useParams)
// React Router se SPA me navigation possible hota hai, bina page reload ke.
// Example:
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
function Home() { return <h2>Home</h2>; }
function User() {
  const { id } = useParams();
  return <h2>User: {id}</h2>;
}
function NavDemo() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/user/1')}>Go</button>;
}
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/user/:id" element={<User />} />
//   </Routes>
// </BrowserRouter>

// 19. Styling in React (CSS, CSS Modules, Styled Components, Inline Styles)
// React me styling kai tariko se hoti hai: normal CSS, CSS Modules, styled-components, inline styles.
// Inline:
const style = { color: 'red' };
function Styled() { return <div style={style}>Red Text</div>; }

// 20. Fetching Data (using Fetch API, Axios, useEffect for API calls)
// Data fetch karne ke liye useEffect me fetch/axios ka use hota hai.
import axios from 'axios';
function FetchDemo() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => setData(res.data));
  }, []);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

// 21. Error Boundaries
// Error boundaries se hum component tree me error ko gracefully handle kar sakte hain (sirf class component).
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { /* log error */ }
  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}

// 22. Fragments
// Fragments se multiple elements ko bina extra DOM node ke group kar sakte hain.
function FragDemo() {
  return (
    <>
      <td>One</td>
      <td>Two</td>
    </>
  );
}

// 23. Higher-Order Components (HOC)
// HOC ek function hai jo component ko input leta hai aur naya component return karta hai.
function withLogger(Component) {
  return function(props) {
    console.log('Props:', props);
    return <Component {...props} />;
  };
}

// 24. Render Props
// Render prop ek technique hai jisme ek prop ke through function diya jata hai jo render decide karta hai.
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };
  handleMouseMove = e => this.setState({ x: e.clientX, y: e.clientY });
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
// <MouseTracker render={({x, y}) => <h1>{x},{y}</h1>} />

// 25. Portals
// Portals se hum component ko DOM ke kisi bhi part me render kar sakte hain.
import ReactDOM from 'react-dom';
function PortalDemo() {
  return ReactDOM.createPortal(
    <div>Portal Content</div>,
    document.getElementById('portal-root')
  );
}

// 26. PropTypes and Type Checking
// PropTypes se hum component props ka type check kar sakte hain, bugs avoid karne ke liye.
import PropTypes from 'prop-types';
function MyComponent({ name }) { return <div>{name}</div>; }
MyComponent.propTypes = { name: PropTypes.string.isRequired };

// 27. Code Splitting and Lazy Loading (React.lazy, Suspense)
// Code splitting se app ka initial load fast hota hai, lazy loading se component jab chahiye tab load hota hai.
import React, { Suspense, lazy } from 'react';
const LazyComp = lazy(() => import('./LazyComp'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComp />
    </Suspense>
  );
}

// 28. Custom Hooks
// Custom hook ek function hai jo React hooks ka use karta hai aur reusable logic deta hai.
function useCounter() {
  const [count, setCount] = useState(0);
  function inc() { setCount(c => c + 1); }
  return [count, inc];
}

// 29. Basics of Redux (Actions, Reducers, Store, useSelector, useDispatch)
// Redux ek state management library hai, actions, reducers, store, useSelector, useDispatch ka use hota hai.
// Example (pseudo):
// action: { type: 'INCREMENT' }
// reducer: function(state, action) { ... }
// store: createStore(reducer)
// useSelector: state access, useDispatch: action dispatch

// 30. Testing in React (Jest, React Testing Library - basic concepts)
// Testing se hum apne components ka sahi kaam karna check karte hain, Jest/RTL ka use hota hai.
// Example:
// test('renders', () => { render(<App />); expect(screen.getByText(/hello/i)).toBeInTheDocument(); });

// 31. Deployment Basics (building and deploying a React app)
// Deployment ka matlab app ko production ke liye build karna aur server pe upload karna.
// npm run build
// Serve build folder on server

// 32. Best Practices (component structure, file organization, reusability)
// Best practices: components ko chote aur reusable banao, files ko logically organize karo, DRY principle follow karo.

// 33. Common Interview Patterns (lifting state, controlled inputs, prop drilling, memoization)
// Interview me aksar yeh patterns pooche jaate hain: lifting state up, controlled/uncontrolled inputs, prop drilling (props ko deeply pass karna), memoization (performance optimize karna).










// React Redux ka use data ko centralize (ek jagah pe store) aur manage karne ke liye hota hai, taaki poore React app me data easily share aur update ho sake.
// Isme important concepts hain: actions, reducers, store, useSelector, useDispatch.

//Thoda clarify karne layak points:

// Actions: Ye sirf ek object hote hain jo batata hai "kya hona chahiye" (for example: { type: 'INCREMENT' }). Action me aap sirf intention batate hain, logic nahi likhte.
// Reducers: Reducer ek function hota hai jo purane state aur action ko input leta hai aur naya state return karta hai. Iska kaam "valuable things" yaani updated state banana hai, lekin yahan "garbage out" ka matlab nahi hai—ye sirf state ko update karta hai based on action.
// Store: Ye Redux ka global data store hai, jisme poore app ka state rehta hai.
// useSelector: Ye hook use hota hai Redux store se specific data read karne ke liye.
// useDispatch: Iska use Redux store ko action bhejne (dispatch karne) ke liye hota hai, taaki state update ho sake.







// Difference between axios and fetch:

/*Syntax and Ease of Use:
Axios provides a simpler and cleaner syntax for making HTTP requests.
Fetch uses Promises, which require additional .then() and .catch() blocks, making the code slightly more verbose.


Browser Support:
Axios supports older browsers (including Internet Explorer) without any additional setup.
Fetch is a modern browser API and is not supported in Internet Explorer without using a polyfill.


Interceptors:
Axios allows the use of interceptors to modify requests and responses globally, which is helpful for adding authentication tokens or handling global errors.
Fetch does not support interceptors natively; this functionality must be manually implemented.


Timeout Handling:
Axios supports request timeouts out of the box by passing a timeout option.
Fetch does not support timeout natively; you need to implement it manually using AbortController.


Automatic JSON Parsing:
Axios automatically transforms JSON response data, so there's no need to call .json() on the response.
Fetch requires you to manually parse the response using .json().


Request Cancellation:
Axios supports request cancellation using its own method or AbortController.
Fetch only supports cancellation using AbortController, and this must be implemented manually.


Data Transformation:
Axios provides built-in support for transforming requests and responses (e.g., modifying headers or formatting data).
Fetch requires manual data transformation, which increases the code complexity.


File Uploads (FormData Support):
Both Axios and Fetch support file uploads using FormData, but Axios handles it in a more convenient way.
Lightweight and Built-in Nature:


Axios is an external library that needs to be installed (e.g., using npm install axios).
Fetch is a built-in API in modern browsers and doesn’t require installation.*/