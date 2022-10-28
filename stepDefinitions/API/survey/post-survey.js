const { Then } = require('@cucumber/cucumber');
// const superagent = require('superagent');
// require('superagent-retry-delay')(superagent);
const supertest = require('supertest');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()
require('../../../support/world');

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');
const { surveyFlows } = require('../../../commons/enums');

Then('I create a new {string} survey |status code: {int}|', async function (flow, statusCode) {
  const postBody = {
    'Name': 'superTest',
    'SurveyFlow': surveyFlows[flow],
    'RecurringPeriod': 0,
    'ShowAdditionalInfo': true,
    'TemplateType': 0,
    'DefaultCultureId': 'en-US',
    'QCountry': false,
    'QCountryList': [],
    'DefaultCulture': 'en-US',
  };

  this.setResponse(
    await request
      .post(`/api/en-US/Project/${this.projectId}/Survey`)
      .retry(2, 5000)
      .send(postBody)
      .set(authorize.getDefaultHeaders())
      .expect(statusCode)
      .expect('Content-Type', /json/),

  );
  this.surveyId = this.response.body.SurveyId;
  this.clientId = this.response.body.ClientId;
  this.surveyName = this.response.body.Name;
  this.projectId = this.response.body.ProjectID;
  this.affiliateId = this.response.body.AffiliateId;
});
