export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.oss-cn-guangzhou.aliyuncs.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.oss-cn-guangzhou.aliyuncs.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
