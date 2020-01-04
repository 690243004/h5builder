const path = require('path');
const fs = require('fs')
const htmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  entry: {
    index: './src/js/index.js',
    test: './src/js/test.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
  },
  resolve: {
    alias: {
      "@s": path.join(__dirname, './src')
    },
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ],
    // 省略后缀
    extensions: ['.js', 'css', 'scss']
  },
  plugins: []
};

/**
 * 根据路径读取.html文件 并生成htmlWebpackPlugin
 * @param { string } targetPath 存放.html的文件目录 如./src
 */
const getTemplatePlugins = (targetPath) => {
  const files = fs.readdirSync(path.join(__dirname, targetPath))
  const html_files = files
    .filter(f => f.endsWith('.html'))

  return html_files.map(f => (
    new htmlWebpackPlugin({
      template: path.join(__dirname, targetPath, f),
      filename: f,
      chunks: [f.replace('.html', '')]
    })
  ))
}

config.plugins.push(...getTemplatePlugins('./src'))

module.exports = config