const path = require('path');


const PATHS = {
  app: path.join(__dirname, 'src/index.js'),
}
module.exports = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    // filename: 'data-portal.js',
    // path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    index: 'index.html',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
};