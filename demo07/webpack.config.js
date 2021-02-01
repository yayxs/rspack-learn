const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        vendor: "./src/index.js"
    },
    devtool:'source-map',
    module: {
        rules: []
    },
    plugins: [],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
}