var config = {
  // context: __dirname,
  entry: "./main.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
};
module.exports = config;