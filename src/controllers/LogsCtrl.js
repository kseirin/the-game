'use strict';

/**
 * @class LogsCtrl
 */
class LogsCtrl {
  /**
   * @param {String} text
   */
  log(text) {
    console.log(text);
  }
}

module.exports = new LogsCtrl();