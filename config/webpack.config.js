const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const util = require("./util");
const packageJson = require("../package");

const _ip = util.getIPAdress();
const paths = packageJson.proxy || "http://"+_ip+":8000/";

module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: {
        "app": path.resolve(__dirname, "../app/main.js")
    },
    output: {
        publicPath: paths,
        filename: "[name].js",
    },
    devtool: "none",
    devServer: {
        port: 8000,
        historyApiFallback: true,
        hot: true,
        compress:true,
        quiet: true,
        clientLogLevel: 'warning',
        host: _ip, //这里可以更改ip
        contentBase: path.join(__dirname, '..', 'static'), // 服务器基于该地址，存放打包后的文件
        publicPath: paths,
        open: true
    },
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, "..", "app", "index.html"),
            inject: true,
            title: packageJson.name,
            hash: true
        }),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude:/node_module/
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"] //顺序不能随便更改
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:7].[ext]'
                    }
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.less'],
        alias: {
            "@components": path.join(__dirname, "..", "app", "components"),
            "@views": path.join(__dirname, "..", "app", "views"),
            "@utils": path.join(__dirname, "..", "app", "utils"),
            '@assets': path.join(__dirname, "..", "app", "assets")
        }
    }
};
