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
const names = ["Abhay", "Ravi", "Neha"];
const upper = names.map((name) => name.toUpperCase());
const shortNames = names.filter((name) => name.length <= 4);
const numbers = [1, 2, 3];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
// 🎯 map = sabse sabzi leke naya taste banana
// 🎯 filter = sabzi me se sirf bhindi nikaalna
// 🎯 reduce = sabka total weight nikalna

// 3. async, await, promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
async function getData() {
  const result = await promise;
  console.log(result);
}
getData();
// 🎯 Promise = Amazon order — delivery aayegi
// 🎯 await = ghar baith ke parcel ka intezaar
// Interview Question: Promise.all vs Promise.race difference?
// Promise.all = sabka result wait karna, Promise.race = pehla jo aaye

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
const person = { name: "Abhay", age: 21 };
const { name, age } = person;
const arr = [1, 2, 3];
const [a, b] = arr;
// 🎯 Tiffin box se sirf aloo aur roti lena

// 7. Spread & Rest Operators
const newArr = [...arr, 4, 5];
const newObj = { ...person, city: "Delhi" };
function sum(a, b, ...rest) {
  return a + b + rest.reduce((acc, val) => acc + val, 0);
}
// 🎯 Spread = suitcase kholo aur sab kapde bed pe phaila do
// 🎯 Rest = jo bacha hua saman ek bag me daal do

// ----------------------
// 🚀 React Concepts (Detailed with Syntax & Examples)

// 1. useState - State Management
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Multiple state updates
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); // Always use prev value for updates
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
// 🎯 WhatsApp unread counter jaise – turant update hota hai
// 🎯 Banking app me balance update jaise – secure aur instant

// 2. useEffect - Side Effects & Lifecycle
import { useEffect, useState } from "react";
const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // componentDidMount equivalent
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency = sirf ek baar chalega

  // componentDidUpdate equivalent
  useEffect(() => {
    console.log("Data changed:", data);
  }, [data]); // Jab data change ho tabhi chalega

  // componentWillUnmount equivalent
  useEffect(() => {
    const timer = setInterval(() => console.log("Timer"), 1000);
    return () => clearInterval(timer); // Cleanup function
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? <div>Loading...</div> : <div>{JSON.stringify(data)}</div>;
};
// 🎯 Ghar ki safai jaise – ghar me enter/exit karte time kaam karna
// 🎯 Netflix video load karte time – cleanup zaroori hai

// 3. Conditional Rendering - Different Ways
const ConditionalExample = ({ user, isLoading, error }) => {
  // Ternary operator
  const welcomeMessage = user ? `Welcome ${user.name}` : "Please login";

  // Logical AND
  const showError = error && <div className="error">{error}</div>;

  // If-else with early return
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Multiple conditions */}
      {user ? (
        <div>
          <h1>Dashboard</h1>
          {user.isAdmin && <button>Admin Panel</button>}
        </div>
      ) : (
        <div>
          <h1>Login Required</h1>
          <button>Login</button>
        </div>
      )}

      {/* List rendering with conditions */}
      {user?.posts?.length > 0 ? (
        user.posts.map((post) => <div key={post.id}>{post.title}</div>)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};
// 🎯 ATM machine jaise – card hai to menu, nahi to insert card
// 🎯 Restaurant menu jaise – veg/non-veg options

// 4. Props & Prop Drilling Solution
// Basic Props
const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

// Prop Drilling Problem
const GrandParent = () => {
  const [user, setUser] = useState({ name: "Abhay", theme: "dark" });
  return <Parent user={user} />;
};
const Parent = ({ user }) => <Child user={user} />;
const Child = ({ user }) => <GrandChild user={user} />;
const GrandChild = ({ user }) => <div>Theme: {user.theme}</div>;
// 🎯 Message passing jaise – har level pe same message forward karna
// 🎯 Telephone game jaise – har person ko message pass karna

// 5. useContext - Prop Drilling Solution
import { createContext, useContext } from "react";

// Create Context
const UserContext = createContext();
const ThemeContext = createContext();

// Provider Component
const App = () => {
  const [user, setUser] = useState({ name: "Abhay", id: 1 });
  const [theme, setTheme] = useState("dark");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

// Consuming Context
const Header = () => {
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}>
      <h1>Welcome {user.name}</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </header>
  );
};

// Custom Hook for Context
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};
// 🎯 Ghar ka WiFi password – sabko pata hai, har room me use kar sakte hain
// 🎯 Office ka AC remote – sabko access hai, koi bhi change kar sakta hai

