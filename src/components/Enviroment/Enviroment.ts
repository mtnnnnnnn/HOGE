import History from './History';

export default class Enviroment {
  static UPLOAD_SERVER = "http://localhost:3000/upload";

  history:History = null;

  constructor(){
    this.history = new History();
  }
}
