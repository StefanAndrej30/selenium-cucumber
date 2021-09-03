const env = require('../commons/environment-setup').readFile();

const httpConfig = {};
if (env === 'prod') {
    httpConfig.baseUrl = 'https://app-cmp.greatplacetowork.com/';
}
httpConfig.baseUrl = `https://${env}-cmp.greatplacetowork.com/`;


module.exports = {httpConfig};