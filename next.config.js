const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    // locales: ["en-US", "km-KH", "zh-CN"],
    locales: ["en-US", "km-KH"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/classroom",
        destination: "/classroom/index",
        statusCode: 301,
      },
      {
        source: "/contentserver",
        destination: "/contentserver/index",
        statusCode: 301,
      },
      {
        source: "/enterprise",
        destination: "/enterprise/index",
        statusCode: 301,
      },
      {
        source: "/lab",
        destination: "/lab/index",
        statusCode: 301,
      },
    ];
  },
});
