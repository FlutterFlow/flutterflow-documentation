import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FlutterFlow Documentation',
  tagline: 'Learn how to build mobile, web and desktop apps incredibly fast - without sacrificing on app quality or features',
  url: 'https://docs.flutterflow.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'logos/favicon.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/FlutterFlow/flutterflow-documentation/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          exclude: ['docs/index.md'],
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: 'v8',
          //   },
        },
        // blog: {
        //   showReadingTime: true,
        //   blogSidebarTitle: 'FlutterFlow Blog',
        //   blogSidebarCount: 'ALL'
        // },
        gtag: {
          trackingID: 'G-LC4SC6JY70',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css?family=Product+Sans',
      rel: 'stylesheet',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FlutterFlow Docs',
      logo: {
        alt: 'FlutterFlow Docs',
        src: '/logos/logoMark_outlinePrimary_transparent.svg',
      },
      items: [

        {
          type: 'doc',
          docId: 'marketplace/index',
          position: 'left',
          label: 'Marketplace',
        },
        {
          href: 'https://github.com/FlutterFlow/flutterflow-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '#',
            },
          ],

        },

        {
          title: 'Community',
          items: [
            {
              label: 'Community Forum',
              href: 'https://community.flutterflow.io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/flutterflow',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.flutterflow.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/FlutterFlow/flutterflow-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FlutterFlow. Built with Docusaurus.`,
    },

    algolia: {
      // The application ID provided by Algolia
      appId: 'L5VTR6TWVD',

      // Public API key: it is safe to commit it
      apiKey: 'bab16fbb5188c4b49fad968ebc643dd3',

      indexName: 'flutterflow--82026',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,

      //... other Algolia params
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
