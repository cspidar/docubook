import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import PrismLight from "./src/utils/prismLight";
import PrismDark from "./src/utils/prismDark";

const title: string = "무료 전자책";
const tagline: string = "다양한 지식을 간편하게";
const githubID: string = "cspidar";

const config: Config = {
  title: title,
  tagline: tagline,
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: `https://${githubID}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
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
    locales: ["ko", "en"],
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

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["ko", "en"],
        highlightResult: true, // language codes
      },
      // "docusaurus-lunr-search",
      // {
      //   languages: ["ko"], // 지원할 언어 목록에 'ko' 추가
      //   lunr: (lunrInstance) => {
      //     lunrInstance.tokenizer.separator = /[\s\-]+/;
      //     return lunrInstance;
      //   },
      // },
    ],
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
        // pages: false,
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          // sidebarPath: undefined,
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
