const {Before, After, Status, World, BeforeStep, BeforeAll, AfterStep, AfterAll} = require('@cucumber/cucumber');
const { browser } = require('../support/getBrowser')
const { clearFile }  = require('../commons/environment-setup');
const {takeScreenshot, deleteFiles} = require('../commons/action');
const { logTrace } = require('../commons/logs');

// deleteFiles('logs/UI');


BeforeAll(function() {
  clearFile();
  deleteFiles('screenshots');
  return browser.manage().window().maximize();
});

AfterAll(function() {
  return browser.close();
});


AfterStep(async function(scenario) {
  if(scenario.result.status === Status.FAILED) {
    await logTrace(scenario.result);
    await takeScreenshot();
    const image = await browser.takeScreenshot();
    const decodedImage = Buffer.from(image.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
    this.attach(decodedImage , 'image/png');
  }
});