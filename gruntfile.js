module.exports = function(grunt) {
      grunt.initConfig({
        lint: grunt.file.readJSON('grunt/settings/files.json').lint     
     });

      grunt.loadTasks('grunt/config');
      grunt.loadTasks('grunt/tasks');   

      require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
      
};