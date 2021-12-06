/* eslint-disable no-undef */
const path = require('path');
const { browser } = require('../support/getBrowser');

const Files = {

  async uploadFile(inputField, file) {
    const fileUpload = inputField;
    await browser.executeScript(
      // assign style to elem in the browser
      'arguments[0].style.visibility = \'visible\'; arguments[0].style.height = \'100px\'; arguments[0].style.width = \'100px\'; arguments[0].style.opacity = 1',

      // pass in element so we don't need to query it again in the browser
      fileUpload,
    );
    const filePath = await path.resolve(__dirname, file);
    await fileUpload.sendKeys(filePath);
  },

};
module.exports = Files;
