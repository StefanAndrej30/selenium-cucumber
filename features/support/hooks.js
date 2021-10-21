const {Before, After, Status} = require('@cucumber/cucumber');
const { browser } = require('../support/getBrowser')
const { clearFile }  = require('../commons/environment-setup');
const {takeScreenshot, deleteFiles} = require('../commons/action');
const { logTrace } = require('../commons/logs');
// deleteFiles('logs/UI');


Before(function() {
  clearFile();
  deleteFiles('screenshots');
  return browser.manage().window().maximize();
});

After(function(scenario) {
  if(scenario.result.status === Status.FAILED) {
    logTrace(scenario.result);
    takeScreenshot()
    browser.close();
  }
  return browser.close();
});
