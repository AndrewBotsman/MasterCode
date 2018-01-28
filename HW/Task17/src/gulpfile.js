// requires
//////////////////////
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    plumberNotifier = require('gulp-plumber-notifier'),
    pug = require('gulp-pug'),
    sync = require('browser-sync');


// path
//////////////////////
var path = {
    src: {
        html: 'app/*.html',
        pug: 'app/pug/*.pug',
        css: 'app/css/',
        img: 'app/assets/img/svg/*.svg',
        imgscss: 'app/sass/globals/sprite.scss',
        sprite: 'app/assets/img/sprite/sprite.svg'
    },
    watch: {
        pug: 'app/pug/**/*.pug',
        scss: 'app/scss/**/*.scss',
        img: 'app/assets/img/**/*.*'
    },
    basedir: 'app/'
};

// watch
//////////////////////

// watch:server
gulp.task('watch:server', function() {
    sync({
        server: {
            baseDir: path.basedir
        },
        port: 8080,
        open: true,
        notify: false
    });
});

// watch:sass
gulp.task('watch:sass', function() {
    return gulp.src(path.watch.scss)
        .pipe(plumber())
        .pipe(plumberNotifier())
        .pipe(sass())
        .pipe(gulp.dest(path.src.css))
        .pipe(sync.reload({
            stream: true
        }));
});

// watch:pug
gulp.task('watch:pug', function() {
    return gulp.src(path.src.pug)
        .pipe(plumber())
        .pipe(plumberNotifier())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.basedir))
        .pipe(sync.reload({
            stream: true
        }));
});

// watch all
gulp.task('watch', ['watch:server','watch:pug', 'watch:sass'], function() {
    gulp.watch(path.watch.pug, ['watch:pug']);
    gulp.watch('app/assets/img/svg/*.svg', ['watch:img']);
    gulp.watch(path.watch.scss, ['watch:sass']);

})
