const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/main.js", //relative to root of the application
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
            filename: './index.html' //relative to root of the application
        })
    ],
    mode: 'development'
};


