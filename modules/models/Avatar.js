/** @namespace kseirin.Models */
'use strict';

const StaticProperty = require('./StaticProperty');
const DynamicProperty = require('./DynamicProperty');

/**
 * @memberOf kseirin.Models
 * @property {String} name
 * @property {kseirin.Models.DynamicProperty} hp
 * @property {kseirin.Models.StaticProperty} strength
 */
class Avatar {
  /**
   * @param {(kseirin.Models.Avatar|Object)} data
   * @param {String} data.name
   * @param {kseirin.Models.DynamicProperty} data.hp
   * @param {kseirin.Models.StaticProperty} data.strength
   */
  constructor(data) {
    this.name = data.name;
    this.hp = new DynamicProperty(data.hp);
    this.strength = new StaticProperty(data.strength);
  }
}

module.exports = Avatar;