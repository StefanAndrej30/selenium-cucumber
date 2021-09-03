const seleniumWebdriver = require('selenium-webdriver');
const { browserName} = require('../commons/config');

exports.getDriver = () => {
    browser = new seleniumWebdriver
      .Builder()
      .forBrowser(browserName)
      .build();
      return browser;
  };
  