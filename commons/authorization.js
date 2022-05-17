class Authorization {
  constructor() {
    this.tokens = {
      userToken: '',
      clientToken: '',
    };
    this.defaultHeaders = {};
    // this.browser;
  }

  setToken(token, value) {
    this.tokens[token] = value;
  }

  getToken(token) {
    return this.tokens[token];
  }

  setDefaultHeaders(defaultHeaders) {
    this.defaultHeaders = defaultHeaders;
  }

  getDefaultHeaders() {
    return this.defaultHeaders;
  }

  // setBrowser(browserName) {
  //   this.browser = new seleniumWebdriver.Builder()
  //     .forBrowser(browserName)
  //     .build();
  // }

  // getBrowser() {
  //   return this.browser;
  // }
}
module.exports = new Authorization();
