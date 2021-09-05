const { browser } = require('../support/getBrowser');
const fs = require('fs-extra');
const fsExtra = require('fs-extra')
const path = require('path');
const Globals = require('../support/globals')

async function takeScreenshot(){
    const image = await browser.takeScreenshot();
    await fs.writeFileSync(path.join(__dirname,"../../screenshots",`${Globals.timeNow()} screenshotError.png`) , image, 'base64', function(err) {
      console.log(err);
    });
  }

async function deleteFiles(folder) {

await fsExtra.emptyDirSync(path.join(__dirname,`../../${folder}`));
}


module.exports = {takeScreenshot, deleteFiles};