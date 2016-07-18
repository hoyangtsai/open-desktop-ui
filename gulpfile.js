var gulp = require('gulp');
var connect = require('gulp-connect');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src('./src/App.js')
    .pipe(webpack(webpackConfig),
      null, function(err, stats) {
        console.log('err : ', err)
        console.log('stats : ', stats);
      })
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});


gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        index: false
    });
});

gulp.task('watch', function() {
  gulp.watch(['src/**'], ['webpack']);
});

gulp.task('default', ['connect', 'watch']);
