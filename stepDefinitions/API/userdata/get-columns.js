const { Then } = require('@cucumber/cucumber');

const supertest = require('supertest');
const { httpConfig } = require('../../../commons/httpConfig');

const request = supertest(httpConfig.emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

Then('I get columns from uplaoded file |status code: {int}|', async function (statusCode) {
  this.setResponse(await request
    .get(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/File/Columns`)
    .set(authorize.getDefaultHeaders())
    .expect(statusCode));
  this.edfColumns = Object.keys(this.response.body.Columns);
});
