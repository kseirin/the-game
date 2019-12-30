'use strict';

const GameRoot = require('./components/GameRoot/GameRoot');
const BootstrapCtrl = require('./controllers/BootstrapCtrl');

BootstrapCtrl.load().then(runApp);

function runApp() {
  const appNode = document.getElementById('app');
  const game = new GameRoot();
  appNode.appendChild(game);
}
