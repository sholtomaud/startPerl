var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    minify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    fs = require('fs'),
    viewbuilder = require('gaffa-viewbuilder');

gulp.task('styles', function() {
    /*
    gulp.src('./public/styles/styles.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(concat('./public/styles/main.css'))
        .pipe(gulp.dest('./public/styles'));
    */

    gulp.src('./app/styles/styles.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(concat('./app/styles/main.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('build', function() {
    gulp.src(['./app/scripts/app.js'])
        .pipe(browserify({
          debug : false
        }))

        // Comment this line out for development
        //.pipe(minify())

        .pipe(concat('../build/app.browser.js'))
        .pipe(gulp.dest('./app/scripts'))
        .on('end', function(){
            fs.readdir('./app/scripts/pages', function(error, files){
                if(error){
                    console.error(error);
                    return;
                }

                // Remove all cached modules before building.
                for(var key in require.cache){
                    if(key.indexOf(__dirname + '/app') === 0){
                        delete require.cache[key];
                    }
                }

                files.forEach(function(file){
                    var parts = file.split('.');
                    if(parts[1] !== 'js'){
                        return;
                    }

                    fs.writeFile('./app/build/pages/' + parts[0] + '.json', viewbuilder('./app/scripts/pages/' + file), function(){
                        if(error){
                            console.error(error);
                        }
                    });
                });
            });
        });
});

gulp.task('watch', function () {
   gulp.watch(['./app/styles/**/*.styl'], ['styles']);
   gulp.watch(['./app/scripts/**/*.js'], ['build']);
   gulp.watch(['./build/pages/aquifer.json'], ['build']);
});



gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


gulp.task('default', ['watch', 'styles', 'build','connect']);