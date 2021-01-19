const path = require("path");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "dist.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "css-loader",
            options: {
        
            },
          },
        ],
      },
    ],
  },
};
