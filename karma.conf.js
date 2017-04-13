const webpackTestConfig = require('./webpack.test.config');

module.exports = function (config) {
	'use strict';

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha'],

		// list of files / patterns to load in the browser
		files: [
			'./test/setup.js',
			{pattern: 'test/**/*.test.js', watched: false}
		],

		preprocessors: {
			'./test/setup.js': ['babel'],
			'test/**/*.test.js': ['webpack', 'sourcemap']
		},

		webpack: webpackTestConfig,

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha', 'coverage'],

		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},

		mochaReporter: {
			showDiff: true
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],

		plugins: [
			'karma-mocha',
			'karma-webpack',
			'karma-mocha-reporter',
			'karma-sourcemap-loader',
			'karma-phantomjs-launcher',
			//'karma-jasmine',
			//'karma-requirejs',
			//'karma-spec-reporter',
			'karma-coverage',
			//'karma-jasmine-matchers',
			//'karma-jasmine-jquery',
			'karma-babel-preprocessor'
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		captureConsole: true,
		browserNoActivityTimeout: 100000

		//babelPreprocessor: {
		//	options: {
		//		presets: ['es2015'],
		//		sourceMap: 'inline'
		//	}
		//}
	});
};