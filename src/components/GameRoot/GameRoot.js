'use strict';

const Render = require('@kseirin/render');
const MainMenu = require('../MainMenu/MainMenu');
const BattlefieldComponent = require('../BattlefieldComponent/BattlefieldComponent');

/**
 * @property {Array<HTMLElement>} components
 */
class GameRoot extends HTMLElement {
  constructor() {
    super();
    const mainMenu = new MainMenu();
    const battlefieldComponent = new BattlefieldComponent();

    this.components = [
      mainMenu,
      battlefieldComponent
    ];
  }

  connectedCallback() {
    this.classList.add('game-root');
    Render.render(this, this.components);
  }

  disconnectedCallback() {
  }
}

customElements.define('game-root', GameRoot);

module.exports = GameRoot;