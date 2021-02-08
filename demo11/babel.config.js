module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.6.5",
      },
    ],
    ["@babel/preset-typescript"],
  ],
};
