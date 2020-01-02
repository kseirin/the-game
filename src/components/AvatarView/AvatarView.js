'use strict';

const Render = require('@kseirin/render');
const State = require('@kseirin/state');

class AvatarView extends HTMLElement {
  /**
   * @param {kseirin.Models.Avatar} avatar
   */
  constructor(avatar) {
    super();
    this.avatar = avatar;
    this.view = document.createElement('pre');
    this.components = [
      this.view
    ];
  }

  setAvatar(avatar) {
    this.avatar = avatar;
    this.render();
  }

  connectedCallback() {
    this.classList.add('player-view');
    Render.render(this, this.components);
    this.render();
  }

  render() {
    this.view.textContent = JSON.stringify(this.avatar, null, 2);
  }
}

customElements.define('player-view', AvatarView);

module.exports = AvatarView;