'use strict';

const State = require('@kseirin/state');
const Avatar = require('../models/Avatar');
const Enemy = require('../models/Enemy');
const Battlefield = require('../models/Battlefield');
const StaticProperty = require('../models/StaticProperty');
const DynamicProperty = require('../models/DynamicProperty');

/**
 * @class BootstrapCtrl
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
   * @return {Enemy}
   */
  makeEnemy() {
    return new Enemy({
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
   * @param {Enemy} enemy
   */
  initBattlefield(enemy) {
    State.battlefield.current = new Battlefield({
      player: State.avatar.current,
      enemy
    });
  }
}

module.exports = new BootstrapCtrl();