var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'contentzoom.js',
    library: 'contentzoom',
    libraryTarget: 'umd',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
}
