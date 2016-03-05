"use strict";
var History_1 = require('./History');
var Enviroment = (function () {
    function Enviroment() {
        this.history = null;
        this.history = new History_1.default();
    }
    Enviroment.UPLOAD_SERVER = "http://localhost:3000/upload";
    return Enviroment;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Enviroment;
