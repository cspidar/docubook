const convertToJs = (sourceExample) => {
  const text = JSON.stringify(
    sourceExample.props.children.props.children,
    null,
    2,
  );

  const curl: string = sourceExample.props.children.props.children;

  console.log(curl);
  return sourceExample;
};

//
//
//

const ExampleConverter = ({ children }) => {
  const curlExample = children;
  const jsExample = convertToJs(children);
  // console.log(children);

  return (
    <div>
      <div>
        <pre></pre>
      </div>

      <div className="code-block js">
        <pre>{children}</pre>
      </div>
      <div className="code-block python">
        <pre>{jsExample}</pre>
      </div>
    </div>
  );
};

export default ExampleConverter;
