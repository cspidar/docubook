import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import { tokenize, parseTokens, generateJs, makePrettier } from "./func";

const ExampleExpander = ({ children }) => {
  const curlExample = children.props.children.props.children;

  // 입력 예제 로그
  console.log("curl");
  console.log(JSON.stringify(curlExample));

  const [jsExample, setJsExample] = useState("");

  useEffect(() => {
    const expand = async () => {
      try {
        const tokens = tokenize(curlExample);
        const parsedTokens = parseTokens(tokens);
        const jsCode = generateJs(parsedTokens);
        const formattedCode = await makePrettier(jsCode);
        setJsExample(formattedCode);
      } catch (error) {
        console.error("EEE: Example Expander Error", error);
      }
    };
    expand();
  }, [curlExample]);

  // 출력 예제 로그
  useEffect(() => {
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

export default ExampleExpander;
