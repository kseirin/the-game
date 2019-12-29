'use strict';

const EventEmitter = require('@kseirin/event-emitter');

/**
 * @property {kseirin.EventEmitter} eventEmitter
 */
class State {
  constructor() {
    this.eventEmitter = new EventEmitter();
    this.avatar = new StateAvatar();
  }

  reset() {
    this.avatar.reset();
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
