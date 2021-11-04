const {Status, BeforeAll, AfterStep, AfterAll} = require('@cucumber/cucumber');
const { browser } = require('../support/getBrowser')
const { clearFile }  = require('../commons/environment-setup');
const {takeScreenshot, deleteFiles, takeScreenshotForReporter, killPort} = require('../commons/action');
const { logTrace } = require('../commons/logs');

// deleteFiles('logs/UI');


BeforeAll(async function() {
  await clearFile();
  await deleteFiles('screenshots');
  return await browser.manage().window().maximize();
});

AfterAll(async function() {
  return await browser.close();
});


AfterStep(async function(scenario) {
  if(scenario.result.status === Status.FAILED) {
    await logTrace(scenario.result);
    await takeScreenshot();
    this.attach(await takeScreenshotForReporter() , 'image/png');
  }
});


