'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var nodemon = require('gulp-nodemon');
var marko = require('gulp-marko-compile');

gulp.task('marko', function() {
  gulp.src('./public/templates/*.marko')
    .pipe(marko({preserveWhitespace: true}).on('error', function(){
			console.log("Marko compilation failed.");
		}))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', function () {
  return gulp.src('./public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/scss/*.scss', ['sass']);
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: 'app.js'
		, ignore: ['*.marko.js']
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('default', ['marko', 'sass', 'nodemon', 'sass:watch'], function () {
});
