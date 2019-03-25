'use strict';

const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        index: './src/views/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(hbs|handlebars)$/,
                loader: 'handlebars-loader',
                options: {
                    helperDirs: [
                        path.join(__dirname, 'src', 'helpers')
                    ],
                    partialDirs: [
                        path.join(__dirname, 'src', 'components'),
                        path.join(__dirname, 'src', 'layouts'),
                        path.join(__dirname, 'src', 'views')
                    ].concat(glob.sync('**/',
                        {
                            cwd: path.resolve(__dirname, 'src', 'components'),
                            realpath: true
                        }
                    )),
                    inlineRequires: '\/assets/img\/'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    loader: 'url-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'src',
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'src',
                    }
                }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true,
            dry: false
        }),
        new CopyWebpackPlugin([
            { from: './src/assets', to: 'assets'}
        ]),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'Alex Bretones | Graphic & Web Development',
            template: './src/views/index.hbs',
            filename: 'index.html',
            description: 'Personal Portfolio Alex Bretones',
            chunks: ['index']
        })
    ],
    devServer: {
        contentBase: './public',
        host: 'localhost', // by default, to public 0.0.0.0
        port: 3000,
    }
}