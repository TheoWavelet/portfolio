const gulp=require('gulp');

const sass=require('gulp-sass');




// Compile Sass into CSS & inject into browsers
gulp.task('sass', function() {
return gulp.src('./scss/**/*.scss')
.pipe(sass())
.pipe(gulp.dest('./css'));
});


// default will also watch
gulp.task('default', function() {
 gulp.watch('./scss/**/*.scss',[sass]);
}) ;
