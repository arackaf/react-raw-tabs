const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const remove = require('remove');
const gulpUglify = require('gulp-uglify');
const gulpRename = require('gulp-rename');
const gulp = require('gulp');
const alias = require('rollup-plugin-alias');
const path = require('path');
const fsE = require('fs-extra');
const gulpBabel = require('gulp-babel');
const rename = require('gulp-rename');
const gprint = require('gulp-print');

var babelOptions = {
    presets: ['react', ['es2015', {modules: false}], 'stage-2'],
};

gulp.src('./src/**/*.js', { base: './' })
    .pipe(gulpBabel(babelOptions))
    .pipe(rename(path => { path.dirname = path.dirname.replace(/src/, 'lib')} ))
    .pipe(gulp.dest(''))
    .pipe(gprint(function(filePath){ return "File processed: " + filePath; }))
    .on('end', runRollup);

try { remove.removeSync('./dist'); } catch (e) { }

const getRollup = entry =>
    rollup.rollup({
        entry,
        plugins: [
            babel({
                presets: ['react', ['es2015', { modules: false }], 'stage-2']
            })
        ]
    });

function runRollup(){
    Promise
        .resolve(getRollup('src/tabs.js'))
        .then(library => 
            Promise.all([
                library.write({ format: 'cjs', dest: './dist/react-raw-tabs.js' }),
                library.write({ format: 'iife', dest: './dist/react-raw-tabs-script-tag.js', moduleName: 'ReactRawTabs', globals: { react: 'React', 'react-dom': 'ReactDOM' } })
            ])
        ).then(() => {
            gulp.src(['./dist/**/*.js'], { base: './' })
                .pipe(gulpUglify())
                .pipe(gulpRename(path => { path.basename = path.basename + '.min'; }))
                .pipe(gulp.dest(''))
        }).catch(err => console.log(err));
}