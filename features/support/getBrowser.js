const seleniumWebdriver = require('selenium-webdriver');
require('chromedriver');


function getBrowser(browserName) {
  
    return new seleniumWebdriver.Builder().forBrowser(browserName).build();
  }
  exports.browser = getBrowser('chrome');
  