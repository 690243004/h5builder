const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/**
 * 注意 : 多页面使用ExtractTextPlugin插件，会报以下错误
 * Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
 * 升级该插件解决 yarn add extract-text-webpack-plugin@next --dev
 */
module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/, use: ExtractTextPlugin.extract({
          use: ['css-loader',/*  'postcss-loader', */ 'sass-loader'],
          // 提取后的background : url('xxx') 路径矫正
          publicPath: '/'
        })
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: ['url-loader?limit=17631&name=[hash:8]-[name].[ext]']
      },
      {
        test: /\.css$/, use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: `/css/[name].css`
    })
  ]
})