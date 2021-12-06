const { Given, When } = require('@cucumber/cucumber');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');
const { browser } = require('../../support/getBrowser');
const waits = require('../../commons/waits');
const fourthStepPage = require('../../page-object/fourth-step-page');
const upload = require('../../commons/uploadFile');

Given('I enter {string} employes', async function (employe) {
  await fourthStepPage.enterInputForEmployes(employe);
});

When('I click {string} do all of your employes have email address', async function (answer) {
  await fourthStepPage.clickDoAllYourEmoloyesButton(answer);
});

When('I click confirm button', async function () {
  await fourthStepPage.clickConfirmButton();
});

When('I choose {string} type of upload and uplaod {string} file', async function (typeOfUpload, file) {
  switch (typeOfUpload) {
    case 'CERTIFICATION':
      await waits.WaitForElem(By.xpath('//*[@id="fileUploadBtn"]/input'));
      await upload.uploadFile(await fourthStepPage.certificationUpload, `../../data/uploadFiles/${file}`);
      break;
    case 'EMAIL':
      await waits.WaitForElem(By.xpath('//*[@id="emailDistributionBtn"]/input'));
      await upload.uploadFile(await By.xpath('//*[@id="emailDistributionBtn"]/input'));
      break;
    default:
      await waits.WaitForElem(By.xpath('//*[@id="emailDistributionBtn"]/input'));
      await upload.uploadFile(await By.xpath('//*[@id="emailDistributionBtn"]/input'));
  }
});

When('I expect that confirm upload button is not clickable', async function () {
  await waits.WaitForElem(fourthStepPage.confirmUploadButton);
  const elm = await browser.findElement(fourthStepPage.confirmUploadButton);
  expect(await elm.isEnabled()).to.be.false;
});

When('I expect that analyst message is {string}', async function (msg) {
  await fourthStepPage.getAnalystMessage(msg);
});

When('I click OK button', async function () {
  await waits.clickElem(fourthStepPage.OKButton);
});
