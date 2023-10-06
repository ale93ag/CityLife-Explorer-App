const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: "./src/JS/domManipulation.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'optimised.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(mp3|wav)$/i, // Aggiunta una nuova regola per i file audio
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CityLife Explorer',
            template: './index.html'
        })
    ],
    devServer: {
        port: 5000,
        open: true,
        static: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
}
