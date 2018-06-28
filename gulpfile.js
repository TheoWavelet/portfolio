const gulp=require('gulp');

const sass=require('gulp-sass');
const wait = require('gulp-wait');




// Compile Sass into CSS & inject into browsers
gulp.task('sass', function() {
return gulp.src('./scss/**/*.scss')
.pipe(wait(200))
.pipe(sass())
.pipe(gulp.dest('./css'));
});


// default will also watch
gulp.task('default', function() {
 gulp.watch('./scss/**/*.scss',[sass]);
}) ;
