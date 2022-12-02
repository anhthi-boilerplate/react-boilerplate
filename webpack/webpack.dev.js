const { merge } = require("webpack-merge");

const webpackBase = require("./webpack.base");

module.exports = merge(webpackBase, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
});
