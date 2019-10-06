'use strict';

import MainMenu from './components/MainMenu/MainMenu';

const appNode = document.getElementById('app');
appNode.appendChild(MainMenu.makeElement());