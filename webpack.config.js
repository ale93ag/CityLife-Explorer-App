const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const path = require('path');
module.exports = {
    entry: {
        domManipulation: './src/JS/domManipulation.js',
        index: './src/JS/index.js',
        fetch: './src/JS/fetch.js',
        formatCityName: './src/JS/formatCityName.js',
        loading: './src/JS/loading.js'
    },
    output: {
        path: './dist',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: { rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }
    ]},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CityLife Explorer',
            template: './index.html'
        })
    ],
    devServer: {
        open: true,
        static: path.resolve(__dirname, 'dist')
    },
    mode: 'development'

}