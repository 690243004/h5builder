const path = require('path')
const fs = require('fs')
const htmlWebpackPlugin = require('html-webpack-plugin')
const DEFAULT_PAGE = 'example.html' // 指定'index.html'页面
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

/**
 * 根据路径读取.html文件 并生成htmlWebpackPlugin
 * @param { string } targetPath 存放.html的文件目录 如./src
 */
const processEntryAndHTMLPlugin = targetPath => {
  const files = fs.readdirSync(path.join(__dirname, targetPath))
  const hFiles = files
    .filter(f => f.endsWith('.html'))
    .filter(f => !f.startsWith('index'))

  let plugin = [],
    entry = {}

  hFiles.forEach(f => {
    const chunkName = f.replace('.html', '')
    plugin.push(
      new htmlWebpackPlugin({
        template: path.join(__dirname, targetPath, f),
        filename: f === DEFAULT_PAGE ? 'index.html' : f,
        chunks: [chunkName, 'commons']
      })
    )
    entry[chunkName] = `./src/js/app/${chunkName}/index.js`
  })

  return {
    plugin,
    entry
  }
}

const { plugin, entry } = processEntryAndHTMLPlugin('./src/html')

const config = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js', // 加hash码的目的是防止用户浏览器读取旧的资源文件
    chunkFilename: 'js/[id].[hash].chunk.js' //chunk生成的配置
  },
  resolve: {
    alias: {
      '@s': path.join(__dirname, './src')
    },
    modules: [path.resolve('src'), path.resolve('node_modules')],
    // 省略后缀
    extensions: ['.js', 'css', 'scss']
  },
  plugins: [
    ...plugin,
    new ProgressBarPlugin({
      format:
        '  build [:bar] ' +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
      clear: false
    })
  ]
}

module.exports = config
