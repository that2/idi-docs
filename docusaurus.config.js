// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IDi Docs',
  tagline: 'Documentación de productos y equipos desarrollados por IDi',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.idi.com.gt',
  baseUrl: '/',

  organizationName: 'that2',
  projectName: 'idi-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/that2/idi-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'IDi Logo',
          src: 'img/logo.png',
          style: {height: '36px'},
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://idi.com.gt',
            label: 'idi.com.gt',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Inicio',
                to: '/docs/hydrosurveyor-v1',
              },
            ],
          },
          {
            title: 'IDi',
            items: [
              {
                label: 'Sitio web',
                href: 'https://idi.com.gt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IDi. Desarrollado con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
