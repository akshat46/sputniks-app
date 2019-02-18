'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['nodemon'], function () {
});


gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'main.js'
		, ignore: ['*.marko.js']
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});
