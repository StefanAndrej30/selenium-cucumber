const { Then } = require('@cucumber/cucumber');
const { browser } = require('../../support/getBrowser');
const { expect } = require('chai');
const authorize = require('../../commons/authorization')

Then('UI - I expect that url contain {string}', async function (url) {
    expect(await browser.getCurrentUrl()).to.contain(url);
});


Then('API - I set headers to be:', async function(docString) {

    const defaultHeaders = JSON.parse(docString);

    switch(defaultHeaders.Authorization) {
        case 'USER':
            defaultHeaders.Authorization = `Bearer ${authorize.getToken('userToken')}`;
        break;
    }

    authorize.setDefaultHeaders(await defaultHeaders);
});