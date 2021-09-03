const {Then, Given, When} = require('@cucumber/cucumber');
const {By} = require('selenium-webdriver');
const loginPage = require('../page-object/emprising-login.page');
const clientListPage = require('../page-object/client-list.page');
const { browser } = require('../support/getBrowser');
const { httpConfig } = require('../commons/httpConfig');
const fourBoxDashboard = require('../page-object/four-box-dashboard.page');

When('I click {string} survey', async function (typeOfSurvey) {
    await fourBoxDashboard.clickSurvey(typeOfSurvey);
});