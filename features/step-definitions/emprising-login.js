const {When, Then, Given, BeforeAll, AfterAll} = require('@cucumber/cucumber')
const {expect} = require('chai');
const {By, Builder, Key} = require('selenium-webdriver');
const loginPage = require('../pageObject/emprising-login.page');
//  const { getDriver } = require('../pageObject/base.page');
//  const browser = getDriver();

// Given('Testing vanila selenium', async function () {
//   await this.browser.get('https://www.google.com/');
//   await testPage.getField();
//   expect(await this.browser.getCurrentUrl()).to.contain('Wikipediag');
//   this.browser.quit();
// });


When('I login with username and password {string} {string} as {string}', function (user, pass, typeOfUser) {
  switch (typeOfUser) {
    case 'CLIENT':
      loginPage.loginAsClient(user, pass);
      fourBoxDashboard.waitFor4BoxDashboardToLoad();
      break;
    case 'GPTWUSER':
      loginPage.loginAsGptwUser(user, pass);
      clientListPage.waitForClientList();
      break;
    default:
      loginPage.loginAsClient(user, pass);
      fourBoxDashboard.waitFor4BoxDashboardToLoad();
      break;
  }
});

Given('Login as gptw user {string} {string}', async function (user, pass) {
  await this.browser.get('https://qa-cmp.greatplacetowork.com/');
  await loginPage.loginAsGptwUser(user, pass);
});

