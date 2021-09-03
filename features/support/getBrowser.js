const seleniumWebdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
require('chromedriver');
require('geckodriver')
//const {timeout, browserName} = require('../commons/config');

  // headlesMode before build(): setChromeOptions(new chrome.Options().headless());

function getBrowser(browserName) {
  
    return new seleniumWebdriver.Builder().forBrowser(browserName).build();
  }
  exports.browser = getBrowser('chrome');