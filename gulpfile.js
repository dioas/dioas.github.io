var gulp = require('gulp'),
bundle = require('gulp-bundle-assets');
var concat = require('gulp-concat')
var rename = require('gulp-rename');
var minify = require('gulp-minify');
gulp.task('default', defaultTask);


function defaultTask(done) {
  return gulp.src('./bundle.config.js')
  .pipe(bundle())
  .pipe(gulp.dest('./public'));
  done();
}
gulp.task('css', function(){
  return gulp.src('./assets/style/dio.css')
  .pipe(minify())
  .pipe(rename('dio.min.css'))
  .pipe(gulp.dest('./public'));
})
gulp.task('style', function() {
  return gulp.src('./assets/style/gambar.css')
  .pipe(minify())
  .pipe(rename('bundle.min.css'))
  .pipe(gulp.dest('./public'));
})

