const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'app', 'index')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: "[name].js",
  },
  devServer: {
    open: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 8080,
    watchContentBase: true,
  },
}