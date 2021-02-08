const path = require("path");

module.exports = {
  entry: {
    vendor: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
  plugins: [],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
