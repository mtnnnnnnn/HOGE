"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseEditer_1 = require('./BaseEditer');
var Mover = (function (_super) {
    __extends(Mover, _super);
    function Mover(index) {
        var _this = this;
        _super.call(this, index);
        this.index = index;
        this.isMouseDown = false;
        this.clickX = 0;
        this.clickY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.onDown = function (e) {
            _this.isMouseDown = true;
            _this.clickX = e.clientX;
            _this.clickY = e.clientY;
            _this.currentX = Number(_this.canvas.style.left.split("px")[0]);
            _this.currentY = Number(_this.canvas.style.top.split("px")[0]);
        };
        this.onUp = function (e) {
            _this.isMouseDown = false;
            _this.clickX = 0;
            _this.clickY = 0;
        };
        this.onMove = function (e) {
            if (_this.isMouseDown) {
                _this.canvas.style.left = (e.clientX - _this.clickX + _this.currentX) + "px";
                _this.canvas.style.top = (e.clientY - _this.clickY + _this.currentY) + "px";
            }
        };
    }
    Mover.prototype.setHandler = function () {
        this.canvas = document.getElementById("Canvas-" + this.index);
        this.canvas.addEventListener("mousedown", this.onDown, false);
        this.canvas.addEventListener("mouseup", this.onUp, false);
        this.canvas.addEventListener("mouseout", this.onUp, false);
        this.canvas.addEventListener("mousemove", this.onMove, false);
    };
    Mover.prototype.removeHandler = function () {
        console.log("removeHandler");
        this.canvas = document.getElementById("Canvas-" + this.index);
        this.canvas.removeEventListener("mousedown", this.onDown, false);
        this.canvas.removeEventListener("mouseup", this.onUp, false);
        this.canvas.removeEventListener("mousemove", this.onUp, false);
        this.canvas.removeEventListener("mouseout", this.onUp, false);
    };
    return Mover;
}(BaseEditer_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Mover;
