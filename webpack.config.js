var path = require('path');

module.exports = {
  entry: "./src/js/App.js",
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: "http://localhost:8000/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      },
      { test: /\.scss$/, loader: 'style!css!sass?root=./src' },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192&name=img/[name]-[hash:6].[ext]' }, // for url encode
      // { test: /\.(png|jpg|gif)$/, loader: 'file?name=img/img-[hash:6].[ext]' }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, './src/'),
    modulesDirectories: ['node_modules'],
    alias: {
      css: 'css',
      img: 'img'
    },
    extensions: ['', '.js', '.jsx', '.scss']
  }
};
