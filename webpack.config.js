const nodeExternals = require('webpack-node-externals');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            { test: /\.(t|j)sx?$/, use: ['ts-loader', 'eslint-loader'] },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new Dotenv(),
        new TypedocWebpackPlugin({
            name: 'Path of Exile API',
            out: '../docs',
            mode: 'file',
            theme: 'markdown',
            includeDeclarations: true,
            ignoreCompilerErrors: true,
            hideGenerator: true
        })
    ]
};
