const {
  Status, BeforeAll, AfterStep, After, Before,
} = require('@cucumber/cucumber');
const { browser } = require('./getBrowser');
const { clearFile } = require('../commons/environment-setup');
const {
  takeScreenshot, deleteFiles, takeScreenshotForReporter, killPort,
} = require('../commons/action');
const { logTrace } = require('../commons/logs');
const authorization = require('../commons/authorization');
const globals = require('./globals');

// deleteFiles('logs/UI');
// get all tokens, clear env file, delete files in screenshot folder
BeforeAll(async function () {
  await globals.getAllTokens();
  await clearFile();
  await deleteFiles('screenshots');
  // await deleteFiles('logs/UI');
  await browser.manage().window().maximize();
});

// kill port 4444 because sometimes wont run next test
After(async function () {
  await browser.close();
  await killPort(4444);
});

// set default headers in before because when you need to change some parametar you can chage once here
Before(async function () {
  await authorization.setDefaultHeaders({
    Authorization: `Bearer ${authorization.getToken('userToken')}`,
    gptw_client_id: '146000003',
    gptw_affiliate_id: 'BR1',
    ConnectionId: 'e3e03bc1-35c5-417f-a5c3-ffa9a76d82c9',
  });
});

// take screenshot if test failed
AfterStep(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    await logTrace(scenario.result);
    await takeScreenshot();
    this.attach(await takeScreenshotForReporter(), 'image/png');
  }
});
