'use strict';

/**
 * @property {Number} maxValue
 * @property {Number} currentValue
 */
class DynamicProperty {
  /**
   * @param {(DynamicProperty|Object)} data
   * @param {Number} data.maxValue
   * @param {Number} data.currentValue
   */
  constructor(data) {
    this.maxValue = data.maxValue;
    this.currentValue = data.currentValue;
  }
}

module.exports = DynamicProperty;