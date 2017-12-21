'use strict';
const webpack = require('webpack');
const devServerConf = require('./run/config/webpack-dev-server-config');
const loaders = require('./develop/config/loaders');

module.exports = {
  entry: './develop/entry.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/run/build'
  },
  devServer: devServerConf,
  module: {
    loaders: loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
