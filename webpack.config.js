module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx$/, loader: "jsx-loader?harmony" },
      { test: /\.js$/,  loader: "es6-loader" },
    ]
  }
};
