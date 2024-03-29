const { Then } = require('@cucumber/cucumber');

const supertest = require('supertest');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

Then('I post demographics from edf file |status code: {int}|', async function (statusCode) {
  const postBody = {
    'demographics':
      this.edfColumns,
    'skipLoader': true,
  };
  this.setResponse(await request
    .post(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/File/Demographics`)
    .set(authorize.getDefaultHeaders())
    .send(postBody)
    .expect(statusCode));
});
