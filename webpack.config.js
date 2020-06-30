const path = require("path");
module.exports = {
  entry: "./src/script-1.js",
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\,js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
        },
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
    ],
  },
};
