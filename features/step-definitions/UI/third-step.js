const { When, Then } = require('@cucumber/cucumber');
const thirdStepPage = require('../../page-object/third-step-page');
const { expect } = require('chai');
const { browser } = require('../../support/getBrowser');

When('I click lets get started button', async function () {
    await thirdStepPage.clickLetsGetStarted();
});

When('I click next button', async function () {
    await thirdStepPage.clickNextButton();
});

When('I click schedule and messaging modal', async function () {
    await thirdStepPage.clickScheduleAndMessagingModal();
});

Then('I expect that placeholder {string} is displayed', async function (value) {
    expect(await (await thirdStepPage.checkPlaceholderForSupportEmial(value)).isDisplayed()).to.be.true;
});