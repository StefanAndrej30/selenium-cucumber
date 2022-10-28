const { Then } = require('@cucumber/cucumber');
const supertest = require('supertest');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()
require('../../../support/world');

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

Then('I publish survey |status code: {int}|', async function (statusCode) {
  const postBody = {
    Publish: true,
  };

  this.setResponse(await request
    .post(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/Publish`)
    .send(postBody)
    .set(authorize.getDefaultHeaders())
    .expect('Content-Type', /json/)
    .expect(statusCode));
});
