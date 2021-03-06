// const request = require('supertest');
const { Given } = require('@cucumber/cucumber');
const querystring = require('querystring');
const { login } = require('./login');
const identityConfig = require('../../commons/identity');
const authorization = require('../../commons/authorization');

const decodedUser = decodeURI(querystring.stringify(identityConfig.user));

Given('Get user token', async function () {
  const userLogin = await login(decodedUser);
  authorization.setToken('userToken', await userLogin.token);
});
