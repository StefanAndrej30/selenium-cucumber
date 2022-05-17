const supertest = require('supertest');
const { httpConfig } = require('../../commons/httpConfig');

const request = supertest(httpConfig.loginBaseUrl);
const { logTrace } = require('../../commons/logs');

class HttpLogin {
  async login(postBody) {
    let info = '';
    try {
      const response = await request
        .post('')
        .send(postBody)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect(200);
      logTrace(response);
      info = await response;
    } catch (err) {
      console.log(err);
    }
    return { token: info.body.access_token };
  }
}

module.exports = new HttpLogin();
