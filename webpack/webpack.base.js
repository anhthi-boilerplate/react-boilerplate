const path = require("path");
const dotEnvWebpack = require("./plugins/dotenv-webpack");
const htmlWebpackPlugin = require("./plugins/html-webpack-plugin");
const copyWebpackPlugin = require("./plugins/copy-webpack-plugin");
const cleanWebpackPlugin = require("./plugins/clean-webpack-plugin");
const bundleStatsWebpackPlugin = require("./plugins/bundle-stats-webpack-plugin");

const handleTs = require("./rules/handle-ts");
const handleImages = require("./rules/handle-images");
const handleSvg = require("./rules/handle-svg");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [handleTs(), handleImages(), handleSvg()],
  },
  plugins: [
    htmlWebpackPlugin(),
    copyWebpackPlugin(),
    cleanWebpackPlugin(),
    bundleStatsWebpackPlugin(),
  ],
};
