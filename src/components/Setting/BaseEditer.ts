abstract class BaseEditer {
  canvas: HTMLCanvasElement = null;
  index:number = null;
  constructor(index: number) {
    this.index = index;
  }

  abstract setHandler(): void;
  abstract removeHandler(): void;
}

export default BaseEditer;
