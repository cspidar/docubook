import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import PrismLight from "./src/utils/prismLight";
import PrismDark from "./src/utils/prismDark";

const config: Config = {
  title: "React.js 예제로 쉽게 배우기",
  // tagline: "Dinosaurs are cool",
  // favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docubook-react/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cspidar", // Usually your GitHub org/user name.
  projectName: "docubook", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
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

  // plugins: [
  //   [
  //     "@docusaurus/plugin-client-redirects",
  //     {
  //       redirects: [
  //         {
  //           to: "/docs/specific-page", // 리디렉션할 대상 경로
  //           from: "/", // 루트 경로
  //         },
  //       ],
  //     },
  //   ],
  // ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "${NAV_TITLE}",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      // items: [
      //   {
      //     type: "docSidebar",
      //     sidebarId: "tutorialSidebar",
      //     position: "left",
      //     label: "Features",
      //   },
      // ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
    },
    prism: {
      theme: PrismLight,
      darkTheme: PrismDark,
      // 프리즘 테마 지원 언어 추가 (언어 목록: https://prismjs.com/download.html#themes=prism)
      additionalLanguages: ["http", "bash", "diff", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
