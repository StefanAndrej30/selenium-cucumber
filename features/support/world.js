const seleniumWebdriver = require('selenium-webdriver');
require('chromedriver');
const {defineSupportCode} = require('@cucumber/cucumber');
const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber')
const {timeout, browserName} = require('../commons/config');


class CustomWorld extends World {

    constructor(option) {
        super(option);
        this.name = null
    }

   setName(name) {
       this.name = name;
   }
}

setWorldConstructor(CustomWorld);


setDefaultTimeout(timeout);

