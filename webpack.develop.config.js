const path = require('path');
const webpack = require('webpack');
var isDevBuild = process.argv.indexOf('--env.prod') < 0;
// var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        path.resolve(__dirname, "./src/index.tsx")
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/wwwroot/dist/js"),
<<<<<<< HEAD
        publicPath: '/wwwroot'
=======
        publicPath: '/wwwroot',

        libraryTarget: 'amd' //编译ags api
>>>>>>> ags4
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: isDevBuild?"cheap-module-eval-source-map":null,
    devServer: {
        // 指定启动服务的更目录
        contentBase: path.resolve(__dirname, "wwwroot"),
        // 指定端口号
        port: 8080,
        host: 'localhost',
        // 启用热更新
        hot: true,
        // 以下信息可有可无，为了完整
        inline: true,
        historyApiFallback: true,
        noInfo: false,
        // stats: 'minimal',
        publicPath: "/wwwroot/dist/js/",
        // layy:true,
        // filename: "bundle.js"
    },
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
                use: ['style-loader', 'css-loader?modules',],
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
    function (context, request, callback) {
        if (/^dojo/.test(request) ||
            /^dojox/.test(request) ||
            /^dijit/.test(request) ||
            /^esri/.test(request)
        ) {
            return callback(null, "amd " + request);
            // return callback(null, "dojo.require('" + request + "')");
        }
        callback();
    }
    ],
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE.ENV': "development" //production
        // }),
        // 生产环境用
        // new UglifyJsPlugin({
        //     beautify: false,
        //     mangle: { screw_ie8 : true },
        //     compress: { screw_ie8: true, warnings: false },
        //     comments: false
        // }),
        // new CommonsChunkPlugin({
        //     name: "vendor",
        //     filename: "vendor.bundle.js",
        //     minChunks: 2
        // }),
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ],

};