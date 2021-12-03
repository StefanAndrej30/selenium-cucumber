/* eslint-disable no-undef */
const { browser } = require('../support/getBrowser');
const fs = require('fs-extra');
const fsExtra = require('fs-extra');
const path = require('path');
const globals = require('../support/globals');
const { killPortProcess } = require('kill-port-process');


async function takeScreenshot(){
    const image = await browser.takeScreenshot();
    await fs.writeFileSync(path.join(__dirname,'../../screenshots',`${globals.timeNow()} screenshotError.png`) , image, 'base64', function(err) {
        console.log(err);
    });
}

async function deleteFiles(folder) {
    await fsExtra.emptyDirSync(path.join(__dirname,`../../${folder}`));

}

async function takeScreenshotForReporter() {
    const image = await browser.takeScreenshot();
    const decodedImage = Buffer.from(image.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
    return decodedImage;
}

async function killPort(port) {
    await killPortProcess(port); 
}


async function getLocalItem(key) {
    return await browser.executeScript(
        `return window.localStorage.getItem("${key}");`
    );
}

async function getSessionItem(key) {
    return await browser.executeScript(
        `return window.sessionStorage.getItem("${key}");`
    );
}

async function setLocalStorage(key, value) {
    await browser.executeScript(`window.localStorage.setItem('${key}','${value}')`);

}


async function setSessionStorage(key, value) {
    await browser.executeScript(`window.sessionStorage.setItem('${key}','${value}')`);
}


module.exports = {takeScreenshot, deleteFiles, takeScreenshotForReporter, killPort, getLocalItem, getSessionItem, setSessionStorage, setLocalStorage};


