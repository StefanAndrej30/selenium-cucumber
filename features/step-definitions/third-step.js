const { When } = require('@cucumber/cucumber');
const thirdStepPage = require('../page-object/third-step-page');

When('I click lets get started button', async function () {
    await thirdStepPage.clickLetsGetStarted();
});

When('I click next button', async function () {
    await thirdStepPage.clickNextButton();
});
