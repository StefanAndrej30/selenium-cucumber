const log4js = require('log4js');
const moment = require('moment');

class Log {
  constructor() {
    log4js.configure({
      appenders: { cheese: { type: 'file', filename: `./logs/API/response_log_${moment().format('LLL SSS')}.log` } },
      categories: { default: { appenders: ['cheese'], level: 'trace' } },
    });
  }

  logTrace(data) {
    const logger = log4js.getLogger('cheese');
    logger.trace(data);
  }
}

module.exports = new Log();
