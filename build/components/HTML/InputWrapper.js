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
    return InputWrapper;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InputWrapper;
