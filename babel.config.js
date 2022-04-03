module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    // 不污染全局，在运行时加载
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
    // [
    //   "component",
    //   {
    //     "libraryName": "element-plus",
    //     "styleLibraryName": "theme-chalk"
    //   }
    // ]
  ],
};
