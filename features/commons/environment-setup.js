const { argv } = require('yargs');
const fs = require('fs');

function writeFile() {
    fs.writeFileSync('.env', argv.env, (err) => {
        if (err) throw err;
    });
}

function clearFile() {
    fs.writeFileSync('.env', '', (err) => {
        if (err) throw err;
    });
}

function readFile() {
    const rawdata = fs.readFileSync('.env');
    return String(rawdata);
}

if (readFile() === 'undefined' || !readFile()) {
    writeFile();
}

if (readFile() === argv.env) {
    writeFile();
}

exports.clearFile = clearFile;
exports.readFile = readFile;
