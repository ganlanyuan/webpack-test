// http://survivejs.com/webpack/developing-with-webpack/linting/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    // hmr: [
      // Include the client code.
      // Note how the host/port setting maps here.
      // 'webpack-dev-server/client?http://10.0.0.59:3000',

      // Hot reload only when compiled successfully
      // 'webpack/hot/only-dev-server'

      // Alternative with refresh on failure
      // 'webpack/hot/dev-server'
    // ],
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};

module.exports = function (env) {
  return merge(
    common,
    {
      performance: {
        hints: false
      },
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },
    parts.devServer({
      // Customize host/port here if needed
      host: '10.0.0.59',
      port: 3000
      // host: process.env.HOST,
      // port: process.env.PORT
    })
  );
};