const { browser } = require('../support/getBrowser');
const { By } = require('selenium-webdriver');
const waits = require('../commons/browser');

class ClientListPage{

  get createClientButton() { return ('#test-create-client-btn'); }

  get clientList() { return ('.client-list__filter'); }  

  get clientSettingsButton() { return ('.client-list__settings'); }

  get affiliateIcon() { return ('.flag-icon.flag-icon-image'); }

  get clientSearchField() { return By.xpath('//*[@name="search"]'); }

  get clientRow() { return By.css('.table-horiz-border-row') }

  searchAndClickClient(clientId) {return (By.xpath(`//div[normalize-space()="${clientId}"]`)) }

  async waitForClientList() {
   await waits.waitByCSS(this.clientList);
  }

  checkClientListToBeDisplayed() {
    return this.clientList;
  }

  checkClientListSettingsButtonToBeDisplayed() {
    return this.clientSettingsButton;
  }

  async selectAffiliate(affiliate) {
    await waits.clickByCSS(this.affiliateIcon);
     let elm =  await browser.findElement(By.css('.btn')).findElement(By.xpath(`//*[contains(text(),'${affiliate}')]`));
    browser.executeScript("arguments[0].click();", elm);
   } 

  async searchClient(clientId) {
    await waits.sendKeysElem(this.clientSearchField,`${clientId}\n`,);
  }

   async clickClient(clientId) {
          await waits.clickElem(this.searchAndClickClient(clientId))
  }
}

module.exports = new ClientListPage();
