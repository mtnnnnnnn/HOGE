"use strict";
var Enviroment_1 = require('../Enviroment/Enviroment');
var FileUploader = (function () {
    function FileUploader(index) {
        this.index = index;
    }
    FileUploader.prototype.upload = function (url) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: 'POST',
                url: Enviroment_1.default.UPLOAD_SERVER,
                data: { img: url },
                dataType: "json",
            }).done(function (res) {
                console.log("Sucess", res);
                resolve(res.path);
            }).fail(function (e) {
                console.log("Error", e);
            });
        });
    };
    return FileUploader;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileUploader;
