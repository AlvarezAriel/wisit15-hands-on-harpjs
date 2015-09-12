var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell')

gulp.task('gh-pages-push', function () {
    return gulp.src('./dist/**/*').pipe(ghPages());
});

gulp.task('build', shell.task([
    'harp compile ./src dist'
]));

gulp.task('deploy', ['build','gh-pages-push']);