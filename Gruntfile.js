module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {}
			},
		},
		sass: {
			dist: {
				files: {
					'css/main.css' : 'scss/main.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			php: {
				files: ['**/*.php']
			},
			js: {
				files: ['js/**/*.js'],
			},
			sass: {
				options: {
					livereload: false
				},
				files: ['scss/**/*.scss'],
				tasks: ['sass']
			},
			css: {
				files: ['css/main.css'],
				tasks: []
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('local', ['sass','watch']);
}