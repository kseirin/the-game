/** @namespace kseirin.Controllers */
'use strict';

const State = require('@kseirin/state');

/**
 * @memberOf kseirin.Controllers
 */
class BattlefieldCtrl {
  attack() {
    const player = State.battlefield.current.player;
    const power = player.strength.value;
    const enemy = State.battlefield.current.enemy;
    enemy.hp.currentValue -= power;
    State.dispatch('change');
  }
}

module.exports = new BattlefieldCtrl();