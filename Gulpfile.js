/* Automatizador de Tareas */

//librerias
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var merge = require('merge-stream');
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
                    'src/html/navigation.html',
                    'src/html/step1.html',
                    'src/html/step2.html',
                    'src/html/step3.html',
                    'src/html/step4.html',
                    'src/html/step5.html',
                    'src/html/modal-mundaka.html',
                    'src/html/footer.html'
                  ])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('move', function() {
  var taskJs =  gulp.src('src/js/**.*')
                .pipe(gulp.dest('./dist/js/'));

  var taskFonts = gulp.src('src/fonts/**.*')
                    .pipe(gulp.dest('./dist/fonts/'));

    return merge(taskJs, taskFonts);
});



//Default task
gulp.task('default',function() {

    livereload.listen();

    gulp.watch('src/sass/**/*.scss',['sass','html','move']);
    gulp.watch('src/html/**/*.html',['html','move']);
});
