/* eslint-disable consistent-return */
const { By, until } = require('selenium-webdriver');
const { timeout } = require('./config');
const authorize = require('./authorization');

class Waits {
  async waitForScript() {
    await authorize.getBrowser().manage().setTimeouts({ implicit: 10000 });
  }

  async clickByXpath(selector) {
    try {
      await authorize.getBrowser().wait(until.elementLocated(By.xpath(selector)), timeout).click();
    } catch (error) {
      console.log(error);
    }
  }

  async sendKeysByXpath(selector, input) {
    await authorize.getBrowser().wait(until.elementLocated(By.xpath(selector)), timeout).then(function (elm) {
      return elm.sendKeys(input);
    });
  }

  async clickByCSS(selector) {
    try {
      await authorize.getBrowser().wait(until.elementLocated(By.css(selector)), timeout).click();
    } catch (error) {
      console.log(error);
    }
  }

  async sendKeysByCSS(selector, input) {
    await authorize.getBrowser().wait(until.elementLocated(By.css(selector)), timeout).then(function (elm) {
      return elm.sendKeys(input);
    });
  }

  async waitByCSS(selector) {
    try {
      await authorize.getBrowser().wait(until.elementLocated(By.css(selector)), timeout);
    } catch (error) {
      console.log(error);
    }
  }

  async waitForPageToLoad() {
    await authorize.getBrowser().wait(async function () {
      return authorize.getBrowser().executeScript('return document.readyState');
    });
  }

  // async clickElem (locator) {
  // let retries = 10;
  // try {
  // const element =  await browser.findElement(locator)
  // // await browser.executeScript("arguments[0].click();", element);
  // await element.click();
  // } catch (err) {
  // if (retries === 0) {
  // throw new Error(`Still not able to click ${locator.toString()} after maximum retries, Error message: ${err.message.toString()}`)
  // }
  // await browser.sleep(250)
  // return this.clickElem(locator, retries - 1)
  // }
  //   }

  async sendKeysElem(locator, input) {
    const retries = 10;
    const element = await authorize.getBrowser().wait(until.elementLocated(locator));
    await authorize.getBrowser().wait(until.elementIsVisible(element));
    try {
      await element.sendKeys(input);
      return;
    } catch (err) {
      if (retries === 0) {
        throw new Error(`Still not able to send ${locator.toString()} after maximum retries, Error message: ${err.message.toString()}`);
      }
      await authorize.getBrowser().sleep(250);
      return this.sendKeysElem(locator, input, retries - 1);
    }
  }

  async WaitForElem(locator) {
    const retries = 10;
    const element = await authorize.getBrowser().wait(until.elementLocated(locator));
    await authorize.getBrowser().wait(until.elementIsVisible(element));
    try {
      await element;
      return;
    } catch (err) {
      if (retries === 0) {
        throw new Error(`Still not able to find ${locator.toString()} after maximum retries, Error message: ${err.message.toString()}`);
      }
      await authorize.getBrowser().sleep(250);
      return this.WaitForElem(locator, retries - 1);
    }
  }

  async clickElem(locator) {
    const retries = 10;
    const element = await authorize.getBrowser().wait(until.elementLocated(locator));
    await authorize.getBrowser().wait(until.elementIsVisible(element));
    try {
      await element.click();
      return;
    } catch (err) {
      if (retries === 0) {
        console.log(`STILL NOT CLICKABLE ${locator.toString()}`);
      }
    }
    return this.clickElem(locator, retries - 1);
  }
}
module.exports = new Waits();
