'use strict';

import State from '../../State/State';

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

export default MainMenu;