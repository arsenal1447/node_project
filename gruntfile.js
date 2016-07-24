module.exports = function(grunt){
    
    grunt.initConfig({
        watch: {
          jade: {
            files: ['views/**'],
            options: {
              livereload: true
            }
          },
          js: {
            files: ['public/js/**', 'models/**/*.js', 'schemas/**/*.js'],
            //tasks: ['jshint'],
            options: {
              livereload: true
            }
          }
        },
        nodemon: {
          dev: {
            options: {
              file: 'app.js',
              args: [],
              ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
              watchedExtensions: ['js'],
              watchedFolders: ['app','config'],
              debug: true,
              delayTime: 1,
              env: {
                PORT: 3000
              },
              cwd: __dirname
            }
          }
        },
        concurrent: {
          tasks: ['nodemon', 'watch'],
          options: {
            logConcurrentOutput: true
          }
        }
  })

    grunt.loadNpmTasks('grunt-contrib-watch')//文件添加或修改后会重新执行
    grunt.loadNpmTasks('grunt-nodemon')//实时监听app.js入口文件，自动重启
    grunt.loadNpmTasks('grunt-concurrent')//优化执行时间

    grunt.option('force',true);
    
    grunt.registerTask('default',['concurrent']);


}