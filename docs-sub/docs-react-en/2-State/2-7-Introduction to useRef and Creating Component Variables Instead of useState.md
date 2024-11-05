# Introduction to useRef and Creating Component Variables Instead of useState

When developing with React, you'll often find yourself managing state within your components using `useState`. While `useState` is incredibly useful, there are situations where using `useRef` might be a better option. This guide will introduce you to `useRef`, explain when and why you might choose it over `useState`, and walk you through creating component variables that don’t trigger re-renders, improving your application's performance and usability.

## What is `useRef`?

`useRef` is a hook in React that returns a mutable object. This object has a `.current` property, which you can set to any value. Unlike `useState`, updating this `.current` property does **not** cause a component to re-render. This makes `useRef` perfect for storing values that don't directly impact the visual output of your component, such as:

- DOM elements
- Timers
- Previous values
- Persistent values across renders

### Basic Usage of `useRef`

Let's start with a simple example where we use `useRef` to keep track of a DOM element:

```jsx
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  // Focus the input element when the component mounts
  useEffect(() => {
    inputRef.current.focus(); // Access the DOM node through the ref
  }, []);

  return (
    <input ref={inputRef} type="text" placeholder="Focus me on mount!" />
  );
}

export default FocusInput;
```

### When to Use `useRef` Instead of `useState`

There are specific scenarios where `useRef` is more appropriate than `useState`:

1. **Storing Non-Render-Related Data**: If you need to store data that doesn’t affect the UI, `useRef` is your go-to. For example, tracking the number of times a button is clicked within a session but not displaying that count in the UI.
   
   ```jsx
   function ClickTracker() {
     const clickCount = useRef(0); // Initial value of 0

     const handleClick = () => {
       clickCount.current += 1; // Increment the count
       console.log(`Button clicked ${clickCount.current} times`);
     };

     return (
       <button onClick={handleClick}>
         Click me
       </button>
     );
   }
   ```

   Here, `clickCount` is incremented with every click, but since it’s not used in rendering, the component doesn’t re-render unnecessarily.

2. **Referencing DOM Elements**: As shown in the first example, `useRef` is ideal for referencing DOM elements and performing actions like focusing or measuring dimensions.

3. **Storing Mutable Objects**: If you’re dealing with objects or arrays that you need to persist across renders without triggering a re-render, `useRef` is appropriate.

4. **Avoiding Re-Renders with Stable References**: Using `useRef` can also help maintain stable references to objects or functions between renders, especially when passing them as dependencies to `useEffect` or callbacks.

### Creating Component Variables with `useRef`

Consider a situation where you want to implement a simple timer in your component. Using `useRef`, you can store a reference to the timer ID without triggering re-renders.

```jsx
import React, { useRef, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef(null); // Ref to store the timer ID

  const startTimer = () => {
    if (timerId.current) return; // Prevent multiple timers
    timerId.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null; // Reset the ref
  };

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
```

In this example:
- `useRef` is used to store the timer ID, which doesn’t need to trigger a re-render when it changes.
- `useState` manages the `seconds`, which needs to be re-rendered each second.

### Key Points to Remember

- **`useRef` does not trigger re-renders**: Updating the `.current` property will not cause the component to re-render.
- **Perfect for storing mutable objects**: Use `useRef` for values that need to persist across renders without affecting the UI.
- **Great for referencing DOM elements**: `useRef` is a handy way to directly access and manipulate DOM nodes.

## Further Reading

- **React Refs**
- **Managing State vs. Refs**
- **useState vs. useRef**
- **React Performance Optimization**

## Summary

`useRef` is a powerful React hook for creating mutable references to values or DOM elements that persist across renders without causing re-renders. It's particularly useful for storing non-UI related data, maintaining stable references, and managing DOM elements. Understanding when to use `useRef` instead of `useState` is key to writing efficient and effective React components.