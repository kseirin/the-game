'use strict';

/**
 * @property {Avatar} player
 * @property {Enemy} enemy
 */
class Battlefield {
  /**
   * @param {(Battlefield|Object)} data
   * @param {Avatar=} data.player
   * @param {Enemy=} data.enemy
   */
  constructor(data) {
    this.player = data.player || null;
    this.enemy = data.enemy || null;
  }
}

module.exports = Battlefield;