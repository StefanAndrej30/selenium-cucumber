const { Given } = require('@cucumber/cucumber');
const superagent = require('superagent');
require('superagent-retry-delay')(superagent);
const supertest = require('supertest');
const { httpConfig } = require('../../../commons/httpConfig');

const request = supertest(httpConfig.emprisingBaseUrl);
const globals = require('../../../support/globals');
const authorize = require('../../../commons/authorization');

Given('I create new project with random name |status code: {int}|', async function (statusCode) {
  const postBody = {
    Name: `Supertest ${globals.timeNow()} ${globals.getRandomInt(0, 999)}`,
  };
  this.setResponse(await request
    .post('/api/Project')
    .retry(2, 1000, [404, 403])
    .send(postBody)
    .set(authorize.getDefaultHeaders())
    .expect('Content-Type', /json/)
    .expect(statusCode));

  this.projectId = this.response.body.ProjectID;
});
