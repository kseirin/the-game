'use strict';

const Render = require('@kseirin/render');

/**
 * @property {kseirin.Models.DynamicProperty} dynamicProperty
 * @property {Object} options
 * @property {String} options.label
 * @property {String} options.color
 */
class DynamicPropertyBar extends HTMLElement {
  /**
   * @param {kseirin.Models.DynamicProperty} dynamicProperty
   * @param {Object} options
   * @param {String} options.label
   * @param {String} options.color
   */
  constructor(dynamicProperty, options) {
    super();
    options = options || {};
    this.dynamicProperty = dynamicProperty;
    this.options = {
      label: options.label || null,
      color: options.color || null
    };
    this.template = `<div class="dynamic-property-bar">
  <div class="dynamic-property-bar_container">
    <div class="dynamic-property-bar_progress" data-key="progress"></div>
    <div class="dynamic-property-bar_label" data-key="label"></div>
    <div class="dynamic-property-bar_counter" data-key="counter"></div>
  </div>
</div>`;
    this.nodesMap = {};
  }

  connectedCallback() {
    this.nodesMap = Render.renderTemplate(this, this.template);
    this.render();
  }

  render() {
    const percent = this.dynamicProperty.currentValue / this.dynamicProperty.maxValue * 100;
    if (this.options.label) {
      this.nodesMap.label.textContent = this.options.label;
    } else {
      this.nodesMap.label.style.display = 'none';
    }
    this.nodesMap.progress.style.width = `${percent}%`;
    this.nodesMap.progress.style.background = this.options.color || '#000000';
    this.nodesMap.counter.textContent = `${this.dynamicProperty.currentValue} / ${this.dynamicProperty.maxValue}`;
  }
}

customElements.define('dynamic-property-bar', DynamicPropertyBar);

module.exports = DynamicPropertyBar;