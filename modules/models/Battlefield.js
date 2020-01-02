/** @namespace kseirin.Models */
'use strict';

/**
 * @memberOf kseirin.Models
 * @property {kseirin.Models.Avatar} player
 * @property {kseirin.Models.Avatar} enemy
 */
class Battlefield {
  /**
   * @param {(kseirin.Models.Battlefield|Object)} data
   * @param {kseirin.Models.Avatar=} data.player
   * @param {kseirin.Models.Avatar=} data.enemy
   */
  constructor(data) {
    this.player = data.player || null;
    this.enemy = data.enemy || null;
  }
}

module.exports = Battlefield;