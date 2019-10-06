'use strict';

import EventEmitter from '@kseirin/event-emitter';

/**
 * @class State
 * @property {EventEmitter} eventEmitter
 */
class State {
  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  reset() {
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

export default new State();