import BaseEditer from './BaseEditer';

export default class Mover extends BaseEditer {
  isMouseDown: boolean = false;
  clickX:number = 0;
  clickY:number = 0;
  currentX:number = 0;
  currentY:number = 0;

  constructor(public index: number) {
    super(index);
  }

  setHandler() {
    this.canvas = document.getElementById("Canvas-" + this.index) as HTMLCanvasElement;
    this.canvas.addEventListener("mousedown", this.onDown, false);
    this.canvas.addEventListener("mouseup", this.onUp, false);
    this.canvas.addEventListener("mouseout", this.onUp, false);
    this.canvas.addEventListener("mousemove", this.onMove, false);
  }

  onDown = (e: MouseEvent) => {
    this.isMouseDown = true;
    this.clickX = e.clientX;
    this.clickY = e.clientY;
    this.currentX = Number(this.canvas.style.left.split("px")[0]);
    this.currentY = Number(this.canvas.style.top.split("px")[0]);
  }

  onUp = (e: MouseEvent) => {
    this.isMouseDown = false;
    this.clickX = 0;
    this.clickY = 0;
  }

  onMove = (e: MouseEvent) => {
    if (this.isMouseDown) {
      this.canvas.style.left = (e.clientX - this.clickX + this.currentX) + "px";
      this.canvas.style.top = (e.clientY - this.clickY + this.currentY) + "px";
    }
  }

  removeHandler() {
    console.log("removeHandler");
    this.canvas = document.getElementById("Canvas-" + this.index) as HTMLCanvasElement;
    this.canvas.removeEventListener("mousedown", this.onDown, false);
    this.canvas.removeEventListener("mouseup", this.onUp, false);
    this.canvas.removeEventListener("mousemove", this.onUp, false);
    this.canvas.removeEventListener("mouseout", this.onUp, false);
  }
}
