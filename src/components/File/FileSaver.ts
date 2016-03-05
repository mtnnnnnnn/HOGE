import InputWrapper from '../HTML/InputWrapper';
import ImageFactory from '../Image/ImageFactory';
import * as  JSZip from 'jszip';

export default class FileSaver {
  button: HTMLInputElement = null;
  constructor() {
    console.log("FileSaver");
    this.button = InputWrapper.createButton("保存");
    this.button.className = "btn";
    document.getElementById("Save").appendChild(this.button);

    this.button.onclick = () => {
      let zip = new JSZip();
      let images = ImageFactory.getInstance().getAllImage();

      images.map((image) => {
        let _image = new Image();
        _image.src = image.canvas.toDataURL();
        zip.file(image.name + ".png", _image.src.substr(_image.src.indexOf(',') + 1), { base64: true });
      });
      var content: Blob = zip.generate({ type: "blob" });
      saveAs(content, "images.zip");
    };
  }
}
