/* eslint-disable cucumber/async-then */
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const thirdStepPage = require('../../page-object/third-step-page');

When('I click on schedule and messaging modal', function () {
  thirdStepPage.clickScheduleAndMessagingModal();
});

When('I click save on schedule and messaging modal', function () {
  thirdStepPage.clickScheduleAndMessagingModalSave();
});

When('I enter {string} support email', function (email) {
  thirdStepPage.enterSupportEmail(email);
});

When('I click next button on third step', function () {
  thirdStepPage.clickNextButton();
});

When('I click ok on design guidance modal', function () {
  thirdStepPage.clickDesignGuidanceModalContentOk();
});

When('I confirm welcome modal', function () {
  thirdStepPage.clickModalContentLetsGetStarted();
});

When('I click Upon Approval', function () {
  thirdStepPage.clickUponApproval();
});

When('I click anonymous flow checkbox', function () {
  thirdStepPage.clickAnonymousFlowCheckbox();
});

Then('I expect that place holder {string} is displayed', function (placeHolderValue) {
  return expect(thirdStepPage.checkplaceHolderSupportEmail(placeHolderValue).isDisplayed()).to.be.true;
});
