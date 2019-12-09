const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader' ,
                ]
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin ({
            filename: './src/index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: './src/css/style.css',
        }),
    ],

};
