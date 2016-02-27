import InputWrapper from '../HTML/InputWrapper';
import FileUploader from '../File/FileUploader';

export default class Setting {
  element: HTMLElement = null;
  button: HTMLElement = null;
  callback: (data: any) => void;
  constructor(public index: number, public url: string) {
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.className = 'Setting';

    this.button = InputWrapper.createButton("更新");
    this.button.className = "ReloadButton"
    this.button.onclick = () => {
      let uploader = new FileUploader(this.index);
      uploader.upload(this.url).then((data) => {
        console.log("Uploaded",data);
        if (this.callback) {
          this.callback(data);
        }
      });
    };

    this.element.appendChild(this.button);
  }

  setEvent(callback: (data: any) => void) {
    this.callback = callback;
  }

  getElement(): HTMLElement {
    console.log("getElement");
    return this.element;
  }
}
