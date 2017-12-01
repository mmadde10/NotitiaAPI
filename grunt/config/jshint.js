/* jshint node: true */
'use strict';
module.exports = function(grunt) {
    grunt.config('jshint', {
        files: grunt.config('lint').js,
        options: {
            jshintrc: 'grunt/settings/.jshintrc'
        }
    });
};
