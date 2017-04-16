var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        runTabs: './test-runner/testTabs.js'
    },
    output: {
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-chunk.js',
        path: path.resolve(__dirname, 'webpack-output'),
        publicPath: 'webpack-output/'
    },
    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },
    plugins: [
    ].filter(p => p),
    devServer: {
        proxy: {

        }
    }
};