module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          loadPath: 'node_modules'
        },
        files: [{
          expand: true,
          cwd: 'app/styles',
          src: ['main.scss'],
          dest: 'assets/styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      default: {
        files: ['app/styles/**/*.scss'],
        tasks: ['sass']
      },
      options: {
        spawn: false
      }
    }
  });

  grunt.registerTask('default', ['sass', 'watch'], function(){
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.task.run('sass', 'watch');
  });
}
