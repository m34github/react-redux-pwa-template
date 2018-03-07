const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: true
        }
      }
    ]
  }
};
