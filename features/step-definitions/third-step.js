const {Then, Given, When} = require('@cucumber/cucumber');
const {By} = require('selenium-webdriver');
const loginPage = require('../page-object/emprising-login.page');
const clientListPage = require('../page-object/client-list.page');
const { browser } = require('../support/getBrowser');
const { httpConfig } = require('../commons/httpConfig');
const fourBoxDashboard = require('../page-object/four-box-dashboard.page');
const thirdStepPage = require('../page-object/third-step-page');

When('I click lets get started button', async function () {
    await thirdStepPage.clickLetsGetStarted();
});

When('I click next button', async function () {
    await thirdStepPage.clickNextButton();
});
