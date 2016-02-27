"use strict";
var CanvasImage = (function () {
    function CanvasImage(index, url) {
        this.element = null;
        this.image = null;
        this.list = null;
        this.canvas = null;
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
        this.canvas.id = "Image-" + index;
        this.canvas.className = "Canvas";
        this.createCanvas(url);
        //親要素にコンポーネントを追加
        this.element.appendChild(thumnail);
        this.element.appendChild(this.canvas);
        document.getElementById("contents").appendChild(this.element);
        document.getElementById("List").appendChild(this.list);
        $("#Tabs").tabs("refresh");
    }
    CanvasImage.prototype.createCanvas = function (url) {
        var context = this.canvas.getContext('2d');
        var image = new Image();
        image.src = url;
        image.onload = function () {
            context.drawImage(image, 0, 0);
        };
    };
    return CanvasImage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CanvasImage;
