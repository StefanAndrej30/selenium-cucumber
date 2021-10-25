const waits = require('../commons/waits');
const { By } = require('selenium-webdriver');
const { browser } = require('../support/getBrowser');

class fourBoxDashboard {

get createSurveyButton() { return By.xpath('//*[@ng-click="vm.goCreateSurvey()"]') }
set clickCertificationSurvey(typeoFSurvey) {return By.xpath(`//button[normalize-space()="${typeoFSurvey}"]`)  }


async clickCreateSurveyButton() {
    await waits.clickElem(this.createSurveyButton);
}

async clickSurvey(typeoFSurvey) {
    await waits.WaitForElem(By.xpath(`//button[normalize-space()='${typeoFSurvey}']`));
   await browser.findElement(By.xpath(`//button[normalize-space()='${typeoFSurvey}']`)).click();
}

}
module.exports = new fourBoxDashboard();