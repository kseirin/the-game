'use strict';

const StaticProperty = require('./StaticProperty');
const DynamicProperty = require('./DynamicProperty');

/**
 * @property {DynamicProperty} hp
 * @property {StaticProperty} strength
 */
class Avatar {
  /**
   * @param {(Avatar|Object)} data
   * @param {DynamicProperty} data.hp
   * @param {StaticProperty} data.strength
   */
  constructor(data) {
    this.hp = new DynamicProperty(data.hp);
    this.strength = new StaticProperty(data.strength);
  }
}

module.exports = Avatar;