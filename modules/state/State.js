/** @namespace kseirin.State */
'use strict';

const EventEmitter = require('@kseirin/event-emitter');
const StateAvatar = require('./StateAvatar');
const StateBattlefield = require('./StateBattlefield');

/**
 * @memberOf kseirin.State
 * @property {kseirin.EventEmitter} eventEmitter
 * @property {kseirin.State.StateAvatar} avatar
 * @property {kseirin.State.StateBattlefield} battlefield
 */
class State {
  constructor() {
    this.eventEmitter = new EventEmitter();
    this.avatar = new StateAvatar();
    this.battlefield = new StateBattlefield();
  }

  reset() {
    this.avatar.reset();
    this.battlefield.reset();
  }

  /**
   * @param {StateEvent} event
   * @param {Function} callback
   */
  on(event, callback) {
    this.eventEmitter.on(event, callback);
  }

  /**
   * @param {StateEvent} event
   * @param {Function} callback
   */
  off(event, callback) {
    this.eventEmitter.off(event, callback);
  }

  /**
   * @param {StateEvent} event
   */
  dispatch(event) {
    this.eventEmitter.dispatch(event);
  }
}

module.exports = new State();
