'use strict';

/**
 * @property {Avatar} avatar
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