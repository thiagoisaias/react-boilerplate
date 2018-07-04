const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: 'app/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, '../'),
      app: path.resolve(__dirname, '../app'),
      components: path.resolve(__dirname, '../app/components')
    }
  },
  devServer: {
    contentBase: '../build',
    port: 3000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin('../build', {
      allowExternal: true
    }),
    new HtmlWebPackPlugin({
      template: 'app/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
