const webdriver = require('selenium-webdriver'),
// const {By, Builder, Key} = require('selenium-webdriver');

  Condition = webdriver.Condition,
  WebElementCondition = webdriver.WebElementCondition

exports.elementIsDisabled = async function elementIsDisabled(element) {
    return new WebElementCondition('until element is disabled', function () {
      return element.isEnabled().then((v) => (v ? null : element))
    })
}


// exports.elm = async function elm(locator, locatorName) {
//   await browser.findElement(By[locator](`${locatorName}`));
// }
