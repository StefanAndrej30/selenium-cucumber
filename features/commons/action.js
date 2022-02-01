/* eslint-disable no-return-await */
/* eslint-disable no-undef */
const fs = require('fs-extra');
const fsExtra = require('fs-extra');
const path = require('path');
const { killPortProcess } = require('kill-port-process');
const supertest = require('supertest');
const globals = require('../support/globals');
const authorize = require('./authorization');
const { httpConfig } = require('./httpConfig');

const request = supertest(httpConfig.emprisingBaseUrl);

async function takeScreenshot() {
  const image = await authorize.getBrowser().takeScreenshot();
  await fs.writeFileSync(path.join(__dirname, '../../screenshots', `${globals.timeNow()} screenshotError.png`), image, 'base64', function (err) {
    console.log(err);
  });
}

/**
  * delete specific folder
  * @param {string} folder - string for deleting specific folder
  */
async function deleteFiles(folder) {
  await fsExtra.emptyDirSync(path.join(__dirname, `../../${folder}`));
}

/**
  * take screenshot for cucumber reporter
  */
async function takeScreenshotForReporter() {
  const image = await authorize.getBrowser().takeScreenshot();
  const decodedImage = Buffer.from(image.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
  return decodedImage;
}

/**
  * kill selected port
  * @param {number} port - select port which want to kill
  */
async function killPort(port) {
  await killPortProcess(port);
}

/**
  * get local item key
  * @param {string} key - key for object
  */
async function getLocalItem(key) {
  return await authorize.getBrowser().executeScript(
    `return window.localStorage.getItem("${key}");`,
  );
}

/**
  * get session item key
  * @param {string} key - ket for object
  */
async function getSessionItem(key) {
  return await authorize.getBrowser().executeScript(
    `return window.sessionStorage.getItem("${key}");`,
  );
}

/**
  * set session storage
  * @param {string} key - key for object
  * @param {string} value - value for object
  */
async function setLocalStorage(key, value) {
  await authorize.getBrowser().executeScript(`window.localStorage.setItem('${key}','${value}')`);
}

/**
  * set session storage
  * @param {string} key - key for object
  * @param {string} value - value for object
  */
async function setSessionStorage(key, value) {
  await authorize.getBrowser().executeScript(`window.sessionStorage.setItem('${key}','${value}')`);
}

/**
  * set default headers
  * @param {string} token - set token
  * @param {string} clinetId - set clientId
  * @param {string} affiliateId - set affiliateId
  */
async function setDefaultHeaders(token, clientId, affiliateId) {
  await authorize.setDefaultHeaders({
    Authorization: `Bearer ${authorize.getToken(token)}`,
    gptw_client_id: clientId,
    gptw_affiliate_id: affiliateId,
    ConnectionId: 'e3e03bc1-35c5-417f-a5c3-ffa9a76d82c9',
  });
}

/**
  * uplaod file
  * @param {string} url - set api path
  * @param {string} filePath - set path to file
  * @param {number} statusCode - set status code of the request
  */

async function uplaodFile(url, filePath, statusCode) {
  const absolutePath = path.resolve(__dirname, filePath);
  const fileName = path.parse(absolutePath).base;
  const fileToUplaod = absolutePath;

  await request
    .post(`${url}`)
    .set(authorize.getDefaultHeaders())
    .field('flowChunkNumber', '1')
    .field('flowTotalChunks', '1')
    .field('flowIdentifier', '30cdf696-3b87-bd17-a565-71547cce121b')
    .field('flowFilename', `${fileName}`)
    .field('file', fs.createReadStream(`${fileToUplaod}`), `${fileName}`)
    .attach('file', `${fileToUplaod}`)
    .expect(statusCode);
}

module.exports = {
  takeScreenshot,
  deleteFiles,
  takeScreenshotForReporter,
  killPort,
  getLocalItem,
  getSessionItem,
  setSessionStorage,
  setLocalStorage,
  setDefaultHeaders,
  uplaodFile,
};
