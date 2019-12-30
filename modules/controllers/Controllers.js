/** @namespace kseirin.Controllers */
'use strict';

const BattlefieldCtrl = require('./BattlefieldCtrl');

/**
 * @memberOf kseirin.Controllers
 * @property {kseirin.Controllers.BattlefieldCtrl} BattlefieldCtrl
 */
class Controllers {
  constructor() {
    this.BattlefieldCtrl = BattlefieldCtrl;
  }
}

module.exports = new Controllers();
