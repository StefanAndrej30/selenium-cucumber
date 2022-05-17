class ClientListPage {
  get createClientButton() { return $('#test-create-client-btn'); }

  get clientList() { return $('.client-list__filter'); }

  get clientSettingsButton() { return $('.client-list__settings'); }

  get affiliateIcon() { return $('.flag-icon.flag-icon-image'); }

  get clientSearchField() { return $('//*[@name="search"]'); }

  get errorMessageWithoutAnySurveyId() { return $('.special-content--wrapper'); }

  waitForClientList() {
    if (!this.clientList.isDisplayed()) {
      this.clientList.waitForDisplayed();
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

  checkErrorMessageWithoutAnySurveyId() {
    return this.errorMessageWithoutAnySurveyId;
  }
}

module.exports = new ClientListPage();
