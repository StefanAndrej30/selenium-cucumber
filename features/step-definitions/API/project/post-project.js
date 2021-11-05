const { Given } = require('@cucumber/cucumber');
const { httpConfig } = require('../../../commons/httpConfig');
const supertest = require('supertest');
const request = supertest(httpConfig.emprisingBaseUrl);
const globals = require('../../../support/globals')
const authorize = require('../../../commons/authorization');

Given('I create new project with random name', async function () {
    const postBody = {
        Name: `Supertest ${globals.timeNow()} ${globals.getRandomInt(0, 999)}`
    }

    this.setResponse(await request
        .post('/api/Project')
        .send(postBody)
        .set(authorize.getDefaultHeaders())
        .expect(201)
    );

    this.projectId = this.response.body.ProjectID
});