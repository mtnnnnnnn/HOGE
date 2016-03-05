"use strict";
var CanvasImage_1 = require('./CanvasImage');
var ImageFactory = (function () {
    function ImageFactory() {
        this.images = [];
        this.loaders = [];
        this.element = document.createElement("div");
    }
    ImageFactory.prototype.create = function (url) {
        var image = new CanvasImage_1.default(this.images.length, url);
        this.images.push(image);
        //TODO 要素を接続
    };
    ImageFactory.prototype.remove = function (index) {
        //TODO 削除処理を書く
        this.fetchElement();
    };
    ImageFactory.prototype.fetchElement = function () {
    };
    ImageFactory.prototype.getAllImage = function () {
        return this.images;
    };
    ImageFactory.prototype.removeAll = function () {
        for (var i = 0; i < this.element.childNodes.length; i++) {
            this.element.removeChild(this.element.childNodes[i]);
        }
    };
    ImageFactory.getInstance = function () {
        if (!this.instance) {
            this.instance = new ImageFactory();
        }
        return this.instance;
    };
    return ImageFactory;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageFactory;
