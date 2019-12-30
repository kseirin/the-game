'use strict';

/**
 * @extends HTMLElement
 */
class MainMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('main-menu');
    this.render();
  }

  disconnectedCallback() {
  }

  render() {
    this.textContent = `Main Menu`;
  }
}

customElements.define('main-menu', MainMenu);

module.exports = MainMenu;