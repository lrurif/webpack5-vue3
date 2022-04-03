const { merge } = require("webpack-merge")
const base = require("./webpack.common")
module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(css|(s(c|a)ss))$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://localhost:8089',
        pathRewrite: { '^/api': '' },
        changOrigin: true
      }
    }
  }
})