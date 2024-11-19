import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import PrismLight from "./src/utils/prismLight";
import PrismDark from "./src/utils/prismDark";

const title: string = "무료 전자책";
const tagline: string = "다양한 지식을 간편하게";
const githubID: string = "cspidar";
const supportLang: string[] = ["ko"];
// const supportLang: string[] = ["ko", "en"];

const config: Config = {
  title: title,
  tagline: tagline,
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: `https://${githubID}.github.io`,
  baseUrl: "/",
  organizationName: githubID, // Usually your GitHub org/user name.
  projectName: "docubook", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: supportLang,
  },

  // themes: [
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  //     {
  //       indexBlog: false,
  //       hashed: true,
  //       language: ["en", language],
  //     },
  //   ],
  // ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        indexBlog: false,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: supportLang,
        docsRouteBasePath: "/",
      },
    ],
  ],

  plugins: [
    // [
    //   require.resolve("docusaurus-lunr-search"),
    //   {
    //     languages: supportLang,
    //     highlightResult: true, // language codes
    //   },
    // ],
    //   // 리다이렉트 코드
    //   [
    //     "@docusaurus/plugin-client-redirects",
    //     {
    //       // fromExtensions: ["html", "htm"], // /myPage.html -> /myPage
    //       // toExtensions: ["exe", "zip"], // /myAsset -> /myAsset.zip (if latter exists)
    //       redirects: [
    //         {
    //           to: "/",
    //           from: "/docubook-react",
    //         },
    //       ],
    //     },
    //   ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // docs 폴더를 루트로
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "https://cspidar.github.io/img/social.png",
    colorMode: {
      defaultMode: "dark", // 기본 모드를 다크 모드로 설정
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: title,
      // hideOnScroll: false,
      logo: {
        alt: "DocuBook",
        src: "img/logo.png",
        width: 32,
        height: 32,
      },
      items: [
        // // [보류] 로케일 드롭다운 버튼
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
    },
    prism: {
      theme: PrismLight,
      darkTheme: PrismDark,
      // theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
      // 프리즘 테마 지원 언어 추가 (언어 목록: https://prismjs.com/download.html#themes=prism)
      additionalLanguages: ["http", "bash", "diff", "json", "jsx"],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
