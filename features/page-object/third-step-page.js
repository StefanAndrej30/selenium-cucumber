const waits = require('../commons/waits');
const { By } = require('selenium-webdriver');
const { browser } = require('../support/getBrowser');

class thirdPage {

get letsGetStartedButton() {return By.xpath('//*[@ng-click="$close()"]') }
get nextButton() { return By.css('#culture-project-survey-design-next-btn') }
get scheduleAndMessagingModal() { return By.css('#survey-design-schedule-manage-btn'); }


async clickLetsGetStarted() {
    await waits.clickElem(this.letsGetStartedButton);
}

async clickNextButton() {
    await waits.clickElem(this.nextButton);
}

async clickScheduleAndMessagingModal() {
    await waits.clickElem(this.scheduleAndMessagingModal);
}

async checkPlaceholderForSupportEmial(value) {
    await waits.WaitForElem(By.xpath(`//*[@placeholder="${value}"]`));
    return await browser.findElement(By.xpath(`//*[@placeholder="${value}"]`));
}

}
module.exports = new thirdPage();


