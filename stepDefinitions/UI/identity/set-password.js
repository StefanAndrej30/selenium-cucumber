const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const setPasswordPage = require('../../../page-object/identity/setup-password.page');

When('I create new password to be {string}', async function (password) {
  await setPasswordPage.setUpPassword(password);
});

Then('I expect message about created password to include {string}', async function (message) {
  const recivedMessage = await (await setPasswordPage.getMessageAboutCreatedPassword()).getText()
   await expect(recivedMessage).to.contain(message);
  });