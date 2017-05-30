const path = require('path');
const webpack = require('webpack');

var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        // 'react-hot-loader/patch',
        // // 开启 React 代码的模块热替换(HMR)
        // 'webpack-dev-server/client?http://localhost:8080',
        // // 为 webpack-dev-server 的环境打包代码
        // // 然后连接到指定服务器域名与端口
        // 'webpack/hot/only-dev-server',
        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
        path.resolve(__dirname, "./src/index.tsx")
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/dist/js"),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        hot: false,
        // 开启服务器的模块热替换(HMR)
        contentBase: path.resolve(__dirname, "/dist/js"),
        // 输出文件的路径
        publicPath: '/'
        // 和上文 output 的“publicPath”值保持一致
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
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
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE.ENV': "production" //development
        }),
        // 生产环境用
        // new UglifyJsPlugin({
        //     beautify: false,
        //     mangle: { screw_ie8 : true },
        //     compress: { screw_ie8: true, warnings: false },
        //     comments: false
        // }),
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        })
        // new webpack.HotModuleReplacementPlugin(),
        // // 开启全局的模块热替换(HMR)
        // new webpack.NamedModulesPlugin(),
        // // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ],

};