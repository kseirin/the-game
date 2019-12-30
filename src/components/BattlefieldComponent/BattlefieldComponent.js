'use strict';

const Render = require('@kseirin/render');
const State = require('@kseirin/state');

class BattlefieldComponent extends HTMLElement {
  constructor() {
    super();
    this.player = document.createElement('pre');
    this.enemy = document.createElement('pre');
    this.renderCallback = null;
    this.components = [
      this.player,
      this.enemy
    ];
  }

  connectedCallback() {
    this.classList.add('game-root');
    Render.render(this, this.components);
    this.render();

    State.on('change', this.renderCallback = () => this.render());
  }

  disconnectedCallback() {
    State.off('change', this.renderCallback);
  }

  render() {
    this.player.textContent = JSON.stringify(State.battlefield.current.player, null, 2);
    this.enemy.textContent = JSON.stringify(State.battlefield.current.enemy, null, 2);
  }
}

customElements.define('battlefield-component', BattlefieldComponent);

module.exports = BattlefieldComponent;