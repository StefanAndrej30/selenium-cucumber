/* eslint-disable no-promise-executor-return */
const { Then } = require('@cucumber/cucumber');
// const superagent = require('superagent');
// require('superagent-retry-delay')(superagent);

const { uplaodFile } = require('../../../commons/action');

Then('I upload file {string} |status code: {int}|', async function (file, statusCode) {
  // const filePath = path.resolve(__dirname, `../../../../data/uploadFiles/${file}`);
  // await request
  //   .post(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/File/Upload`)
  //   .set(authorize.getDefaultHeaders())
  //   .set('Content-Type', 'multipart/form-data')
  //   .field('flowChunkNumber', '1')
  //   .field('flowTotalChunks', '1')
  //   .field('flowIdentifier', '30cdf696-3b87-bd17-a565-71547cce121b')
  //   .field('flowFilename', 'employee_file_template.xlsx')
  //   .field('file', fs.createReadStream(`${filePath}`), `${file}`)
  //   .attach('file', `${filePath}`)
  //   .expect(statusCode);

  await uplaodFile(`/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/File/Upload`, `../../data/uploadFiles/${file}`, statusCode);
  await new Promise((r) => setTimeout(r, 6000));
});
