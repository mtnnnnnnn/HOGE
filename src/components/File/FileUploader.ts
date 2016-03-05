import Enviroment from '../Enviroment/Enviroment';

export default class FileUploader {

  constructor(public index: number) {

  }

  upload(url: string) {
    return new Promise<string>((resolve, reject) => {
      $.ajax({
        type: 'POST',
        url: Enviroment.UPLOAD_SERVER,
        data: { img: url },
        dataType: "json",
      }).done((res) => {
        console.log("Sucess", res);
        resolve(res.path);
      }).fail((e) => {
        console.log("Error", e);
      });
    });
  }
}
