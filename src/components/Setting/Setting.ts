import InputWrapper from '../HTML/InputWrapper';
import FileUploader from '../File/FileUploader';
import {EventEmitter} from 'events';
import {ConvertSetting} from '../File/ConvertSetting';


export default class Setting extends EventEmitter {
  element: HTMLElement = null;
  reload: HTMLElement = null;
  size: HTMLInputElement = null;
  callback: (data: any) => void;

  width: number = null;
  height: number = null;
  isAlpha: boolean = false;

  constructor(public index: number, public url: string) {
    super();
    this.createElement();
  }

  setDefaultSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.reloadCanvasSize(width, height);
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'Setting';

    //リロードボタン
    this.createReloadButton();

    //サイズ
    this.createCanvasSize();

    //透過のOn/Off
    this.createAlphaButton();

    //解像度
    this.createSizeSelecter();

  }

  createAlphaButton() {
    let isAlpha = document.createElement("div");

    let label: HTMLLabelElement = document.createElement("label");
    label.innerText = "透過させるかどうか";

    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = (e: any) => {
      this.isAlpha = e.target.checked;
    };

    isAlpha.appendChild(label);
    isAlpha.appendChild(checkbox);
    this.element.appendChild(isAlpha);
  }


  createCanvasSize() {
    let width = document.createElement('input');
    width.type = "number";
    width.className = "Canvas-Width";
    width.id = "Canvas-Width-" + this.index;

    let height = document.createElement('input');
    height.type = "number";
    height.className = "Canvas-Height";
    height.id = "Canvas-Height-" + this.index;

    width.onchange = () => {
      this.emit("onChangeSize", parseFloat(width.value), parseFloat(height.value));
    };
    height.onchange = () => {
      this.emit("onChangeSize", parseFloat(width.value), parseFloat(height.value));
    };

    this.addListener("onChangeSize", (width: number, height: number) => {
      this.reloadCanvasSize(width, height);
    });

    let size = document.createElement("div");
    size.className = "Canvas-Size";
    size.appendChild(width);
    size.appendChild(height);
    this.element.appendChild(size);
  }
  reloadCanvasSize(width: number, height: number) {
    let _width = document.getElementById("Canvas-Width-" + this.index) as HTMLInputElement;
    _width.value = Math.floor(width).toString();
    let _height = document.getElementById("Canvas-Height-" + this.index) as HTMLInputElement;
    _height.value = Math.floor(height).toString();
  }

  createSizeSelecter() {
    this.size = document.createElement("input");
    this.size.type = "range";
    this.size.min = "0";
    this.size.max = "1.5"
    this.size.step = "0.01";

    this.size.addEventListener("change", () => {
      this.emit("onChangeSize", parseFloat(this.size.value) * this.width, parseFloat(this.size.value) * this.height);//TODO 設定値を4:3などいろいろと対応させる
    });
    this.element.appendChild(this.size);
  }



  createReloadButton() {
    this.reload = InputWrapper.createButton("更新");
    this.reload.className = "btn"
    this.reload.onclick = () => {
      console.log("イメージを更新します");
      let uploader = new FileUploader(this.index);
      let canvas = document.getElementById("Canvas-" + this.index) as HTMLCanvasElement;
      let data = canvas.toDataURL();
      // let isAlpha =

      let setting: ConvertSetting = {
        img: data,
        isAlpha: this.isAlpha
      }
      console.log("画像を変換します",setting);

      uploader.upload(setting).then((data) => {
        console.log("Uploaded", data);
        this.emit("onLoadImage", data);
      });
    };
    this.element.appendChild(this.reload);
  }


  getElement(): HTMLElement {
    return this.element;
  }
}


interface Size {
  width: number;
  height: number;
}
