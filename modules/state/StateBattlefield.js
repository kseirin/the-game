/** @namespace kseirin.State */
'use strict';

/**
 * @memberOf kseirin.State
 * @property {Battlefield} current
 */
class StateBattlefield {
  constructor() {
    this.current = null;
  }

  reset() {
    this.current = null;
  }
}

module.exports = StateBattlefield;