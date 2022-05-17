class LandingPage {
  /**
  * define elements
  */

  get createSurveyButton() { return $('.pd-create-survey-btn'); }

  get draftSurveys() { return $('.pd-create-survey-btn'); }

  get editProjectButton() { return $('//*[@ng-click="editProject()"]'); }
  /**
   * define or overwrite page methods
   */

  waitFor4BoxDashboardToLoad() {
    if (!this.createSurveyButton.isDisplayed()) {
      this.createSurveyButton.waitForDisplayed();
    }
  }

  getCreateSurveyButtonText() {
    const text = this.createSurveyButton.getText();
    return text.trim();
  }

  clickCreateSurveyButtonText() {
    return this.createSurveyButton.click();
  }

  checkCreateSurveyButtonToBeDisplayed() {
    return this.createSurveyButton;
  }

  checkEditProjectButtonToBeDisplayed() {
    return this.editProjectButton;
  }

  createSurvey(surveyType) {
    $(`button=${surveyType}`).click();
  }
}

module.exports = new LandingPage();
