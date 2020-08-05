const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: "html-loader"
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
}
