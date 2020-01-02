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
    this.name = document.createElement('div');
    this.name.classList.add('avatar-view_name');
    this.hp = new DynamicPropertyBar(avatar.hp, {
      label: 'hp:',
      color: '#990000'
    });
    this.components = [
      this.name,
      this.hp
    ];
  }

  setAvatar(avatar) {
    this.avatar = avatar;
    this.hp = new DynamicPropertyBar(avatar.hp, {
      label: 'hp:',
      color: '#990000'
    });
    Render.render(this, this.components);
    this.render();
  }

  connectedCallback() {
    this.classList.add('avatar-view');
    Render.render(this, this.components);
    this.render();
  }

  render() {
    Render.updateState(this, this.components);
    this.name.textContent = this.avatar.name;
  }
}

customElements.define('avatar-view', AvatarView);

module.exports = AvatarView;