// 6. useRef - DOM Access & Persistent Values
import { useRef } from "react";
const RefExample = () => {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [, forceUpdate] = useState(0);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const incrementCount = () => {
    countRef.current += 1;
    console.log("Count:", countRef.current); // Re-render nahi hoga
  };

  const forceRender = () => {
    forceUpdate((prev) => prev + 1);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={incrementCount}>Increment Ref Count</button>
      <button onClick={forceRender}>Force Render</button>
      <p>Ref Count: {countRef.current}</p>
    </div>
  );
};
// 🎯 Diary jaise – personal notes jo visible nahi hote UI me
// 🎯 TV remote battery – kaam karta hai par screen pe nahi dikhta

// 7. Lifting State Up - State Management Pattern
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
      <TodoStats todos={todos} />
    </div>
  );
};

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
// 🎯 Family WhatsApp group admin – sab members ko manage karta hai
// 🎯 Cricket team captain – sab players ko coordinate karta hai

// 8. useMemo & useCallback - Performance Optimization
import { useMemo, useCallback } from "react";
const ExpensiveComponent = ({ items, filter, onItemClick }) => {
  // Expensive calculation - sirf items ya filter change hone pe run hoga
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Function memoization - reference same rahega
  const handleItemClick = useCallback(
    (item) => {
      console.log("Clicked:", item.name);
      onItemClick(item);
    },
    [onItemClick]
  );

  return (
    <div>
      {filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} onClick={handleItemClick} />
      ))}
    </div>
  );
};

const ItemCard = React.memo(({ item, onClick }) => {
  console.log("Rendering ItemCard:", item.name);
  return <div onClick={() => onClick(item)}>{item.name}</div>;
});
// 🎯 useMemo = Calculator me last result save karna
// 🎯 useCallback = Speed dial number save karna – baar baar number nahi daalte

// 9. useReducer - Complex State Management
import { useReducer } from "react";

const initialState = {
  count: 0,
  loading: false,
  error: null,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
    </div>
  );
};
// 🎯 ATM machine jaise – har button ka fixed action
// 🎯 Vending machine jaise – coin daalo, product select karo, output milega

// 10. Custom Hooks - Reusable Logic
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Using custom hooks
const MyComponent = () => {
  const { count, increment, decrement, reset } = useCounter(10);
  const { data, loading, error } = useFetch("https://api.example.com/users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
// 🎯 Swiss Army knife jaise – ek tool me sab features
// 🎯 Recipe book jaise – ek baar likh ke har jagah use karo

// 11. Controlled vs Uncontrolled Components
// Controlled Component (React controls the value)
const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Uncontrolled Component (DOM controls the value)
const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};
// 🎯 Controlled = Manual car (har gear change pe control)
// 🎯 Uncontrolled = Automatic car (destination batao, car sambhal legi)

// 12. Error Boundaries (Class Component Required)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
const App = () => (
  <ErrorBoundary>
    <MyComponent />
  </ErrorBoundary>
);
// 🎯 Fuse jaise – agar koi appliance problem kare to sirf wahi band ho
// 🎯 Insurance jaise – accident me protection

// 13. React Router - Navigation
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

const UserDetail = () => {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
};
// 🎯 City bus route jaise – different stops pe different passengers
// 🎯 WhatsApp different chats – URL change hone se page change

// 14. Forms & Event Handling
const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    country: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((h) => h !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email required";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be 6+ characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // API call here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>

      <div>
        <label>
          <input
            name="gender"
            type="radio"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            name="gender"
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleInputChange}
          />
          Female
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            value="reading"
            checked={formData.hobbies.includes("reading")}
            onChange={handleInputChange}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            value="sports"
            checked={formData.hobbies.includes("sports")}
            onChange={handleInputChange}
          />
          Sports
        </label>
      </div>

      <select
        name="country"
        value={formData.country}
        onChange={handleInputChange}
      >
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};
// 🎯 Bank form jaise – sab details validate karne ke baad submit
// 🎯 School admission form – har field important hai

// 15. State Management Patterns
// Local State
const LocalStateExample = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

// Global State with Context
const GlobalStateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// 🎯 Local = Personal diary, Global = Family WhatsApp group

// 16. React Performance Optimization
const OptimizedComponent = React.memo(({ data, onUpdate }) => {
  console.log("Component rendered");

  return (
    <div>
      {data.map((item) => (
        <ExpensiveItem key={item.id} item={item} onUpdate={onUpdate} />
      ))}
    </div>
  );
});

// Lazy Loading Components
const LazyComponent = React.lazy(() => import("./LazyComponent"));

const AppWithLazyLoading = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
// 🎯 Lazy loading = Netflix series – sirf dekhi jaane wali load karo
// 🎯 Memo = Photo album – duplicate photos nahi rakhte

// 17. React Interview Must-Know Questions & Answers

// Q1: What is React?
// A: JavaScript library for building user interfaces, especially single-page applications
// 🎯 Website banane ka tool – jaise WordPress blog ke liye

// Q2: Virtual DOM vs Real DOM?
// A: Virtual DOM = JavaScript object representation, faster updates
// Real DOM = actual HTML elements, slower updates
// 🎯 Virtual = rough draft, Real = final copy

