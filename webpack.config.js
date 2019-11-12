var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //{ test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(woff|woff2|svg|ttf|eot)$/, use: 'url-loader?limit=100000' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|jepg)$/, use: 'url-loader' },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ]

}