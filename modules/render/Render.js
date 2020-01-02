/** @namespace kseirin */
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
   * @param {String} template
   * @returns {Object}
   */
  renderTemplate(node, template) {
    node.innerHTML = template;
    const items = [...node.querySelectorAll('[data-key]')];
    return items.reduce((nodesMap, node) => {
      const key = node.dataset.key;
      nodesMap[key] = node;
      return nodesMap;
    }, {});
  }

  /**
   * TODO: implement arrange elements
   * @param {HTMLElement} node
   * @param {Array<HTMLElement>} components
   */
  updateState(node, components) {
    removeOldComponents();
    addNewComponents();
    updateComponentsState();

    function removeOldComponents() {
      [...node.children].forEach(component => {
        if (!~components.indexOf(component)) node.removeChild(component);
      });
    }

    function addNewComponents() {
      let lastViewIndex = 0;
      components.forEach(component => {
        const viewIndex = ~[...node.children].indexOf(component);
        if (!viewIndex) node.children[lastViewIndex].insertAdjacentElement('afterend', component);
        lastViewIndex = viewIndex;
      });
    }

    function updateComponentsState() {
      components.forEach(component => component.render && component.render());
    }
  }
}

module.exports = new Render();