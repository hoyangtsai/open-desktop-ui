var path = require('path');

module.exports = {
  entry: "./src/js/App.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, './src/'),
    alias: {
      css: 'css',
    },
    extensions: ['', '.js', '.jsx', '.scss']
  }
};
