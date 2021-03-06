const path = require('path');

module.exports = {
	entry: './src/scripts/main.ts',
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};
