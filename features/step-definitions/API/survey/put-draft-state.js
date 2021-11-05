const { Then } = require('@cucumber/cucumber');
const { httpConfig } = require('../../../commons/httpConfig');
const supertest = require('supertest');
const request = supertest(httpConfig.emprisingBaseUrl);
const authorize = require('../../../commons/authorization');


Then('I put draft state to be {int}', async function (draftState) {

    this.setResponse(await request
        .patch(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/DraftState?draftState=${draftState}`)
        .set(authorize.getDefaultHeaders())
        .expect(200)
    )
});