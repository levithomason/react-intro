module.exports = {
  entry: './App.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
    ]
  },
}
