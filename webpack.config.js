var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/main.js',

  output: {
    path: __dirname + '/lib',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        // babel/babel-loader (https://github.com/babel/babel-loader)
        // Troubleshooting: https://github.com/babel/babel-loader#troubleshooting
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }, {
        // jtangelder/sass-loader (https://github.com/jtangelder/sass-loader)
        // Usage: https://github.com/jtangelder/sass-loader#usage
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
        // loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  }

  // TODO: Use The Production Build
  // https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build

}
