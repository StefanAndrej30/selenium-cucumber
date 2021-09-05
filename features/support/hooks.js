const {Before, After, AfterAll, Status} = require('@cucumber/cucumber');
const { browser } = require('../support/getBrowser')
const { clearFile }  = require('../commons/environment-setup');
const {takeScreenshot, deleteFiles} = require('../commons/action');

Before(function() {
  clearFile();
  deleteFiles('screenshots');
  return browser.manage().window().maximize();
});

After(function(scenario) {
  if(scenario.result.status === Status.FAILED) {
    takeScreenshot()
    browser.close();
  }
  return browser.close();
});
