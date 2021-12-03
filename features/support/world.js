require('chromedriver');
const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber');
const { timeout } = require('../commons/config');


class CustomWorld extends World {

    constructor(option) {
        super(option);
        this.name = null;
        this.response = {};
        this.sessionStorage;
    }

    setName(name) {
        this.name = name;
    }

    setResponse(res) {
        this.response = res;
    }

    setSessionStorage(sessionStorage) {
        this.sessionStorage = sessionStorage;
    }
}

setWorldConstructor(CustomWorld);


setDefaultTimeout(timeout);

