/* eslint-disable cucumber/async-then */
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const visual = require('../../commons/visual');
const thirdStepPage = require('../../page-object/third-step-page');

When('I save take preview button on invitation modal {string} screenshot', async function (screenshotShootName) {
  await visual.setScreenshotName(screenshotShootName);
  const elem = await thirdStepPage.previewButton;
  await browser.saveElement(await elem, visual.screenshotName);
});

Then('I should compare preview button on invitation modal with baseline', async function () {
  const elem = await thirdStepPage.previewButton;
  expect(await browser.checkElement(await elem, visual.screenshotName)).to.not.above(1);
});
