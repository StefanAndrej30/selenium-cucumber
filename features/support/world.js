const seleniumWebdriver = require('selenium-webdriver');
const {setWorldConstructor, setDefaultTimeout} = require('@cucumber/cucumber');
const {timeout, browserName} = require('../../.vscode/config');

class CustomWorld {
  constructor() {

    this.browser = new seleniumWebdriver
      .Builder()
      .forBrowser(browserName)
      .build();
  }

  getBrowser = () => {
    return this.browser;
  }
  
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);