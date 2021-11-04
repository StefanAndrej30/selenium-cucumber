const seleniumWebdriver = require('selenium-webdriver');
require('chromedriver');
const { defineSupportCode } = require('@cucumber/cucumber');
const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber')
const { timeout, browserName } = require('../commons/config');


class CustomWorld extends World {

    constructor(option) {
        super(option);
        this.name = null
        this.response = {};
    }

    setName(name) {
        this.name = name;
    }

    setResponse(res) {
        this.response = res
    }
}

setWorldConstructor(CustomWorld);


setDefaultTimeout(timeout);

