# Introduction to JSX and Expressing React Components

React, at its core, revolves around components that represent pieces of a user interface. To build these components, we use JSX, which stands for JavaScript XML. JSX is a syntax extension for JavaScript that allows us to write HTML-like code within our JavaScript files. This makes it incredibly intuitive to describe what the UI should look like.

## What is JSX?

JSX looks similar to HTML, but it is not HTML. It’s a syntax extension that allows us to write markup directly within our JavaScript code. React then transforms this JSX into JavaScript objects that the browser can understand.

Here’s a basic example of JSX:

```javascript
// Import React library
import React from 'react';

// A simple functional component using JSX
function WelcomeMessage() {
  // The JSX here looks like HTML but is actually JavaScript
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to learning JSX in React.</p>
    </div>
  );
}

// Exporting the component to use it in other parts of the application
export default WelcomeMessage;
```

### Key Points to Remember:
- **JSX must return a single parent element:** In the example above, the `div` element wraps the `h1` and `p` tags. JSX requires all elements to be enclosed within a single parent.
- **JSX expressions:** You can embed JavaScript expressions within JSX by wrapping them in curly braces `{}`. This is useful for dynamically rendering content.

### Example: Embedding Expressions in JSX

```javascript
function Greeting() {
  const name = "John Doe";
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome, {isLoggedIn ? name : "Guest"}!</h1>
    </div>
  );
}
```

Here, the curly braces `{}` allow us to embed JavaScript expressions. The `isLoggedIn ? name : "Guest"` expression is a simple conditional that checks if the user is logged in and displays the appropriate greeting.

## Expressing React Components

React components are the building blocks of a React application. Components can be expressed in two primary ways: as functional components or as class components.

### Functional Components

Functional components are the simpler of the two and are preferred in modern React development. A functional component is a plain JavaScript function that returns JSX.

```javascript
function SimpleComponent() {
  return <div>This is a simple functional component.</div>;
}
```

### Class Components

Class components were traditionally more powerful but are now largely replaced by functional components, thanks to the introduction of Hooks in React. However, you might still encounter them in older codebases.

```javascript
import React, { Component } from 'react';

class SimpleClassComponent extends Component {
  render() {
    return <div>This is a simple class component.</div>;
  }
}
```

### Self-Closing Tags in JSX

In JSX, just like in HTML, if an element doesn’t have any children, it can be self-closed. This means you can write `<img />` instead of `<img></img>`. This is particularly useful when using elements like `<input />`, `<br />`, and custom components that don't need children.

```javascript
function SelfClosingTagExample() {
  return (
    <div>
      <input type="text" placeholder="Enter your name" />
      <br />
      <SimpleComponent />
    </div>
  );
}
```

### Nested Components

React allows you to nest components within other components. This makes your UI modular and easy to maintain.

```javascript
function ParentComponent() {
  return (
    <div>
      <h2>I am the parent component.</h2>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  return <p>I am the child component.</p>;
}
```

## Further Reading

- **JSX in Depth**: Explore more about JSX syntax and how it transforms into JavaScript.
- **React Components**: Learn more about different types of React components and when to use each.
- **React Conditional Rendering**: Understand how to conditionally render parts of your UI using JSX.

## Summary

In this section, we introduced JSX, the syntax extension for JavaScript that allows us to write HTML-like code within our React components. JSX simplifies the process of describing UI components and integrates seamlessly with JavaScript. We also discussed the two main types of React components: functional and class components, with a focus on how to express these components using JSX. By understanding these concepts, you're well-equipped to start building modular, dynamic user interfaces in React.