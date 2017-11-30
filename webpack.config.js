const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        script: path.join(__dirname, '/src/')+ 'app.ts'
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'build'),
        publicPath: "build/"
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.html', ".css", ".scss", ".scss"]
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts?$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: 'tsconfig-for-compile.json'
                }
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                loader: "file-loader?name=[hash].[ext]"
            },
            {
                test: /\.(ttf|eot|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=[hash].[ext]"

            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]"
            }

        ]
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, '/build')
    }
};
