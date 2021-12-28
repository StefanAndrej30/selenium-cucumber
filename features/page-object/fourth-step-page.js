const { By } = require('selenium-webdriver');
const { expect } = require('chai');
const authorization = require('../commons/authorization');
const waits = require('../commons/waits');

class FourtStep {
  get emoloyesInput() { return By.css('#invitee-calculator-number-of-us-employees'); }

  doAllYourEmoloyesButton(answer) { return By.xpath(`//span[normalize-space()="${answer}"]`); }

  get confirmButton() { return By.xpath('//*[@ng-click="ctrl.confirmClickHandler()"]'); }

  get certificationUpload() { return authorization.getBrowser().findElement(By.xpath('//*[@id="fileUploadBtn"]/input')); }

  get confirmUploadButton() { return By.xpath('//*[@ng-click="ctrl.uploadEmails()"]'); }

  get analystMessageForCertiifaction() { return By.css('.analysis-list'); }

  get OKButton() { return By.css('.btn.btn--primary.btn'); }

  get languageUiPicker() { return By.css('.uiLanguagePicker'); }

  get languageUlDropdown() { return By.css('.dropdown-menu.dropdown-menu__one-line'); }

  async enterInputForEmployes(employes) {
    await waits.sendKeysElem(this.emoloyesInput, employes);
  }

  async clickDoAllYourEmoloyesButton(answer) {
    await waits.clickElem(this.doAllYourEmoloyesButton(answer));
  }

  async clickConfirmButton() {
    await waits.clickElem(this.confirmButton);
  }

  async getAnalystMessage(msg) {
    await waits.WaitForElem(this.analystMessageForCertiifaction);
    expect(await authorization.getBrowser().findElement(this.analystMessageForCertiifaction).getText()).to.contain(msg);
  }
}
module.exports = new FourtStep();
