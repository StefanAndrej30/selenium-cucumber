const certificationSurveyTypes = {
  'ASSES': 1,
  'ANALYZE': 3,
  'ACCELERATE': 4,
};

const surveyFlows = {
  'EMAIL': 1,
  'ANONYMOUS': 2,
  'YNN': 4,
  'YYN': 12,
  'YNY': 20,
  'YYY': 28,
};

const resolutions = {
  '4k': [3840, 2160],
  '2k': [2560, 1440],
  'FHD': [1920, 1080],
  'HD': [1280, 720],
};

const environments = {
  'uat': 'qa01',
  'qa': 'qa',
  'prod': 'prod',
  'dev': 'dev',
  'development': 'dev01',
  'ltd': 'ltd',
};

module.exports = { certificationSurveyTypes, surveyFlows, resolutions, environments };
