
const {
    resolve
} = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        path: resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    devtool: 'cheap-module-eval-source-map',
    performance: {
        hints: false
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["es2015", {
                            "modules": false
                        }], "stage-0", "react"
                    ],
                    "env": {},
                    "ignore": [
                        "node_modules/**",
                        "dist"
                    ],
                    "plugins": [
                        "react-hot-loader/babel",
                        "transform-decorators-legacy"
                    ]
                }
            }],
            exclude: [/node_modules/]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif|woff|svg|eot|ttf|woff2)$/i,
            use: ['url-loader']
        }]
    },
    externals: {
        jquery: 'jQuery',
        lodash: '_',
        fabric: 'fabric'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/manifest.dll.prod.json')
        })
    ]
};
