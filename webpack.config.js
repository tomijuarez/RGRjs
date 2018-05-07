const path = require('path');

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};