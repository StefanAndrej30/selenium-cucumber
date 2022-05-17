const { expect } = require('chai');
const globals = require('../support/globals');

class ThirdStepPage {
  get modalContentOk() { return $('.modal-content').$('button=OK'); }

  get scheduleAndMessagingModal() { return $('#survey-design-schedule-manage-btn'); }

  get startDateDropdown() { return $$('.datetimePicker--time')[0]; }

  get uponApproval() { return $('.datetimePicker-time-dropdown--item-absolute-text'); }

  get scheduleAndMessagingModalSave() { return $('#test-invitation-button-save'); }

  get anonymousFlowCheckbox() { return $('#schedule-modal-calendar-own-emails'); }

  get supportEmail() { return $('//*[@placeholder="support@example.com"]'); }

  get modalContentLetsGetStarted() { return $('.modal-content').$("button=Let's Get Started!"); }

  get nextButton() { return $('#culture-project-survey-design-next-btn'); }

  get calendarEndDateButton() { return $$('.font-icon-Calendar-date-icon')[1]; }

  get calendarStartDateButton() { return $$('.font-icon-Calendar-date-icon')[0]; }

  get timeZoneDropdown() { return $('#timeZone_dropdown'); }

  get remaindersDatesOnDatePicker() { return $('//*[@ng-if="ctrl.ui.reminderDates.length"]'); }

  get invitationDate() { return $('//*[@ng-if="ctrl.ui.invitationDate"]').$('.schedule__reminder'); }

  get firstReminderDate() { return $$('//*[@ng-repeat="date in ctrl.ui.reminderDates"]')[0]; }

  get secondReminderDate() { return $$('//*[@ng-repeat="date in ctrl.ui.reminderDates"]')[1]; }

  get startDate() { return $$('//*[@class="input input--primary"]')[0]; }

  get endDate() { return $$('//*[@class="input input--primary"]')[1]; }

  get nextArrowDatePicker() { return $('.next'); }

  get invitationButton() { return $('#test-invitation-tab-button-invitation'); }

  get invitationEmailSenderName() { return $('//*[@ng-model="ctrl.data.InvitationEmailSenderName"]'); }

  get invitationEmailSubject() { return $('//*[@ng-model="ctrl.data.InvitationEmailSubject"]'); }

  get invitationEmailBodyMessage() { return $('//*[@ng-model="ctrl.data.InvitationEmailBodyMessage"]'); }

  get invitationEmailBodyMessageFooter() { return $('//*[@ng-model="ctrl.data.InvitationEmailBodyFooter"]'); }

  get previewButton() { return $('#test-invitation-tab-button-preview'); }

  get previewInfo() { return $('.invitation-email-preview__preview'); }

  get previewBody() { return $('.invitation-email-preview__preview-body'); }

  get datePickerBody() { return $('.bs-datepicker-body'); }

  clickDesignGuidanceModalContentOk() {
    this.modalContentOk.waitForClickable();
    this.modalContentOk.click();
  }

  clickScheduleAndMessagingModal() {
    this.scheduleAndMessagingModal.waitForClickable();
    this.scheduleAndMessagingModal.click();
  }

  clickScheduleAndMessagingModalSave() {
    this.scheduleAndMessagingModalSave.click();
  }

  clickUponApproval() {
    if (!this.startDateDropdown.isClickable()) {
      this.startDateDropdown.waitForClickable();
    }
    this.startDateDropdown.click();
    this.uponApproval.click();
  }

  clickAnonymousFlowCheckbox() {
    this.anonymousFlowCheckbox.click();
  }

  enterSupportEmail(email) {
    this.supportEmail.setValue(email);
  }

  checkplaceHolderSupportEmail(example) {
    browser.waitUntil(() => $('.schedule-messaging.mt').isDisplayed());
    return $(`//*[@placeholder="${example}"]`);
  }

  clickModalContentLetsGetStarted() {
    if (!this.modalContentLetsGetStarted.isClickable()) {
      this.modalContentLetsGetStarted.waitForClickable();
    }
    this.modalContentLetsGetStarted.click();
  }

  clickNextButton() {
    this.nextButton.waitForClickable();
    this.nextButton.click();
  }

  checkDay(day) {
    this.datePickerBody.waitForDisplayed();
    for (let i = 0; i < this.datePickerBody.$$(`span=${day}`).length; i += 1) {
      if (this.datePickerBody.$$(`span=${day}`)[i].getAttribute('class') !== 'disabled is-other-month') {
        this.datePickerBody.$$(`span=${day}`)[i].click();
        break;
      }
    }
  }

  setDate(year, month, arrowNext = false, day) {
    $(`span=${globals.getCurrentYear()}`).click();
    $(`span=${year}`).click();
    $(`span=${month}`).click();
    if (arrowNext === true) {
      this.clickNextArrowDatePicker();
    }
    this.checkDay(day);
  }

  setEndDate(year, month, arrowNext, day) {
    this.calendarEndDateButton.click();
    this.setDate(year, month, arrowNext, day);
  }

  setStartDate(year, month, arrowNext, day) {
    this.calendarStartDateButton.click();
    this.setDate(year, month, arrowNext, day);
  }

  setTimeZone(timeZone) {
    this.timeZoneDropdown.waitForClickable();
    this.timeZoneDropdown.click();
    $(`span=${timeZone}`).click();
  }

  getInvitationDate() {
    this.invitationDate.waitForDisplayed();
    return this.invitationDate.getText();
  }

  getFirstReminderDate() {
    if (!this.firstReminderDate.isDisplayed()) {
      this.firstReminderDate.waitForDisplayed();
    }
    return this.firstReminderDate.getText().replace('and', '');
  }

  getSecondReminderDate() {
    return this.secondReminderDate.getText();
  }

  getEndDate() {
    return this.endDate.getValue();
  }

  clickNextArrowDatePicker() {
    return this.nextArrowDatePicker.click();
  }

  clickInvitationButton() {
    return this.invitationButton.click();
  }

  clickPreviewButton() {
    return this.previewButton.click();
  }

  checkInvitation(senderName, emailSubject, bodyMessage, bodyMessageFooter) {
    expect(this.invitationEmailSenderName.getValue()).to.equal(senderName);
    expect(this.invitationEmailSubject.getValue()).to.equal(emailSubject);
    expect(this.invitationEmailBodyMessage.getValue().replace(/\n/g, '')).to.contain(bodyMessage);
    expect(this.invitationEmailBodyMessageFooter.getValue()).to.equal(bodyMessageFooter);
  }

  checkPreview(preview) {
    expect(this.previewInfo.getText()).to.equal(preview);
  }
}

module.exports = new ThirdStepPage();
