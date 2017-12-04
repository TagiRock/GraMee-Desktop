const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, 'src/app.ts'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'build')
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
                loader: 'vue-loader',
                options: {
                    loaders : {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            { 
                test: /\.scss$/, 
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                loader: "file-loader?name=[hash].[ext]"
            },
            {
                test: /\.(ttf|eot|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=[hash].[ext]"

            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/app.pug'),
            inject: 'body'
            })
    ],
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, '/build')
    },
    devtool: 'inline-source-map'
};
