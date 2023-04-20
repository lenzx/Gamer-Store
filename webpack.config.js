const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { minimizerPlugin } = require('html-loader/dist/plugins');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    resolve : {
        extensions : [".js",".jsx"],
    },
    mode : 'development',
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use : {
                    loader : 'html-loader'
                }
            },
            {
                test : /\.s[ac]ss/i,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }

        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : './public/index.html',
            filename : 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            },
        compress: true,
        port: 3005,
        }
}