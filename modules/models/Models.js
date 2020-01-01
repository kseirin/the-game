/** @namespace kseirin.Models */
'use strict';

const Avatar = require('./Avatar');
const Battlefield = require('./Battlefield');
const DynamicProperty = require('./DynamicProperty');
const Enemy = require('./Enemy');
const StaticProperty = require('./StaticProperty');

/**
 * @memberOf kseirin.Models
 * @property {kseirin.Models.Avatar} Avatar
 * @property {kseirin.Models.Battlefield} Battlefield
 * @property {kseirin.Models.DynamicProperty} DynamicProperty
 * @property {kseirin.Models.Enemy} Enemy
 * @property {kseirin.Models.StaticProperty} StaticProperty
 */
class Models {
  constructor() {
    this.Avatar = Avatar;
    this.Battlefield = Battlefield;
    this.DynamicProperty = DynamicProperty;
    this.Enemy = Enemy;
    this.StaticProperty = StaticProperty;
  }
}

module.exports = new Models();
