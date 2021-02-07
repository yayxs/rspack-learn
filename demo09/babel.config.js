module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
  
        },
        /**
         * false 不用任何相关的代码
         * 
         * usage 代码中用到什么引入什么
         * entry 入口文件导入
         */
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}