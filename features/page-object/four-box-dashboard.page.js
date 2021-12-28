/* eslint-disable no-setter-return */
const { By } = require('selenium-webdriver');
const waits = require('../commons/waits');
const authorization = require('../commons/authorization');

class FourBoxDashboard {
  get createSurveyButton() { return By.xpath('//*[@ng-click="vm.goCreateSurvey()"]'); }

  set clickCertificationSurvey(typeoFSurvey) { return By.xpath(`//button[normalize-space()="${typeoFSurvey}"]`); }

  async clickCreateSurveyButton() {
    await waits.clickElem(this.createSurveyButton);
  }

  async clickSurvey(typeoFSurvey) {
    await waits.WaitForElem(By.xpath(`//button[normalize-space()='${typeoFSurvey}']`));
    await authorization.getBrowser().findElement(By.xpath(`//button[normalize-space()='${typeoFSurvey}']`)).click();
  }
}
module.exports = new FourBoxDashboard();
