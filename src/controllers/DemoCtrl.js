'use strict';

import LogsCtrl from './LogsCtrl';

/**
 * @class DemoCtrl
 */
class DemoCtrl {
  /**
   * @param {String} text
   */
  print(text) {
    return console.log(1, text);
  }

  /**
   * @param {String} text
   */
  log(text) {
    return LogsCtrl.log(text);
  }
}

export default new DemoCtrl();