// vue.config.js

// Plugins
// * remember to install previously the plugin via npm - yarn
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/assets/csv/sample.csv',
          to: 'assets/csv/sample.csv',
        }
      ])
    ]
  },
  // chainWebpack: config => {
  //   config.plugin('copy').tap(([options]) => {
  //     //options[0].ignore.push('api/**/*')
  //     console.log(options)
  //     // return [options]
  //   })
  // },
  assetsDir: 'assets'
}