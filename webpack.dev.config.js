const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 
  devtool: "eval-source-map",

  entry: {
    app: [
      "babel-polyfill",
      'react-hot-loader/patch',
      path.join(__dirname, 'src/main.js')
    ],
    vendor: ['react', 'react-dom']
  },
    
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 8080
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      use: {
        loader: 'babel-loader?cacheDirectory=true'
      }
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
           limit: 8192
        }
      }]
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader" 
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader" 
      }]
    }]
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
};