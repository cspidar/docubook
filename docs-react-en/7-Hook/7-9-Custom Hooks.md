# Custom Hooks

React's **custom hooks** are a powerful tool that allows developers to extract and reuse stateful logic across different components. By understanding and utilizing custom hooks, you can make your code more modular, readable, and maintainable. In this section, we'll explore what custom hooks are, how to create them, and best practices for their use.

## What Are Custom Hooks?

Custom hooks are simply JavaScript functions that start with the word `use` and allow you to extract and reuse stateful logic in your components. They leverage React's existing hooks like `useState`, `useEffect`, `useRef`, and others. The main advantage of custom hooks is that they encapsulate logic, making it easy to share between components without duplicating code.

### Key Points to Remember

- **Naming Convention**: Always start the function name with `use`. This is a convention React uses to identify these functions as hooks.
- **State and Side Effects**: Custom hooks can manage state (`useState`) and handle side effects (`useEffect`), just like any other hook.
- **Pure Functions**: Custom hooks should ideally be pure functions, meaning they don't modify any external state or variables directly, which helps in keeping the logic predictable and testable.

## Creating a Custom Hook

Let's create a custom hook called `useCounter` that manages a simple counter state. This hook will provide functionalities to increment, decrement, and reset the counter.

### Code Example: `useCounter` Hook

```javascript
// Custom hook: useCounter
import { useState } from 'react';

function useCounter(initialValue = 0) {
  // Initialize the state with the initialValue
  const [count, setCount] = useState(initialValue);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);

  // Function to reset the count to the initial value
  const reset = () => setCount(initialValue);

  // Return the current count and the functions to manipulate it
  return { count, increment, decrement, reset };
}
```

### Using `useCounter` in a Component

Now, let's see how this custom hook can be utilized in a functional component.

```javascript
import React from 'react';
import useCounter from './useCounter'; // Assuming the hook is in the same directory

function CounterComponent() {
  // Use the custom hook to get the count and control functions
  const { count, increment, decrement, reset } = useCounter(10); // Start the counter at 10

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

In this example:

- We created a custom hook `useCounter` that encapsulates all the logic related to managing a counter.
- The `CounterComponent` uses this hook to manage its state without needing to manually set up the `useState` hook or the corresponding functions.
- This approach leads to cleaner and more modular code, as the logic is reusable across multiple components.

## Best Practices for Custom Hooks

- **Separation of Concerns**: Custom hooks should focus on a single responsibility. If your hook is doing too many things, consider breaking it down into smaller hooks.
- **Reusability**: Strive to make your custom hooks reusable across different parts of your application.
- **Encapsulation**: Keep the implementation details hidden. Only expose what is necessary for the components using the hook.
- **Naming**: Use meaningful names that clearly indicate what the hook does, following the `use` prefix convention.

## When to Use Custom Hooks

Custom hooks are particularly useful in the following scenarios:

- **Shared Logic**: When you have logic that needs to be shared across multiple components.
- **Complex Components**: When a component’s logic becomes too complex, custom hooks can help break it down into manageable pieces.
- **Repetitive Code**: When you find yourself copying and pasting the same logic in different components, it’s a good indicator that a custom hook might be beneficial.

## Further Reading

- **React Hooks**
- **useState and useEffect**
- **Encapsulating Logic with Custom Hooks**
- **Best Practices for React Hooks**

## Summary

Custom hooks in React are a powerful way to extract and reuse stateful logic across components, improving code modularity and maintainability. By adhering to best practices like proper naming, encapsulation, and focusing on single responsibilities, you can create custom hooks that make your codebase cleaner and more efficient. In this section, we explored what custom hooks are, how to create them, and when they should be used, along with a concrete example to solidify these concepts.