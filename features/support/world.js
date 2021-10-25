const seleniumWebdriver = require('selenium-webdriver');
require('chromedriver');
const {defineSupportCode} = require('@cucumber/cucumber');
const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber')
const {timeout, browserName} = require('../commons/config');


class CustomWorld{

    constructor() {
        this.name = null;
        this.object = {};
    }
    
    setName(name) {
        this.name = name
    }
}

setWorldConstructor(CustomWorld);


setDefaultTimeout(timeout);

