# Differences Between State and Props

Understanding the distinction between **state** and **props** is crucial in mastering React. These two concepts, although seemingly similar, serve distinct purposes and have different roles in the lifecycle of React components. Let's delve into their differences, supported by concrete code examples.

## What Are Props?

**Props** (short for "properties") are immutable pieces of data passed from a parent component to a child component. They allow components to be dynamic and reusable, enabling the parent component to configure the child component’s behavior or appearance by providing different data.

### Example of Props

Here's a simple example that demonstrates how props work:

```javascript
import React from 'react';

// Define a functional component that takes 'props' as an argument
const Greeting = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1> {/* Props are accessed like object properties */}
    </div>
  );
};

// Define a parent component
const App = () => {
  return (
    <div>
      <Greeting name="Alice" /> {/* 'name' is passed as a prop to the Greeting component */}
      <Greeting name="Bob" />   {/* Each instance of Greeting can have different props */}
    </div>
  );
};

export default App;
```

### Key Points About Props

- **Immutable**: Once a prop is passed to a component, it cannot be changed within that component.
- **Passed from Parent to Child**: Props are always passed down the component tree, from parent to child.
- **Reusability**: By varying props, the same component can be reused with different data.

## What Is State?

**State** is a mutable object managed within the component itself. It represents the component's local data that can change over time, typically in response to user actions or network requests. When the state changes, React re-renders the component to reflect these changes.

### Example of State

Let's look at an example where a component manages its own state:

```javascript
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p> {/* The UI reflects the current state */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
```

### Key Points About State

- **Mutable**: State can be updated within the component using the `setState` function (or `useState` in functional components).
- **Managed Within the Component**: Each component manages its own state independently.
- **Triggers Re-Rendering**: When the state changes, React automatically re-renders the component to reflect the new state.

## Key Differences Between State and Props

1. **Mutability**:
   - **Props** are immutable and cannot be changed by the component receiving them.
   - **State** is mutable and can be changed by the component that owns it.

2. **Source**:
   - **Props** are passed from parent components.
   - **State** is managed within the component itself.

3. **Responsibility**:
   - **Props** are controlled externally (by the parent component).
   - **State** is controlled internally (by the component itself).

4. **Re-rendering**:
   - **Props** changes trigger a re-render of the component, but the change comes from outside the component.
   - **State** changes also trigger a re-render, but the change is managed inside the component.

5. **Use Case**:
   - Use **props** when you need to pass data from a parent to a child component.
   - Use **state** when the component needs to manage and track changes to its data over time.

## Further Reading

- **State Management in React**
- **Props Drilling**
- **React Component Lifecycle**
- **useState Hook**
- **PropTypes for Prop Validation**

## Summary

In React, **props** and **state** are foundational concepts with distinct roles: **props** are used to pass data from parent to child components, while **state** allows components to manage their own dynamic data. Understanding their differences is essential for building efficient and reusable React components. Remember, props are immutable and managed externally, while state is mutable and managed internally.