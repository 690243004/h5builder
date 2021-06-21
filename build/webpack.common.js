const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const htmlWebpackPlugin = require("html-webpack-plugin");
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

function getHtmlMappings() {
  const dirs = fs.readdirSync(path.join(__dirname, "../src/pages"));
  const htmlFileNames = dirs.filter((f) => f.endsWith(".html"));

  return htmlFileNames.map((fileName) => {
    return {
      fileName,
      fileNameWithoutExt: fileName.replace(".html", ""),
      path: path.resolve(__dirname, "../src/pages", fileName),
    };
  });
}

function getHtmlPlugins(mappings) {
  return mappings.map((item) => {
    return new htmlWebpackPlugin({
      template: item.path,
      filename: item.fileName,
    });
  });
}

function getEntry(mappings) {
  return mappings.reduce((entry, item) => {
    entry[item.fileNameWithoutExt] = path.resolve(
      __dirname,
      "../src/js/",
      item.fileNameWithoutExt,
      "index.js"
    );
    return entry;
  }, {});
}

const mappings = getHtmlMappings();
console.log(mappings);
if (_.isEmpty(mappings)) {
  console.log(`${path.join(__dirname, "../src/pages")} 没有.html文件`);
  process.exit();
}

module.exports = {
  entry: getEntry(mappings),
  output: {
    path: path.resolve(__dirname, "../dist"),
    // 加hash码的目的是防止用户浏览器读取旧的资源文件
    filename: "js/[name]/[name].[hash].js",
    //chunk生成的配置，可以的话，尽量不要用chunk
    chunkFilename: "js/[id].[hash].chunk.js",
  },
  resolve: {
    alias: {
      "@s": path.join(__dirname, "../src"),
    },
    modules: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../node_modules"),
    ],
    // 省略后缀
    extensions: [".js", "css", "scss"],
  },
  plugins: [
    ...getHtmlPlugins(mappings),
    new ProgressBarPlugin({
      format:
        "  build [:bar] " +
        chalk.green.bold(":percent") +
        " (:elapsed seconds)",
      clear: false,
    }),
  ],
};
