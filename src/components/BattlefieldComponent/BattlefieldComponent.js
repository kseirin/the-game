'use strict';

const Render = require('@kseirin/render');
const State = require('@kseirin/state');
const BattlefieldCtrl = require('@kseirin/controllers').BattlefieldCtrl;

class BattlefieldComponent extends HTMLElement {
  constructor() {
    super();
    this.player = document.createElement('pre');
    this.enemy = document.createElement('pre');
    this.action = document.createElement('button');
    this.action.textContent = 'Attack!';
    this.renderCallback = null;
    this.components = [
      this.player,
      this.enemy,
      this.action
    ];
  }

  connectedCallback() {
    this.classList.add('game-root');
    Render.render(this, this.components);
    this.render();

    State.on('change', this.renderCallback = () => this.render());
    this.action.addEventListener('click', BattlefieldCtrl.attack);
  }

  disconnectedCallback() {
    State.off('change', this.renderCallback);
    this.action.removeEventListener('click', BattlefieldCtrl.attack);
  }

  render() {
    this.player.textContent = JSON.stringify(State.battlefield.current.player, null, 2);
    this.enemy.textContent = JSON.stringify(State.battlefield.current.enemy, null, 2);
  }
}

customElements.define('battlefield-component', BattlefieldComponent);

module.exports = BattlefieldComponent;