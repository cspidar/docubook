# Types of Custom Hook Returns

When creating custom hooks in React, one of the key considerations is what the hook should return. The return value of a custom hook shapes how the hook will be used by the components that call it. A well-designed return structure can make the hook more versatile, easier to use, and more intuitive. In this section, we will explore various types of return values for custom hooks, with clear examples to illustrate each type.

## 1. Returning a Single Value

One of the simplest forms of a custom hook return is a single value, such as a piece of state or a derived value.

### Example: A Hook for Window Width

```javascript
import { useState, useEffect } from 'react';

// A custom hook that returns the current width of the browser window
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update the width state when the window is resized
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width; // The hook returns only the current width value
}

// Usage in a component
function MyComponent() {
    const width = useWindowWidth();

    return (
        <div>
            <p>Window width: {width}px</p>
        </div>
    );
}
```

**Key Point:** Returning a single value is ideal when the hook is focused on providing a simple, specific piece of information.

## 2. Returning an Object

Returning an object allows the custom hook to provide multiple related values or methods in a structured way. This can be useful when the hook manages more complex state or when it provides utility functions alongside the state.

### Example: A Hook for Managing Form Input

```javascript
import { useState } from 'react';

// A custom hook that returns value and a function to handle input changes
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value, // The current input value
        onChange: handleChange // A function to update the value
    };
}

// Usage in a component
function MyForm() {
    const nameInput = useFormInput(''); // Custom hook for managing form input

    return (
        <div>
            <label>Name: </label>
            <input type="text" {...nameInput} />
        </div>
    );
}
```

**Key Point:** Returning an object is beneficial when the hook needs to provide multiple outputs, such as a value and its associated methods, making the hook more flexible and organized.

## 3. Returning an Array

Returning an array is similar to returning an object but offers a different way to structure the return value. It's often used when the order of elements is clear and predictable, allowing for easy destructuring in the calling component.

### Example: A Hook for Toggling Boolean State

```javascript
import { useState } from 'react';

// A custom hook for toggling a boolean value
function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue);

    const toggle = () => {
        setState(prevState => !prevState);
    };

    return [state, toggle]; // The hook returns the state and the toggle function in an array
}

// Usage in a component
function MyToggleComponent() {
    const [isOn, toggleIsOn] = useToggle();

    return (
        <div>
            <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={toggleIsOn}>Toggle</button>
        </div>
    );
}
```

**Key Point:** Returning an array is particularly useful when you want to maintain a consistent order for multiple return values, especially when used with array destructuring.

## 4. Returning a Function

Sometimes, a custom hook's primary purpose is to return a function that performs a specific task, especially if the hook encapsulates complex logic or side effects.

### Example: A Hook for Fetching Data

```javascript
import { useState, useEffect } from 'react';

// A custom hook that returns a function to fetch data
function useFetchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    };

    return fetchData; // The hook returns only the fetch function
}

// Usage in a component
function MyDataComponent() {
    const fetchData = useFetchData('https://api.example.com/data');

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {/* Render the fetched data here */}
        </div>
    );
}
```

**Key Point:** Returning a function is effective when the hook's main role is to trigger an action or side effect, keeping the logic encapsulated within the hook.

## Further Reading

- **Custom Hooks**: Learn about creating more complex custom hooks.
- **State Management in React**: Explore different patterns for managing state effectively.
- **React useEffect**: Understand how to handle side effects in functional components.

## Summary

In this section, we explored the various ways custom hooks in React can return values. Whether returning a single value, an object, an array, or a function, each approach serves a specific use case and can enhance the reusability and clarity of your code. By choosing the appropriate return structure, you can create more flexible and powerful custom hooks.