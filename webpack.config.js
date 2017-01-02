// webpack.config.js

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var sassLoader = ExtractTextPlugin.extract('style-loader','css-loader?sourceMap&importLoaders=1!sass-loader?sourceMap');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './build/',        
        filename: 'main.js'
    },
    devTool: "source-map",
    module: {
        loaders: [
            { test: /\.scss$/, 
              loader: sassLoader
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css", { allChunks: true })
    ]
}

// var path = require("path");
// var Extract = require("extract-text-webpack-plugin");

// module.exports = {
  // entry: "./src/main.js",
  // output: {
    // path: path.resolve(__dirname + "/build"),
    // filename: "[name].js"
  // },
  // devtool: "source-map",
  // module: {
    // loaders: [
      // {
        // test: /\.(css|scss)$/,
        // loaders: [
          // "style-loader",
          // "css-loader?sourceMap",
          // "sass-loader?sourceMap"
        // ]
      // }
    // ]
  // }
// }
