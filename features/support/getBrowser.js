const seleniumWebdriver = require('selenium-webdriver');
// require('chromedriver');
// SELENIUM_BROWSER=safari node example/google_search - comand line


function getBrowser(browserName) {
  
    return new seleniumWebdriver.Builder().forBrowser(browserName).build();
  }
  exports.browser = getBrowser('chrome');