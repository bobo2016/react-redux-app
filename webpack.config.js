var webpack = require('webpack');
// var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js',
  ],

  output: {
    path: __dirname + '/lib',
    filename: 'bundle.js',
    publicPath: '/lib/'
  },

  module: {
    loaders: [{
      // babel/babel-loader (https://github.com/babel/babel-loader)
      // Troubleshooting: https://github.com/babel/babel-loader#troubleshooting
      test: /\.js(x)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }, {
      // jtangelder/sass-loader (https://github.com/jtangelder/sass-loader)
      // Usage: https://github.com/jtangelder/sass-loader#usage
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      // loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
    }]
  },

  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  ],

  devServer: {
    hot: true,
    contentBase: './',
  },


  /// Todos
  // TODO: Use The Production Build
  // https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build

}
