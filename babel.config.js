module.exports = {
  presets: ["@babel/env"],
  plugins: [
    "@babel/transform-runtime",
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
