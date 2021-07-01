
const {By, Builder, Key, until, wait,ExpectedConditions} = require('selenium-webdriver');
const {  getDriver } = require('../pageObject/base.page');
class LoginPage {
    /**
    * define elements
    */
  
    // get usernameInput() { return browser.findElement(By.xpath('//*[@name="Email"]')); }
  
    // get passwordInput() { return browser.findElement(By.xpath('//*[@name="Password"]')); }
  
    // get loginButton() { return browser.findElement(By.xpath('//*[@type="submit"]')); }
  
    get gptwEmployeesButton() { return browser.findElement(By.xpath('//*[@value="GptwEmployeeLogin"]')); }  
   // get gptwEmployeesButton() { return browser.findElement({ xpath: '//*[@value="GptwEmployeeLogin"]' }); }  
  //  get gptwEmployeesButton() { return this.elm(xpath,'//*[@value="GptwEmployeeLogin"]'); }  


    get forgotYourPasswordButton() { return $('TBD'); }
  
    get usernameInputForGptw() { return browser.findElement(By.xpath('//*[@type="email"]')); }
  
    get passwordInputForGptw() { return browser.findElement(By.xpath('//*[@name="passwd"]')); }
  
    get nextButtonForGptw() { return browser.findElement(By.css('#idSIButton9')); }
  
    get loginButtonForGptw() { return browser.findElement(By.xpath('//*[@value="Sign in"]')); }
  
    get staySignedInNoButton() { return browser.findElement(By.css('#idBtn_Back')); }
  
    /**
     * define or overwrite page methods
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
  
   async loginAsGptwUser(username, password) {
    await this.gptwEmployeesButton.click();
    await browser.wait(until.elementLocated(By.xpath('//*[@type="email"]')), 30000);
    await this.usernameInputForGptw.sendKeys(username);
    await this.nextButtonForGptw.click();
    await this.passwordInputForGptw.sendKeys(password);
    await this.loginButtonForGptw.click();
    await this.staySignedInNoButton.click();
    await browser.wait(until.elementLocated(By.css('.client-list__filter')), 30000);
    
    }

  }
  
  module.exports = new LoginPage();