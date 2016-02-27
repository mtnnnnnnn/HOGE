import Image from './CanvasImage';
import ImageLoader from '../File/ImageLoader';

export default class ImageFactory {
  images: Image[] = [];
  loaders: ImageLoader[] = [];
  element: HTMLElement;

  constructor() {
    this.element = document.createElement("div");
  }


  create(url: string) {
    let image = new Image(this.images.length,url);
    this.images.push(image);

    //TODO 要素を接続
  }

  remove(index: number) {
    //TODO 削除処理を書く
    this.fetchElement();
  }

  fetchElement() {
  }


  removeAll() {
    for (let i = 0; i < this.element.childNodes.length; i++) {
      this.element.removeChild(this.element.childNodes[i]);
    }
  }



  static instance: ImageFactory;
  static getInstance(): ImageFactory {
    if (!this.instance) {
      this.instance = new ImageFactory();
    }
    return this.instance;
  }
}
