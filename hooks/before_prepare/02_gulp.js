#!/usr/bin/env node

var gulp = require('gulp');
var path = require('path');

var rootdir = process.argv[2];
var gulpfile = path.join(rootdir, 'gulpfile.js');

process.stdout.write('Compiling SCSS');

require(gulpfile);

gulp.start('sass');
gulp.start('templatecache');
gulp.start('ng_annotate');
gulp.start('fonts');
gulp.start('jsonminify');
gulp.start('useref');