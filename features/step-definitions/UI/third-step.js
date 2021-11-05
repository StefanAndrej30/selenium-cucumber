const { When } = require('@cucumber/cucumber');
const thirdStepPage = require('../../page-object/third-step-page');

When('UI - I click lets get started button', async function () {
    await thirdStepPage.clickLetsGetStarted();
});

When('UI - I click next button', async function () {
    await thirdStepPage.clickNextButton();
});
