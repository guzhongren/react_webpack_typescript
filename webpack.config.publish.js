const path = require('path');
const webpack = require('webpack');
var isProductionBuild = process.argv.indexOf('production') > 0;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/css.css');
const extractLESS = new ExtractTextPlugin('css/less.css');
module.exports = {
    context: path.resolve(__dirname, 'web'),
    entry: [
        path.resolve(__dirname, "./web/index.tsx")
    ],
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname + "/wwwroot/dist/"),
        publicPath: '/dist/'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: isProductionBuild ? false : "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["config.js", ".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                use: extractCSS.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract(['css-loader', 'less-loader'])
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
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: [{},
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery', jQuery: 'jquery'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./wwwroot/dist/js/vendor-manifest.json")
        }),
        //css和less输出
        extractCSS,
        extractLESS,
        // 生产环境用
        // new UglifyJsPlugin({
        //     beautify: false,
        //     mangle: { screw_ie8 : true },
        //     compress: { screw_ie8: true, warnings: false },
        //     comments: false
        // }),
    ],

};