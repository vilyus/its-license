// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

module.exports = {
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/its-license/'
    : '',
}
