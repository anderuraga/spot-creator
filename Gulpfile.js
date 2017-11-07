/* Automatizador de Tareas */

//librerias
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

//Tasks

gulp.task('clean', function () {
    return gulp.src('./dist/')
        .pipe(clean({force: true}));

});

gulp.task('sass', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', function() {
    gulp.src([
                    'src/html/head.html',
                    'src/html/footer.html'
                  ])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('move', function() {
    gulp.src('src/js/**.*')
    .pipe(gulp.dest('./dist/js/'));

     gulp.src('src/fonts/**.*')
    .pipe(gulp.dest('./dist/fonts/'));
});



//Default task
gulp.task('default',function() {
    gulp.watch('src/sass/**/*.scss',['clean','sass','html','move']);
});
