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
}

module.exports = new Render();