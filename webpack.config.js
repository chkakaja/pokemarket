var webpack = require('webpack');

var marketConfig = {
  context: __dirname + '/client/market',
  entry: './index.js',

  output: {
    filename: "market.bundle.js",
    path: __dirname + "/public",
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ],
  }
};

module.exports = marketConfig;