var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: [
    path.resolve(ROOT_PATH, 'example/src.js')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    root: ROOT_PATH,
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: ROOT_PATH + '/example',
    publicPath: 'example',
    filename: 'example.js'
  },
  devServer: {
    contentBase: ROOT_PATH + '/example',
    hot: true
  }
};
