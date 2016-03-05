"use strict";
var InputWrapper_1 = require('../HTML/InputWrapper');
var ImageFactory_1 = require('../Image/ImageFactory');
var JSZip = require('jszip');
var FileSaver = (function () {
    function FileSaver() {
        this.button = null;
        console.log("FileSaver");
        this.button = InputWrapper_1.default.createButton("保存");
        this.button.className = "btn";
        document.getElementById("Save").appendChild(this.button);
        this.button.onclick = function () {
            var zip = new JSZip();
            var images = ImageFactory_1.default.getInstance().getAllImage();
            images.map(function (image) {
                var _image = new Image();
                _image.src = image.canvas.toDataURL();
                zip.file(image.name + ".png", _image.src.substr(_image.src.indexOf(',') + 1), { base64: true });
            });
            var content = zip.generate({ type: "blob" });
            saveAs(content, "images.zip");
        };
    }
    return FileSaver;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileSaver;
