
# CSS Modules

CSS Modules offer a way to write modular and reusable CSS that is scoped locally to individual components in a React application. This approach helps avoid the common problem of global scope in CSS, where styles can inadvertently affect elements that they were not intended for. In this section, we'll explore how to use CSS Modules effectively in your React projects.

## What Are CSS Modules?

CSS Modules are CSS files where all class and animation names are scoped locally by default. This means that when you import a CSS Module into a React component, the styles defined within that module only apply to that component. This scoping is achieved by transforming the class names into unique identifiers during the build process.

### Example of CSS Module Usage

Let's start by creating a simple CSS Module and using it in a React component.

### 1. Create a CSS Module File

First, create a CSS file with the extension `.module.css`. For example, let's create a file named `Button.module.css`.

```css
/* Button.module.css */
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.primary {
  background-color: #008CBA; /* Blue */
}
```

### 2. Import the CSS Module in a React Component

Next, import this CSS Module into your React component and apply the styles.

```jsx
import React from 'react';
import styles from './Button.module.css'; // Import the CSS Module

const Button = ({ label, primary }) => {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : ''}`}>
      {label}
    </button>
  );
};

export default Button;
```

**Explanation:**

- `import styles from './Button.module.css';`: This line imports the CSS Module. The `styles` object contains the CSS classes defined in the `Button.module.css` file, with class names transformed into unique identifiers.
- `className={${styles.button} ${primary ? styles.primary : ''}}`: This line dynamically applies the `button` class and conditionally applies the `primary` class if the `primary` prop is true. The class names are accessed via the `styles` object.

### 3. Using the Component

Now, you can use the `Button` component in your application.

```jsx
import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button label="Default Button" />
      <Button label="Primary Button" primary />
    </div>
  );
};

export default App;
```

**Result:**
- The first button will use the default green style.
- The second button will apply the `primary` style, making it blue.

## Key Benefits of CSS Modules

- **Scoped Styles:** Since the styles are scoped to the component, you avoid issues with global styles conflicting or overriding each other.
- **Unique Class Names:** The automatic generation of unique class names prevents naming collisions, even if two different components use the same class names.
- **Reusability:** CSS Modules promote reusability of styles within a component without worrying about global scope.

## Points to Watch Out For

- **No Global Styles:** If you need styles to be global (e.g., for theming or common layout purposes), you should handle those separately in traditional CSS files or use another method such as CSS-in-JS.
- **Learning Curve:** For those accustomed to traditional CSS, understanding the local scoping and unique class name generation in CSS Modules might take some adjustment.

## Further Reading

- **CSS-in-JS:** Explore how CSS-in-JS compares with CSS Modules in terms of scope and reusability.
- **Scoped Styles in React:** Understand other methods for applying scoped styles, such as Styled-Components or Emotion.
- **Webpack and CSS Modules:** Learn more about how CSS Modules are processed by Webpack.

## Summary

CSS Modules provide a powerful way to write locally scoped, reusable CSS in React applications. By transforming class names into unique identifiers, CSS Modules prevent style conflicts and enhance maintainability. This method is particularly useful for large projects where managing global CSS becomes complex. By incorporating CSS Modules, you can create more modular and manageable code.
