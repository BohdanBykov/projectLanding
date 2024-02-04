// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   url: env('PUBLIC_URL', 'http://172.233.60.71:1337'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   url: env('PUBLIC_URL', 'http://strapi:1340'),
//   port: env.int('PORT', 1340),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', 'your-admin-jwt-secret'),
//     },
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
//   proxy: {
//     trust: true,
//   },
//   settings: {
//     contentSecurityPolicy: {
//       useDefaults: true,
//       connectSrc: ["'self'", 'https:', 'http://localhost:1340'],
//     },
//   },
// });

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1340),
  url: 'http://<domain name>.com/admin',
  app: {
    keys: env.array('APP_KEYS'),
  },
});