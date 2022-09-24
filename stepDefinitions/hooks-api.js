/* eslint-disable no-unused-vars */
// SELENIUM_BROWSER=safari node example/google_search - comand line
const {
  Status, BeforeAll, AfterStep, AfterAll, Before, After,
} = require('@cucumber/cucumber');
const { clearFile } = require('../commons/environment');
const { setDefaultHeaders } = require('../commons/action');
const { logTrace } = require('../commons/logs');
const authorization = require('../commons/authorization');

// const browser = authorization.getBrowser();
const globals = require('../support/globals');

// deleteFiles('logs/UI');
// get all tokens, clear env file, delete files in screenshot folder
BeforeAll(async function () {
  // await clearFile();
  await globals.getAllTokens();
});

// kill port 4444 because sometimes wont run next test
// AfterAll(async function () {
//   await killPort(4444);
// });

// set default headers in before because when you need to change some parametar you can chage once here
Before(async function () {
  await setDefaultHeaders('userToken', '146000003', 'BR1');
});

// take screenshot if test failed
// AfterStep(async function (scenario) {
//   if (scenario.result.status === Status.FAILED) {
//     for (let i = 0; i < scenario.pickle.tags.length; i += 1) {
//       if (scenario.pickle.tags[i].name === '@ui') {
//         await takeScreenshot();
//         this.attach(await takeScreenshotForReporter(), 'image/png');
//       }
//     }
//     await logTrace(scenario.result);
//   }
// });

AfterStep(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    await logTrace(scenario.result);
  }
});

AfterAll(async function() {
  await clearFile()
})