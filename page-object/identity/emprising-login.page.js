class LoginPage {
  /**
  * define elements
  */

  get usernameInput() { return $('//*[@name="Email"]'); }

  get passwordInput() { return $('//*[@name="Password"]'); }

  get loginButton() { return $('//*[@type="submit"]'); }

  get gptwEmployeesButton() { return $('//*[@value="GptwEmployeeLogin"]'); }

  get forgotYourPasswordButton() { return $('TBD'); }

  get usernameInputForGptw() { return $('//*[@name="loginfmt"]'); }

  get passwordInputForGptw() { return $('//*[@name="passwd"]'); }

  get nextButtonForGptw() { return $('#idSIButton9'); }

  get loginButtonForGptw() { return $('//*[@value="Sign in"]'); }

  get staySignedInNoButton() { return $('#idBtn_Back'); }

  /**
   * define or overwrite page methods
   */
  open() {
    browser.url(''); // this will append `login` to the baseUrl to form complete URL
  }
  /**
   * your page specific methods
   */

  loginAsClient(username, password) {
    if (!this.usernameInput.isDisplayed()) {
      this.usernameInput.waitForClickable();
    }
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }

  loginAsGptwUser(username, password) {
    if (!this.gptwEmployeesButton.isClickable()) {
      this.gptwEmployeesButton.waitForClickable();
    }
    this.gptwEmployeesButton.click();
    browser.waitUntil(() => this.usernameInputForGptw.isDisplayed({ timeout: 30000 }));
    this.usernameInputForGptw.setValue(username);
    browser.waitUntil(() => this.nextButtonForGptw.isClickable());
    this.nextButtonForGptw.click();
    browser.waitUntil(() => this.passwordInputForGptw.isDisplayed());
    this.passwordInputForGptw.setValue(password);
    browser.waitUntil(() => this.loginButtonForGptw.isClickable());
    this.loginButtonForGptw.click();
    browser.waitUntil(() => this.staySignedInNoButton.isClickable());
    this.staySignedInNoButton.click();
  }
}

module.exports = new LoginPage();
