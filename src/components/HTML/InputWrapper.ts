export default class InputWrapper {
  static createButton(value: string): HTMLElement {
    let element = document.createElement("input");
    element.type = "button";
    element.value = value;
    return element;
  }


}
