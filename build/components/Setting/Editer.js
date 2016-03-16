"use strict";
var Eracer_1 = require('./Eracer');
var Mover_1 = require('./Mover');
var Editer = (function () {
    function Editer(index) {
        this.canvas = null;
        this.handler = null;
        this.eracer = null;
        this.mover = null;
        this.selecter = null; //TODO 作る
        this.canvas = document.getElementById("Canvas-" + index);
        this.eracer = new Eracer_1.default(index);
        this.mover = new Mover_1.default(index);
    }
    Editer.prototype.changeEditer = function (mode) {
        if (this.handler) {
            this.removeHandler();
        }
        switch (mode) {
            case "MOVE":
                this.handler = this.mover;
                break;
            case "SELECT":
                this.handler = this.selecter;
                break;
            case "ERACE":
                this.handler = this.eracer;
                break;
        }
        this.handler.setHandler();
    };
    Editer.prototype.removeHandler = function () {
        this.handler.removeHandler();
    };
    return Editer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Editer;
(function (EditerMode) {
    EditerMode[EditerMode["MOVE"] = 0] = "MOVE";
    EditerMode[EditerMode["SELECT"] = 1] = "SELECT";
    EditerMode[EditerMode["ERACE"] = 2] = "ERACE";
})(exports.EditerMode || (exports.EditerMode = {}));
var EditerMode = exports.EditerMode;
