var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('copy-components', function(){
	return gulp.src([
		'src/my-login.html',
		'src/my-matchen.html',
		'src/my-matches.html',
		'src/my-preferences.html',
		'src/my-404.html',
		'src/shared-styles.html',
		'src/my-icons.html',
		'src/my-app.html'
		])
	.pipe(gulp.dest('dist/src'));
});

gulp.task('copy-root', function(){
	return gulp.src([
		'index.html',
		])
	.pipe(gulp.dest('dist'));
});

gulp.task('copy-js', function(){
	return gulp.src([
		'bower_components/webcomponentsjs/webcomponents-lite.js',
		])
	.pipe(gulp.dest('dist/bower_components/webcomponentsjs'));
});

gulp.task('copy-images', function(){
	return gulp.src([
		'images/*',
		])
	.pipe(gulp.dest('dist/images/'));
});

gulp.task('vulcanize', function() {
  return gulp.src('src/elements.html')
     .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('dist/src'));
});

// gulp.task('default', ['clean']);
gulp.task('default', ['clean'], function(){
	gulp.start(['copy-components', 'copy-root', 'copy-js', 'copy-images', 'vulcanize']);
});