'use strict';

const EventEmitter = require('../src/modules/EventEmitter/EventEmitter');

/**
 * @class DocumentMock
 * @property {Object} eventsMap
 */
class DocumentMock {
  init() {
    global.document = {
      createElement: DocumentMock.createElement
    };
  }

  static createElement() {
    return {};
  }
}

module.exports = new DocumentMock();
