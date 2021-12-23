/* eslint-disable no-return-await */
/* eslint-disable no-undef */
const fs = require('fs-extra');
const fsExtra = require('fs-extra');
const path = require('path');
const { killPortProcess } = require('kill-port-process');
const globals = require('../support/globals');
const authorize = require('./authorization');

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
async function setDefaultHeaders(token, clinetId, affiliateId) {
  await authorize.setDefaultHeaders({
    Authorization: `Bearer ${authorize.getToken(token)}`,
    gptw_client_id: clinetId,
    gptw_affiliate_id: affiliateId,
    ConnectionId: 'e3e03bc1-35c5-417f-a5c3-ffa9a76d82c9',
  });
}

module.exports = {
  takeScreenshot, deleteFiles, takeScreenshotForReporter, killPort, getLocalItem, getSessionItem, setSessionStorage, setLocalStorage, setDefaultHeaders,
};
