const { When } = require('@cucumber/cucumber');
const fourBoxDashboard = require('../../page-object/four-box-dashboard.page');

When('UI - I click {string} survey', async function (typeOfSurvey) {
    await fourBoxDashboard.clickSurvey(typeOfSurvey);
});