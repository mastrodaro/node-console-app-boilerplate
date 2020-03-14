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
    extensions: ["*", ".js", ".json"],
    alias: {
      "@": path.resolve("src")
    }
  }
};
