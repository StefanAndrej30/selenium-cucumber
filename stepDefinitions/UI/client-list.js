const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const clientListPage = require('../../page-object/client-list.page');

When('I select {string} as affiliate', function (affiliate) {
  clientListPage.selectAffiliate(affiliate);
});

When('I search client {string}', function (clientId) {
  clientListPage.searchClient(clientId);
});

When('I click client {string}', function (clientId) {
  clientListPage.clickClient(clientId);
});

Then('I expect message about you dont have any surveyId to be {string}', function (message) {
  return expect(clientListPage.checkErrorMessageWithoutAnySurveyId().getText()).to.contain(message);
});
