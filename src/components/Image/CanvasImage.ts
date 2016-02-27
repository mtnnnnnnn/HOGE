import Setting from '../Setting/Setting';

export default class CanvasImage {
  index: number;
  element: HTMLElement = null;
  image: HTMLImageElement = null;
  list: HTMLElement = null;
  canvas: HTMLCanvasElement = null;
  settings:Setting = null;

  constructor(index: number, url: string) {
    this.index = index;

    //親エレメント
    this.element = document.createElement("div");
    this.element.id = "Tabs-" + index;

    //リストビュー
    this.list = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.innerHTML = "File " + index;
    anchor.href = "#Tabs-" + index;
    this.list.appendChild(anchor);

    //オリジナル画像
    var image = document.createElement("img");
    image.src = url;
    let thumnail = document.createElement("div");
    thumnail.appendChild(image);
    thumnail.className = "original";

    //Canvasにコピー
    this.canvas = document.createElement('canvas');
    this.canvas.id = "Canvas-" + index;
    this.createCanvas(url);
    let canvas = document.createElement("div");
    canvas.className = "Canvas";
    canvas.appendChild(this.canvas);

    //設定画面
    this.settings = new Setting(this.index,url);
    this.settings.setEvent((data:string)=>{
      //TODO 返ってきた画像を貼り付け
      this.createCanvas(data);
    });


    //親要素にコンポーネントを追加
    this.element.appendChild(thumnail);
    this.element.appendChild(canvas);
    this.element.appendChild(this.settings.getElement());

    document.getElementById("contents").appendChild(this.element);
    document.getElementById("List").appendChild(this.list);

    $("#Tabs").tabs("refresh");
  }

  createCanvas(url: string) {
    let context = this.canvas.getContext('2d');
    let image = new Image();

    image.src = url;
    image.onload = () => {
      let width = image.width, height = image.height, xRatio = 1, yRatio = 1;
      // if (image.width > 400) { xRatio = 400 / width; }
      // if (image.height > 600) { yRatio = 600 / height; }
      this.canvas.width = width;
      this.canvas.height = height;
      context.drawImage(image, 0, 0);
      //context.scale(xRatio, yRatio);
    };
  }

}
