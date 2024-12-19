import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

function APIRequest() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);

    fetch("https://api.github.com/users/octocat")
      .then((response) => response.json())
      .then((json) => {
        setData(JSON.stringify(json, null, 2));
        setLoading(false);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
        setLoading(false);
      });
  };

  const handleFetchError = () => {
    setLoading(true);

    fetch("https://api.github.com/users/macournoyer")
      .then((response) => response.json())
      .then((json) => {
        setData(JSON.stringify(json, null, 2));
        setLoading(false);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>데이터 표시</h2>

      <div className={styles.buttonContainer}>
        <Link
          className={`button button--active button--primary ${styles.button}`}
          onClick={handleFetch}>
          데이터 요청 1
        </Link>

        <Link
          className={`button button--active button--primary ${styles.button}`}
          onClick={handleFetchError}>
          데이터 요청 2
        </Link>
      </div>

      <div className="button-group button-group--block">
        <Link className="button button--primary">Like</Link>
        <Link className="button button--primary">Comment</Link>
        <Link className="button button--primary">Share</Link>
      </div>

      {loading && <div>로딩 중...</div>}
      {data && <CodeBlock language="json">{data}</CodeBlock>}
    </div>
  );
}

export default APIRequest;
