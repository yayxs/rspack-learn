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
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/i,
        use: [
          {
            loader:'style-loader'
          },
          // 处理顺序为从后到前，即先交给 css-loader 处理，
          // 再把结果交给style-loader。
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
