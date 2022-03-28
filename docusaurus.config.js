module.exports = {
  title: 'Opensquare Docs',
  tagline: 'Opensquare Documentations',
  url: 'https://docs.opensquare.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'opensquare-network',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Opensquare Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/opensquare-network',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   copyright: `Copyright © ${new Date().getFullYear()} Opensquare, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/opensquare-network/docs/tree/master/website',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
