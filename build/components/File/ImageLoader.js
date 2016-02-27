"use strict";
var ImageLoader = (function () {
    function ImageLoader() {
        this.file = document.createElement("input");
        this.file.type = "file";
    }
    ImageLoader.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.click();
            _this.file.onchange = function (e) {
                console.log("load");
                var files = e.target.files;
                console.log("files", files);
                var images = [];
                var promise = Promise.resolve({});
                promise = promise.then(function () {
                    return new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onload = function () {
                            images.push(reader.result);
                            return resolve({});
                        };
                        reader.readAsDataURL(files.item(0));
                    });
                });
                promise.then(function () {
                    console.log("読み込み完了", images);
                    resolve(images);
                }).catch(function (e) {
                    console.log("エラー", e);
                    reject(images);
                });
            };
        });
    };
    return ImageLoader;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageLoader;
