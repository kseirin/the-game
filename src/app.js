'use strict';

const MainMenu = require('./components/MainMenu/MainMenu');

const appNode = document.getElementById('app');
const mainMenu = new MainMenu();
appNode.appendChild(mainMenu);