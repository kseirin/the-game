/** @namespace kseirin.Models */
'use strict';

/**
 * @memberOf kseirin.Models
 * @property {Number} value
 */
class StaticProperty {
  /**
   * @param {(kseirin.Models.StaticProperty|Object)} data
   * @param {Number} data.value
   */
  constructor(data) {
    this.value = data.value;
  }
}

module.exports = StaticProperty;