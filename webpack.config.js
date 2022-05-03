let path = require("path");

module.exports = {
  entry: {
    panel: "./panel.ts",
    toolbar: "./toolbar.ts",
    myevents: "./myevents.ts",
    eventsmain: "./eventsmain.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname)],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname),
  },
};
