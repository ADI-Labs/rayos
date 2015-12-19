var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  entry: {
    home: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './app/render/homepage.jsx'],
    course: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './app/render/coursepage.jsx']
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {presets: ['es2015', 'react'] }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}