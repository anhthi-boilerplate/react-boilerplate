const path = require("path");
const htmlWebpackPlugin = require("./plugins/html-webpack-plugin");

const handleTs = require("./rules/handle-ts");
const handleImages = require("./rules/handle-images");
const handleSvg = require("./rules/handle-svg");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [handleTs(), handleImages(), handleSvg()],
  },
  plugins: [htmlWebpackPlugin()],
};
