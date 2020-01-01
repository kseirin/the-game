/** @namespace kseirin.State */
'use strict';

/**
 * @memberOf kseirin.State
 * @property {kseirin.Models.Avatar} avatar
 */
class StateAvatar {
  constructor() {
    this.current = null;
  }

  reset() {
    this.current = null;
  }
}

module.exports = StateAvatar;