const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonFile: 'reports/API/./cucumber_report.json',
  output: 'reports/API/./cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'STAGING',
    'Browser': 'Chrome  54.0.2840.98',
    'Platform': 'Windows 10',
    'Parallel': 'Scenarios',
    'Executed': 'Remote',
  },
};

reporter.generate(options);
