/* eslint-disable cucumber/async-then */
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const visual = require('../../../../commons/visual');

// When('Save in screen mode {string} screenshot', function (screenShootName) {
//   visual.setScreenshotName(screenShootName);
//   browser.saveScreen(visual.screenshotName);
// });

When('Save element {string} screenshots', function (screenShootName) {
  visual.setScreenshotName(screenShootName);
  browser.saveElement($('.DocSearch.DocSearch-Button'), visual.screenshotName);
});

// When('Save in full screen mode {string} screenshot', function (screenShootName) {
//   visual.setScreenshotName(screenShootName);
//   browser.saveFullPageScreen(visual.screenshotName);
// });

// When('Save in save tabbable mode {string} screenshot', function (screenShootName) {
//   visual.setScreenshotName(screenShootName);
//   browser.saveTabbablePage(visual.screenshotName);
// });

Then('should compare previously saved element with a baseline', function () {
  expect(browser.checkElement($('.DocSearch.DocSearch-Button'), visual.screenshotName)).to.equal(0);
});

// Then('should compare previously saved screen with a baseline', function () {
//   expect(browser.checkScreen(visual.screenshotName, { /* some options */ })).to.equal(0);
// });

// Then('should compare previously saved screen in full screean page mode with a baseline', function () {
//   expect(browser.checkFullPageScreen(visual.screenshotName)).to.equal(0);
// });

// Then('should compare previously saved tabbable screenshots with a baseline', function () {
//   expect(browser.checkTabbablePage(visual.screenshotName)).to.equal(0);
// });

// Then('should compare successful with a baseline', function () {
//   expect(browser.checkScreen(visual.screenshotName, { /* some options */ })).to.equal(0);
//   expect(browser.checkElement($('.DocSearch.DocSearch-Button'), visual.elementScreenshootName)).to.equal(0);
//   expect(browser.checkFullPageScreen(visual.fullScreenShootName)).to.equal(0);
// });

// When('I save {string} screeenshot in {string} mod', function (mod, screenShootName) {
//   if (mod === 'saveScreen') {
//     visual.setScreenshotName(screenShootName);
//     browser.saveScreen(visual.screenshotName);
//   }
//   else if (mod === 'saveElement') {
//     visual.setElementName(screenShootName);
//     browser.saveElement()
//   }
// });
