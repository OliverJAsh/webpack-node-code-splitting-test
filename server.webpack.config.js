const path = require("path");
const webpack = require("webpack");

module.exports = {
    target: "node",

    mode: "development",
    devtool: "source-map",
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, `dist-server`),
    },

    plugins: [
        // Force all dynamic imports to bundle in the main chunk so they can be
        // imported synchronously.
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ],
};
