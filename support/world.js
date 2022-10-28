const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber');
const { timeout } = require('../commons/config');

class CustomWorld extends World {
  constructor(option) {
    super(option);
    this.name = null;
    this.response = {};
    this.sessionStorage;
    this.messageId;
  }

  setName(name) {
    this.name = name;
  }

  setResponse(res) {
    this.response = res;
  }

  setMessageId(messageId) {
    this.messageId = messageId;
  }
}

setWorldConstructor(CustomWorld);

setDefaultTimeout(timeout);
