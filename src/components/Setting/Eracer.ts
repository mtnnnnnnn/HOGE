import BaseEditer from './BaseEditer';
export default class Eracer extends BaseEditer {
  isMouseDown: boolean = false;
  context: CanvasRenderingContext2D = null;
  offset: number = 5;
  startX: number = null;
  startY: number = null;

  constructor(public index: number) {
    super(index);
  }

  setHandler() {
    this.canvas = document.getElementById("Canvas-" + this.index) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
    this.canvas.addEventListener("mousedown", this.onDown, false);
    this.canvas.addEventListener("mouseup", this.onUp, false);
    this.canvas.addEventListener("mouseout", this.onUp, false);
    this.canvas.addEventListener("mousemove", this.onMove, false);
  }

  onDown = (e: MouseEvent) => {
    this.isMouseDown = true;
    this.startX = e.pageX - $(this.canvas).offset().left - this.offset;
    this.startY = e.pageY - $(this.canvas).offset().top - this.offset;
    this.context.beginPath();
  }

  onUp = (e: MouseEvent) => {
    this.isMouseDown = false;
    this.context.closePath();
  }

  onMove = (e: MouseEvent) => {
    if (this.isMouseDown) {
      var endX = e.pageX - $(this.canvas).offset().left - this.offset;
      var endY = e.pageY - $(this.canvas).offset().top - this.offset;
      this.context.lineWidth = 10;
      this.context.strokeStyle = 'rgb(255,255,255)';
      this.context.lineCap="round";
      this.context.moveTo(this.startX, this.startY);
      this.context.lineTo(endX, endY);
      this.context.stroke();
      this.startX = endX;
      this.startY = endY;
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
