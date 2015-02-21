var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
 
gulp.task('default', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: true,
                removeLinkTags: true
        }))
        .pipe(gulp.dest('dist/'));
});