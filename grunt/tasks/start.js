/*jshint node: true*/
'use strict';
module.exports = function(grunt) {
    grunt.registerTask('start:watch', [
        'express:dev',
        'watch'
    ]);

    grunt.registerTask('start:debug', [
        'shell:debug'
    ]);

    grunt.registerTask('start', [
        'shell:start'
    ]);
};
