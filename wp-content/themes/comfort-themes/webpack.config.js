const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        contacts: './js/entryScripts/contacts.js',
        faq: './js/entryScripts/faq.js',
        home: './js/entryScripts/home.js',
        offers: './js/entryScripts/offers.js',
        projectDetail: './js/entryScripts/projectDetail.js',
        projects: './js/entryScripts/projects.js',
    },
    mode: "development",
    externals: {
        jquery: 'jQuery'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
    ],
};
