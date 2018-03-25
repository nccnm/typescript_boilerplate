const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new ExtractTextPlugin("style.css")
    ]
};
