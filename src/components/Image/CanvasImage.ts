import Setting from '../Setting/Setting';

export default class CanvasImage {
  index: number;
  name: string = null;
  url: string;
  element: HTMLElement = null;
  image: HTMLImageElement = null;
  list: HTMLElement = null;
  canvas: HTMLCanvasElement = null;
  canvasWrapper: HTMLElement = null;
  context: CanvasRenderingContext2D = null;
  settings: Setting = null;

  constructor(index: number, url: string) {
    this.index = index;
    this.url = url;
    this.name = "File" + index;

    //親エレメント
    this.element = document.createElement("div");
    this.element.id = "Tabs-" + index;

    //リストビューを作成
    this.createListView(index, url);

    //設定画面
    this.settings = new Setting(this.index, url);
    this.settings.addListener("onLoadImage", (data: string) => {
      if (data) {
        this.url = data;
      }
      this.reloadCanvas();
    });
    this.settings.addListener("onChangeSize", (width: number, height: number) => {
      console.log("[☆]onChangeSize", width, height);
      this.setCanvasSize(width, height);
    });

    //Canvasを作成
    this.canvasWrapper = document.createElement("div");
    this.canvasWrapper.className = "Canvas";
    this.canvas = document.createElement('canvas');
    this.canvas.id = "Canvas-" + index;
    this.createCanvas();
    this.canvasWrapper.appendChild(this.canvas);



    //親要素にコンポーネントを追加
    this.element.appendChild(this.canvasWrapper);
    this.element.appendChild(this.settings.getElement());

    document.getElementById("contents").appendChild(this.element);
    document.getElementById("List").appendChild(this.list);

    $("#Tabs").tabs("refresh");
  }

  //キャンバス要素
  createCanvas() {
    this.context = this.canvas.getContext('2d');
    this.image = new Image();

    this.image.src = this.url;
    this.image.onload = () => {
      let width = this.image.width, height = this.image.height;
      this.settings.setDefaultSize(this.image.width, this.image.height);
      this.setCanvasSize(width, height);
      this.context.drawImage(this.image, 0, 0, width, height);
    };
  }

  //キャンバス要素
  reloadCanvas() {
    this.context = this.canvas.getContext('2d');
    this.image = new Image();

    this.image.src = this.url;
    this.image.onload = () => {
      let width = this.image.width, height = this.image.height;
      this.setCanvasSize(width, height);
      this.context.drawImage(this.image, 0, 0, width, height);
    };
  }

  setCanvasSize(width: number, height: number) {
    console.log("setCanvasSize", width, height, this.settings.scale);
    this.canvas.width = width;
    this.canvas.height = height;
    this.context.scale(width / this.canvas.width, height / this.canvas.height);
    this.context.drawImage(this.image, 0, 0, width, height);
  }

  //リストビューに追加
  createListView(index: number, url: string) {
    this.list = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.innerHTML = "File " + index;
    anchor.href = "#Tabs-" + index;
    this.list.onclick = () => {
      anchor.click();
    };
    this.list.appendChild(anchor);

    //サムネイル
    var image = document.createElement("img");
    image.src = url;
    let thumnail = document.createElement("div");
    thumnail.className = "Thumnail";
    thumnail.appendChild(image);
    thumnail.className = "original";
    this.list.appendChild(thumnail);
  }
}
