'use strict'
/// <reference path="../typings/tsd.d.ts"/>

import ImageLoader from './components/File/ImageLoader';
import ImageFactory from './components/Image/ImageFactory';

window.onload = function() {
  let imageLoader = new ImageLoader();


  $('#plus').click(() => {
    imageLoader.load().then((images: string[]) => {
      //TODO　複数ファイル対応
      ImageFactory.getInstance().create(images[0]);
    }).catch((e) => {
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
}
