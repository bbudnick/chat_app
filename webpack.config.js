/*
  webpack.config.js

  The configuration file for the webpack bundler.  The bundling was originally for both frontend and backend 
  packages but the backend is commented out.  Node.js source code is executed directly without bundling first.
  Frontend code requires bundling to allow for minification, ES6->CommonJS transpiling and adding of react libraries.

*/

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
const backend = {
  entry: './src/backend/server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    filename: 'server.js',
    port: 3000,
  }

};
*/

const frontend = {
  entry: './src/frontend/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js'
  },
  optimization: {
    minimize: true
  },
  devtool: "eval-cheap-module-source-map", 
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/frontend/index.html"
    })
  ],
  resolve: {
    fallback: {
      "crypto": false
    }
  }
};

module.exports = frontend;
// module.exports = [frontend, backend];
