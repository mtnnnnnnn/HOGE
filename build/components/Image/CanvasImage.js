"use strict";
var Setting_1 = require('../Setting/Setting');
var CanvasImage = (function () {
    function CanvasImage(index, url) {
        var _this = this;
        this.name = null;
        this.element = null;
        this.image = null;
        this.list = null;
        this.canvas = null;
        this.canvasWrapper = null;
        this.context = null;
        this.settings = null;
        this.index = index;
        this.url = url;
        this.name = "File" + index;
        //親エレメント
        this.element = document.createElement("div");
        this.element.id = "Tabs-" + index;
        //リストビューを作成
        this.createListView(index, url);
        //設定画面
        this.settings = new Setting_1.default(this.index, url);
        this.settings.addListener("onLoadImage", function (data) {
            if (data) {
                _this.url = data;
            }
            _this.reloadCanvas();
        });
        this.settings.addListener("onChangeSize", function (width, height) {
            console.log("[☆]onChangeSize", width, height);
            _this.setCanvasSize(width, height);
        });
        //Canvasを作成
        this.canvasWrapper = document.createElement("div");
        this.canvasWrapper.className = "Canvas";
        this.canvas = document.createElement('canvas');
        this.canvas.id = "Canvas-" + index;
        this.createCanvas();
        this.canvasWrapper.appendChild(this.canvas);
        //親要素にコンポーネントを追加
        this.element.appendChild(this.canvasWrapper);
        this.element.appendChild(this.settings.getElement());
        document.getElementById("contents").appendChild(this.element);
        document.getElementById("List").appendChild(this.list);
        $("#Tabs").tabs("refresh");
    }
    //キャンバス要素
    CanvasImage.prototype.createCanvas = function () {
        var _this = this;
        this.context = this.canvas.getContext('2d');
        this.image = new Image();
        this.image.src = this.url;
        this.image.onload = function () {
            var width = _this.image.width, height = _this.image.height;
            _this.settings.setDefaultSize(_this.image.width, _this.image.height);
            _this.setCanvasSize(width, height);
            _this.context.drawImage(_this.image, 0, 0, width, height);
        };
    };
    //キャンバス要素
    CanvasImage.prototype.reloadCanvas = function () {
        var _this = this;
        this.context = this.canvas.getContext('2d');
        this.image = new Image();
        this.image.src = this.url;
        this.image.onload = function () {
            var width = _this.image.width, height = _this.image.height;
            _this.setCanvasSize(width, height);
            _this.context.drawImage(_this.image, 0, 0, width, height);
        };
    };
    CanvasImage.prototype.setCanvasSize = function (width, height) {
        console.log("setCanvasSize", width, height, this.settings.scale);
        this.canvas.width = width;
        this.canvas.height = height;
        this.context.scale(width / this.canvas.width, height / this.canvas.height);
        this.context.drawImage(this.image, 0, 0, width, height);
    };
    //リストビューに追加
    CanvasImage.prototype.createListView = function (index, url) {
        this.list = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.innerHTML = "File " + index;
        anchor.href = "#Tabs-" + index;
        this.list.onclick = function () {
            anchor.click();
        };
        this.list.appendChild(anchor);
        //サムネイル
        var image = document.createElement("img");
        image.src = url;
        var thumnail = document.createElement("div");
        thumnail.className = "Thumnail";
        thumnail.appendChild(image);
        thumnail.className = "original";
        this.list.appendChild(thumnail);
    };
    return CanvasImage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CanvasImage;
