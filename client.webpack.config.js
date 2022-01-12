const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, `dist-client`),
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: "./src/index.html", to: "./index.html" }],
        }),
    ],
};
