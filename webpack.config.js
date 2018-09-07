const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: "./src/js"
	},
	mode: "production",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "./dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			}
		]
	}
}