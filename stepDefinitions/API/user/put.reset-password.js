const { When } = require('@cucumber/cucumber');
const supertest = require('supertest');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment();
require('../../../support/world');

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

When('I reset password for {string} |status code: {int}|', async function (userId, statusCode) {
  this.setResponse(await request
    .put(`/api/User/${userId}/ResetPassword`)
    .set(authorize.getDefaultHeaders())
    .expect(statusCode));
});
