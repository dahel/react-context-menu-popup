var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './test/bundle.js',

  output: {
    filename: 'blabla.js',
    chunkFilename: '[id].chunk.js',
    path: 'examples/__build__',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
