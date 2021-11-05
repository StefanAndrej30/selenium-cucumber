
const {browser} = require('../support/getBrowser');
const waits = require('../commons/waits');
const { By } = require('selenium-webdriver');
class LoginPage {
	/**
    * Define elements
    */
	// get usernameInput() { return browser.findElement(By.xpath('//*[@name="Email"]')); }
	// get passwordInput() { return browser.findElement(By.xpath('//*[@name="Password"]')); }

	// get loginButton() { return browser.findElement(By.xpath('//*[@type="submit"]')); }

	get gptwEmployeesButton() {
		return By.xpath('//*[@value="GptwEmployeeLogin"]');
	}
	// Get gptwEmployeesButton() { return browser.findElement({ xpath: '//*[@value="GptwEmployeeLogin"]' }); }
	//  get gptwEmployeesButton() { return this.elm(xpath,'//*[@value="GptwEmployeeLogin"]'); }

	get forgotYourPasswordButton() {
		return $('TBD');
	}

	get usernameInputForGptw() {
		return By.xpath('//*[@type="email"]');
	}

	get passwordInputForGptw() {
		return By.xpath('//*[@name="passwd"]');
	}

	get nextButtonForGptw() {
		return By.css('#idSIButton9');
	}

	get loginButtonForGptw() {
		return By.xpath('//*[@value="Sign in"]');
	}

	get staySignedInNoButton() {
		return By.css('#idBtn_Back');
	}

	/**
     * Define or overwrite page methods
     */
	// open() {
	//   browser.url(''); // this will append `login` to the baseUrl to form complete URL
	// }
	/**
     * your page specific methods
     */

	// waitForloginPageToLoad () {
	//   if(!this.headerImage.isDisplayed()){
	//     this.headerImage.waitForDisplayed(10000);
	//   }
	// }

	// loginAsClient(username, password) {
	//   if (!this.usernameInput.isDisplayed()) {
	//     this.usernameInput.waitForClickable({ timeout: 30000 });
	//   }
	//   this.usernameInput.sendKeys(username);
	//   this.passwordInput.sendKeys(password);
	//   this.loginButton.click();
	// }

	 	async loginAsGptwUser (username, password) {
		await waits.clickElem(this.gptwEmployeesButton);
		await waits.sendKeysElem(this.usernameInputForGptw,username);
		await waits.clickElem(this.nextButtonForGptw);
		await waits.sendKeysElem(this.passwordInputForGptw,password);
		await waits.clickElem(this.loginButtonForGptw);
		await waits.clickElem(this.staySignedInNoButton);

    }

	async open(url = '') {
		await browser.get(url);
	}
	
}
module.exports = new LoginPage();
