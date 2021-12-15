const moment = require('moment');
const querystring = require('querystring');
const identityConfig = require('../commons/identity');
const authorization = require('../commons/authorization');
const httpLogin = require('../step-definitions/API/login');

class Globals {
  /**
  * set min and max to get random number
  * @param {number} - min number
  * @param {number} - max number
  */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
  * set sleep in milliseconds
  * @param {number} - number for milliseconds
  */
  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  /**
  * set length and chars number
  * @param {number} - number for length
  * @param {number} - number for chars number
  */
  randomString(length, chars) {
    let mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    let result = '';
    for (let i = length; i > 0; i -= 1) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }

  timeNow(format = 'LLL SSS') {
    return moment().format(format);
  }

  /**
  * Getting all necessary tokens
  */
  async getAllTokens() {
    const decodedClient = decodeURI(querystring.stringify(identityConfig.client));
    const decodedUser = decodeURI(querystring.stringify(identityConfig.user));

    const clientLogin = await httpLogin.login(decodedClient);
    authorization.setToken('clientToken', await clientLogin.token);
    const userLogin = await httpLogin.login(decodedUser);
    authorization.setToken('userToken', await userLogin.token);
  }
}
module.exports = new Globals();
