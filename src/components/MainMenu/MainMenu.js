'use strict';

class MainMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log(`Main Menu Is Connected`);
    this.innerHTML = `<div class="main-menu">
Main Menu
</div>`;
  }

  disconnectedCallback() {
    console.log(`Main Menu Is Disconnected`);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(`Attribute ${attrName} changed`);
    console.log('> oldVal >>>', oldVal);
    console.log('> newVal >>>', newVal);
  }

  static makeElement() {
    return document.createElement('main-menu');
  }
}

customElements.define('main-menu', MainMenu);

export default MainMenu;