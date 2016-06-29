var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass  = require('gulp-sass');

function onError(err) {
	console.log(err);
	this.emit('end');
}

gulp.task('default', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("*.scss")
        .pipe(sass())
        .on('error', onError)
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});
