/*jshint node: true*/
'use strict';
module.exports = function(grunt) {
    grunt.config('watch', {
        express: {
            files: grunt.config('lint').js,
            tasks: [
                'express:dev'
            ],
            options: {
                spawn: false, // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                atBegin: true
            }
        }
    });
};
