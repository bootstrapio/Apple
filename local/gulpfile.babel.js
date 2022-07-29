/**
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

'use strict';

var
  browserSync     = require('browser-sync'),
  del             = require('del'),
  gulp            = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  gulpReplace     = require('gulp-replace'),
  path            = require('path'),
  pkg             = require('./package.json'),
  runSequence     = require('run-sequence'),
  swPrecache      = require('sw-precache'),
  terser          = require('gulp-terser');

const
  { series, parallel }  = require('gulp'),
  gulpBeautify          = require('gulp-jsbeautifier'),
  config                = require('./app.config.js'),
  $                     = gulpLoadPlugins();

  // Gulp | Beautify
function beautify() {
  return gulp.src(['../app/**/*.{css,html,js}'])
    .pipe(gulpBeautify(
      { indent_size: 2 }
    ))
    .pipe(gulp.dest('../beautify'))
    .pipe($.size({title: 'beautify'}))
}

// Lint JavaScript
function lint() {
  return gulp.src(['../app/scripts/**/*.js','!node_modules/**'])
    .pipe($.eslint({
      configFile: '.eslintrc.json'
    }))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()))
}

// Optimize images
function images() {
  return gulp.src('../app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('../dist/images'))
    .pipe($.size({title: 'images'}))
}

// Copy all files at the root level (app)
function copy() {
  return gulp.src([
    '../app/*',
    '!../app/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('../dist'))
    .pipe($.size({title: 'copy'}))
    .pipe(browserSync.stream());
}

// Compile and automatically prefix stylesheets
function styles() {
  const AUTOPREFIXER_BROWSERS = {
    remove: false
  };

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    '../app/styles/**/*.scss',
    '../app/styles/**/*.css'
  ])
    .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('../dist/styles'))
    .pipe(gulp.dest('.tmp/styles'));
}

// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enable ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
// `.babelrc` file.
function scripts() {
  return gulp.src([
    // Note: Since we are not using useref in the scripts build pipeline,
    //       you need to explicitly list your scripts here in the right order
    //       to be correctly concatenated
    '../app/scripts/main.js'
    // Other scripts
  ])
    .pipe($.newer('.tmp/scripts'))
    .pipe($.sourcemaps.init())
    // .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.concat('main.min.js'))
    // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('../dist/scripts'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(browserSync.stream());
}

// Scan your HTML for assets & optimize them
function html() {
  return gulp.src([
      '../app/**/*.html'
    ])
    .pipe($.useref({
      searchPath: '{../.tmp, ../}',
      noAssets: true
    }))

    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    })))
    // Output files
    .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
    .pipe(gulp.dest('../dist'))
    .pipe(browserSync.stream());
}

// Clean output directory
function clean() {
  return del(['.tmp', '../dist/*', '!dist/.git', '../beautify/*'], {dot: true, force: true})
}

// Watch files for changes & reload
function serve() {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    https: true,
    cors: true,
    injectChanges: config.injectChanges,
    open: config.browserAutoOpen,
    server: ['.tmp', '../app'],
    port: 3000
  });

  gulp.watch(['../app/**/*.html'], parallel(html));
  gulp.watch(['../app/**/*.{scss,css}'], parallel(styles));
  gulp.watch(['../app/**/*.js'], parallel(scripts));
  gulp.watch(['../app/**/*.{gif,jpg,jpeg,png}'], parallel(images));
}

// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
function copySWscripts() {
  return gulp.src(['node_modules/sw-toolbox/sw-toolbox.js', '../app/scripts/sw/runtime-caching.js'])
    .pipe(gulp.dest('../dist/scripts/sw'));
}

// See http://www.html5rocks.com/en/tutorials/service-worker/introduction/ for
// an in-depth explanation of what service workers are and why you should care.
// Generate a service worker file that will provide offline functionality for
// local resources. This should only be done for the 'dist' directory, to allow
// live reload to work as expected when serving from the 'app' directory.
function generateServiceWorker() {
  const rootDir = '../dist';
  const filepath = path.join(rootDir, 'service-worker.js');

  return swPrecache.write(filepath, {
    // Used to avoid cache conflicts when serving on localhost.
    cacheId: pkg.name || 'web-starter-kit',
    // sw-toolbox.js needs to be listed first. It sets up methods used in runtime-caching.js.
    importScripts: [
      'scripts/sw/sw-toolbox.js',
      'scripts/sw/runtime-caching.js'
    ],
    staticFileGlobs: [
      // Add/remove glob patterns to match your directory setup.
      `${rootDir}/images/**/*`,
      `${rootDir}/scripts/**/*.js`,
      `${rootDir}/styles/**/*.css`,
      `${rootDir}/*.{html,json}`
    ],
    // Translates a static file path to the relative URL that it's served from.
    // This is '/' rather than path.sep because the paths returned from
    // glob always use '/'.
    stripPrefix: rootDir + '/'
  });
}

// Load custom tasks from the `tasks` directory
// Run: `npm install --save-dev require-dir` from the command-line
// try { require('require-dir')('tasks'); } catch (err) { console.error(err); }
exports.clean = clean;

exports.beautify = series(
  clean,
  beautify
);

// Build production files, the default task
exports.default = series(
  clean,
  series(styles),
  series(html),
  series(lint, scripts, copySWscripts, generateServiceWorker),
  series(images, copy)
);

exports.serve = series(
  clean,
  series(styles),
  series(html),
  series(lint, scripts, copySWscripts, generateServiceWorker),
  series(images, copy),
  serve
);
