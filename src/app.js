'use strict';

const BootstrapCtrl = require('@kseirin/controllers').BootstrapCtrl;
const GameRoot = require('./components/GameRoot/GameRoot');

BootstrapCtrl.load().then(runApp);

function runApp() {
  const appNode = document.getElementById('app');
  const game = new GameRoot();
  appNode.appendChild(game);
}
