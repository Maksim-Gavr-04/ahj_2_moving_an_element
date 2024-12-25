// TODO: write code here

import GamePlay from './hole-game/GamePlay';
import GameController from './hole-game/GameController';

document.addEventListener('DOMContentLoaded', () => {
  const gamePlay = new GamePlay(document.querySelector('.hole-game'));
  const gameCtrl = new GameController(gamePlay);
  gameCtrl.start();
});