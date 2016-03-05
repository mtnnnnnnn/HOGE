

export default class ImageLoader {
  file: HTMLInputElement;

  constructor() {
    this.file = document.createElement("input");
    this.file.type = "file";
  }

  load() {
    return new Promise((resolve, reject) => {
      this.file.click();

      this.file.onchange = (e: any) => {
        var files: FileList = e.target.files;
        console.log("files", files);

        let images: string[] = [];

        let promise = Promise.resolve({});

        promise = promise.then(() => {
          return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
              images.push(reader.result);
              return resolve({});
            };
            reader.readAsDataURL(files.item(0));
          });
        });

        promise.then(() => {
          console.log("読み込み完了", images);
          resolve(images);
        }).catch((e) => {
          console.log("エラー", e);
          reject(images);
        });
      };
    });
  }


}
