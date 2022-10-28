
class SetPasswordPage {
  get enterPasswordInput() { return $('#Password'); }

  get reEnterPasswordInput() { return $('#ConfirmPassword'); }

  get createPasswordButton() { return $('.btn.btn--primary'); }

  get infoMessageAboutCreatedPassword() { return $('.body-content__left-content'); }

  get errorPass() { return $('#Password-error'); }

  get errorPassConfirmation() { return $('#ConfirmPassword-error'); }

  async setUpPassword(password) {
    await this.enterPasswordInput.setValue(password);
    await this.reEnterPasswordInput.setValue(password);
    await this.createPasswordButton.click();
  }

  async getMessageAboutCreatedPassword() {
    const elem = await this.infoMessageAboutCreatedPassword
    return elem
  }

  async passwordField(pass1) {
    await this.enterPasswordInput.setValue(pass1);
  }

  async reEnterPasswordField(pass2) {
    await this.reEnterPasswordInput.setValue(pass2);
  }

  async submitButton() {
    await browser.waitUntil(() => this.usernameInputForGptw.isClickable({ timeout: 30000 }));
    await this.createPasswordButton.click();
  }
}
module.exports = new SetPasswordPage();
