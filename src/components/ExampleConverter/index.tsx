import React, { useState, useEffect } from "react";
import { convertCurlToJs } from "./conversionUtils";
import CodeBlock from "@theme/CodeBlock";

const ExampleConverter = ({ children }) => {
  const plainPc = children.props.children.props.children;

  // 입력
  console.log("curl");
  console.log(JSON.stringify(plainPc));

  const [jsExample, setJsExample] = useState("");

  useEffect(() => {
    const convertAndSet = async () => {
      try {
        const formattedCode = await convertCurlToJs(plainPc);
        setJsExample(formattedCode);
      } catch (error) {
        console.error("Error during code conversion:", error);
      }
    };
    convertAndSet();
  }, [plainPc]);

  // Move the logging useEffect to the top level
  useEffect(() => {
    // 출력
    console.log("JS");
    console.log(JSON.stringify(jsExample));
  }, [jsExample]);

  return (
    <>
      {children}
      <CodeBlock language="js">{jsExample}</CodeBlock>
    </>
  );
};

export default ExampleConverter;
