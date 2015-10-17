var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var jsonminify = require('gulp-jsonminify');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var sh = require('shelljs');

var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');

var paths = {
	sass: ['./scss/*.scss'],
	templatecache: ['./www/main/**/*.html', './www/menu/**/*.html'],
	ng_annotate: ['./www/app/**/*.js', './www/i18n/**/*.js', './www/main/**/*.js', './www/menu/**/*.js'],
	useref: ['./www/*.html'],
	jsonminify: ['./www/i18n/*/*.json'],
	fonts: ['./www/css/fonts/criticalroll.*']
};

gulp.task('default', ['sass', 'templatecache', 'ng_annotate', 'useref', 'jsonminify', 'fonts']);

gulp.task('sass', function (done) {
	gulp.src(paths.sass)
		.pipe(sass())
		.pipe(gulp.dest('./www/css/'))
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('./www/css/'))
		.on('end', done);
});

gulp.task('watch', function () {
	gulp.watch(paths.sass, ['sass', 'useref']);
	gulp.watch(paths.templatecache, ['templatecache']);
	gulp.watch(paths.ng_annotate, ['ng_annotate']);
	gulp.watch(paths.useref, ['useref']);
	gulp.watch(paths.jsonminify, ['jsonminify']);
	gulp.watch(paths.fonts, ['fonts']);
});

gulp.task('install', ['git-check'], function () {
	return bower.commands.install()
		.on('log', function (data) {
			gutil.log('bower', gutil.colors.cyan(data.id), data.message);
		});
});

gulp.task('git-check', function (done) {
	if (!sh.which('git')) {
		console.log(
			'  ' + gutil.colors.red('Git is not installed.'),
			'\n  Git, the version control system, is required to download Ionic.',
			'\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
			'\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
		);
		process.exit(1);
	}
	done();
});

gulp.task('templatecache', function (done) {
	gulp.src(paths.templatecache)
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(templateCache({standalone: true}))
		.pipe(gulp.dest('./www/dist/dist_js/app/'))
		.on('end', done);
});

gulp.task('ng_annotate', function (done) {
	gulp.src(paths.ng_annotate)
		.pipe(ngAnnotate({single_quotes: true}))
		.pipe(gulp.dest('./www/dist/dist_js/app'))
		.on('end', done);
});

gulp.task('useref', function (done) {
	var assets = useref.assets();
	gulp.src(paths.useref)
		.pipe(assets)
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('./www/dist'))
		.on('end', done);
});

gulp.task('jsonminify', function () {
	return gulp.src(paths.jsonminify)
		.pipe(jsonminify())
		.pipe(gulp.dest('./www/dist/dist_js/i18n/'));
});

gulp.task('fonts', function () {
	return gulp.src(paths.fonts)
		.pipe(gulp.dest('./www/dist/dist_css/fonts/'));
});
