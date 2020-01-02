'use strict';

const Render = require('@kseirin/render');

/**
 * @property {kseirin.Models.DynamicProperty} dynamicProperty
 */
class DynamicPropertyBar extends HTMLElement {
  /**
   * @param {kseirin.Models.DynamicProperty} dynamicProperty
   */
  constructor(dynamicProperty) {
    super();
    this.dynamicProperty = dynamicProperty;
    this.template = `<div class="dynamic-property-bar">
  <div class="dynamic-property-bar_progress" data-key="progress"></div>
  <div class="dynamic-property-bar_counter" data-key="counter"></div>
</div>`;
    this.nodesMap = {};
  }

  connectedCallback() {
    this.nodesMap = Render.renderTemplate(this, this.template);
    this.render();
  }

  render() {
    const percent = this.dynamicProperty.currentValue / this.dynamicProperty.maxValue * 100;
    this.nodesMap.progress.style.width = `${percent}%`;
    this.nodesMap.counter.textContent = `${this.dynamicProperty.currentValue} / ${this.dynamicProperty.maxValue}`;
  }
}

customElements.define('dynamic-property-bar', DynamicPropertyBar);

module.exports = DynamicPropertyBar;