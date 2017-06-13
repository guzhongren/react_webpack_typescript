const path = require('path');
const webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    context: path.resolve(__dirname, 'web'),
    entry: {
        vendor: [
            "lodash",
            "esri-loader",
            'antd',
            'antd/dist/antd.css',
            'bootstrap',
            'bootstrap/dist/css/bootstrap.css',
            'react',
            'reactstrap',
            'react-dom',
            'react-router-dom',
            'jquery',
            "leaflet",
            "react-leaflet"

        ]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname + "/wwwroot/dist/"),
        library: '[name]'
        // publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|gif|woff|ico|cur)$/,
                loader: 'url-loader?limit=1500&name=images/[hash:6].[ext]'
            },
            // fonts
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&name=dist/fa/[hash].[ext]&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=dist/fa/[hash].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery', jQuery: 'jquery'
        }),
        new webpack.DllPlugin({
            context:__dirname,
            name: '[name]',
            path: path.join(__dirname, 'wwwroot', 'dist', "js", '[name]-manifest.json')
        })
    ],

};