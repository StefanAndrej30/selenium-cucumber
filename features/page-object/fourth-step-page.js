const {browser} = require('../support/getBrowser');
const waits = require('../commons/waits');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');

class fourtStep {

 get emoloyesInput() {return By.css('#invitee-calculator-number-of-us-employees') }

 doAllYourEmoloyesButton(answer) { return By.xpath(`//span[normalize-space()="${answer}"]`) }

 get confirmButton() {return By.xpath('//*[@ng-click="ctrl.confirmClickHandler()"]') }
 
 get certificationUpload() { return browser.findElement(By.xpath('//*[@id="fileUploadBtn"]/input')) }

 get confirmUploadButton() { return By.xpath('//*[@ng-click="ctrl.uploadEmails()"]') }

 get analystMessageForCertiifaction() {return By.css('.analysis-list')}

get OKButton() { return By.xpath('//*[@ng-click="$close()"]'); }

    async enterInputForEmployes(employes) {
        await waits.sendKeysElem(this.emoloyesInput,employes);
    }
    
    async clickDoAllYourEmoloyesButton(answer) {
        await waits.clickElem(this.doAllYourEmoloyesButton(answer));
    }

    async clickConfirmButton() {
        await waits.clickElem(this.confirmButton);
    }

    async getAnalystMessage(msg) {
        await waits.WaitForElem(this.analystMessageForCertiifaction);
        expect(await browser.findElement(this.analystMessageForCertiifaction).getText()).to.contain(msg);
    }

}
module.exports = new fourtStep();