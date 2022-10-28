const { Then, Given, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const authorize = require('../../commons/authorization');
const { resolutions } = require('../../commons/enums');
const { baseUrl } = require('../../commons/environment').getEnvironment()
const visual = require('../../commons/visual');

Then('I expect that url contain {string}', async function (url) {
  expect(await authorize.getBrowser().getCurrentUrl()).to.contain(url);
});

Then('I visit previously created survey with next url {string}', async function (url) {
  await browser.url(`${baseUrl}/survey/${this.surveyId}/${url}`);

  // await browser.debug();
});

Given('I visit {string}', async function (url) {
  await browser.url(url);
});

Given('I set resolution {string}', async function (resolutionName) {
  await browser.setWindowSize(resolutions[resolutionName][0], resolutions[resolutionName][1]);
});

Given('I open the browser', async function () {
  expect(await browser.sessionId, 'The browser has not started!').to.be.ok;
});

When('I debug', async function () {
  await browser.debug();
});

When('Save in screen mode {string} screenshot', async function (screenShootName) {
  await visual.setScreenshotName(screenShootName);
  await browser.saveScreen(visual.screenshotName);
});

When('Save in full screen mode {string} screenshot', async function (screenShootName) {
  await visual.setScreenshotName(screenShootName);
  await browser.saveFullPageScreen(visual.screenshotName);
});

When('Save in save tabbable mode {string} screenshot', async function (screenShootName) {
  await visual.setScreenshotName(screenShootName);
  await browser.saveTabbablePage(visual.screenshotName);
});

Then('should compare previously saved screen with a baseline', async function () {
  expect(await browser.checkScreen(visual.screenshotName, { ignoreNothing: false })).to.not.above(1);
});

Then('should compare previously saved screen in full screean page mode with a baseline', async function () {
  expect(await browser.checkFullPageScreen(visual.screenshotName, { ignoreNothing: false })).to.not.above(1);
});

Then('should compare previously saved tabbable screenshots with a baseline', async function () {
  expect(await browser.checkTabbablePage(visual.screenshotName)).to.not.above(1);
});

Then('I wait {int}ms', async function (milliseconds) {
  await browser.pause(milliseconds);
});

Then('I visit previously recived setap password link', async function () {
  await browser.url(`https://${this.setupPasswordLink}`);
});