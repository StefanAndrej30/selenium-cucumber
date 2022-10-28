const { expect } = require('chai');
const globals = require('../../../support/globals');

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

  get takeSurveyHereButton() { return $('.button-container'); }

  async clickDesignGuidanceModalContentOk() {
    await this.modalContentOk.waitForClickable();
    await this.modalContentOk.click();
  }

  async clickScheduleAndMessagingModal() {
    await this.scheduleAndMessagingModal.waitForClickable();
    await this.scheduleAndMessagingModal.click();
  }

  async clickScheduleAndMessagingModalSave() {
    await this.scheduleAndMessagingModalSave.click();
  }

  async clickUponApproval() {
    await this.startDateDropdown.waitForClickable();
    await this.startDateDropdown.click();
    await this.uponApproval.click();
  }

  async clickAnonymousFlowCheckbox() {
    await this.anonymousFlowCheckbox.click();
  }

  async enterSupportEmail(email) {
    await this.supportEmail.setValue(email);
  }

  async checkplaceHolderSupportEmail(example) {
    const scheduleMessagingModal = await $('.schedule-messaging.mt');
    await scheduleMessagingModal.waitUntil(() => scheduleMessagingModal.isDisplayed());
    const placeHolder = await $(`//*[@placeholder="${example}"]`).isDisplayed();
    expect(placeHolder).to.be.true;
  }

  async clickModalContentLetsGetStarted() {
    await this.modalContentLetsGetStarted.waitForClickable();
    await this.modalContentLetsGetStarted.click();
  }

  async clickNextButton() {
    await this.nextButton.waitForClickable();
    await this.nextButton.click();
  }

  async checkDay(day) {
    await this.datePickerBody.waitForDisplayed();
    for (let i = 0; i < await this.datePickerBody.$$(`span=${day}`).length; i += 1) {
      if (await this.datePickerBody.$$(`span=${day}`)[i].getAttribute('class') !== 'disabled is-other-month') {
        await this.datePickerBody.$$(`span=${day}`)[i].click();
        break;
      }
    }
  }

  async setDate(year, month, arrowNext = false, day) {
    await $(`span=${globals.getCurrentYear()}`).click();
    await $(`span=${year}`).click();
    await $(`span=${month}`).click();
    if (arrowNext === true) {
      await this.clickNextArrowDatePicker();
    }
    await this.checkDay(day);
  }

  async setEndDate(year, month, arrowNext, day) {
    await this.calendarEndDateButton.click();
    await this.setDate(year, month, arrowNext, day);
  }

  async setStartDate(year, month, arrowNext, day) {
    await this.calendarStartDateButton.click();
    await this.setDate(year, month, arrowNext, day);
  }

  async setTimeZone(timeZone) {
    await this.timeZoneDropdown.waitForClickable();
    await this.timeZoneDropdown.click();
    await $(`span=${timeZone}`).click();
  }

  async getInvitationDate() {
    await this.invitationDate.waitForDisplayed();
    return this.invitationDate.getText();
  }

  async getFirstReminderDate() {
    await this.firstReminderDate.waitForDisplayed();
    return this.firstReminderDate.getText().replace('and', '');
  }

  async getSecondReminderDate() {
    return this.secondReminderDate.getText();
  }

  async getEndDate() {
    return this.endDate.getValue();
  }

  async clickNextArrowDatePicker() {
    return this.nextArrowDatePicker.click();
  }

  async clickInvitationButton() {
    await this.invitationButton.click();
  }

  async clickPreviewButton() {
    await this.previewButton.click();
  }

  async checkInvitation(senderName, emailSubject, bodyMessage, bodyMessageFooter) {
    expect(await this.invitationEmailSenderName.getValue()).to.equal(senderName);
    expect(await this.invitationEmailSubject.getValue()).to.equal(emailSubject);
    expect(await this.invitationEmailBodyMessage.getValue().replace(/\n/g, '')).to.contain(bodyMessage);
    expect(await this.invitationEmailBodyMessageFooter.getValue()).to.equal(bodyMessageFooter);
  }

  async checkPreview(preview) {
    expect(await this.previewInfo.getText()).to.equal(preview);
  }
}

module.exports = new ThirdStepPage();
