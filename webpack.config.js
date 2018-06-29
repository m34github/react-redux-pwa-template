const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: true
        }
      }
    ]
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      swDest: path.join(__dirname, 'public', 'assets', 'js', 'sw.js'),
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'home',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24
            }
          }
        }
      ]
    })
  ],
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 3000
  }
};
