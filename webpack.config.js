const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "eval-cheap-source-map",
    entry: path.resolve(__dirname, './src/index.js'),
    resolve: {
        extensions: ['.js', '.jsx','.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    // devtools: 'eval-source-map',
    // devServer: {
    //     historyApiFallback: true,
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './public/index.html',
      }),
    ],
};