// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '日本共通考试数学讲义',
  tagline: '1A、2BC 上课与备考材料',
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
        alt: '日本共通考试数学讲义 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/category/%E6%95%B0%E5%AD%A61a',
          label: '数学1A',
          position: 'left',
        },
        {
          to: '/docs/math2bc-intro',
          label: '数学2BC',
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
