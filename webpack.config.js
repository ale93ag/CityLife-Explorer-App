const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        }, 

    ]},
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CityLife Explorer',
            template: './index.html',
            favicon: "./src/Img/10927274-la-città-stilizzata-una-radura-con-alberi.png",
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from:'./src/Img',
                to: './src/Img'
            }]
        })
    ],
    devServer: {
        open: true,
        static: path.resolve(__dirname, 'dist')
    },
    mode: 'development'

}