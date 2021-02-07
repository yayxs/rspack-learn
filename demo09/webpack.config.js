const path = require('path')

module.exports = {
    entry: {
        vendor: "./src/index.js"
    },
    mode: "development",
    module: {
        rules: [{
            // 
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                // options:{
                //     presets:[
                //         "@babel/preset-env",{
                //             "targets": "> 0.25%, not dead"
                //         }
                //     ]
                // }
            }
        }],
        
    },
    plugins: [],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
}