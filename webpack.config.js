// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var webpack = require('webpack');
//
// module.exports = {
//     entry: {
//         main: './public/views/client.js'
//     },
//     output: {
//         filename: './public/dist/scripts/[name].js',
//         publicPath: '/assets/'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel',
//             },
//             {
//                 test: /\.scss/,
//                 loader: ExtractTextPlugin.extract('css!sass')
//             },
//             {
//                 test: /\.(jpg|png|gif|svg/)$/,
//                 loader: 'file?name=[name].[ext]'
//             },
//         ]
//     },
//
//
//     plugins: [
//         new ExtractTextPlugin('public/dist/styles/main.css', {
//             allChunks: true
//         })
//     ]
// };
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './public/views/client.js'
    },
    output: {
        filename: './public/dist/scripts/[name].js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
            ,
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file?name=[name].[ext]'
                },
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/dist/styles/main.css', {
            allChunks: true
        })
    ]
};
