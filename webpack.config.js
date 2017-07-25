const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    task1: './task1/task1.js',
    task2: './task2/task2.js',
    task3: './task3/task3.js',
    task4: './task4/task4.js',
    task5: './task5/task5.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  output: {
    filename: '[name]/index.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          }
        ]
      },

      {
        test: /\.(woff|woff2|ttf|eot|svg|mp4)$/,
        use: [
          { loader: 'file-loader?name=assets/[name].[ext]' }
        ]
      },

      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader?name=[path][name].[ext]' }
        ]
      },

      // { does not work
      //   test: /\.js$/, // include .js files
      //   enforce: "pre", // preload the jshint loader
      //   exclude: /node_modules/, // exclude any and all files in the node_modules folder
      //   use: [
      //     {
      //       loader: "jshint-loader",
      //       options: {
      //         camelcase: true,
      //         emitErrors: false,
      //         failOnHint: false
      //       }
      //     }
      //   ]
      // }
    ]
  },

};