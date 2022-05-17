const env = require('./environment-setup').readFile();

const httpConfig = {};

httpConfig.baseUrl = `https://${env}-cmp.greatplacetowork.com/`;
httpConfig.loginBaseUrl = `https://${env}-login.greatplacetowork.com/identity/connect/token`;
httpConfig.emprisingBaseUrl = `https://${env}-cmpapi.greatplacetowork.com`;
httpConfig.oidc = `https://${env}-login.greatplacetowork.com/identity:GptwCMP`;

if (env === 'prod') {
  httpConfig.baseUrl = 'https://app-cmp.greatplacetowork.com/';
}

if (env === 'ltd') {
  httpConfig.loginBaseUrl = 'https://dev-login.greatplacetowork.com/identity/connect/token';
  httpConfig.oidc = 'https://dev-login.greatplacetowork.com/identity:GptwCMP';
}

module.exports = { httpConfig };
