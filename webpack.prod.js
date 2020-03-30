const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * 注意 : 多页面使用ExtractTextPlugin插件，会报以下错误
 * Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
 * 升级该插件解决 yarn add extract-text-webpack-plugin@next --dev
 */
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
          commons: {
            name: 'commons' ,  // 提取出来的文件命名
            // name： ‘common/common’ //  即先生成common文件夹
            chunks: 'initial',   // initial表示提取入口文件的公共css及
            // chunks: 'all' // 提取所有文件的公共部分
           // test： '/\.css$/'  // 只提取公共css ，命名可改styles 
            minChunks:2, // 表示提取公共部分最少的文件数
            minSize: 0  // 表示提取公共部分最小的大小 
           // 如果发现页面中未引用公共文件，加上enforce: true
          }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }, 
      {
        test: /\.(jpg|png|gif|bmp|jpeg|svg)$/,
        use: ['url-loader?limit=17631&name=[hash:8]-[name].[ext]']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader?limit=1000' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
  ]
})
