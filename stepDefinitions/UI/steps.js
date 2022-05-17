const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am on the {string} page', function (page) {
  browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When('I login with {string} and {string}', function (username, password) {
  $('#username').setValue(username);
  $('#password').setValue(password);
  $('button[type="submit"]').click();
});

// eslint-disable-next-line cucumber/async-then
Then('I should see a flash message saying {string}', function (message) {
  expect($('#flash')).toBeExisting();
  expect($('#flash')).toHaveTextContaining(message);
});
