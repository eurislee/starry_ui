const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line
//const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const { version, name, description } = require("../package.json");

const LOGO = `                             

         __                                    _ 
   _____/ /_____ _____________  __      __  __(_)
  / ___/ __/ __ \`/ ___/ ___/ / / /_____/ / / / / 
 (__  ) /_/ /_/ / /  / /  / /_/ /_____/ /_/ / /  
/____/\\__/\\__,_/_/  /_/   \\__, /      \\__,_/_/   
                         /____/                  

`;

const config = {
  mode: "production",
  entry: {
    [name]: ["./src/components/main.js"],
  },

  //umd
  output: {
    library: name,
    libraryTarget: "umd",
    umdNamedDefine: true,
    path: path.join(process.cwd(), "dist"),
    filename: "[name].min.js",
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
  resolve: {
    enforceExtension: false,
    extensions: [".js", ".jsx", ".json", ".styl", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: "/node_modules/",
        include: [path.resolve("src/components")],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "stylus-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name][hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
            drop_console: false,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    noEmitOnErrors: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
    new webpack.BannerPlugin(` \n ${name} v${version} \n ${description}
    \n ${LOGO}\n ${fs.readFileSync(path.join(process.cwd(), "LICENSE"))}
  `),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      __DEBUG__: false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),

    // new BundleAnalyzerPlugin(),
  ],
};

module.exports = config;
