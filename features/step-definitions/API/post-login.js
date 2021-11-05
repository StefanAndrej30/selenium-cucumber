// const request = require('supertest');
const { Given } = require('@cucumber/cucumber');
const { login } = require('./login')
const querystring = require('querystring');
const identityConfig = require('../../commons/identity');
const authorization = require('../../commons/authorization');



const decodedUser = decodeURI(querystring.stringify(identityConfig.user));

Given('API - Get user token', async function () {
    const userLogin =  await login(decodedUser);
    authorization.setToken('userToken', await userLogin.token);
});