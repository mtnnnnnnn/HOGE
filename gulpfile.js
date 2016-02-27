// @ gulpfile.js

var plumber = require('gulp-plumber');
var typescript = require('gulp-typescript');
var watch = require('gulp-watch');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create(),
reload = browserSync.reload,
nodemon = require('gulp-nodemon');

var tsProject = typescript.createProject('./tsconfig.json');
var appDir = 'build';
var tsFiles = ['./src/**/*.{ts}','!./typings'];
var target = ['./build/**/*.{js}'];
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

// gulp.task('ts:compile', function() {
//   return gulp.src(tsFiles)
//     .pipe(plumber())
//     .pipe(typescript(tsProject))
//     .pipe(gulp.dest(appDir));
// });


// gulp.task('compile',function(){
//   return runSequence("ts:compile");
// });

gulp.task('js', function(){
  console.log("コンパイル");
  return browserify('build/main.js')
    .bundle()
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("public"));
});

// Auto compile
gulp.task('watch', function() {
  watch(target, function() {
    runSequence('js','static');
  });
});

gulp.task("static",function(){
  return gulp.src("./src/**/*.{js,jpg,png,jpeg,wav,mp3,css,html}")
  .pipe(gulp.dest('public'));
});

// gulp.task('nodemon', function (cb) {
//
// 	var started = false;
//
// 	return nodemon({
// 		script: './bin/www'
// 	}).on('start', function () {
// 		// to avoid nodemon being started multiple times
// 		// thanks @matthisk
// 		if (!started) {
// 			cb();
// 			started = true;
// 		}
// 	});
// });


gulp.task("default",["watch","js","static"]);
