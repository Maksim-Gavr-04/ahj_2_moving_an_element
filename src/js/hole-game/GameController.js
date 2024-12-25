export default class GameController {
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