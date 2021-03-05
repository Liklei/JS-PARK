/*
 * @Author: your name
 * @Date: 2021-03-05 21:17:31
 * @LastEditTime: 2021-03-05 22:22:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\vnode\webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "src",
    hot: true,
    open: true,
    port: 8080
  },
  plugins: [new HtmlWebpackPlugin()],
};
