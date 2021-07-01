const {By, until} = require('selenium-webdriver');
const {timeout} = require('../../.vscode/config');

function browser(driver){
  function waitAndLocateByCSS(selector){
    return this.browser.wait(until.elementLocated(By.css(selector)), timeout);
  }
  
  function waitAndLocateByXpath(selector){
    return driver.wait(until.elementLocated(By.xpath(selector)), timeout);
  }

  return {
    waitAndLocateByCSS,
    waitAndLocateByXpath
  };
}

module.exports = browser;