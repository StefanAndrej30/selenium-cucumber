const { browser } = require('../support/getBrowser');
const fs = require('fs');
const path = require('path');
const Globals = require('../support/globals')

async function takeScreenshot(){
    const image = await browser.takeScreenshot();
    await fs.writeFileSync(path.join(__dirname,"../../screenshots",`${Globals.timeNow()} screenshotError.png`) , image, 'base64', function(err) {
      console.log(err);
    });
  }


module.exports = {takeScreenshot};