export default class GamePlay {
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

    this.holes = [ ...this.container.children ];
  }

  showGoblin() {
    const holes = [ ...this.holes ];

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