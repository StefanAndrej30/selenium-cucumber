/* eslint-disable new-cap */
const { Then } = require('@cucumber/cucumber');
const clientListPage = require('../../page-object/client-list.page');
const fourBoxDashboard = require('../../page-object/four-box-dashboard.page');

Then('I select {string} affiliate', async function (affiliate) {
  await clientListPage.selectAffiliate(affiliate);
});

Then('I search for {string} clientId and click on it', async function (clientId) {
  await clientListPage.searchClient(clientId);
  await clientListPage.clickClient(clientId);
});

Then('I click create survey button', async function () {
  await fourBoxDashboard.clickCreateSurveyButton();
});
