import Eracer from './Eracer';
import Mover from './Mover';
import BaseEditer from './BaseEditer';

export default class Editer {
  canvas: HTMLCanvasElement = null;
  handler: BaseEditer = null;
  eracer: Eracer = null;
  mover: Mover = null;
  selecter:any = null;//TODO 作る
  constructor(index: number) {
    this.canvas = document.getElementById("Canvas-" + index) as HTMLCanvasElement;

    this.eracer = new Eracer(index);
    this.mover = new Mover(index);

  }






  changeEditer(mode: string) {
    if (this.handler) {
      this.removeHandler();
    }
    switch (mode) {
      case "MOVE":
        this.handler = this.mover;
        break;
      case "SELECT":
        this.handler = this.selecter;
        break;
      case "ERACE":
        this.handler = this.eracer;
        break;
    }
    this.handler.setHandler();
  }
  removeHandler() {
    this.handler.removeHandler();
  }
}

export enum EditerMode {
  MOVE, SELECT, ERACE
}
