/*!
 * ribs
 * Copyright (c) 2013 Nicolas Gryman <ngryman@gmail.com>
 * LGPL Licensed
 */

'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		autoprefixer: {
			css: {
				src: 'styles/index.css',
				dest: 'app.css'
			}
		},

		watch: {
			css: {
				files: 'styles/index.css',
				tasks: 'autoprefixer',
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['autoprefixer']);

};