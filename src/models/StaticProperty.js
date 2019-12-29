'use strict';

/**
 * @property {Number} value
 */
class StaticProperty {
  /**
   * @param {(StaticProperty|Object)} data
   * @param {Number} data.value
   */
  constructor(data) {
    this.value = data.value;
  }
}

module.exports = StaticProperty;