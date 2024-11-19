// 글로벌 컴포넌트 선언
import MDXComponents from "@theme-original/MDXComponents";
import DocCardList from "@theme/DocCardList";
import Link from "@docusaurus/Link";
import ExampleExpander from "@site/src/components/ExampleExpander";

export default {
  ...MDXComponents,
  // 다른 글로벌 컴포넌트를 추가할 수 있습니다.
  DocCardList,
  Link,
  ExampleExpander,
};
