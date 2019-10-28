'use strict';

const EventEmitter = require('../src/modules/EventEmitter/EventEmitter');

/**
 * @class EventEmitterMock
 * @property {Object} eventsMap
 */
class EventEmitterMock {
  constructor() {
    this.eventsMap = null;
  }

  /**
   * @param {String} event
   * @param {Function} callback
   */
  on(event, callback) {
    this.eventsMap = this.eventsMap || {};
    if (!this.eventsMap[event]) this.eventsMap[event] = [];
    const eventsQueue = this.eventsMap[event];
    eventsQueue.push(callback);
  }

  /**
   * @param {String} event
   * @param {Function} callback
   */
  off(event, callback) {
    this.eventsMap = this.eventsMap || {};
    if (!this.eventsMap[event]) this.eventsMap[event] = [];
    const eventsQueue = this.eventsMap[event];
    if (!callback) {
      throw new TypeError(
        `Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only 1 present.`);
    }
    let index = eventsQueue.indexOf(callback);
    while (~index) {
      eventsQueue.splice(index, 1);
      index = eventsQueue.indexOf(callback);
    }
  }

  /**
   * @param {String} event
   * @param {Object=} detail
   */
  dispatch(event, detail) {
    this.eventsMap = this.eventsMap || {};
    if (!this.eventsMap[event]) this.eventsMap[event] = [];
    const eventsQueue = this.eventsMap[event];
    eventsQueue.forEach(callback => callback({detail}));
  }

  static init() {
    EventEmitter.prototype.on = EventEmitterMock.prototype.on;
    EventEmitter.prototype.off = EventEmitterMock.prototype.off;
    EventEmitter.prototype.dispatch = EventEmitterMock.prototype.dispatch;
  }
}

module.exports = EventEmitterMock;
