const { Then } = require('@cucumber/cucumber');
const { browser } = require('../../support/getBrowser');
const { expect } = require('chai');
const authorize = require('../../commons/authorization');
const { httpConfig } = require('../../commons/httpConfig');

Then('I expect that url contain {string}', async function (url) {
    expect(await browser.getCurrentUrl()).to.contain(url);
});


Then('I set headers to be:', async function(docString) {

    const defaultHeaders = JSON.parse(docString);

    switch(defaultHeaders.Authorization) {
    case 'USER':
        defaultHeaders.Authorization = `Bearer ${authorize.getToken('userToken')}`;
        break;
    }

    authorize.setDefaultHeaders(await defaultHeaders);
});

Then('I visit previously created survey with next url {string}', async function(url) {
    await browser.get(`${httpConfig.baseUrl}/survey/${this.surveyId}/${url}`);
});

