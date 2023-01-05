const path  = require("path");
const { mainModule } = require('process');
const webpack = require('webpack');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {

    entry:'./src/js/app.js',
    mode:"development",
    output:{
        path:path.resolve(__dirname,'Build'),
        filename:'bundle.js',
        publicPath:'/Build'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: ['style-loader',
             'css-loader',
             'sass-loader']
          }
        ]
      },
    //   plugins: [
    //     new webpack.ContextReplacementPlugin(/moment[/\\]locale/, /lv/),
    //    ]
    plugins: [
        new MomentLocalesPlugin(),
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'en'],
        })
    ]
};