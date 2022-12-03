const { merge } = require("webpack-merge");

const webpackBase = require("./webpack.base");

module.exports = merge(webpackBase, {
  mode: "production",
  plugins: [dotenvWebpack({ path: ".env.production" })],
});
