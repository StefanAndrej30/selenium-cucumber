const path = require('path');

class Files {
  uploadFiles(inputField, file) {
    const fileUpload = inputField;
    browser.execute(
    // assign style to elem in the browser
      "arguments[0].style.visibility = 'visible'; arguments[0].style.height = '100px'; arguments[0].style.width = '100px'; arguments[0].style.opacity = 1",

      // pass in element so we don't need to query it again in the browser
      fileUpload,
    );
    fileUpload.waitForDisplayed();

    const filePath = path.resolve(__dirname, file);
    const remoteUpload = browser.uploadFile(filePath);
    fileUpload.setValue(remoteUpload);
  }
}

module.exports = new Files();
