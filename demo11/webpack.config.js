const path = require("path");

module.exports = {
  entry: {
    vendor: "./src/index.ts",
  },
  mode: "development",
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: "ts-loader",
      // },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {},
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
