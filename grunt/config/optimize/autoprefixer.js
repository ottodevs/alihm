/**
 * Configuration for pngmin task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('autoprefixer', {
    server: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%= yeogurt.staticServer %>/styles/*.css',
        dest: '<%= yeogurt.staticServer %>/styles/'
      }]
    },
    dist: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        map: true
      },
      files: [{
        expand: true,
        flatten: true,
        src: '<%= yeogurt.dist %>/styles/*.css',
        dest: '<%= yeogurt.dist %>/styles/'
      }]
    }
  })
}

module.exports = taskConfig
