/* eslint-disable cucumber/async-then */
const { When, Then } = require('@cucumber/cucumber');
const thirdStepPage = require('../../page-object/third-step-page');

When('I click on schedule and messaging modal', async function () {
  await thirdStepPage.clickScheduleAndMessagingModal();
});

When('I click save on schedule and messaging modal', async function () {
  await thirdStepPage.clickScheduleAndMessagingModalSave();
});

When('I enter {string} support email', async function (email) {
  await thirdStepPage.enterSupportEmail(email);
});

When('I click next button on third step', async function () {
  await thirdStepPage.clickNextButton();
});

When('I click invitation button', async function () {
  await thirdStepPage.clickInvitationButton();
});

When('I click ok on design guidance modal', async function () {
  await thirdStepPage.clickDesignGuidanceModalContentOk();
});

When('I confirm welcome modal', async function () {
  await thirdStepPage.clickModalContentLetsGetStarted();
});

When('I click Upon Approval', async function () {
  await thirdStepPage.clickUponApproval();
});

When('I click anonymous flow checkbox', async function () {
  await thirdStepPage.clickAnonymousFlowCheckbox();
});

Then('I expect that place holder {string} is displayed', async function (placeHolderValue) {
  await thirdStepPage.checkplaceHolderSupportEmail(placeHolderValue);
});
