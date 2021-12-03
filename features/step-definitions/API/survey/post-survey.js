const { Then } = require('@cucumber/cucumber');
const { httpConfig } = require('../../../commons/httpConfig');
const supertest = require('supertest');
const request = supertest(httpConfig.emprisingBaseUrl);
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
        'DefaultCulture': 'en-US'
    };

    this.setResponse(
        await request
            .post(`/api/en-US/Project/${this.projectId}/Survey`)
            .send(postBody)
            .set(authorize.getDefaultHeaders())
            .expect('Content-Type', /json/)
            .expect(statusCode)
    );
    this.surveyId = this.response.body.SurveyId;
    this.clientId = this.response.body.ClientId;
    this.surveyName = this.response.body.Name;
    this.projectId = this.response.body.ProjectID;
});
