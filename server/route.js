var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var exec = require('child_process').exec;

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  console.log("トップページ");
  res.sendfile('./public/index.html');
});

router.post('/upload',function(req,res){
  var base64Data = req.body.img.replace(/^data:image\/(jpeg|png|jpg);base64,/, "");
  var fileName = uuid()+checkExt(req.body.img);
  var path = "./public/storage/original/"+fileName;

  res.header('Access-Control-Allow-Origin', '*');
  console.log("[Upload]ファイルを受け取りました.");

  fs.writeFile(path,base64Data,'base64',function(err){
    if(err){ res.send(503,"書き込みエラー"); }

    var outPath = "./public/storage/converted/"+fileName+".png";
    var dir = "/storage/converted/"+fileName+".png";
    var command = 'python ./converter/white.py ' + path + " " + outPath+" "+req.body;

    exec(command, function(err, stdout, stderr){
      if (err){
        console.log("error",err);
        res.send(503,"書き込みエラー");
      }
      console.log('finished',stdout,stderr);
      res.send(200,JSON.stringify({path:dir}));
    });
  });
});


function checkExt(url){
  if(url.indexOf("jpeg")>0||url.indexOf("jpg")>0){
    return ".jpg";
  }else if(url.indexOf("png")>0){
    return ".png";
  }
}


function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}


module.exports = router;
