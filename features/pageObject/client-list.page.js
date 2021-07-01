const {By, Builder, Key, until, wait,ExpectedConditions} = require('selenium-webdriver');
 //const $ = browser.findElement
 // const { setWorldConstructor, World } = require('@cucumber/cucumber')
const chrome = require('selenium-webdriver/chrome');
const {setDefaultTimeout} = require('@cucumber/cucumber');
  setDefaultTimeout(60 * 1000);
// browser.findElement(By.name('q')).sendKeys('Wikipedia',Key.ENTER);
const {elementIsDisabled} = require('../support/globals')


class ClientListPage{
  get createClientButton() { return $('#test-create-client-btn'); }

  get clientList() { return $('.client-list__filter'); }

  get clientSettingsButton() { return $('.client-list__settings'); }

  get affiliateIcon() { return $('.flag-icon.flag-icon-image'); }

  get clientSearchField() { return $('//*[@name="search"]'); }

  waitForClientList() {
    if (!this.clientList.isDisplayed()) {
      this.clientList.waitForDisplayed({ timeout: 30000 });
    }
  }

  checkClientListToBeDisplayed() {
    return this.clientList;
  }

  checkClientListSettingsButtonToBeDisplayed() {
    return this.clientSettingsButton;
  }

  selectAffiliate(affiliate) {
    this.affiliateIcon.click();
    $('.dropdown-menu.dropdown-menu__one-line').$(`span=${affiliate}`).click();
  }

  searchClient(clientId) {
    this.clientSearchField.setValue(clientId);
    browser.keys('Enter');
  }

  clickClient(clientId) {
    $('.table-horiz-border-row').$(`div=${clientId}`).click();
  }
}

module.exports = new ClientListPage();
