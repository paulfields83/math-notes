// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '日本共通考试数学讲义',
  tagline: '数学 1A、1A 进阶与 2BC 课程材料',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://paulfields83.github.io',
  baseUrl: '/math-notes/',

  organizationName: 'paulfields83',
  projectName: 'math-notes',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: [
            './src/css/custom.css',
            './node_modules/katex/dist/katex.min.css',
          ],
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: '日本共通考试数学讲义',
      logo: {
        alt: '日本共通考试数学讲义',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/math1a-basic',
          label: '数学 1A',
          position: 'left',
        },
        {
          to: '/docs/math1a/set-and-proposition',
          label: '数学 1A 进阶',
          position: 'left',
        },
        {
          to: '/docs/math2bc-intro',
          label: '数学 2BC',
          position: 'left',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 日本共通考试数学讲义`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
