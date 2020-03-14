const path = require("path");

module.exports = {
  target: "node",
  output: {
    path: path.resolve(__dirname, "lib")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".json"]
  }
};
