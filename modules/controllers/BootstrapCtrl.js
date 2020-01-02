/** @namespace kseirin.Controllers */
'use strict';

const State = require('@kseirin/state');
const Avatar = require('@kseirin/models/Avatar');
const Battlefield = require('@kseirin/models/Battlefield');
const StaticProperty = require('@kseirin/models/StaticProperty');
const DynamicProperty = require('@kseirin/models/DynamicProperty');

/**
 * @memberOf kseirin.Controllers
 */
class BootstrapCtrl {
  /**
   * @returns {Promise}
   */
  load() {
    this.initPlayer();
    const slime = this.makeEnemy();
    this.initBattlefield(slime);
    State.dispatch('change');
    return Promise.resolve(null);
  }

  initPlayer() {
    State.avatar.current = new Avatar({
      name: 'Player 1',
      hp: new DynamicProperty({
        maxValue: 100,
        currentValue: 100
      }),
      strength: new StaticProperty({
        value: 4
      })
    });
  }

  /**
   * @return {kseirin.Models.Avatar}
   */
  makeEnemy() {
    return new Avatar({
      name: 'Slime',
      hp: new DynamicProperty({
        maxValue: 10,
        currentValue: 10
      }),
      strength: new StaticProperty({
        value: 1
      })
    });
  }

  /**
   * @param {kseirin.Models.Avatar} enemy
   */
  initBattlefield(enemy) {
    State.battlefield.current = new Battlefield({
      player: State.avatar.current,
      enemy
    });
  }
}

module.exports = new BootstrapCtrl();