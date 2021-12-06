const { Then } = require('@cucumber/cucumber');
const supertest = require('supertest');

// const fs = require('fs-extra');
// const path = require('path');
const FormData = require('form-data');
const { httpConfig } = require('../../../commons/httpConfig');

const request = supertest(httpConfig.emprisingBaseUrl);

const authorize = require('../../../commons/authorization');

Then('I upload file', async function () {
  const formdata = new FormData();
  formdata.append('flowChunkNumber', '1');
  // formdata.append('flowTotalChunks', '1');
  // formdata.append('flowIdentifier', '30cdf696-3b87-bd17-a565-71547cce121b');
  // formdata.append('flowFilename', path.join(__dirname, "../../../../data/uploadFiles/email_only_template.xlsx"));
  // formdata.append('file', fs.createReadStream(path.join(__dirname, "../../../../data/uploadFiles/email_only_template.xlsx")));
  console.log(formdata);

  this.setResponse(
    await request
      .post(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/Respondents/Upload`)
      .set(authorize.getDefaultHeaders())
      .set('Content-Type', 'application/octet-stream')
      .send(formdata),
    // .expect(200)
  );

  console.log(this.response);
});
