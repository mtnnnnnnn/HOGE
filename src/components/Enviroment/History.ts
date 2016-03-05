export default class History {
  constructor() {
    window.addEventListener("beforeunload", this.pageMoveHandler)
  }

  pageMoveHandler = (event: any) => {
    event = event || window.event;
    return event.returnValue = '入力中のページから移動しますか？';
  }

}
