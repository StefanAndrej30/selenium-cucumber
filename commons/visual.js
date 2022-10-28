const fs = require('fs-extra');
const allure = require('@wdio/allure-reporter').default;

class VisualTesting {
  constructor() {
    this.screenshotName;
    this.fullScreenShootName;
    this.elementScreenshootName;
    this.tabbableScreenshootName;
  }

  async setScreenshotName(screenshotName) {
    this.screenshotName = await screenshotName;
  }

  async createReporterWithDiffrences() {
    const { width } = await browser.getWindowSize();
    const { height } = await browser.getWindowSize();
    const imageName = `${this.screenshotName}-${width}x${height}.png`;

    const diff = fs.readFileSync(`./tmp/diff/desktop_chrome/${imageName}`);
    const expectedImage = fs.readFileSync(`./visualRegressionBaseLine/desktop_chrome/${imageName}`);
    const actualImage = fs.readFileSync(`./tmp/actual/desktop_chrome/${imageName}`);
    allure.addLabel('image-comparison', 'screenshotDiff');
    allure.addAttachment('expected', expectedImage, 'image/png');
    allure.addAttachment('actual', actualImage, 'image/png');
    allure.addAttachment('diff', diff, 'image/png');
  }
}

module.exports = new VisualTesting();
