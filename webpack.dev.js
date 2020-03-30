const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  //__dirname动态获取当前文件模块所属目录的绝对路径
  //__filename可以获取当前文件的绝对路径
  mode: 'development',
  // 配置模块,主要用来配置不同文件的加载器
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          /*  'postcss-loader', */ 'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: ['url-loader?limit=17631&name=[hash:8]-[name].[ext]']
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }
    ]
  },
  // 配置插件
  plugins: [
    //配置热更新模块对象
    new webpack.HotModuleReplacementPlugin(),

  ],
  devServer: {
    host: '0.0.0.0',
    port: '3000',
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    publicPath: '',
    proxy: {
      // '/api/uauth/uauth': {
      //   target: 'http://202.135.136.197:8200',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/api/uauth/uauth': ''
      //   }
      // },
    }
  }
})
