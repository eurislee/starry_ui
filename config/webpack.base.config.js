const path = require("path")
const webpack = require("webpack")

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: "stylus-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    }
                ],
            },
            {
                // for font
                test: /\.(ttf|otf|eot|woff(?:2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1000,
                        },
                    },
                ],
            },
            {
                // for svg
                test: /\.(svg?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1000,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|ogg|mp3)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10 * 1000,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".js", ".json"]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-us/),
    ]
}