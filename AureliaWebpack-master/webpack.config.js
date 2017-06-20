const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const { optimize: { CommonsChunkPlugin }, ProvidePlugin } = require('webpack')


module.exports = {
    entry: {
        'app': ['aurelia-bootstrapper'],
        'aurelia': [
            'aurelia-bootstrapper',
            'aurelia-polyfills',
            'aurelia-pal',
            'aurelia-pal-browser',
            'aurelia-binding',
            'aurelia-dependency-injection',
            'aurelia-event-aggregator',
            'aurelia-framework',
            'aurelia-history',
            'aurelia-history-browser',
            'aurelia-loader',
            'aurelia-loader-webpack',
            'aurelia-logging',
            'aurelia-logging-console',
            'aurelia-metadata',
            'aurelia-path',
            'aurelia-route-recognizer',
            'aurelia-router',
            'aurelia-task-queue',
            'aurelia-templating',
            'aurelia-templating-binding',
            'aurelia-templating-router',
            'aurelia-templating-resources'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'scripts/[name].bundle.js',
        sourceMapFilename: 'scripts/[name].bundle.js.map'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.html$/, loader:'html', exclude: path.resolve('src/indx.html') }
        ]
    },
    plugins: [
        new AureliaPlugin({
            aureliaApp: undefined
        }),
        new CommonsChunkPlugin({
            name: 'aurelia'
        })
    ],
    devServer: {
        port: 3000
    }
};

