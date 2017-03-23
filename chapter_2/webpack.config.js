var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/script/main.js",
        main_1: "./src/script/main_1.js",
        main_2: "./src/script/main_2.js",
        main_3: "./src/script/main_3.js"
    },
    output: {
	    filename: 'js/[name]-[chunkhash].js',
	    path: __dirname + '/dist/',
	    publicPath: 'http://cdn.com/'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'main_1.html',
			template: 'index.html',
			inject: false,
			title: 'this is main_1',
			excludeChunks: ['main_2', 'main_3']
		}),
		new htmlWebpackPlugin({
			filename: 'main_2.html',
			template: 'index.html',
			inject: false,
			title: 'this is main_2',
			excludeChunks: ['main_1', 'main_3']
		}),
		new htmlWebpackPlugin({
			filename: 'main_3.html',
			template: 'index.html',
			inject: false,
			title: 'this is mian_3',
			excludeChunks: ['main_2', 'main_1']
		})
	]
};