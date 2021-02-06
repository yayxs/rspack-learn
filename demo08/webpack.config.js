const path = require('path')
module.exports = {
    entry: {
        vendor: "./src/index.js"
    },
    mode: "development",
    // mode: "production",
    // devtool: false,
    // devtool:'inline-source-map',
    // devtool:'inline-source-map',
    // devtool:'source-map',
    // devtool:'cheap-source-map',
    devtool:'hidden-source-map',
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // 预设
                        plugins: []
                    }
                }
            }
        ]
    },
    plugins: [],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
}