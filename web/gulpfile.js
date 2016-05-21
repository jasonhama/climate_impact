
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('connect', function() {
	connect.server({
		root: 'static',
		port: 80
	});
})

gulp.task('browserify', function() {
    // Grab the app.js file
    return browserify('./app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
	.pipe(source('main.js'))
	// saves it to the public/js directory
	.pipe(gulp.dest('./public/js/'));
})

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify']);
})

gulp.task('default', ['connect', 'watch'])
