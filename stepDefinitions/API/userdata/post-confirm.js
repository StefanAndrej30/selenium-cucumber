/* eslint-disable no-promise-executor-return */
const { Then } = require('@cucumber/cucumber');

const supertest = require('supertest');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

Then('I confirm edf file |status code: {int}|', async function (statusCode) {
  this.setResponse(await request
    .post(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/File/Confirm`)
    .set(authorize.getDefaultHeaders())
    .expect(statusCode));
  await new Promise((r) => setTimeout(r, 3000));
});
