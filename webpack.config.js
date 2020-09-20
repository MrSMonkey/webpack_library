const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // externals关于库里main引用的第三方插件打包时的配置，
  externals: 'lodash',
  // externals: {
  //   lodash: {
  //     root: '_',
  //     commonjs: 'lodash' // lodash.引入时必须命名为lodash
  //   }
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    // 库打包配置： library， libraryTarget
    library: 'root', // 通过引入"library.js"方式时，并在挂载到window.root
    libraryTarget: 'umd', // 保证通过任何模块化形式（AMD，CMD，requireJS, import）都可以正常引用;libraryTarget其他常用配置值还有 'this', 'window', 'global'
  }
}
