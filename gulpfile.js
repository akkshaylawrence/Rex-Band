var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    sequence = require('run-sequence');
gulp.task('styles', function () {
    gulp.src('public/css/*.css')
        .pipe(gulp.dest('public/css'))
        .pipe(bs.stream());
});
gulp.task('js', function () {
    gulp.src(['public/js/*.js'])
        // .pipe(concat('all.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(bs.stream());
});
gulp.task('html', function () {
    gulp.src('public/*.html')
        .pipe(gulp.dest('public'))
        .pipe(bs.stream());
});
gulp.task('browser-sync', function () {
    bs.init({
        server: 'public',
    });
});
gulp.task('watch', ['build'], function () {
    gulp.watch(['public/css/*.css'], ['styles']);
    gulp.watch(['public/js/*.js'], ['js']);
    gulp.watch(['public/*.html'], ['html']);
});
gulp.task('build', function (done) {
    sequence(
        ['html', 'js', 'styles'],
        'browser-sync',
        done);
});
gulp.task('sync', ['watch']);