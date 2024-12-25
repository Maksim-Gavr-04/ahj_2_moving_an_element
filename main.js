/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/hole-game/GamePlay.js
class GamePlay {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Parameter `container` is not an HTMLElement');
    }
    this.container = container;
    this.boardSize = 4;
    this.holes = [];
    this.holeWhereGoblinWas = null;
  }
  drawUi() {
    for (let i = 1; i <= this.boardSize ** 2; i++) {
      const holeEl = document.createElement('div');
      holeEl.classList.add('hole');
      this.container.append(holeEl);
    }
    this.holes = [...this.container.children];
  }
  showGoblin() {
    const holes = [...this.holes];
    if (this.holeWhereGoblinWas) {
      holes.splice(holes.indexOf(this.holeWhereGoblinWas), 1);
    }
    const index = Math.floor(Math.random() * holes.length);
    holes[index].classList.add('hole_with-goblin');
  }
  hideGoblin() {
    const holeWithGoblin = this.container.querySelector('.hole_with-goblin');
    if (!holeWithGoblin) return;
    this.holeWhereGoblinWas = holeWithGoblin;
    holeWithGoblin.classList.remove('hole_with-goblin');
  }
}
;// ./src/js/hole-game/GameController.js
class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.idInterval = null;
  }
  start() {
    this.gamePlay.drawUi();
    this.idInterval = setInterval(() => {
      this.gamePlay.showGoblin();
      setTimeout(() => this.gamePlay.hideGoblin(), 500);
    }, 2000);
  }
  stop() {
    clearInterval(this.idInterval);
  }
}
;// ./src/js/app.js
// TODO: write code here



document.addEventListener('DOMContentLoaded', () => {
  const gamePlay = new GamePlay(document.querySelector('.hole-game'));
  const gameCtrl = new GameController(gamePlay);
  gameCtrl.start();
});
;// ./src/index.js




// TODO: write your code in app.js
/******/ })()
;