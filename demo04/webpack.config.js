const path = require('path')
module.exports = {
    entry: {
        vendor: "./src/index.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                // loader:'file-loader'
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name: 'img/[name].[hash:8].[ext]',
                        }
                    }
                   
                ]
            }
        ]
    },
    plugins: [],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
}