export default class InputWrapper {
  static createButton(value: string): HTMLInputElement {
    let element = document.createElement("input");
    element.type = "button";
    element.value = value;
    return element;
  }

  static createRadioButton(value:string,name:string){
    let label = document.createElement("label");
    label.innerHTML = value;
    let element = document.createElement("input");
    element.type = "radio";
    element.name = name;
    element.value = value;
    label.appendChild(element);
    return label;
  }
}
