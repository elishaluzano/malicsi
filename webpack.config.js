var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
    return {
        entry: {
            main: './src/client/app.module.js',
            vendor: './src/vendor.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                },
                { 
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                    use: "file-loader" 
                }, 
                {
                    test: /\.(jpg|gif|png)$/,
                    use: 'file-loader?name=images/[name].[ext]'
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor', 'manifest']
            }),
            new ExtractTextPlugin('style.css'),
            new HtmlWebpackPlugin({
                template: './src/client/index.html'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
        devtool: '#inline-source-map'
    }
}