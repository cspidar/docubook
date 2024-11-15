import React, { useState, useEffect } from "react";
import { curlToJs } from "./func";
import CodeBlock from "@theme/CodeBlock";
import prettier from "prettier/standalone";
import * as parserBabel from "prettier/parser-babel";
import * as parserEstree from "prettier/plugins/estree";

const ExampleConverter = ({ children }) => {
  const plainPc = children.props.children.props.children;
  const [jsExample, setJsExample] = useState("");

  useEffect(() => {
    const convertAndFormat = async () => {
      try {
        // Call curlToJs function and wait for the result
        const result = curlToJs(plainPc);

        // Format the code using Prettier
        const formattedCode = await prettier.format(result, {
          semi: false,
          parser: "babel",
          plugins: [parserBabel, parserEstree],
        });

        // Update the state
        setJsExample(formattedCode);
      } catch (error) {
        console.error("Error during code conversion:", error);
      }
    };

    convertAndFormat();
  }, [plainPc]);

  return (
    <>
      {children}
      <CodeBlock language="js">{jsExample}</CodeBlock>
    </>
  );
};

export default ExampleConverter;
