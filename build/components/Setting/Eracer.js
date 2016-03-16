"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseEditer_1 = require('./BaseEditer');
var Eracer = (function (_super) {
    __extends(Eracer, _super);
    function Eracer(index) {
        var _this = this;
        _super.call(this, index);
        this.index = index;
        this.isMouseDown = false;
        this.context = null;
        this.offset = 5;
        this.startX = null;
        this.startY = null;
        this.onDown = function (e) {
            _this.isMouseDown = true;
            _this.startX = e.pageX - $(_this.canvas).offset().left - _this.offset;
            _this.startY = e.pageY - $(_this.canvas).offset().top - _this.offset;
            _this.context.beginPath();
        };
        this.onUp = function (e) {
            _this.isMouseDown = false;
            _this.context.closePath();
        };
        this.onMove = function (e) {
            if (_this.isMouseDown) {
                var endX = e.pageX - $(_this.canvas).offset().left - _this.offset;
                var endY = e.pageY - $(_this.canvas).offset().top - _this.offset;
                _this.context.lineWidth = 10;
                _this.context.strokeStyle = 'rgb(255,255,255)';
                _this.context.lineCap = "round";
                _this.context.moveTo(_this.startX, _this.startY);
                _this.context.lineTo(endX, endY);
                _this.context.stroke();
                _this.startX = endX;
                _this.startY = endY;
            }
        };
    }
    Eracer.prototype.setHandler = function () {
        this.canvas = document.getElementById("Canvas-" + this.index);
        this.context = this.canvas.getContext('2d');
        this.canvas.addEventListener("mousedown", this.onDown, false);
        this.canvas.addEventListener("mouseup", this.onUp, false);
        this.canvas.addEventListener("mouseout", this.onUp, false);
        this.canvas.addEventListener("mousemove", this.onMove, false);
    };
    Eracer.prototype.removeHandler = function () {
        console.log("removeHandler");
        this.canvas = document.getElementById("Canvas-" + this.index);
        this.canvas.removeEventListener("mousedown", this.onDown, false);
        this.canvas.removeEventListener("mouseup", this.onUp, false);
        this.canvas.removeEventListener("mousemove", this.onUp, false);
        this.canvas.removeEventListener("mouseout", this.onUp, false);
    };
    return Eracer;
}(BaseEditer_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Eracer;
