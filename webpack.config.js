var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/App.js',
  resolve: {
    modulesDirectories: ['./node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: '/node_modules/', loader: 'babel'}
    ]
  },
  plugins: [
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })
]
}
