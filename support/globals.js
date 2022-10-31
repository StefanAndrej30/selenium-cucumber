const moment = require('moment');
const querystring = require('querystring');
const path = require('path');
const fs = require('fs-extra');
const { expect } = require('chai');
const xlsx = require('xlsx');
const identityConfig = require('../commons/identity');
const authorization = require('../commons/authorization');
const httpLogin = require('../stepDefinitions/API/login');
// const { deleteFiles } = require('../commons/action');

class Globals {
  /**
  * set min and max to get random number
  * @param {number} max - min number
  * @param {number} min - max number
  */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
  * set sleep in milliseconds
  * @param {number} milliseconds - number for milliseconds
  */
  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  /**
  * set length and chars number
  * @param {number} length - number for length
  * @param {number} chars - number for chars number
  */
  randomString(length, chars) {
    let mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    let result = '';
    for (let i = length; i > 0; i -= 1) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }

  /**
  * Get current time in selected format
  * @param {string} format - set format for current time
  */
  timeNow(format = 'LLL SSS') {
    return moment().format(format);
  }

  /**
  * Getting all necessary tokens
  */
  async getAllTokens() {
    const decodedClient = decodeURI(querystring.stringify(identityConfig.client));
    const decodedUser = decodeURI(querystring.stringify(identityConfig.user));

    const clientLogin = await httpLogin.login(decodedClient);
    authorization.setToken('clientToken', await clientLogin.token);
    const userLogin = await httpLogin.login(decodedUser);
    authorization.setToken('userToken', await userLogin.token);
  }

  /**
  * Deleting all necessary files
  * @param {string} filePath - set file path
  */
  //  deleteAllNecessaryFiles() {
  //    deleteFiles('./reports/UI/allure-results');
  //   // await deleteFiles('./visualRegressionBaseLine/desktop_chrome');
  //    deleteFiles('./tmp/diff/desktop_chrome');
  //   deleteFiles('./tmp/actual/desktop_chrome');
  // }

  /**
  * Get file size
  * @param {string} filePath - set file path
  */

  async getFileSize(filePath) {
    const absolutePath = path.resolve(__dirname, filePath);
    if (!fs.existsSync(absolutePath)) return 'FILE NOT FOUND';
    return fs.statSync(absolutePath).size;
  }

  async checkFileSize(filePath) {
    const absolutePath = path.resolve(__dirname, filePath);
    const fileSize = await this.getFileSize(absolutePath);
    if (fileSize === 0) throw new Error('FILE IS EMPTY');
    if (fileSize < 250) throw new Error(`${await this.readFile(absolutePath)}`);
  }

  /**
  * wait for file to be present
  * @param {string} filePath - set file path
  */
  async waitForFileToBePresent(filePath) {
    const abosultePath = path.resolve(__dirname, filePath);
    let timer = 10;
    while (fs.existsSync(abosultePath) === false && timer > 0) {
      this.sleep(2000);
      timer -= 1;
    }
    expect(fs.existsSync(abosultePath)).to.be.true;
    await this.checkFileSize(abosultePath);
  }

  async readFile(filePath) {
    const abosultePath = path.resolve(__dirname, filePath);
    const file = fs.readFileSync(abosultePath);
    return file.toString();
  }

  async readXlsxFile(filePath, sheetName) {
    const abosultePath = path.resolve(__dirname, filePath);
    const workdSheet = xlsx.readFile(abosultePath);
    return workdSheet.Sheets[sheetName];
  }

  async getAllSheets(filePath) {
    const abosultePath = path.resolve(__dirname, filePath);
    const workdSheet = xlsx.readFile(abosultePath);
    return workdSheet.SheetNames;
  }

  async getCellValue(filePath, sheetName, cell) {
    const xlsxFile = await this.readXlsxFile(filePath, sheetName);
    return xlsxFile[cell].w;
  }

  async convertXlsxToJson(filePath, sheetName) {
    const xlsxFileToJson = xlsx.utils.sheet_to_json(await this.readXlsxFile(filePath, sheetName)); // xlsx.readFile(abosultePath);
    return xlsxFileToJson;
  }

  async convertXlsxToText(filePath, sheetName) {
    const xlsxFileToText = xlsx.utils.sheet_to_txt(await this.readXlsxFile(filePath, sheetName)); // xlsx.readFile(abosultePath);
    return xlsxFileToText;
  }

  async getXlsxFileSheetNames(filePath) {
    const abosultePath = path.resolve(__dirname, filePath);
    const xlsxFile = xlsx.readFile(abosultePath);
    return xlsxFile.SheetNames;
  }

  async createXlsxFile(filePath, data, sheetName) {
    const xlsxFile = path.resolve(__dirname, filePath);
    const workSheetData = await xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    await xlsx.utils.book_append_sheet(workbook, workSheetData, sheetName);
    await xlsx.writeFile(workbook, xlsxFile);
  }

  async extractLink(mailBody, regex) {
    const extractedLink = mailBody.match(regex);
    return extractedLink;
  }

  // getValueByKey(object, objectKey, key, objValue) {
  //   // headers.find((x) => x.name === 'From');
  //   let value;
  //   Object.keys(object).forEach((id) => {
  //     if (object[id][objectKey] === key) {
  //       value = object[id][objValue];
  //     }
  //   });
  //   return value;
  // }

  getKeyByValue(obj, targetValue) {
    let desiredKey;
    Object.keys(obj).forEach((key) => {
      if (obj[key] === targetValue) desiredKey = key;
    });
    return desiredKey;
  }
}
module.exports = new Globals();
