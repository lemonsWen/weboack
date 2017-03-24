var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	context: __dirname,
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'js/[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test:/\.js$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules'),
				include: path.resolve(__dirname, 'src'),
				query: {
					presets: ["latest"]
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				loaders: [
					'url-loader?limit=200&name=assets/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
}