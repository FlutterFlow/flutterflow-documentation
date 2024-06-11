import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FlutterFlow Documentation',
  tagline: 'Learn how to build mobile, web and desktop apps incredibly fast - without sacrificing on app quality or features',
  url: 'https://docs.flutterflow.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
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
          // exclude: ['README.md'],
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: 'v8',
          //   },
        },
        // Will be passed to @docusaurus/plugin-google-tag-manager.
        // googleTagManager: {
        //   containerId: 'GTM-TKMGCBC',
        // },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'FlutterFlow Blog',
          blogSidebarCount: 'ALL'
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
          docId: 'troubleshooting/overview', // Adjust to the first document in "Troubleshooting"
          position: 'left',
          label: 'Troubleshooting',
        },
        {
          type: 'doc',
          docId: 'changelog/changelog', // Adjust to the first document in "Changelog"
          position: 'left',
          label: 'Changelog',
        },
        {
          to: '/blog/overview',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
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
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FlutterFlow. Built with Docusaurus.`,
    },
    plugins: [
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-XXXXXXXXXX', // Your GA4 Measurement ID
          anonymizeIP: true, // Optional: Anonymizes the IP address of the sender
        },
      ],
    ],
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: 'YOUR_APP_ID',

    //   // Public API key: it is safe to commit it
    //   apiKey: 'YOUR_SEARCH_API_KEY',

    //   indexName: 'YOUR_INDEX_NAME',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: 'external\\.com|domain\\.com',

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: '/docs/', // or as RegExp: /\/docs\//
    //     to: '/',
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: 'search',

    //   //... other Algolia params
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
