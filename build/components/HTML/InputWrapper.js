"use strict";
var InputWrapper = (function () {
    function InputWrapper() {
    }
    InputWrapper.createButton = function (value) {
        var element = document.createElement("input");
        element.type = "button";
        element.value = value;
        return element;
    };
    InputWrapper.createRadioButton = function (value, name) {
        var label = document.createElement("label");
        label.innerHTML = value;
        var element = document.createElement("input");
        element.type = "radio";
        element.name = name;
        element.value = value;
        label.appendChild(element);
        return label;
    };
    return InputWrapper;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InputWrapper;
