const { Then } = require('@cucumber/cucumber');
const { httpConfig } = require('../../../commons/httpConfig');
const supertest = require('supertest');
const request = supertest(httpConfig.emprisingBaseUrl);
const authorize = require('../../../commons/authorization');
const { certificationSurveyTypes } = require('../../../commons/enums');



Then('I create {string} survey |status code: {int}|', async function (typeOfSurvey, statusCode) {
    const postBody = {
        'SurveyType': certificationSurveyTypes[typeOfSurvey]
    };

    this.setResponse(await request
        .post('/api/en-US/Certification/Survey')
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

