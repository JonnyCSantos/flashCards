var gulp = require('gulp');
var stylus = require('gulp-stylus');
 
var sourcemaps = require('gulp-sourcemaps');


gulp.task('stylus', function () {
    return gulp.src('./pages/**/*.styl')
      .pipe(stylus({
        compress: true
      }))
      .pipe(gulp.dest('./src'));
});

// Inline sourcemaps
gulp.task('sourcemaps-inline', function () {
    return gulp.src('./pages/**/*.styl')
      .pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./src'));
});

gulp.task('default', ['stylus', 'sourcemaps-inline']);


