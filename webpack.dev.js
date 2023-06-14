const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][name][ext]',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpe?g)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '/src/assets/images')],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 9000,
    compress: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
