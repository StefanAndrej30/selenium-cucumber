/* eslint-disable no-undef */
/* eslint-disable new-cap */
const { Given, When } = require('@cucumber/cucumber');
const loginPage = require('../../page-object/emprising-login.page');
const clientListPage = require('../../page-object/client-list.page');
const { httpConfig } = require('../../commons/httpConfig');
const authorize = require('../../commons/authorization');

const { setLocalStorage, setSessionStorage } = require('../../commons/action');

Given('I am on emprising page', async function () {
  await loginPage.open(httpConfig.baseUrl);
});

When('I login with username and password {string} {string} as {string}', async function (user, pass, typeOfUser) {
  switch (typeOfUser) {
    case 'CLIENT':
      await loginPage.loginAsClient(user, pass);
      await loginPage.waitFor4BoxDashboardToLoad();
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

When('I set token in session storage to {string}', async function (token) {
  const passedToken = authorize.getToken(token);
  await authorize.getBrowser().get(httpConfig.baseUrl);
  const sessionStorage = `{"access_token":"${passedToken}"}`;
  await setLocalStorage('cmp-token', passedToken);
  await setSessionStorage(`oidc.user:${httpConfig.oidc}`, sessionStorage);
});
