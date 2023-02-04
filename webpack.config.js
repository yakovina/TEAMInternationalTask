const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/js/main.js', // relative to root of the application
  output: {
    filename: '[name].bundle.js',
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'TEAM International',
      template: './src/index.html',
      filename: './index.html', // relative to root of the application
    }),
    new ESLintPlugin(),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: 'defaults'}],
            ],
          },
        },
      },
    ],
  },
};


