const {browser} = require('../support/getBrowser');
const waits  = require('../commons/browser')
//waits.waitForScript();
const {By, until} = require('selenium-webdriver');

class fourBoxDashboard {

get createSurveyButton() { return By.xpath('//*[@ng-click="vm.goCreateSurvey()"]') }
clickCertificationSurvey(typeoFSurvey) {return By.xpath(`//button[normalize-space()="${typeoFSurvey}"]`)  }


async clickCreateSurveyButton() {
    await waits.clickElem(this.createSurveyButton);
}

async clickSurvey(typeoFSurvey) {
    await waits.clickElem(this.clickCertificationSurvey(typeoFSurvey));
}

}
module.exports = new fourBoxDashboard();