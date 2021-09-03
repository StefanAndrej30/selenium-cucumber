const { When, Then } = require('@cucumber/cucumber');
const { browser } = require('../support/getBrowser');
const { expect } = require('chai');

Then('I expect that url contain {string}', async function (url) {
    expect(await browser.getCurrentUrl()).to.contain(url);
});
