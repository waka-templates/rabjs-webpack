/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMmerge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = webpackMmerge(common, {
    mode: 'production', // "production" | "development" | "none"
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: `https://s4.meituan.net/portm/mall/static/mall-fe-mis-miniprogram/dist/`
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
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
    devtool: 'source-map',
    context: __dirname,
    target: 'web',
    stats: 'errors-only', // lets you precisely control what bundle information gets displayed
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'none'
        }),
        new ManifestPlugin()
    ]
});
