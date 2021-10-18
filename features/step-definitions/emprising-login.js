/* eslint-disable new-cap */
const { Given, When} = require('@cucumber/cucumber');
const loginPage = require('../page-object/emprising-login.page');
const clientListPage = require('../page-object/client-list.page');
const { httpConfig } = require('../commons/httpConfig');


Given('I am on emprising page', async function() {
   await loginPage.open(httpConfig.baseUrl);
});

When('I login with username and password {string} {string} as {string}', async function (user, pass, typeOfUser) {
  switch (typeOfUser) {
    case 'CLIENT':
      loginPage.loginAsClient(user, pass);
      fourBoxDashboard.waitFor4BoxDashboardToLoad();
      break;
    case 'GPTWUSER':
      await loginPage.loginAsGptwUser(user, pass);
     await clientListPage.waitForClientList();
      break;
    default:
      loginPage.loginAsClient(user, pass);
      fourBoxDashboard.waitFor4BoxDashboardToLoad();
      break;
  }
});
