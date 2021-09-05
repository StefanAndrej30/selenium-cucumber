const {browser} = require('../support/getBrowser');
const waits  = require('../commons/browser')
//waits.waitForScript();
const {By, until} = require('selenium-webdriver');


class thirdPage {

get letsGetStartedButton() {return By.xpath('//*[@ng-click="$close()"]') }
get nextButton() { return By.css('#culture-project-survey-design-next-btn') }


async clickLetsGetStarted() {
    await waits.clickElem(this.letsGetStartedButton);
}

async clickNextButton() {
    await waits.clickElem(this.nextButton);
}

}
module.exports = new thirdPage();