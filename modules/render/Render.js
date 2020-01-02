/** @namespace kseirin
 'use strict';

 /**
 * @memberOf kseirin
 */
class Render {
  /**
   * @param {HTMLElement} node
   * @param {Array<HTMLElement>} components
   */
  render(node, components) {
    components.forEach(component => node.appendChild(component));
  }

  /**
   * @param {HTMLElement} node
   * @param {Array<HTMLElement>} components
   */
  updateState(node, components) {
    components.forEach(component => component.render && component.render());
  }
}

module.exports = new Render();