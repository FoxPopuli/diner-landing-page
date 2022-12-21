const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 8080,
        hot: false

    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          template: path.resolve(__dirname, 'src/index.html')
        }),
    ],
    optimization: {
        runtimeChunk: 'single'
    },
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}