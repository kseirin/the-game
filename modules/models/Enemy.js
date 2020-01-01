/** @namespace kseirin.Models */
'use strict';

const StaticProperty = require('./StaticProperty');
const DynamicProperty = require('./DynamicProperty');

/**
 * @memberOf kseirin.Models
 * @property {kseirin.Models.DynamicProperty} hp
 * @property {kseirin.Models.StaticProperty} strength
 */
class Enemy {
  /**
   * @param {(kseirin.Models.Enemy|Object)} data
   * @param {kseirin.Models.DynamicProperty} data.hp
   * @param {kseirin.Models.StaticProperty} data.strength
   */
  constructor(data) {
    this.hp = new DynamicProperty(data.hp);
    this.strength = new StaticProperty(data.strength);
  }
}

module.exports = Enemy;