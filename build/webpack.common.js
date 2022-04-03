const { resolve } = require("./utils");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
// 环境变量
const { stringifiedEnv } = require("./env");
const OUTPUTDIR = resolve(`../dist/${process.env.MODE}`);
module.exports = {
  mode: "development",
  entry: resolve("../src/main"),
  output: {
    path: OUTPUTDIR,
    filename: "js/[name][chunkhash:8].js",
    chunkFilename: "js/[name][chunkhash:8].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js(x)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name]_[hash:8].[ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
        generator: {
          filename: "assets/fonts/[name]_[hash:8].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".jsx", ".json"],
    alias: {
      "@": resolve("../src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../public/index.html"),
      inject: true,
      // favicon: resolve('../public/favicon.ico')
    }),
    new webpack.DefinePlugin({
      "process.env": stringifiedEnv,
    }),
    new ProgressBarPlugin({
      format:
        "  build [:bar] " +
        chalk.green.bold(":percent") +
        " (:elapsed seconds)",
      clear: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve("../public"),
          to: OUTPUTDIR,
          globOptions: {
            ignore: ["**/index.html", "**/.DS_Store"],
          },
        },
      ],
    }),
    new VueLoaderPlugin(),
  ],
};
