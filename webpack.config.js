const path = require('path');
const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

const ModernizrConfig = {
    "minify": true,
    'feature-detects': [
        "test/css/cssgrid",
        "test/elem/picture"
    ]
};

module.exports = {
    mode: 'production',
    entry: './src/element/help.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    },
    plugins: [
        new StyleLintWebpackPlugin(),
        new ModernizrWebpackPlugin(ModernizrConfig)
    ]
};