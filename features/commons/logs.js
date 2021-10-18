const log4js = require("log4js");
const Globals = require('../support/globals')


class Log {
  constructor() {
    log4js.configure({
      appenders: { cheese: { type: 'file', filename: `./logs/UI/response_log_${Globals.timeNow()}.log` } },
      categories: { default: { appenders: ['cheese'], level: 'trace' } },
    });
  }

  logTrace(data) {
    const logger = log4js.getLogger('cheese');
    logger.trace(data);
  }
}

module.exports = new Log();
