'use strict';

import MainMenu from './components/MainMenu/MainMenu';

const appNode = document.getElementById('app');
const mainMenu = new MainMenu();
appNode.appendChild(mainMenu);