const path = require("path");
module.exports = {
  entry: {
    vendor: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
