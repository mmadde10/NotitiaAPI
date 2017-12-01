/*jshint node: true*/
'use strict';
module.exports = function(grunt) {
    grunt.registerTask('lint', [
        'jshint',
        'jscs'
    ]);
};
