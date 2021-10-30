const {Before, After, Status, World} = require('@cucumber/cucumber');
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

After(async function(scenario) {
  if(scenario.result.status === Status.FAILED) {
    logTrace(scenario.result);
    const image = await browser.takeScreenshot();
    const decodedImage = Buffer.from(image.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
    this.attach(decodedImage , 'image/png');
    takeScreenshot();
    browser.close();    
  }
  return browser.close();
});
