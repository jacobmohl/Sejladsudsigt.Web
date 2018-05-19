var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src(['./_sass/assets/wow/dist/wow.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./js/'));
});