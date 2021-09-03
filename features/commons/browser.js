const {By, until, ExpectedConditions,wait  } = require('selenium-webdriver');
const { seleniumWebdriver } = require('selenium-webdriver');
const {timeout} = require('./config');
const {browser} = require('../support/getBrowser');
const { expect } = require('chai');


class Waits {

	async waitForScript() {
		await browser.manage().setTimeouts( { implicit: 10000 } );
	}

	 	async clickByXpath(selector) {
		try{
			await browser.wait(until.elementLocated(By.xpath(selector)),timeout).click();
		}catch (error){
			console.log(error);
		}
	}

	 async sendKeysByXpath(selector,input) {
		 await browser.wait(until.elementLocated(By.xpath(selector)),timeout).then(function(elm) {
			return elm.sendKeys(input);
		});
	}

	 async clickByCSS(selector) {
		 try{
			await browser.wait(until.elementLocated(By.css(selector)),timeout).click();
		 }catch(error){
			 console.log(error)
		 }
	}

	async sendKeysByCSS(selector,input) {
			await browser.wait(until.elementLocated(By.css(selector)),timeout).then(function(elm) {
			return elm.sendKeys(input);
		});
	}

	async waitByCSS(selector) {
		try{
		await browser.wait(until.elementLocated(By.css(selector)),timeout);
		}catch(error){
			console.log(error);
		}
	}

	async waitForPageToLoad() {
	   await browser.wait(async function() {
			return browser.executeScript('return document.readyState');
		  });
	}

	async clickElem (locator) {
		let retries = 10;
		try {
		  const element = await browser.findElement(locator)
		  //await browser.executeScript("arguments[0].click();", element);
		  await element.click();
		} catch (err) {
		  if (retries === 0) {
			throw new Error(`Still not able to click ${locator.toString()} after maximum retries, Error message: ${err.message.toString()}`)
		  }
		  await browser.sleep(250)
		  return this.clickElem(locator, retries - 1)
		}
	  }

	  async sendKeysElem (locator, input) {
		let retries = 10
		try {
		  const element = await browser.findElement(locator)
		  await element.sendKeys(input);
		  return
		} catch (err) {
		  if (retries === 0) {
			throw new Error(`Still not able to click ${locator.toString()} after maximum retries, Error message: ${err.message.toString()}`)
		  }
		  await browser.sleep(250)
		  return this.sendKeysElem(locator, input, retries - 1);
		}
	  }


	  async WaitForElem (locator) {
		let retries = 10;
		try {
		  const element = await await browser.wait(until.elementLocated(locator));
		  await element;
		  return
		} catch (err) {
		  if (retries === 0) {
			throw new Error(`Still not able to click ${locator.toString()} after maximum retries, Error message: ${err.message.toString()}`)
		  }
		  await browser.sleep(250)
		  return this.WaitForElem(locator, retries - 1)
		}
	  }


}
module.exports = new Waits();