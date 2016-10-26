// Karma configuration
var WebpackConf = require('./webpack.config.js');
WebpackConf.entry = {};
WebpackConf.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'src/index.js',
        'src/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
      'app/node_modules/**/!(angular|angular-mocks).js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/!(*.spec).js': ['webpack', 'coverage'],
        'src/*.spec.js': [ 'webpack', 'sourcemap' ]
    },


    webpack: WebpackConf,


    // Don't spam the browser console
    webpackServer: {
        noInfo: true
    },


    ngHtml2JsPreprocessor: {
        moduleName: 'templates'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'coveralls'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    // Configure the reporter
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      includeAllSources: true
    }
  })
}

