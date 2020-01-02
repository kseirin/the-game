'use strict';

const Render = require('@kseirin/render');
const State = require('@kseirin/state');
const BattlefieldCtrl = require('@kseirin/controllers').BattlefieldCtrl;
const AvatarView = require('../AvatarView/AvatarView');

class BattlefieldComponent extends HTMLElement {
  constructor() {
    super();
    this.player = new AvatarView(State.battlefield.current.player);
    this.enemy = new AvatarView(State.battlefield.current.enemy);
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
    Render.updateState(this, this.components);
  }
}

customElements.define('battlefield-component', BattlefieldComponent);

module.exports = BattlefieldComponent;