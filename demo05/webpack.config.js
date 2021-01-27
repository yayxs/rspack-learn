const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    vendor: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        // loader:'file-loader'
        // use:[
        //     {
        //         loader:'file-loader',
        //         options:{
        //             name: 'img/[name].[hash:8].[ext]',
        //         }
        //     }

        // ]
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name].[hash:6][ext]",
  },
};
