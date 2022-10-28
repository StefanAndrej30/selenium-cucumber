const { Then } = require('@cucumber/cucumber');
const supertest = require('supertest');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()
require('../../../support/world');

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

let projectId;
let surveyId;
let clientId;
let surveyName;

Then('I edit survey: |status code: {int}|', async function (statusCode, docString) {
  clientId = this.clientId;
  projectId = this.projectId;
  surveyId = this.surveyId;
  surveyName = this.surveyName;

  const bodyParsed = await JSON.parse(docString);

  const postBody = {
    ProjectID: `${projectId}`,
    SurveyId: `${surveyId}`,
    ClientId: `${clientId}`,
    AffiliateId: null,
    Name: `${surveyName}`,
    NameWithSuperscript: `${surveyName}`,
    Status: 1,
    NumberOfInvites: bodyParsed.NumberOfInvites || 50,
    SurveyFlow: bodyParsed.SurveyFlow,
    QCertify: bodyParsed.QCertify || false,
    QCountry: bodyParsed.QCountry || false,
    QCountryList: bodyParsed.QCountryList || [],
  };

  this.setResponse(await request
    .put(`/api/Surveys/${this.surveyId}`)
    .send(postBody)
    .set(authorize.getDefaultHeaders())
    .expect('Content-Type', /json/)
    .expect(statusCode));
});
