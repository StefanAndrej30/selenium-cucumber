const env = require('../commons/environment-setup').readFile();

const httpConfig = {};
if (env === 'prod') {
    httpConfig.baseUrl = 'https://app-cmp.greatplacetowork.com/';
}

if (env === 'ltd') {
    httpConfig.loginBaseUrl = `https://dev-login.greatplacetowork.com/identity/connect/token`;

}

httpConfig.baseUrl = `https://${env}-cmp.greatplacetowork.com/`;
httpConfig.loginBaseUrl = `https://${env}-login.greatplacetowork.com/identity/connect/token`;
httpConfig.emprisingBaseUrl = `https://${env}-cmpapi.greatplacetowork.com`;

module.exports = { httpConfig };