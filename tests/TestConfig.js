'use strict';

const DocumentMock = require('./DocumentMock');
const EventEmitterMock = require('./EventEmitterMock');

/**
 * @class TestConfig
 */
class TestConfig {
  init() {
    DocumentMock.init();
    EventEmitterMock.init();
  }
}

module.exports = new TestConfig();