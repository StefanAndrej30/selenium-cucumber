const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const {
  waitForMail, getMessageIds, readSingleMails, getMailHeaders, sendMail,
} = require('../../../commons/gmail/gmail-api');
const globals = require('../../../support/globals');
require('../../../support/world');
const { gmailLabels } = require('../../../commons/enums');

Then('Wait for mail {string} label to have {int} mail', { timeout: 360 * 1000 }, async function (labelId, numberOfMails) {
  await waitForMail(gmailLabels[labelId], numberOfMails);
});

Then('I get previosly recived mail', async function () {
  // const emailList = await getMessageIds(labels[labelId]);
  this.setMessageId(this.lastMailId);
});

Then('I get messageId for {string}', async function (mailId) {
  if (mailId === 'LAST_MAIL') {
    this.setMessageId(this.lastMailId);
    return;
  }
  this.setMessageId(mailId);
});

Then('I expect mail headers for {string} message to be:', async function (messageId, docString) {
  let headers;
  const objHeaders = {};
  if (messageId === 'PREVIOUSLY_RECIVED') {
    headers = await getMailHeaders(this.messageId);
  } else {
    headers = await getMailHeaders(messageId);
  }
  const from = headers.find((x) => x.name === 'From');
  const subject = headers.find((x) => x.name === 'Subject');
  const sender = headers.find((x) => x.name === 'Sender');
  objHeaders.from = from.value;
  objHeaders.subject = subject.value;
  objHeaders.sender = sender.value;

  expect(objHeaders).to.eql(JSON.parse(docString));
});

Then('I expect mail body for {string} message to include: {string}', async function (messageId, mailContent) {
  if (messageId === 'PREVIOUSLY_RECIVED') {
    messageId = this.messageId;
  }
  const mailBody = await readSingleMails(messageId);
  expect(mailBody).to.include(mailContent);
});

Then('I extract setup password link for {string} message', async function (messageId) {
  if (messageId === 'PREVIOUSLY_RECIVED') {
    messageId = this.messageId;
  }
  const mailBody = await readSingleMails(messageId);
  const regex = /(?<=https:\/\/)(.*?)(?=culture)/;
  const [extractedLink] = await globals.extractLink(mailBody, regex);
  this.setupPasswordLink = extractedLink;
});

Then('I get all mails in {string} label', async function (labelId) {
  const emailList = await getMessageIds(gmailLabels[labelId]);
  this.lastMailId = emailList[emailList.length - 1];
});

Then('I send mail to {string} with {string} as subject and body:', async function (mailTo, subject, docString) {
  await sendMail(mailTo, subject, docString);
});
