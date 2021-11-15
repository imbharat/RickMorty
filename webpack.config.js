const path = require('path');

module.exports = {
    entry: ['regenerator-runtime/runtime.js', './lib/renderers/dom.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ],
    },
};