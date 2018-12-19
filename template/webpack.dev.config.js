/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMmerge = require('webpack-merge');
const common = require('./webpack.common.config');

const port = 9126;
module.exports = webpackMmerge(common, {
    mode: 'development', // "production" | "development" | "none"
    entry: {
        app: ['react-hot-loader/patch', './src/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: `http://127.0.0.1:${port}/`
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: ['react-hot-loader/webpack', 'babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    context: __dirname,
    target: 'web',
    stats: 'errors-only', // lets you precisely control what bundle information gets displayed
    devServer: {
        proxy: {},
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: false, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
        port,
        host: '0.0.0.0',
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'none'
        })
    ]
});
