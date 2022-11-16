// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const footer = require("./footer");
const navbar = require("./navbar");
const plugins = require("./plugins");
const baseUrl = "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SailPoint Developer Community",
  tagline:
    "The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.",
  url: "https://developer.sailpoint.com",
  baseUrl,
  favicon: "img/SailPoint-Logo-Icon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl:
            "https://github.com/sailpoint-oss/developer-community-site/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "TB01H1DFAM",
        apiKey: "726952a7a9389c484b6c96808a3e0010",
        indexName: "prod_DEVELOPER_SAILPOINT_COM",
        searchPagePath: false,
        placeholder: "Search the Developer Community",
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      navbar: 
      {
        title: "",
        logo: {
          alt: "SailPoint Developer Community",
          src: "img/SailPoint-Developer-Community-Lockup.png",
          srcDark: "img/SailPoint-Developer-Community-Inverse-Lockup.png",
        },
        items: [
          {
            type: "dropdown",
            label: "IdentityNow",
            position: "left",
            items: [
              { to: "#", label: "API Specifications", className: "navbar__section" },
              { to: "/idn/api/v3", label: "V3 APIs", className: "indent" },
              { to: "/idn/api/beta", label: "Beta APIs", className: "indent" },
              { to: "/arm/api", label: "ARM APIs", className: "indent" },
              { to: "#", label: "Documentation", className: "navbar__section" },
              { to: "idn/docs", label: "IDN Documentation", className: "indent" },
              { to: "#", label: "External Links", className: "navbar__section" },
              {
                href: "https://documentation.sailpoint.com",
                label: "Product Documentation",
                className: "indent",
              },
              {
                href: "https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003041/true/xxemptyxx/",
                label: "IdentityNow Certifications",
                className: "indent",
              },
            ],
          },
          {
            type: "dropdown",
            label: "IdentityIQ",
            position: "left",
            items: [
              { to: "#", label: "API Specifications", className: "navbar__section" },
              { to: "/iiq/api", label: "IIQ APIs", className: "indent" },
              { to: "#", label: "External Links", className: "navbar__section" },
              {
                href: "https://documentation.sailpoint.com",
                label: "Product Documentation",
                className: "indent",
              },
              {
                href: "https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003042/true/xxemptyxx/",
                label: "IdentityIQ Certifications",
                className: "indent",
              },
            ],
          },
          {
            position: "left",
            label: "Blog",
            to: "https://medium.com/sailpointengineering",
          },
          {
            position: "left",
            label: "Ideas",
            to: "https://developer-sailpoint.ideas.aha.io/",
          },
          {
            position: "left",
            label: "Discuss",
            to: "https://developer.sailpoint.com/discuss",
          },
          {
            type: "dropdown",
            label: "Support",
            position: "right",
            items: [
              {
                label: "Submit Support Ticket",
                href: "https://support.sailpoint.com/hc/en-us/requests/new?ticket_form_id=360000629992",
              },
              { label: "Compass", href: "https://community.sailpoint.com" },
              { label: "Platform Status", href: "https://status.sailpoint.com/" },
            ],
          },
          {
            position: "right",
            to: "https://github.com/sailpoint-oss",
            className: "header-github-link",
            "aria-label": "SailPoint Open-source GitHub",
          },
        ],
      },
      footer: footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["http", "java", "ruby", "php", "csharp"],
      },
    }),

  plugins: 
  [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "idn",
        path: "products/idn",
        routeBasePath: "idn",
        editUrl:
          "https://github.com/sailpoint-oss/developer-community-site/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./products/idn/sidebar.js"),
        docItemComponent: "@theme/ApiItem",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "arm",
        path: "products/arm",
        routeBasePath: "arm",
        editUrl:
          "https://github.com/sailpoint-oss/developer-community-site/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./products/arm/sidebar.js"),
        docItemComponent: "@theme/ApiItem",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "iiq",
        path: "products/iiq",
        routeBasePath: "iiq",
        editUrl:
          "https://github.com/sailpoint-oss/developer-community-site/edit/main/",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./products/iiq/sidebar.js"),
        docItemComponent: "@theme/ApiItem",
      },
    ],
    
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "GTM-TSD78J",
        anonymizeIP: false,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "idn-api",
        docsPluginId: "idn",
        config: {
          idn_v3: {
            specPath: "static/api-specs/idn/sailpoint-api.v3.yaml",
            outputDir: "products/idn/api/v3",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache",
          },
          idn_beta: {
            specPath: "static/api-specs/idn/sailpoint-api.beta.yaml",
            outputDir: "products/idn/api/beta",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache",
          },
        },
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "iiq-api",
        docsPluginId: "iiq",
        config: {
          iiq: {
            specPath: "static/api-specs/iiq/swagger.json",
            outputDir: "products/iiq/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache",
          },
        },
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "arm-api",
        docsPluginId: "arm",
        config: {
          arm_agent_management: {
            specPath: "static/api-specs/arm/swagger-agent-management.json",
            outputDir: "products/arm/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache",
          }
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
