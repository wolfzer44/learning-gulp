'use strict';

const gulp  = require('gulp');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');

gulp.task('default', ['watch'],  function() {
  console.log('inital gulp');
});

gulp.task('js', function(done){
  return gulp.src('assets/js/**/*')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .on('error', gutil.log);
});

gulp.task('watch', function(){
  gulp.watch('assets/js/**/*', ['js']);
});
