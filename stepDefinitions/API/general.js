const { Then, Given } = require('@cucumber/cucumber');
const authorize = require('../../commons/authorization');
const globals = require('../../support/globals');

Then('I set headers to be:', async function (docString) {
  const defaultHeaders = JSON.parse(docString);

  switch (defaultHeaders.Authorization) {
    case 'USER':
      defaultHeaders.Authorization = `Bearer ${authorize.getToken('userToken')}`;
      break;
    default:
      defaultHeaders.Authorization = `Bearer ${authorize.getToken('userToken')}`;
  }

  authorize.setDefaultHeaders(await defaultHeaders);
});

Then('I wait for file {string} to be present', async function (file) {
  await globals.waitForFileToBePresent(`../tmp/${file}`);
});

Then('I create {string} file in {string} sheet with next data:', async function (file, sheetName, docString) {
  //   Given I create "Test.xlsx" file in "Test_Moj" sheet with next data:
  //   """
  // data
  //   [
  //       {
  //           "name": "Mirko",
  //           "job": "car"
  //       },
  //       {
  //           "name": "Jovan",
  //           "job": "plane"
  //       },
  //       {
  //           "name": "Mitar",
  //           "job": "water"
  //       }
  //   ]
  // """

  const data = JSON.parse(docString);
  await globals.createXlsxFile(`../../tmp/${file}`, data, sheetName);
});

Given('Check {string} token', async function (token) {
  if (await authorize.getToken(token).length === 0) throw new Error(`${token} not found`);
});
