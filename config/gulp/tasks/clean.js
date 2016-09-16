var gulp = require('gulp');
var config = require('../config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-report', 'clean-ngc']);

gulp.task('clean-ngc', function() {
    return del([
        'compiled',
        config.aot,
        config.app + '**/*.ngfactory.*',
        config.app + '**/*.js*',
        config.app + '**/*.css.shim.ts'
    ]);
});

/* Clean build folder */
gulp.task('clean-build', function () {
    return del([config.build.path]);
});

/* Clean report folder */
gulp.task('clean-report', function () {
    return del([
        'coverage',
        config.report.path
    ]);
});
