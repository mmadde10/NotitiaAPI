/*jshint node: true*/
'use strict';
module.exports = function(grunt) {
    grunt.config('express', {
        options: {},
        dev: {
            options: {
                background: true,
                script: '../../../server.js'
            }
        }
    });
};
