var gulp = require('gulp'),
    gutil = require('gulp-util'),
    inlineCss = require('gulp-inline-css');
 
gulp.task('default', function() {
gutil.log('Stuff happened', 'Really it did', gutil.colors.magenta('Wow'));
gutil.beep();

    return gulp.src('./*.html')

        .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: true,
                removeLinkTags: true
        }))
        .pipe(gulp.dest('dist/'));
});

// Gulp Watch
gulp.task('watch', function() {
  gulp.watch('*.*', ['default']);
});