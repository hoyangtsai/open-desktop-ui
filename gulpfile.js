var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var http = require('http');
var st = require('st');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src('./src/App.js')
    .pipe(webpack(webpackConfig),
      null, function(err, stats) {
        console.log('err : ', err)
        console.log('stats : ', stats);
      })
    .pipe(gulp.dest('.'))
    .pipe($.livereload());
});

gulp.task('watch', ['server'], function() {
  $.livereload.listen({ start: true });
  gulp.watch(['src/*.js'], ['webpack']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname, cache: false, index: 'index.html', path: './dist' })
  ).listen(8000, done);
});

gulp.task('default', ['watch']);
