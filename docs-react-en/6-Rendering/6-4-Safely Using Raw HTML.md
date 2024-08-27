# Safely Using Raw HTML

When developing applications with React, there may be scenarios where you need to incorporate raw HTML directly into your components. This might be necessary when dealing with third-party content, user-generated content, or converting content from another format into HTML. However, directly injecting raw HTML can introduce significant security risks, such as Cross-Site Scripting (XSS) attacks. This section will guide you through the best practices for safely using raw HTML in React.

## Understanding the Danger of Raw HTML

Raw HTML can include any kind of content, including potentially harmful scripts. If you simply insert this HTML into your application without any sanitization, you could be opening the door for malicious attacks. For instance, a malicious user might include a script tag that performs an unwanted action when the HTML is rendered.

### Example of Unsafe HTML Insertion

Consider the following example where raw HTML is injected directly into a component:

```javascript
function UnsafeComponent({ rawHTML }) {
  return (
    <div>
      {/* Directly inserting raw HTML into the component */}
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
    </div>
  );
}

// Example usage
const rawHTML = "<p>This is safe content.</p><script>alert('Hacked!');</script>";

<UnsafeComponent rawHTML={rawHTML} />;
```

In this case, the `rawHTML` string contains both safe content (`<p>This is safe content.</p>`) and a potentially harmful script (`<script>alert('Hacked!');</script>`). When this component is rendered, the script will execute, leading to an XSS attack.

## Safely Using `dangerouslySetInnerHTML`

React provides the `dangerouslySetInnerHTML` attribute to allow raw HTML insertion. The "dangerous" part of the name is a clear indication that this feature should be used with extreme caution. Here's how to use it safely:

1. **Sanitize the HTML:** Before inserting raw HTML, it’s crucial to sanitize it. This process involves cleaning the HTML to ensure that it does not contain any executable scripts or other malicious content.

2. **Use Trusted Sources:** Only use raw HTML from trusted sources. If you control the source of the HTML or have sanitized it properly, the risk is minimized.

3. **Avoid Dynamic Content:** Whenever possible, avoid injecting HTML that comes from user input or other dynamic sources, as these are more prone to malicious manipulation.

### Example of Safe HTML Insertion

Let's look at an example where we safely use `dangerouslySetInnerHTML` by sanitizing the HTML:

```javascript
import DOMPurify from 'dompurify';

function SafeComponent({ rawHTML }) {
  // Sanitize the HTML to remove any potentially harmful content
  const sanitizedHTML = DOMPurify.sanitize(rawHTML);

  return (
    <div>
      {/* Safely inserting sanitized HTML into the component */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
}

// Example usage
const rawHTML = "<p>This is safe content.</p><script>alert('This will not run');</script>";

<SafeComponent rawHTML={rawHTML} />;
```

In this example, we use the `DOMPurify` library to sanitize the raw HTML. This ensures that any harmful content, such as the `<script>` tag, is removed before it’s inserted into the DOM. As a result, only the safe content (`<p>This is safe content.</p>`) is rendered.

## Key Points to Remember

- **Always sanitize raw HTML:** Use libraries like `DOMPurify` to sanitize HTML content before rendering it in your React components.
- **Limit the use of `dangerouslySetInnerHTML`:** Only use `dangerouslySetInnerHTML` when absolutely necessary and after ensuring the content is safe.
- **Be cautious with content sources:** Ensure that any raw HTML comes from a trusted or sanitized source.

## Further Reading

- **DOMPurify documentation**
- **Cross-Site Scripting (XSS) attacks**
- **React security best practices**

## Summary

Injecting raw HTML into React components using `dangerouslySetInnerHTML` can be necessary but also poses significant security risks. To mitigate these risks, always sanitize the HTML before rendering it and avoid using this method with dynamic or untrusted content. By following these practices, you can safely incorporate raw HTML into your React applications.