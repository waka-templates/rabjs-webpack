'use strict';

const webpack = require('webpack');

const vendors = ['react', 'react-dom', 'rabjs'];

const {resolve} = require('path')

module.exports = {
    output: {
        path: resolve(__dirname, 'public/lib'),
        filename: '[name].[chunkhash:8].js',
        library: '[name]_[chunkhash:8]'
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {}
        }),

        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            sourceMap: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new webpack.DllPlugin({
            path: resolve(__dirname, 'dist', process.env.NODE_ENV === 'dev' ? 'manifest.dll.dev.json': 'manifest.dll.prod.json'),
            name: '[name]_[chunkhash:8]',
            context: __dirname
        }),
    ]
};

