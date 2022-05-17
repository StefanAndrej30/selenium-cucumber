const { config } = require('./wdio.shared.conf');

exports.config = {
  ...config,
  ...{
    hostname: '10.10.0.65',
    port: 4444,
    path: '/wd/hub',

    capabilities: [
      {
        maxInstances: 5,
        browserName: 'chrome',
        'platformName': 'Mac',
        'browserVersion': '101',
        'goog:chromeOptions': {
          // args: [
          //   'headless',
          //   // Use --disable-gpu to avoid an error from a missing Mesa
          //   // library, as per
          //   // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
          //   // 'disable-gpu',
          // ],
        },
      },
      {
        maxInstances: 5,
        logLevel: 'error',
        'browserName': 'firefox',
        'platformName': 'Mac',
        'browserVersion': '99.0.1',
        'moz:firefoxOptions': {
          // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
          // args: ['-headless'],
        },
      },
      // {
      //   maxInstances: 5,
      //   logLevel: 'error',
      //   'browserName': 'firefox',
      //   'platformName': 'Mac',
      //   'browserVersion': '97',
      //   'moz:firefoxOptions': {
      //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
      //     args: ['-headless'],
      //   },
      // },
    ],
  },
};
