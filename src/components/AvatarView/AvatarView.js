'use strict';

const Render = require('@kseirin/render');
const DynamicPropertyBar = require('../DynamicPropertyBar/DynamicPropertyBar');

/**
 * @property {kseirin.Models.Avatar} avatar
 */
class AvatarView extends HTMLElement {
  /**
   * @param {kseirin.Models.Avatar} avatar
   */
  constructor(avatar) {
    super();
    this.avatar = avatar;
    this.view = document.createElement('pre');
    this.hp = new DynamicPropertyBar(avatar.hp);
    this.components = [
      this.view,
      this.hp
    ];
  }

  setAvatar(avatar) {
    this.avatar = avatar;
    this.hp = new DynamicPropertyBar(avatar.hp);
    Render.render(this, this.components);
    this.render();
  }

  connectedCallback() {
    this.classList.add('player-view');
    Render.render(this, this.components);
    this.render();
  }

  render() {
    Render.updateState(this, this.components);
    this.view.textContent = JSON.stringify(this.avatar, null, 2);
  }
}

customElements.define('player-view', AvatarView);

module.exports = AvatarView;