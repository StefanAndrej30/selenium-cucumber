const seleniumWebdriver = require('selenium-webdriver');
require('chromedriver');
const {defineSupportCode} = require('@cucumber/cucumber');
const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber')
const {timeout, browserName} = require('../commons/config');



setDefaultTimeout(timeout);

