'use strict';

/**
 * @class EventEmitter
 * @property {Object} eventsMap объект, ключами которого являются имена событий, а значения - массивами слушателей
 */
class EventEmitter {
  constructor() {
    this.eventsMap = {};
  }

  /**
   * Установка слушателя на событие
   * @param {String} event имя события
   * @param {Function} callback слушатель
   */
  on(event, callback) {
    const eventsQueue = this.getCallbacksQueue(event);
    eventsQueue.push(callback);
  }

  /**
   * Удаление слушателей с события
   * Если слушатель указан, то будет удалён только он
   * Усли слушатель не указан, то будут удалены все слушатели указанного события
   * @param {String} event имя события
   * @param {Function=} callback слушатель
   * @returns {Array<Function>} массив удалённых слушателей
   */
  off(event, callback) {
    const eventsQueue = this.getCallbacksQueue(event);
    if (!callback) return eventsQueue.splice(0, eventsQueue.length);
    const result = [];
    let index = eventsQueue.indexOf(callback);
    while (~index) {
      result.push(eventsQueue.splice(index, 1));
      index = eventsQueue.indexOf(callback);
    }
    return result;
  }

  /**
   * Получение всех слушателей по имени события
   * @param {String} event имя события
   * @returns {Array<Function>} массив установленных слушателей
   */
  getCallbacksQueue(event) {
    if (!this.eventsMap.hasOwnProperty(event)) this.eventsMap[event] = [];
    return this.eventsMap[event];
  }

  /**
   * @param {String} event имя события
   * @param {Object=} eventData данные, передаваемые в событие
   */
  dispatch(event, eventData) {
    eventData = eventData || {};
    const eventsQueue = this.getCallbacksQueue(event);
    eventsQueue.forEach(callback => callback({data: eventData}));
  }
}

export default EventEmitter;