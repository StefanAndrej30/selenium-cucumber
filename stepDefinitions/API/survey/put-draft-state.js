const { Then } = require('@cucumber/cucumber');
const supertest = require('supertest');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()
require('../../../support/world');

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

Then('I put draft state to be {string} |status code: {int}|', async function (draftState, statusCode) {
  this.setResponse(await request
    .patch(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/DraftState?draftState=${draftState}`)
    .set(authorize.getDefaultHeaders())
    .expect('Content-Type', /json/)
    .expect(statusCode));
});
