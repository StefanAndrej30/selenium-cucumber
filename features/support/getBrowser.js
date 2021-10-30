// SELENIUM_BROWSER=safari node example/google_search - comand line

const seleniumWebdriver = require('selenium-webdriver');



function getBrowser(browserName) {
  
    return new seleniumWebdriver.Builder().forBrowser(browserName).build();
  }
  exports.browser = getBrowser('chrome');


