"use strict";
var History = (function () {
    function History() {
        this.pageMoveHandler = function (event) {
            event = event || window.event;
            return event.returnValue = '入力中のページから移動しますか？';
        };
        window.addEventListener("beforeunload", this.pageMoveHandler);
    }
    return History;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = History;
