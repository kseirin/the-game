'use strict';

/**
 * @class EventEmitter
 * @property {HTMLDivElement} node
 */
class EventEmitter {
  constructor() {
    this.node = document.createElement('div');
  }

  /**
   * @param {String} event
   * @param {Function} callback
   */
  on(event, callback) {
    this.node.addEventListener(event, callback);
  }

  /**
   * @param {String} event
   * @param {Function} callback
   */
  off(event, callback) {
    this.node.removeEventListener(event, callback);
  }

  /**
   * @param {String} event
   * @param {Object=} detail
   */
  dispatch(event, detail) {
    this.node.dispatchEvent(new CustomEvent(event, {detail}));
  }
}

module.exports = EventEmitter;