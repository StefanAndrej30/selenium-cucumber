const { When } = require('@cucumber/cucumber');
const supertest = require('supertest');
const moment = require('moment');

const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()
require('../../../support/world');

const request = supertest(emprisingBaseUrl);
const authorize = require('../../../commons/authorization');

let surveyId;

When('I schdedule survey: |status code: {int}|', async function (statusCode, docString) {
  surveyId = this.surveyId;

  const bodyParsed = await JSON.parse(docString);

  const closeDate = moment().format('YYYY-MM-DDTHH:mm:ss');

  if (bodyParsed.CloseDate === 'todayPlusTwoWeaks') {
    bodyParsed.CloseDate = moment(closeDate).add(14, 'days').format('YYYY-MM-DDTHH:mm:ss');
  }

  const postBody = {
    'startDate': bodyParsed.startDate,
    'closeDate': bodyParsed.closeDate,
    'isToday': bodyParsed.isToday,
    'timeZone': bodyParsed.timeZone || 'Pacific Standard Time',
    'contactEmail': bodyParsed.contactEmail || 'test@htec.rs',
  };

  this.setResponse(await request
    .put(`/api/Surveys/${surveyId}/Schedule`)
    .send(postBody)
    .set(authorize.getDefaultHeaders())
    .expect('Content-Type', /json/)
    .expect(statusCode));

  this.closeDate = this.response.body.SurveyDetails.CloseDate;
  this.timeZone = this.response.body.SurveyDetails.TimeZone.Id;
  this.contactEmail = this.response.body.SurveyDetails.ContactEmail;
});
