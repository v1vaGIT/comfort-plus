const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    contacts: './js/entryScripts/contacts.js',
    faq: './js/entryScripts/faq.js',
    index: './js/entryScripts/index.js',
    offers: './js/entryScripts/offers.js',
    projectDetail: './js/entryScripts/projectDetail.js',
    projects: './js/entryScripts/projects.js',
  },
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[path][name][hash][ext]', // Путь сохраняется относительно src
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'contacts.html'),
      filename: "contacts.html",
      chunks: ['contacts']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'faq.html'),
      filename: "faq.html",
      chunks: ['faq']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: "index.html",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'offers.html'),
      filename: "offers.html",
      chunks: ['offers']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'project-detail.html'),
      filename: "project-detail.html",
      chunks: ['projectDetail']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'projects.html'),
      filename: "projects.html",
      chunks: ['projects']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'robots.txt', to: 'robots.txt' },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',             // имя итогового файла
          type: 'css/mini-extract',    // специальный тип для мини-css
          chunks: 'all',               // из всех чанков тянуть стили
          enforce: true,               // принудительно
        },
      },
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
  },
};
