const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

const config = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)

  return {
    context: resolve(__dirname, 'src'),
    entry: removeEmpty([
      ifNotProd('react-hot-loader/patch'),
      ifNotProd('webpack-dev-server/client?http://localhost:8080'),
      ifNotProd('webpack/hot/only-dev-server'),
      './main.js',
    ]),
    output: {
      filename: ifProd('bundle.[chunkhash].js', 'bundle.js'),
      path: resolve(__dirname, 'dist'),
      publicPath: './'
    },
    devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'dist'),
      publicPath: './'
    },
    devtool: ifProd('cheap-module-source-map', 'cheap-eval-source-map'),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [ 'babel-loader' ],
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: [
              'css-loader',
              'sass-loader',
              {
                loader: 'postcss-loader',
                options: { plugins: () => [ require('autoprefixer') ] }
              }
            ]
          })
        }
      ]
    },
    plugins: removeEmpty([
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new ExtractTextPlugin('styles.css'),
      ifNotProd(new webpack.HotModuleReplacementPlugin()),
      ifNotProd(new webpack.NamedModulesPlugin())
    ])
  }
}

module.exports = config
