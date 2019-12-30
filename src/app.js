'use strict';

const MainMenu = require('./components/MainMenu/MainMenu');
const BootstrapCtrl = require('./controllers/BootstrapCtrl');

BootstrapCtrl.load().then(runApp);

function runApp() {
  const appNode = document.getElementById('app');
  const mainMenu = new MainMenu();
  appNode.appendChild(mainMenu);
}
