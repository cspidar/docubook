# Reviewing useState, useRef, and useEffect

When working with React, three hooks you'll frequently encounter are `useState`, `useRef`, and `useEffect`. These hooks are essential for managing state, referencing DOM elements or values, and handling side effects in functional components. In this section, we'll review how each of these hooks works, with concrete examples to deepen your understanding.

## 1. `useState`: Managing Component State

The `useState` hook is used to manage state within a functional component. It allows you to add local state to a component, which React will keep track of between renders.

### Example:

```javascript
import React, { useState } from 'react';

function Counter() {
  // Initialize the state with a value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      {/* Button to trigger the increment */}
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
```

### Explanation:

- **State Initialization:** `useState(0)` initializes `count` with a value of `0`. The hook returns an array with the current state value and a function to update it (`setCount`).
- **State Update:** The `incrementCount` function updates the state by calling `setCount(count + 1)`, which tells React to re-render the component with the new count value.

### Key Points:

- **State Persistence:** React preserves the state between renders.
- **Rerendering:** Calling the state update function (`setCount`) triggers a re-render of the component.

## 2. `useRef`: Accessing DOM Elements and Storing Persistent Values

The `useRef` hook provides a way to access DOM elements directly or to store a mutable value that persists across renders without causing a re-render.

### Example 1: Accessing DOM Elements

```javascript
import React, { useRef } from 'react';

function FocusInput() {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInputField = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      {/* Button to trigger the focus */}
      <button onClick={focusInputField}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

### Example 2: Storing Persistent Values

```javascript
import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerIdRef = useRef(null);

  const startTimer = () => {
    timerIdRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
  };

  return (
    <div>
      <p>Elapsed time: {time} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Stopwatch;
```

### Explanation:

- **DOM Access:** In the first example, `useRef` is used to create a reference to the input field, allowing direct manipulation of the DOM element.
- **Persistent Values:** In the second example, `useRef` stores the timer ID, which remains stable across renders. This allows the timer to be stopped without causing unnecessary re-renders.

### Key Points:

- **No Re-renders:** Modifying a `useRef` value does not cause the component to re-render.
- **DOM Manipulation:** `useRef` is commonly used for accessing and interacting with DOM elements.

## 3. `useEffect`: Handling Side Effects

The `useEffect` hook is crucial for performing side effects in your components, such as fetching data, subscribing to events, or directly manipulating the DOM. It runs after the component renders, ensuring that your side effect logic doesn't block the initial render.

### Example: Fetching Data

```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json));

    // Cleanup function (optional) - could be used for cleanup tasks like unsubscribing from a service
    return () => {
      console.log('Cleanup if necessary');
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <h1>Fetched Data:</h1>
      {/* Display the fetched data */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetcher;
```

### Explanation:

- **Effect Function:** The function passed to `useEffect` runs after the component renders. Here, it fetches data from an API and updates the state.
- **Cleanup:** If needed, the cleanup function can handle any necessary cleanup (like unsubscribing from a service) when the component unmounts or before the effect re-runs.

### Key Points:

- **Dependencies:** The array `[]` tells React to run the effect only once after the initial render. Adding dependencies in the array can trigger the effect when those dependencies change.
- **Asynchronous Code:** Use `useEffect` for managing asynchronous operations to avoid blocking the component's render process.

## Further Reading

- **State Management:** Managing state in larger applications, Context API
- **Advanced Refs:** Using `useImperativeHandle` with `useRef`
- **Effects:** Conditional effects, multiple effects in one component

## Summary

In this review, we covered three essential React hooks: `useState`, `useRef`, and `useEffect`. These hooks help you manage state, reference DOM elements or persistent values, and handle side effects in your components. Understanding their usage and key concepts is crucial for building interactive and efficient React applications. Remember to use `useState` for managing state, `useRef` for DOM access or persistent values, and `useEffect` for side effects like data fetching or DOM manipulation.