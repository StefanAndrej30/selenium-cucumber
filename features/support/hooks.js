const {Before, After} = require('@cucumber/cucumber');

Before(function() {
  return this.browser.manage().window().maximize();
});

After(function() {
  return this.browser.quit();
});