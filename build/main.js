'use strict';
/// <reference path="../typings/tsd.d.ts"/>
var ImageLoader_1 = require('./components/File/ImageLoader');
var ImageFactory_1 = require('./components/Image/ImageFactory');
var Enviroment_1 = require('./components/Enviroment/Enviroment');
var FileSaver_1 = require('./components/File/FileSaver');
window.onload = function () {
    var imageLoader = new ImageLoader_1.default();
    var enviroment = new Enviroment_1.default();
    var saver = new FileSaver_1.default();
    $('#plus').click(function () {
        imageLoader.load().then(function (images) {
            //TODO　複数ファイル対応
            ImageFactory_1.default.getInstance().create(images[0]);
        }).catch(function (e) {
            console.log("Load Error.", e);
            alert("画像をロードすることができませんでした");
        });
    });
    $("#Tabs")
        .tabs()
        .addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#Tabs li")
        .removeClass("ui-corner-top")
        .addClass("ui-corner-left");
};
