const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        // elementFactory: './src/elementFactory.js',
        // listFactory: '/src/listFactory.js',
        // pageState: './src/pageState.js',
        // paths: './src/paths.js',

        // header: './src/header.js',
        // sidebar: './src/sidebar.js',
        // content1: './src/content1.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Jane\'s Diner',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpeg|gif|jpg)$/i,
                type: 'asset/resource'
            }
        ]
    }
}