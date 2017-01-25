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
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            // {
    //    test: /\.scss$/,
    //    loader: 'style-loader!css-loader!sass-loader'
    //  },
            // {test:/\.(jpg|png)$/,loader:"file-loader"},
            {
                test: /\.(jpg|png|gif|svg/)$/,
                loader: 'file?name=[name].[ext]'
            },
        ]
    },


    // plugins: [
    //     new ExtractTextPlugin('public/dist/styles/main.css', {
    //         allChunks: true
    //     })
    // ]
};
resolve: {
     extensions: ["", ".js",]
 }
