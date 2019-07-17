const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
//const OfflinePlugin = require("offline-plugin");
require("babel-polyfill");
const isDevelopment = process.env.NODE_ENV !== "production";


module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  mode: isDevelopment ? "development" : "production",
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: "/node_modules/",
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName:// isDevelopment
                // ? "[local]"
                //: "[name]_[hash:base64:6]",
                "[name]_[local]_[hash:base64:6]",
              camelCase: true,
              sourceMap: isDevelopment,
              importLoaders: 1
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          },
          "postcss-loader"
        ]
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCSSAssetsPlugin({}),
    new CleanWebpackPlugin({}),
    //new OfflinePlugin()
  ]
};