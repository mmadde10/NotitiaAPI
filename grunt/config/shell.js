/* jshint node: true */
'use strict';
module.exports = function(grunt) {
    grunt.config('shell', {
        start: {
            command: 'node api/server'
        },
        debug: {
            command: 'node debug api/server'
        },
        deploy: {
            command: 'eb deploy'
        }
    });
};
