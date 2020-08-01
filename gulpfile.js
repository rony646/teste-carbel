const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
};

exports.default = () => {
    gulp.watch('./src/styles/*.scss', style)
}