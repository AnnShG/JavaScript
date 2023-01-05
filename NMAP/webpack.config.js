const path = require("path");
const { mainModule}= require('process');
const webpack = require('webpack');
const Moment

module.exports = {

    entry:'./src/js/app.js' ,
    mode: "development",
    output: {
        path:path.resolve(__dirname, 'Build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: [
                "style-loader", 
                "css-loader"]
        },
        {
            test: /\.css$/i,
            use: [
            "style-loader", 
            "css-loader"]
        }
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[/\\]locale/, /lv/),
    ]
};