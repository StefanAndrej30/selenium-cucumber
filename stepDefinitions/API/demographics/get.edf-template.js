const { Then } = require('@cucumber/cucumber');
const xlsx = require('xlsx');
const { expect } = require('chai');
const authorize = require('../../../commons/authorization');
const { downloadFile } = require('../../../commons/action');
const globals = require('../../../support/globals');
const { emprisingBaseUrl } = require('../../../commons/environment').getEnvironment()
const env = require('../../../commons/environment').getEnvPrefix()
const { environments } = require('../../../commons/enums')

Then('I download {string} file', async function (file) {
  await downloadFile(emprisingBaseUrl, `/api/en-US/Project/${this.projectId}/Survey/${this.surveyId}/EDFTemplate/File?bearer_token=${authorize.getToken('userToken')}&h_gptw_client_id=${this.clientId}`, `../tmp/${file}`);
});

// Then('Check file {string} {string} {string}', async function (sheetName, cell, value) { // with scenario outline

//   const file = await globals.readXlsxFile('../../tmp/YYY-template.xlsx', sheetName);
//   expect(file[cell].w).to.equal(value);
// });

Then('Check file {string}:', async function (file, docString) { // with json
  const arr = [];
  const sheetName = await globals.getAllSheets(`../tmp/${file}`);

  for (let i = 0; i < sheetName.length; i += 1) {
    const temp = await xlsx.utils.sheet_to_json(await globals.readXlsxFile(`../tmp/${file}`, sheetName[i]));
    temp.forEach((res) => {
      arr.push(res);
    });
  }
  expect(arr).to.eql(JSON.parse(docString));
});

// Then('I download test {string}', async function (file) {
//   await downloadFile('/api/Surveys/fbc82345-989d-46eb-8246-31535763ef53/Results/Download/4FCF8486CFD3D6538837B37D00A1C80E9C11E0F2?bearer_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxNTY3NDhFMTA2ODk4QUM3M0ZBQjFEQjZCMzdGQzUwOEFCRTkxRDQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJNVlowamhCb21LeHotckhiYXpmOFVJcS1rZFEifQ.eyJuYmYiOjE2NDM4OTMyMzEsImV4cCI6MTY0MzkyMjAzMSwiaXNzIjoiaHR0cHM6Ly9xYS1sb2dpbi5ncmVhdHBsYWNldG93b3JrLmNvbS9pZGVudGl0eS8iLCJhdWQiOiJodHRwczovL3FhLWxvZ2luLmdyZWF0cGxhY2V0b3dvcmsuY29tL2lkZW50aXR5L3Jlc291cmNlcyIsImNsaWVudF9pZCI6IkdwdHdDTVAiLCJzdWIiOiJmNTE3ZjFlYS1mZTg0LTRiMTUtOWU3NS01YTJiOTRkZDA5OWIiLCJhdXRoX3RpbWUiOjE2NDM4ODA0MTEsImlkcCI6IkdwdHdFbXBsb3llZUxvZ2luIiwic2NvcGUiOlsib3BlbmlkIiwiR3B0d0NsaWVudExvZ2luU2NvcGUiLCJhbGxfY2xhaW1zIiwicHJvZmlsZSIsImVtYWlsIl0sImFtciI6WyJleHRlcm5hbCJdfQ.dsv7_ZGntL89fZIzwaq9N_Is2pYztQqVCihIpR5zJR6iMlmLF1pYc5yI6V6ebjgqCZ5kMHC8KJ5S6lxkHLjeUotaIncSoW_G78TuTDZtM5vfgQznwn0itgizlk-5Gr6GWS_AZnvp8fEm51Y7YXDgVOH_Pyb2jzhpcsXll-1kiWLMi2SobS0NPIf-XULpPSVw8pKwoHp5hKSDXte86qG2Z-lvT7YoYjejIJwtFZoDBVf7OP5NNXeSQlGsWEP3poC51QtsJhsVfaStQOlABO1rkwoJ10RTZods0bzulnjbog9T3EXMfRpTrB3CXpU5yKamx5XqEkxJJFKSILkjbN72Ww&h_gptw_client_id=10101010&h_gptw_affiliate_id=DE1', `../../tmp/${file}`);
// });

Then('I download single dems file', async function () {
  await downloadFile('', `https://${environments[env]}translations.blob.core.windows.net/templates/single-demographics-templates/Template_en-US.xlsx`, '../tmp/Template_en-US.xlsx');
});
