var gulp = require('gulp')
	sass = require('gulp-ruby-sass')
	plumber = require('gulp-plumber')
	cleanCSS = require('gulp-clean-css');


gulp.task('styles', function(){
        return sass('app/assets/stylesheets/static_pages.scss', {
			style: 'compressed'
        })
        .pipe(gulp.dest('app/assets/stylesheets/'));
    });


// watching for file change
gulp.task('watch', function(){
        // gulp.watch('js/*.js', ['scripts']);
        gulp.watch('app/assets/stylesheets/static_pages.scss', ['styles']);
});

gulp.task('default',['styles', 'watch']);

