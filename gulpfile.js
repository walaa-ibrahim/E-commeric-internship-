const gulp = require('gulp'),
      concat = require('gulp-concat'),
      prefix = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      beeper = require('beeper'),
      notifier = require('node-notifier'),
      cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');
//minifying ltr css files
gulp.task('minifyltrcss', function () {
        return gulp.src(['src/css/vendor/bootstrap-ltr/bootstrap.min.css',
                        'src/css/vendor/all.min.css',
                        'src/css/vendor/jquery-picZoomer.css',
                        'src/css/vendor/intlTelInput.css',
                        'src/css/vendor/swiper-bundle.min.css',
                        'src/css/vendor/jquery-ui.css',
                        'src/css/vendor/owl.carousel.min.css',
                        'src/css/vendor/owl.theme.default.min.css',
                         'src/css/main-ltr.css'])
            .pipe(sourcemaps.init())
            .pipe(concat('ltr-style.min.css'))
            .pipe(cleanCSS())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('src/CSS/minifiedStyles'));
});
//minifying rtl css files
gulp.task('minifyrtlcss', function () {
        return gulp.src(['src/css/vendor/bootstrap-rtl/bootstrap.rtl.min.css',
                        'src/css/vendor/all.min.css',
                        'src/css/vendor/jquery-picZoomer.css',
                        'src/css/vendor/intlTelInput.css',
                        'src/css/vendor/swiper-bundle.min.css',
                        'src/css/vendor/jquery-ui.css',
                        'src/css/vendor/owl.carousel.min.css',
                        'src/css/vendor/owl.theme.default.min.css',
                        'src/css/main-rtl.css'])
            .pipe(sourcemaps.init())
            .pipe(concat('rtl-style.min.css'))
            .pipe(cleanCSS())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('src/CSS/minifiedStyles'));
});
//minifying js files
gulp.task('minifyJs', function () { 
        return gulp.src(['src/js/jquery-3.5.1.min.js',
                        'src/js/vendor/swiper-bundle.min.js',
                         'src/js/vendor/all.min.js',
                         'src/js/vendor/jquery.picZoomer.js',
                         'src/js/vendor/bootstrap.bundle.min.js',
                         //'src/js/vendor/jquery.js',
                         'src/js/vendor/jquery-ui.js',
                         'src/js/vendor/owl.carousel.min.js',
                         'src/js/vendor/jquery.validate.min.js',
                         'src/js/vendor/additional-methods.min.js',
                         'src/js/vendor/intlTelInput-jquery.js',
                         'src/js/app/*.js',
                         'src/js/main.js'])
         .pipe(concat('scripts.min.js'))
         .pipe(uglify()) 
         .pipe(gulp.dest('src/scripts/minifiedJs'));
});
//task for sass compiling
gulp.task('SassCompile', function () {   
        return gulp.src(['src/sass/main-ltr.scss','src/sass/main-rtl.scss'])
          .pipe(sourcemaps.init())
          .pipe(sass({ outputStyle: 'compressed' }).on('error',function(err){
              console.log(`-----------------------------------------------------------------`);
              console.log(err.message);
              console.log(`-----------------------------------------------------------------`);
              beeper();
              
              notifier.notify(
                  {
                    title: 'Sass Error Compiling',
                    message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
                    sound: false, 
                    wait: false,
                    timeout: 1
                  },
                  function(err, response) {
                    // Response is response from notification
                  }
                );
              this.emit('end');
          }))
          .pipe(prefix('last 2 versions'))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('src/css'));
});
//task for watching any change in files
gulp.task('watch', function () {
    gulp.watch(['src/sass/*.scss',
                'src/sass/*/*.scss',
                'src/js/*.js'], 
    gulp.series(['SassCompile','minifyltrcss','minifyrtlcss','minifyJs']));
});