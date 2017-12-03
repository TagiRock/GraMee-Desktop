const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'build'),
        publicPath: "build/"
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js','.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    devServer: {
        //inline: true,
        contentBase: path.join(__dirname, '/build')
    },
    devtool: '#eval-source-map'
};
