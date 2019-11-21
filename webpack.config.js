const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'jsSdk': './src/index.js',
    'jsSdk.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'TPTJS-SDK',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
        ],
      },
    ]
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      })
    ]
  }
}