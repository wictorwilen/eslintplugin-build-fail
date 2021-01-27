const ESLintPlugin = require("eslint-webpack-plugin");

const config =
{
    entry: "./index.ts",
    output: {
    },
    mode: "development",
    externals: {},
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {}
    },
    target: "web",
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ["ts-loader"]
        }
        ]
    },
    plugins: [
        new ESLintPlugin({ extensions: ["ts"] })
    ]
};

module.exports = config;
