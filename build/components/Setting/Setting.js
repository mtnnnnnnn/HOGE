"use strict";
var InputWrapper_1 = require('../HTML/InputWrapper');
var FileUploader_1 = require('../File/FileUploader');
var Setting = (function () {
    function Setting(index, url) {
        this.index = index;
        this.url = url;
        this.element = null;
        this.button = null;
        this.createElement();
    }
    Setting.prototype.createElement = function () {
        var _this = this;
        this.element = document.createElement('div');
        this.element.className = 'Setting';
        this.button = InputWrapper_1.default.createButton("更新");
        this.button.className = "ReloadButton";
        this.button.onclick = function () {
            var uploader = new FileUploader_1.default(_this.index);
            uploader.upload(_this.url).then(function (data) {
                console.log("Uploaded", data);
                if (_this.callback) {
                    _this.callback(data);
                }
            });
        };
        this.element.appendChild(this.button);
    };
    Setting.prototype.setEvent = function (callback) {
        this.callback = callback;
    };
    Setting.prototype.getElement = function () {
        console.log("getElement");
        return this.element;
    };
    return Setting;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Setting;
