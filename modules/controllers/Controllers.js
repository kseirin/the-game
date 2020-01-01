/** @namespace kseirin.Controllers */
'use strict';

const BattlefieldCtrl = require('./BattlefieldCtrl');
const BootstrapCtrl = require('./BootstrapCtrl');

/**
 * @memberOf kseirin.Controllers
 * @property {kseirin.Controllers.BattlefieldCtrl} BattlefieldCtrl
 * @property {kseirin.Controllers.BootstrapCtrl} BootstrapCtrl
 */
class Controllers {
  constructor() {
    this.BattlefieldCtrl = BattlefieldCtrl;
    this.BootstrapCtrl = BootstrapCtrl;
  }
}

module.exports = new Controllers();
