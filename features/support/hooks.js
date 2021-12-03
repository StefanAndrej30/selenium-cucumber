'use strict';

const {Status, BeforeAll, AfterStep, After, AfterFe} = require('@cucumber/cucumber');
const { browser } = require('../support/getBrowser')
const { clearFile }  = require('../commons/environment-setup');
const {takeScreenshot, deleteFiles, takeScreenshotForReporter, killPort} = require('../commons/action');
const { logTrace } = require('../commons/logs');
const querystring = require('querystring');
const identityConfig = require('../commons/identity');
const authorization = require('../commons/authorization');
const decodedClient = decodeURI(querystring.stringify(identityConfig.client));
const { login } = require('../step-definitions/API/login')

// deleteFiles('logs/UI');


BeforeAll(async function() {
  const clientLogin =  await login(decodedClient);
  authorization.setToken('clientToken', await clientLogin.token);
  await clearFile();
  await deleteFiles('screenshots');
  await browser.manage().window().maximize();
});

After(async function() {
  await browser.close();
  await killPort(4444);
});


AfterStep(async function(scenario) {
  if(scenario.result.status === Status.FAILED) {
    await logTrace(scenario.result);
    await takeScreenshot();
    this.attach(await takeScreenshotForReporter() , 'image/png');
  }
});
