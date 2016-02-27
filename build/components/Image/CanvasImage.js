"use strict";
var Setting_1 = require('../Setting/Setting');
var CanvasImage = (function () {
    function CanvasImage(index, url) {
        var _this = this;
        this.element = null;
        this.image = null;
        this.list = null;
        this.canvas = null;
        this.settings = null;
        this.index = index;
        //親エレメント
        this.element = document.createElement("div");
        this.element.id = "Tabs-" + index;
        //リストビュー
        this.list = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.innerHTML = "File " + index;
        anchor.href = "#Tabs-" + index;
        this.list.appendChild(anchor);
        //オリジナル画像
        var image = document.createElement("img");
        image.src = url;
        var thumnail = document.createElement("div");
        thumnail.appendChild(image);
        thumnail.className = "original";
        //Canvasにコピー
        this.canvas = document.createElement('canvas');
        this.canvas.id = "Canvas-" + index;
        this.createCanvas(url);
        var canvas = document.createElement("div");
        canvas.className = "Canvas";
        canvas.appendChild(this.canvas);
        //設定画面
        this.settings = new Setting_1.default(this.index, url);
        this.settings.setEvent(function (data) {
            //TODO 返ってきた画像を貼り付け
            _this.createCanvas(data);
        });
        //親要素にコンポーネントを追加
        this.element.appendChild(thumnail);
        this.element.appendChild(canvas);
        this.element.appendChild(this.settings.getElement());
        document.getElementById("contents").appendChild(this.element);
        document.getElementById("List").appendChild(this.list);
        $("#Tabs").tabs("refresh");
    }
    CanvasImage.prototype.createCanvas = function (url) {
        var _this = this;
        var context = this.canvas.getContext('2d');
        var image = new Image();
        image.src = url;
        image.onload = function () {
            var width = image.width, height = image.height, xRatio = 1, yRatio = 1;
            // if (image.width > 400) { xRatio = 400 / width; }
            // if (image.height > 600) { yRatio = 600 / height; }
            _this.canvas.width = width;
            _this.canvas.height = height;
            context.drawImage(image, 0, 0);
            //context.scale(xRatio, yRatio);
        };
    };
    return CanvasImage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CanvasImage;
