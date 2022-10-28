const { join } = require('path');
const { config } = require('./wdio.shared.conf');

exports.config = {
  ...config,
  ...{
    // hostname: '138.91.184.33',
    // port: 4444,
    // path: '/wd/hub',

    services: [
      ['image-comparison',
        // The options
        {
          // Some options, see the docs for more
          baselineFolder: join(process.cwd(), './visualRegressionBaseLine/'),
          formatImageName: '{tag}-{width}x{height}',
          screenshotPath: join(process.cwd(), './tmp/'),
          savePerInstance: true,
          autoSaveBaseline: true,
          ignoreNothing: false,
          blockOutStatusBar: true,
          blockOutToolBar: true,
          // ignoreNothing: true, // Without this option, it errors out only when mismatch is above 1.23%(by default)
          // ... more options
        }],
      ['selenium-standalone'],
    ],
    capabilities: [
      {
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
          // args: ['-headless'],
        },
      },
    ],
  },
  // ...
};
