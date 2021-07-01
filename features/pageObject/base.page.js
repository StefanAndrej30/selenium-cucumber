const seleniumWebdriver = require('selenium-webdriver');
const { browserName} = require('../../.vscode/config');

exports.getDriver = () => {
    browser = new seleniumWebdriver
      .Builder()
      .forBrowser(browserName)
      .build();
      return browser;
  };
  