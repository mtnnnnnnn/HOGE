"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InputWrapper_1 = require('../HTML/InputWrapper');
var FileUploader_1 = require('../File/FileUploader');
var events_1 = require('events');
var Setting = (function (_super) {
    __extends(Setting, _super);
    function Setting(index, url) {
        _super.call(this);
        this.index = index;
        this.url = url;
        this.element = null;
        this.reload = null;
        this.size = null;
        this.width = null;
        this.height = null;
        this.isAlpha = false;
        this.createElement();
    }
    Setting.prototype.setDefaultSize = function (width, height) {
        this.width = width;
        this.height = height;
        this.reloadCanvasSize(width, height);
    };
    Setting.prototype.createElement = function () {
        this.element = document.createElement('div');
        this.element.className = 'Setting';
        //リロードボタン
        this.createReloadButton();
        //サイズ
        this.createCanvasSize();
        //透過のOn/Off
        this.createAlphaButton();
        //解像度
        this.createSizeSelecter();
    };
    Setting.prototype.createAlphaButton = function () {
        var _this = this;
        var isAlpha = document.createElement("div");
        var label = document.createElement("label");
        label.innerText = "透過させるかどうか";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function (e) {
            _this.isAlpha = e.target.checked;
        };
        isAlpha.appendChild(label);
        isAlpha.appendChild(checkbox);
        this.element.appendChild(isAlpha);
    };
    Setting.prototype.createCanvasSize = function () {
        var _this = this;
        var width = document.createElement('input');
        width.type = "number";
        width.className = "Canvas-Width";
        width.id = "Canvas-Width-" + this.index;
        var height = document.createElement('input');
        height.type = "number";
        height.className = "Canvas-Height";
        height.id = "Canvas-Height-" + this.index;
        width.onchange = function () {
            _this.emit("onChangeSize", parseFloat(width.value), parseFloat(height.value));
        };
        height.onchange = function () {
            _this.emit("onChangeSize", parseFloat(width.value), parseFloat(height.value));
        };
        this.addListener("onChangeSize", function (width, height) {
            _this.reloadCanvasSize(width, height);
        });
        var size = document.createElement("div");
        size.className = "Canvas-Size";
        size.appendChild(width);
        size.appendChild(height);
        this.element.appendChild(size);
    };
    Setting.prototype.reloadCanvasSize = function (width, height) {
        var _width = document.getElementById("Canvas-Width-" + this.index);
        _width.value = Math.floor(width).toString();
        var _height = document.getElementById("Canvas-Height-" + this.index);
        _height.value = Math.floor(height).toString();
    };
    Setting.prototype.createSizeSelecter = function () {
        var _this = this;
        this.size = document.createElement("input");
        this.size.type = "range";
        this.size.min = "0";
        this.size.max = "1.5";
        this.size.step = "0.01";
        this.size.addEventListener("change", function () {
            _this.emit("onChangeSize", parseFloat(_this.size.value) * _this.width, parseFloat(_this.size.value) * _this.height); //TODO 設定値を4:3などいろいろと対応させる
        });
        this.element.appendChild(this.size);
    };
    Setting.prototype.createReloadButton = function () {
        var _this = this;
        this.reload = InputWrapper_1.default.createButton("更新");
        this.reload.className = "btn";
        this.reload.onclick = function () {
            console.log("イメージを更新します");
            var uploader = new FileUploader_1.default(_this.index);
            var canvas = document.getElementById("Canvas-" + _this.index);
            var data = canvas.toDataURL();
            // let isAlpha =
            var setting = {
                img: data,
                isAlpha: _this.isAlpha
            };
            console.log("画像を変換します", setting);
            uploader.upload(setting).then(function (data) {
                console.log("Uploaded", data);
                _this.emit("onLoadImage", data);
            });
        };
        this.element.appendChild(this.reload);
    };
    Setting.prototype.getElement = function () {
        return this.element;
    };
    return Setting;
}(events_1.EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Setting;
