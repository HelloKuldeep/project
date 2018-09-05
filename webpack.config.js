const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
            loader: 'style-loader', // inject CSS to page
        }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
            loader: 'sass-loader' // compiles Sass to CSS
        }]
      }, 
      {
            test: /\.js$/,
            use: [
              "babel-loader"
          ]
      },
      {
            test: /\.(png|jpg|gif|svg|jpeg)$/,
            loader: 'file-loader',
            options: {
            name: '[path][name].[ext]'
            },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'head'
    })
  ],
  mode: 'development'
}