import Enviroment from '../Enviroment/Enviroment';
import {ConvertSetting} from './ConvertSetting';

export default class FileUploader {

  constructor(public index: number) {

  }

  upload(setting:ConvertSetting) {
    return new Promise<string>((resolve, reject) => {
      $.ajax({
        type: 'POST',
        url: Enviroment.UPLOAD_SERVER,
        data: setting,
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