// Q3: What are React Hooks?
// A: Functions that let you use state and lifecycle in functional components
// 🎯 Magic wand – functional components me superpowers deta hai

// Q4: useState vs useEffect?
// A: useState = component state manage karta hai
// useEffect = side effects handle karta hai (API calls, timers, etc.)
// 🎯 useState = memory, useEffect = actions

// Q5: What is prop drilling?
// A: Passing props through multiple levels of components
// Solution: useContext, Redux, or component composition
// 🎯 Message passing game – har level pe same message forward karna

// Q6: Controlled vs Uncontrolled components?
// A: Controlled = React manages form data
// Uncontrolled = DOM manages form data
// 🎯 Controlled = chauffeur driven car, Uncontrolled = self-driving

// Q7: What is reconciliation?
// A: Process of updating DOM by comparing Virtual DOM trees
// 🎯 WhatsApp message edit – sirf changed part update karna

// Q8: Why keys are important in lists?
// A: Help React identify which items have changed, added, or removed
// 🎯 Roll number jaise – har student ko unique identify karna

// Q9: What is JSX?
// A: JavaScript XML – syntax extension for React
// 🎯 HTML aur JavaScript ka marriage – dono ek saath likh sakte hain

// Q10: Class components vs Functional components?
// A: Class = older way, more verbose, lifecycle methods
// Functional = modern way, hooks, cleaner syntax
// 🎯 Class = purana phone, Functional = smartphone

// 18. Common React Patterns
// Higher-Order Component (HOC)
const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};

const EnhancedComponent = withLoading(MyComponent);
// 🎯 Wrapper gift jaise – original component ko extra features dena

// Render Props Pattern
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return children({ data, loading, setData, setLoading });
};

const Usage = () => (
  <DataProvider>
    {({ data, loading }) => (
      <div>{loading ? "Loading..." : JSON.stringify(data)}</div>
    )}
  </DataProvider>
);
// 🎯 Function pass karna – flexibility ke liye

// 19. React Best Practices
// ✅ Always use keys in lists
// ✅ Keep components small and focused
// ✅ Use functional components with hooks
// ✅ Handle errors gracefully
// ✅ Optimize performance with memo/useMemo
// ✅ Use TypeScript for better development experience
// ✅ Follow naming conventions (PascalCase for components)
// ✅ Use fragments to avoid extra divs
// ✅ Clean up effects properly
// ✅ Use custom hooks for reusable logic

// 20. Common Interview Coding Questions
// Q: Create a counter with increment/decrement
const InterviewCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

// Q: Fetch data from API and display
const DataFetchingExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Q: Create a search filter
const SearchFilter = () => {
  const [items] = useState(["Apple", "Banana", "Cherry", "Date"]);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// 15. React Interview Concept Notes
// - Virtual DOM = Draft copy banake final copy me changes karna
// - Reconciliation = WhatsApp message edit – sirf changed part update
// - Keys in lists = Aadhar card jaise unique ID
// - useEffect cleanup = Phone pe app close karte time cache clear karna
// - Lazy loading = YouTube video buffer – zaroorat pe load hota hai
// - Declarative = Zomato order – result chahiye, process nahi batani
// - Synthetic Events = Universal adapter – har device me same plug

// 🎯 Final Interview Preparation Checklist:
// ✅ JavaScript fundamentals (closures, promises, async/await)
// ✅ React concepts (components, props, state, hooks)
// ✅ State management (useState, useContext, useReducer)
// ✅ Side effects (useEffect, cleanup functions)
// ✅ Performance optimization (useMemo, useCallback, React.memo)
// ✅ Forms and event handling
// ✅ Routing (React Router)
// ✅ Error handling (Error boundaries)
// ✅ Testing concepts (Jest, React Testing Library)
// ✅ Build tools (Webpack, Vite)
// ✅ Deployment (Netlify, Vercel)

// 🎯 Interview Tips:
// 1. State vs Props samjhao - State = personal diary, Props = letter from friend
// 2. When to use useEffect - jab bhi side effect chahiye (API, timers, subscriptions)
// 3. Performance optimization - useMemo, useCallback, React.memo
// 4. Code splitting - lazy loading for better performance
// 5. Always give real-life examples - interviewer ko relate karna easy hoga
// 6. Practice coding questions - counter, data fetching, search filter
// 7. Know the difference between class and functional components
// 8. Understand React lifecycle and hooks equivalents
// 9. Be ready to explain your project architecture
// 10. Know about testing and deployment

// 👑 Final Tip:
// Interview me confidence aur clear explanation important hai
// Code likhte time edge cases aur error handling discuss karo
// Real projects ke examples dena = extra points 🚀
// Practice mock interviews - fluency aur confidence badhega
