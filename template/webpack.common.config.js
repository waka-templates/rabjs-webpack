/**
 * Created by yeanzhi on 16/7/19.
 */
'use strict';
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let env = process.env.NODE_ENV || 'development';
const devMode = env === 'development';
const lessToJs = require('less-vars-to-js');
const themer = lessToJs(require('fs').readFileSync(path.join(__dirname, './theme.less'), 'utf8'));

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)(\?.*)?$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: themer
                        }
                    }
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new webpack.ProvidePlugin({})
    ],
    externals: {
        jquery: 'jQuery',
        lodash: {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_',
            var: '_'
        }
    }
};
