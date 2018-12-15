const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'VueJs + Webpack 4',
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        })
    ],
//    output: {
//        filename: '[name].bundle.js',
//        path: path.resolve(__dirname, 'dist')
//    },
    module: {
      rules: [
        {
         test: /\.vue$/,
         loader: 'vue-loader'
       }
      ]
   },
   resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
}
